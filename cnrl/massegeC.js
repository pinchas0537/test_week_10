import { creatMessages, getMessage } from "../services/messageS.js"

export async function creatOneMessage(req, res) {
    try {
        const { username, message, cipherType } = req.body
        const messages = await creatMessages(username, message, cipherType)
        return res.status(201).json(messages)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function getOneMessage(req, res) {
    try {
        const { messageId } = req.body
        const message = await getMessage(messageId)
        return res.json(message)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}