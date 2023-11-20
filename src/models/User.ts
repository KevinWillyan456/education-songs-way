import { Schema, model } from 'mongoose'

export interface IUser {
    _id: string
    name: string
    password: string
    additionDate: Date
    type: string
    favoriteVideos: {
        videoId: string
        videoGender: string
    }[]
    videoHistory: {
        videoId: string
        videoGender: string
    }[]
    lastAccessedPlaylist: string
    lastAccessedPlaylistName: string
    profilePicture: string
    myPlaylists: {
        _id: string
        title: string
        currentCoverUrl: string
        totalVideos: number
        additionDate: Date
        videos: {
            _id: string
            videoId: string
        }[]
    }[]
}

const userSchema = new Schema<IUser>({
    _id: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    additionDate: { type: Date, required: true },
    type: { type: String, default: 'normal' },
    favoriteVideos: [
        {
            videoId: { type: String },
            videoGender: { type: String },
        },
    ],
    videoHistory: [
        {
            videoId: { type: String },
            videoGender: { type: String },
        },
    ],
    lastAccessedPlaylist: { type: String, default: 'Nightcore' },
    lastAccessedPlaylistName: { type: String, default: 'Nightcores' },
    profilePicture: { type: String, default: '' },
    myPlaylists: [
        {
            _id: { type: String },
            title: { type: String, unique: true },
            currentCoverUrl: { type: String },
            totalVideos: { type: Number },
            additionDate: { type: Date },
            videos: [
                {
                    _id: { type: String },
                    videoId: { type: String },
                },
            ],
        },
    ],
})

export const User = model<IUser>('User', userSchema)
