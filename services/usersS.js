import { getByCount, getOne, insertOne } from "../DAL/usersD.js"

export function validString(parm) {
    try {
        if (parm === undefined || parm === null) return ` is undefined or null!`
        if (typeof (parm) !== "string") return ` is not string!`
        if (parm === "") return `is empty string!`
        if (parm.trim() === "") return `it's just spaces!`
        return true
    } catch (error) {
        throw error
    }
}

export async function creatUser(username, password) {
    try {
        const newUser = {
            username: username,
            password: password,
            encryptedMessagesCount: 0,
            created_at: new Date()
        }
        const result = await insertOne(newUser)
        const objreturn = { id: result.insertedId, username: newUser.username }
        return objreturn
    } catch (error) {
        throw error
    }
}

export async function login(username, password) {
    try {
        const row = await getOne(username, password)
        return row
    } catch (error) {
        throw error
    }
}

export async function myPropile(username, password) {
    try {
        const row = await getByCount(username, password)
        return {
            username: username,
            encryptedMessagesCount: row.encryptedMessagesCount
        }
    } catch (error) {
        throw error
    }
}