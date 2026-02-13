import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { UpdateWithAggregationPipeline } from 'mongoose'
import { v4 as uuid } from 'uuid'
import { Playlist } from '../models/Playlist'
import { IUser, User } from '../models/User'
import { Video } from '../models/Video'

async function indexUser(req: Request, res: Response) {
    try {
        const users = await User.find({}, '-password')
        return res.status(200).json({ users })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function indexUserById(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { id } = req.params

    try {
        const user = await User.findById(id, '-password')
        return res.status(200).json({ user })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function storeUser(req: Request, res: Response) {
    const { name, password } = req.body

    if (!name || !password) {
        return res.status(400).json({ error: 'data is missing' })
    }

    const encryptedPassword = await bcrypt.hash(password, 8)

    const user = new User({
        _id: uuid(),
        name,
        password: encryptedPassword,
        additionDate: new Date(),
    })

    try {
        await user.save()

        return res.status(201).json({ message: 'User added successfully!' })
    } catch (err) {
        res.status(400).json({ error: err })
    }
}

async function loginUser(req: Request, res: Response) {
    const { name, password, hasConnect } = req.body

    if (!name || !password) {
        return res.status(400).json({ error: 'data is missing' })
    }

    try {
        const user = await User.findOne({ name })
        let dateTokenExpires: number
        let dateCookieExpires: number

        if (!user) {
            return res.status(400).json({ error: 'wrong name or password' })
        }

        if (!(await bcrypt.compare(password, user?.password))) {
            return res.status(400).json({ error: 'wrong name or password' })
        }

        if (hasConnect) {
            dateTokenExpires = 7 * 24 * 60 * 60 // 7 days in seconds
            dateCookieExpires = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
        } else {
            dateTokenExpires = 600
            dateCookieExpires = 600000
        }

        const token = jwt.sign({ id: user?._id }, `${process.env.SECRET}`, {
            expiresIn: dateTokenExpires,
        })

        res.cookie('token', `Bearer ${token}`, {
            maxAge: dateCookieExpires,
        })
        return res.status(200).json({
            erro: false,
            mensagem: 'Login',
            token,
        })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

async function updateUser(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { name, password } = req.body
    const { id } = req.params

    if (!name && !password) {
        return res.status(400).json({ error: 'You must enter a new data' })
    }

    const encryptedPassword = await bcrypt.hash(password, 8)

    const filter = { _id: id }
    const updateDoc = {
        $set: {
            name,
            password: encryptedPassword,
        },
    }

    try {
        await User.updateOne(filter, updateDoc)

        return res.status(200).json({ message: 'User updated successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function deleteUser(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { id } = req.params
    const filter = { _id: id }

    try {
        await User.deleteOne(filter)
        return res.status(200).json({ message: 'User removed successfully!' })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

async function updateUserFavoriteVideos(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { videoId, videoGender } = req.body
    const { id } = req.params

    if (!videoId || !videoGender) {
        return res.status(400).json({ error: 'You must enter a new data' })
    }

    const user: IUser | null = await User.findById(id, '-password')
    const videoGenderUser: string[] = await Video.distinct('gender')

    if (!videoGenderUser.includes(videoGender)) {
        return res.status(400).json({ error: 'You must enter valid values' })
    }

    interface Contador {
        name: string
        count: number
    }

    const counterDistinctPlaylists = (
        videoGender: string[],
        user: IUser | null
    ) => {
        const countsPre: Contador[] = []

        for (let i = 0; i < videoGender.length; i++) {
            countsPre.push({ name: videoGender[i], count: 0 })
        }

        if (user != null) {
            for (let j = 0; j < user.favoriteVideos.length; j++) {
                for (let k = 0; k < countsPre.length; k++) {
                    if (
                        user.favoriteVideos[j].videoGender == countsPre[k].name
                    ) {
                        countsPre[k].count++
                    }
                }
            }
        }
        const counts = countsPre.filter((item) => item.count > 0)

        return counts
    }

    const favoriteSizes = counterDistinctPlaylists(videoGenderUser, user)

    const favoriteSizeDefinition = () => {
        if (favoriteSizes.length <= 0) {
            return 0
        }

        const finded = favoriteSizes.find((item) => item.name == videoGender)

        if (finded == undefined) {
            return 0
        }

        return finded?.count
    }

    const favoriteSize = favoriteSizeDefinition()

    const updateDoc1 = {
        $push: { favoriteVideos: { videoId, videoGender } },
    }
    const updateDoc2 = {
        $pull: { favoriteVideos: { videoId } },
    }

    const filter = { _id: id }

    try {
        const [...favoriteVideos] = user?.favoriteVideos || []
        const videoExists = favoriteVideos.find(
            (video) => video.videoId == videoId
        )

        const maxSizeFavorite = 20

        if (videoExists) {
            await User.updateOne(filter, updateDoc2)
            return res
                .status(200)
                .json({ message: 'User updated successfully!' })
        }
        if (favoriteSize >= maxSizeFavorite) {
            return res.status(200).json({ message: 'limit reached' })
        }
        if (!videoExists) {
            await User.updateOne(filter, updateDoc1)
            return res
                .status(200)
                .json({ message: 'User updated successfully!' })
        }

        return res.status(200).json({ message: 'User updated successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function updateUserVideoHistoric(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { videoId, videoGender } = req.body
    const { id } = req.params
    const maxSizeHistoric = 10

    if (!videoId || !videoGender) {
        return res.status(400).json({ error: 'You must enter a new data' })
    }

    const user: IUser | null = await User.findById(id, '-password')
    const videoGenderUser: string[] = await Video.distinct('gender')

    if (!videoGenderUser.includes(videoGender)) {
        return res.status(400).json({ error: 'You must enter valid values' })
    }

    interface Contador {
        name: string
        count: number
    }

    const counterDistinctPlaylists = (
        videoGender: string[],
        user: IUser | null
    ) => {
        const countsPre: Contador[] = []

        for (let i = 0; i < videoGender.length; i++) {
            countsPre.push({ name: videoGender[i], count: 0 })
        }

        if (user != null) {
            for (let j = 0; j < user.videoHistory.length; j++) {
                for (let k = 0; k < countsPre.length; k++) {
                    if (user.videoHistory[j].videoGender == countsPre[k].name) {
                        countsPre[k].count++
                    }
                }
            }
        }
        const counts = countsPre.filter((item) => item.count > 0)

        return counts
    }

    const checkArrayExceedsSize = (
        user: IUser | null,
        tamanhoMaximoDeHistorico: number,
        currentGender: string
    ): string[] => {
        const historyExeceeds: string[] = []
        if (user != null) {
            const currentHistoric = user.videoHistory.filter(
                (video) => video.videoGender == currentGender
            )

            currentHistoric.reverse()

            if (currentHistoric.length <= tamanhoMaximoDeHistorico) {
                return historyExeceeds
            }

            if (currentHistoric.length > tamanhoMaximoDeHistorico) {
                for (
                    let i = currentHistoric.length;
                    i > tamanhoMaximoDeHistorico;
                    i--
                ) {
                    const exced = currentHistoric[i - 1].videoId
                    historyExeceeds.push(exced)
                }
            }

            historyExeceeds.reverse()
        }

        return historyExeceeds
    }

    const historicSizes = counterDistinctPlaylists(videoGenderUser, user)

    const historicSizeDefinition = () => {
        if (historicSizes.length <= 0) {
            return 0
        }

        const finded = historicSizes.find((item) => item.name == videoGender)

        if (finded == undefined) {
            return 0
        }

        return finded?.count
    }

    const historySize = historicSizeDefinition()

    const checkArrayExceedsSizeResult = checkArrayExceedsSize(
        user,
        maxSizeHistoric,
        videoGender
    )

    const maxSizeHistoricOneLess = maxSizeHistoric - 1

    const checkArrayExceedsSizeResultA = checkArrayExceedsSize(
        user,
        maxSizeHistoricOneLess,
        videoGender
    )

    const updateDoc1 = {
        $push: { videoHistory: { videoId, videoGender } },
    }
    const updateDoc2 = {
        $pull: {
            videoHistory: { videoId: { $in: checkArrayExceedsSizeResult } },
        },
    }
    const updateDoc2a = {
        $pull: {
            videoHistory: { videoId: { $in: checkArrayExceedsSizeResultA } },
        },
    }
    const updateDoc3 = {
        $pull: { videoHistory: { videoId } },
    }
    const updateDoc4 = {
        $pull: { videoHistory: { videoGender } },
    }

    const filter = { _id: id }

    try {
        if (videoId == 'clear') {
            await User.updateOne(filter, updateDoc4)
            return res
                .status(200)
                .json({ message: 'User updated successfully!' })
        }

        const [...videoHistory] = user?.videoHistory || []
        const videoExists = videoHistory.find(
            (video) => video.videoId == videoId
        )

        if (videoExists && historySize <= 1) {
            return res
                .status(200)
                .json({ message: 'User updated successfully!' })
        }
        if (videoExists) {
            await User.updateOne(filter, updateDoc3)
            await User.updateOne(filter, updateDoc1)

            if (historySize > maxSizeHistoric) {
                await User.updateOne(filter, updateDoc2)
            }
            return res
                .status(200)
                .json({ message: 'User updated successfully!' })
        }
        if (historySize < maxSizeHistoric) {
            await User.updateOne(filter, updateDoc1)

            return res
                .status(200)
                .json({ message: 'User updated successfully!' })
        }
        if (historySize >= maxSizeHistoric) {
            await User.updateOne(filter, updateDoc2a)
            await User.updateOne(filter, updateDoc1)

            return res
                .status(200)
                .json({ message: 'User updated successfully!' })
        }

        return res.status(200).json({ message: 'User updated successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function updateUserPlaylistSelected(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { lastAccessedPlaylist, lastAccessedPlaylistName } = req.body
    const { id } = req.params

    if (!lastAccessedPlaylist || !lastAccessedPlaylistName) {
        return res.status(400).json({ error: 'You must enter a new data' })
    }

    const updateDoc1 = {
        $set: { lastAccessedPlaylist, lastAccessedPlaylistName },
    }

    const filter = { _id: id }

    try {
        await User.updateOne(filter, updateDoc1)
        return res.status(200).json({ message: 'User updated successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function allVideoAndPlaylistData(req: Request, res: Response) {
    try {
        const playlists = await Playlist.find()
            .sort({ title: 1 })
            .collation({ locale: 'pt', strength: 2 })

        const videos = await Video.find()
            .sort({ title: 1 })
            .collation({ locale: 'pt', strength: 2 })

        return res.status(200).json({ playlists, videos })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function updateUserProfilePicture(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { profilePicture } = req.body
    const { id } = req.params

    let updateDoc = {
        $set: { profilePicture },
    }

    if (!profilePicture) {
        updateDoc = {
            $set: { profilePicture: '' },
        }
    }

    const filter = { _id: id }

    try {
        await User.updateOne(filter, updateDoc)
        return res.status(200).json({ message: 'User updated successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function indexUserPlaylist(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { id } = req.params

    try {
        const user: IUser | null = await User.findById(id)

        if (!user) {
            return res.status(404).json({ error: 'User playlist not found' })
        }

        return res.status(200).json({ myPlaylists: user.myPlaylists })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function storeUserPlaylist(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { title } = req.body
    const { id } = req.params

    if (!title) {
        return res.status(400).json({ error: 'data is missing' })
    }

    const filter = { _id: id }
    const updateDoc = {
        $push: {
            myPlaylists: {
                _id: uuid(),
                title,
                currentCoverUrl:
                    'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg',
                totalVideos: 0,
                additionDate: new Date(),
            },
        },
    }

    try {
        await User.updateOne(filter, updateDoc)
        return res
            .status(201)
            .json({ message: 'User playlist added successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function updateUserPlaylist(
    req: Request<{
        id?: UpdateWithAggregationPipeline
        pid?: UpdateWithAggregationPipeline
    }>,
    res: Response
) {
    const { title, currentCoverUrl } = req.body
    const { id, pid } = req.params

    if (!title && !currentCoverUrl) {
        return res.status(400).json({ error: 'You must enter a new data' })
    }

    const filter = { _id: id, 'myPlaylists._id': pid }
    const updateDoc = {
        $set: {
            'myPlaylists.$.title': title,
            'myPlaylists.$.currentCoverUrl': currentCoverUrl,
        },
    }

    try {
        const result = await User.updateOne(filter, updateDoc)

        if (result.matchedCount < 1) {
            return res.status(404).json({ error: 'User playlist not found' })
        }

        return res
            .status(200)
            .json({ message: 'User playlist updated successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function deleteUserPlaylist(
    req: Request<{
        id?: UpdateWithAggregationPipeline
        pid?: UpdateWithAggregationPipeline
    }>,
    res: Response
) {
    const { id, pid } = req.params

    const filter = { _id: id }
    const updateDoc = {
        $pull: {
            myPlaylists: { _id: pid },
        },
    }

    try {
        const result = await User.updateOne(filter, updateDoc)
        if (result.modifiedCount < 1) {
            return res.status(404).json({ error: 'User playlist not found' })
        }

        return res
            .status(200)
            .json({ message: 'User playlist removed successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function storeUserPlaylistVideos(
    req: Request<{
        id?: UpdateWithAggregationPipeline
        pid?: UpdateWithAggregationPipeline
    }>,
    res: Response
) {
    const { videoIds } = req.body
    const { id, pid } = req.params

    if (!videoIds || !Array.isArray(videoIds)) {
        return res.status(400).json({ error: 'data is missing' })
    }

    const lastVideoId = videoIds[videoIds.length - 1]
    const video = await Video.findOne({ _id: lastVideoId })
    if (!video) {
        return res.status(404).json({ error: 'Video not found' })
    }
    const user = await User.findOne({ _id: id, 'myPlaylists._id': pid })
    if (!user) {
        return res.status(404).json({ error: 'User playlist not found' })
    }

    const filter = { _id: id, 'myPlaylists._id': pid }
    const updateDoc = {
        $push: {
            'myPlaylists.$[playlist].videos': {
                $each: videoIds.map((videoId: string) => ({
                    _id: uuid(),
                    videoId,
                })),
            },
        },
        $set: {
            'myPlaylists.$[playlist].currentCoverUrl': video.coverUrl,
        },
    }
    const options = {
        arrayFilters: [{ 'playlist._id': pid }],
    }

    async function updatePlaylistTotalVideos(
        userId: string,
        playlistId: string
    ) {
        try {
            const user = await User.findOne({
                _id: userId,
                myPlaylists: { $exists: true },
            })

            if (!user) return

            const playlistIndex = user.myPlaylists.findIndex(
                (playlist) => playlist._id == playlistId
            )

            if (playlistIndex == -1) return

            const playlist = user.myPlaylists[playlistIndex]
            const videos = playlist.videos || []

            const totalVideos = videos.length

            await User.updateOne(
                {
                    _id: userId,
                    'myPlaylists._id': playlistId,
                },
                {
                    $set: {
                        'myPlaylists.$.totalVideos': totalVideos,
                    },
                }
            )
        } catch (err) {
            console.error(err)
        }
    }

    try {
        await User.updateOne(filter, updateDoc, options)
        user.myPlaylists.forEach(async (playlist) => {
            await updatePlaylistTotalVideos(user._id, playlist._id)
        })
        return res
            .status(201)
            .json({ message: 'User playlist videos added successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function deleteUserPlaylistVideos(
    req: Request<{
        id?: UpdateWithAggregationPipeline
        pid?: UpdateWithAggregationPipeline
        sid?: UpdateWithAggregationPipeline
    }>,
    res: Response
) {
    const { id, pid, sid } = req.params

    const filter = { _id: id, 'myPlaylists._id': pid }
    const updateDoc = {
        $pull: {
            'myPlaylists.$[playlist].videos': { _id: sid },
        },
    }
    const options = {
        arrayFilters: [{ 'playlist._id': pid }],
    }

    async function updatePlaylistTotalVideos(
        userId: string,
        playlistId: string
    ) {
        try {
            const user = await User.findOne({
                _id: userId,
                myPlaylists: { $exists: true },
            })

            if (!user) return

            const playlistIndex = user.myPlaylists.findIndex(
                (playlist) => playlist._id == playlistId
            )

            if (playlistIndex == -1) return

            const playlist = user.myPlaylists[playlistIndex]
            const videos = playlist.videos || []

            const totalVideos = videos.length

            await User.updateOne(
                {
                    _id: userId,
                    'myPlaylists._id': playlistId,
                },
                {
                    $set: {
                        'myPlaylists.$.totalVideos': totalVideos,
                    },
                }
            )
        } catch (err) {
            console.error(err)
        }
    }

    try {
        const result = await User.updateOne(filter, updateDoc, options)
        if (result.modifiedCount < 1) {
            return res
                .status(404)
                .json({ error: 'User playlist video not found' })
        }
        const user = await User.findOne({ _id: id, 'myPlaylists._id': pid })
        if (!user) {
            return res.status(404).json({ error: 'User playlist not found' })
        }
        user.myPlaylists.forEach(async (playlist) => {
            await updatePlaylistTotalVideos(user._id, playlist._id)
        })

        const userLastPlaylistVideoCover = user?.myPlaylists.find(
            (playlist) => playlist._id === (pid as unknown as string)
        )?.videos

        if (
            !userLastPlaylistVideoCover ||
            userLastPlaylistVideoCover.length < 1
        ) {
            await User.updateOne(
                filter,
                {
                    $set: {
                        'myPlaylists.$[playlist].currentCoverUrl':
                            'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg',
                    },
                },
                {
                    arrayFilters: [{ 'playlist._id': pid }],
                }
            )

            return res
                .status(200)
                .json({ message: 'User playlist video deleted successfully!' })
        }

        const video = await Video.findOne({
            _id: user?.myPlaylists.find(
                (playlist) => playlist._id === (pid as unknown as string)
            )?.videos[userLastPlaylistVideoCover?.length - 1].videoId,
        })

        if (!video) {
            return res.status(404).json({ error: 'Video not found' })
        }

        await User.updateOne(
            filter,
            {
                $set: {
                    'myPlaylists.$[playlist].currentCoverUrl': video.coverUrl,
                },
            },
            {
                arrayFilters: [{ 'playlist._id': pid }],
            }
        )

        return res
            .status(200)
            .json({ message: 'User playlist video deleted successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export {
    allVideoAndPlaylistData,
    deleteUser,
    deleteUserPlaylist,
    deleteUserPlaylistVideos,
    indexUser,
    indexUserById,
    indexUserPlaylist,
    loginUser,
    storeUser,
    storeUserPlaylist,
    storeUserPlaylistVideos,
    updateUser,
    updateUserFavoriteVideos,
    updateUserPlaylist,
    updateUserPlaylistSelected,
    updateUserProfilePicture,
    updateUserVideoHistoric,
}
