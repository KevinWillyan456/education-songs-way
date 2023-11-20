import { Request, Response, NextFunction } from 'express'
import { validate as isUuid } from 'uuid'
import { Video } from '../models/Video'

async function getVideo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params

    if (!isUuid(id)) {
        return res.status(400).json({ error: 'Invalid ID' })
    }

    try {
        const video = await Video.findById(id)

        if (!video) {
            return res.status(404).json({ error: 'Video not found' })
        }
    } catch (err) {
        return res.status(500).json({ error: err })
    }

    next()
}

export { getVideo }
