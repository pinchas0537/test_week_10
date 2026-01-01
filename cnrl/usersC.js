import { creatUser, myPropile } from "../services/usersS.js"

export async function creatOneUser(req, res) {
    try {
        const { username, password } = req.body
        const user = await creatUser(username, password)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function getMyProfile(req, res) {
    try {
        const { username, password } = req.body
        const profile = await myPropile(username, password)
        return res.json(profile)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}