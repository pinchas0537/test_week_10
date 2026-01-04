import { login, validString } from "../services/usersS.js"

export async function validUser(req, res, next) {
    try {
        const { username, password } = req.body
        const validUsers = validString(username)
        if (validUsers === false) return res.status(400).json({ "message": "username or password invalid!" })
        const validpasswors = validString(password)
        if (validpasswors === false) return res.status(400).json({ "message": "username or password invalid!" })
        next()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function userAuthentication(req,res,next) {
    try {
        const { username, password } = req.body
        const result = await login(username, password)
        if (result.length === 1) return res.status(400).json({ "message": "User is in the system" })
        next()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}