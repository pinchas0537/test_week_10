import { config } from "dotenv";
import { MongoClient ,Db } from "mongodb";
config();

const client = new MongoClient(process.env.DB_CONNECTION)

/**
 * @type {Db|null} 
 */

let db = null

/**
 * @returns {Promise<Db>}
 */

export const connect = async()=> {
    try {
        if (!db) {
            await client.connect();
            db = client.db("start_mongo");
            console.log("Connected to MongoDB")
        }
        return db;
    } catch (error) {
        console.error(error)
    }
}