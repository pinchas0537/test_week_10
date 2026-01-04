import { getOne, insertOne } from "../DAL/messagesD.js"
import { editencryptedMessagesCount } from "../DAL/usersD.js"

export async function creatMessages(username, message, cipher_type) {
    try {
        const newMessage = {
            username: username,
            cipher_type: cipher_type,
            encrypted_text: messageEncryption(message),
            inserted_at: new Date()
        }
        const result = await insertOne(newMessage)
        const objreturn = {
            id: result[0].id,
            cipher_type: newMessage.cipher_type,
            encrypted_text: newMessage.encrypted_text
        }
        const count = await editencryptedMessagesCount(newMessage.username)
        return objreturn
    } catch (error) {
        throw error
    }
}

export async function getMessage(id) {
    try {
        const message = await getOne(id)
        const obj = {
            id: id,
            decryptedText: messageDecoding(message)
        }
        return obj
    } catch (error) {
        throw error
    }
}

export function validNumber(parm) {
    try {
        if (parm === undefined || parm === null) {
            confirm.log(` is undefined or null!`)
            return false
        }
        if (typeof (parm) !== "number") {
            console.log(`is not string!`)
            return false
        }
        return true
    } catch (error) {
        throw error
    }
}

export function messageEncryption(message) {
    const arr = []
    const encrypted_text = message.toUpperCase()
    for (let i = encrypted_text.length; i > 0; i--) {
        arr.push(encrypted_text[i - 1])
    }
    const revers = arr.join("")
    return revers
}

export function messageDecoding(message) {
    const arr = []
    const decryptedText = message[0].encrypted_text.toLowerCase()
    for (let i = decryptedText.length; i > 0; i--) {
        arr.push(decryptedText[i - 1])
    }
    const result = arr.join("")
    return result
}