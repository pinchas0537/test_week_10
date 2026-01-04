import { connect } from "../db/dbMongoDB.js";

const db = await connect()
const collection = "users"

export async function insertOne(data = {}) {
    try {
        const result = await db.collection(collection).insertOne(data)
        return result
    } catch (error) {
        throw error
    }
}

export async function editencryptedMessagesCount(username) {
    try {
        const result = await db.collection(collection).updateOne({ username: username }, { $inc: { encryptedMessagesCount: 1 } })
        return result
    } catch (error) {
        throw error
    }
}

export async function getOne(username ,password) {
    try {
        const result = await db.collection(collection).find({username,username,password:password}).toArray()
        return result
    } catch (error) {
        throw error
    }
}

export async function getByCount(username ,password) {
    try {
        const result = await db.collection(collection).findOne({username,username,password:password})
        return result
    } catch (error) {
        throw error
    }
}