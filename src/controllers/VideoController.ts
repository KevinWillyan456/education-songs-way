import { Request, Response } from 'express'
import { UpdateWithAggregationPipeline } from 'mongoose'
import { v4 as uuid } from 'uuid'
import { Video } from '../models/Video'
import { User } from '../models/User'

async function indexVideo(req: Request, res: Response) {
    try {
        const videos = await Video.find()
            .sort({ title: 1 })
            .collation({ locale: 'pt', strength: 2 })
        return res.status(200).json({ videos })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function storeVideo(req: Request, res: Response) {
    const { audioUrl, coverUrl, title, gender, isVideo, theme } = req.body

    if (!audioUrl || !title || !gender || !theme) {
        return res.status(400).json({ error: 'data is missing' })
    }

    const currentCoverUrl = coverUrl
        ? coverUrl
        : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'

    const video = new Video({
        _id: uuid(),
        audioUrl,
        coverUrl: currentCoverUrl,
        title,
        gender,
        theme,
        isVideo,
        additionDate: new Date(),
    })

    try {
        const videos = await Video.find({ title })
        const videoAlreadyExists = videos.find(
            (video) => video.title === title && video.gender === gender
        )

        if (videoAlreadyExists) {
            return res.status(400).json({ error: 'Video already exists' })
        }

        await video.save()

        return res.status(201).json({ message: 'Video added successfully!' })
    } catch (err) {
        res.status(400).json({ error: err })
    }
}

async function updateVideo(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { audioUrl, coverUrl, title, gender, isVideo, theme } = req.body
    const { id } = req.params

    const currentCoverUrl = coverUrl
        ? coverUrl
        : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'

    if (
        !audioUrl &&
        !currentCoverUrl &&
        !title &&
        !gender &&
        !isVideo &&
        !theme
    ) {
        return res.status(400).json({ error: 'You must enter a new data' })
    }

    const filter = { _id: id }
    const updateDoc = {
        $set: {
            audioUrl,
            coverUrl: currentCoverUrl,
            title,
            gender,
            isVideo,
            theme,
        },
    }

    try {
        const videos = await Video.find({ title })
        const videoAlreadyExists = videos.find(
            (video) => video.title === title && video.gender === gender
        )

        if (videoAlreadyExists) {
            return res.status(400).json({ error: 'Video cannot be updated' })
        }
        await Video.updateOne(filter, updateDoc)

        return res.status(200).json({ message: 'Video updated successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function deleteVideo(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { id } = req.params
    const filter = { _id: id }

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
        await User.updateMany(
            {},
            {
                $pull: {
                    favoriteVideos: { videoId: id },
                    videoHistory: { videoId: id },
                },
            }
        )
        await User.updateMany(
            { myPlaylists: { $exists: true } },
            {
                $pull: {
                    'myPlaylists.$[].videos': { videoId: id },
                },
            }
        )
        const users = await User.find({ myPlaylists: { $exists: true } })
        users.forEach((user) => {
            user.myPlaylists.forEach(async (playlist) => {
                await updatePlaylistTotalVideos(user._id, playlist._id)
            })
        })

        await Video.deleteOne(filter)
        return res.status(200).json({ message: 'Video removed successfully!' })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

export { indexVideo, storeVideo, updateVideo, deleteVideo }
