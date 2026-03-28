import {StreamChat} from "stream-chat";
import {ENV} from "./env.js"

const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("Stream API key or secret is missing")
    process.exit(1)
}   

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async(userData)=>{
    try {
        await chatClient.upsertUser(userData)
        console.log("User upserted to Stream successfully  ")
        return userData;
    } catch (error) {
        console.error("Error upserting user to Stream:", error);
        throw error;
    }
}

export const deleteStreamUser = async(userId)=>{
    try {
        await chatClient.deleteUser(userId)
        console.log(`User ${userId} deleted from Stream successfully`);
    } catch (error) {
        console.error("Error deleting user to Stream:", error);
        throw error;
    }
}

