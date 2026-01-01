import { validNumber } from "../services/messageS.js"
import { login, validString } from "../services/usersS.js"

export async function validMessage(req, res, next) {
    try {
        const { username, password, message, cipherType } = req.body
        const validUsers = validString(username)
        if (validUsers !== true) return res.status(400).json({ "message": "username or password invalid!" })
        const validpasswors = validString(password)
        if (validpasswors !== true) return res.status(400).json({ "message": "username or password invalid!" })
        const validMessage = validString(message)
        if (validMessage !== true) return res.status(400).json({ "message": "message invalid!" })
        const validType = validString(cipherType)
        if (validType !== true) return res.status(400).json({ "message": "cipherType invalid!" })
        next()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function userAuthentication(req, res, next) {
    try {
        const { username, password } = req.body
        const result = await login(username, password)
        if (result.length === 0) return res.status(400).json({ "message": "No user found" })
        next()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function validId(req, res, next) {
    const { messageId } = req.body
    const result = await validNumber(messageId)
    if (validMessage !== true) return res.status(400).json({ "message": "id invalid!" })
    next()
}

