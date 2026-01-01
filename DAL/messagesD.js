import connect from "../db/dbSupabase.js"

const table = "messages"

export async function insertOne(obj = {}) {
    const { data, error } = await connect.from(table).insert(obj).select()
    if (error) throw error
    return data
}

export async function getOne(id) {
    const { data, error } = await connect.from(table).select("*").eq("id",id)
    if (error) {
        throw error
    }
    return data
}