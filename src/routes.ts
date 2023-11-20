import express from 'express'

import {
    deleteVideo,
    indexVideo,
    storeVideo,
    updateVideo,
} from './controllers/VideoController'

import {
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
    updateUserVideoHistoric,
    updateUserPlaylist,
    updateUserPlaylistSelected,
    updateUserProfilePicture,
} from './controllers/UserController'

import {
    deletePlaylist,
    indexPlaylist,
    storePlaylist,
    updatePlaylist,
    selectPlaylist,
    deletePlaylistAndVideos,
} from './controllers/PlaylistController'

import { getVideo } from './middlewares/VideoMiddleware'
import { getUser } from './middlewares/UserMiddleware'
import { getPlaylist } from './middlewares/PlaylistMiddleware'
import { eAdminManagerRequest } from './middlewares/AuthAdminMiddleware'

export const routes = express.Router()

routes.get('/videos', indexVideo)
routes.post('/videos', eAdminManagerRequest, storeVideo)
routes.put('/videos/:id', eAdminManagerRequest, getVideo, updateVideo)
routes.delete('/videos/:id', eAdminManagerRequest, getVideo, deleteVideo)

routes.get('/users', eAdminManagerRequest, indexUser)
routes.post('/users', storeUser)
routes.post('/login', loginUser)
routes.get('/users/:id', getUser, indexUserById)
routes.put('/users/:id', getUser, updateUser)
routes.delete('/users/:id', getUser, deleteUser)

routes.put('/videos-favorite/:id', getUser, updateUserFavoriteVideos)
routes.put('/videos-historic/:id', getUser, updateUserVideoHistoric)
routes.put('/playlists-historic/:id', getUser, updateUserPlaylistSelected)

routes.get('/users-playlist/:id', getUser, indexUserPlaylist)
routes.post('/users-playlist/:id', getUser, storeUserPlaylist)
routes.put('/users-playlist/:id/:pid', getUser, updateUserPlaylist)
routes.delete('/users-playlist/:id/:pid', getUser, deleteUserPlaylist)
routes.post('/users-playlist-video/:id/:pid', getUser, storeUserPlaylistVideos)
routes.delete(
    '/users-playlist-video/:id/:pid/:sid',
    getUser,
    deleteUserPlaylistVideos
)

routes.get('/playlists/:id', getUser, indexPlaylist)
routes.get('/playlists-select/:id', getUser, selectPlaylist)
routes.post('/playlists', eAdminManagerRequest, storePlaylist)
routes.put('/playlists/:id', eAdminManagerRequest, getPlaylist, updatePlaylist)
routes.delete(
    '/playlists/:id',
    eAdminManagerRequest,
    getPlaylist,
    deletePlaylist
)
routes.delete(
    '/videos-playlists/:id',
    eAdminManagerRequest,
    getPlaylist,
    deletePlaylistAndVideos
)

routes.get('/videos-playlists', allVideoAndPlaylistData)

routes.put('/users-profile-picture/:id', updateUserProfilePicture)
