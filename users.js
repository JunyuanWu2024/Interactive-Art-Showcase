/*
 * Author: Junyuan Wu
 * Date: 2025-04-26
 * Description: Insert sample users into MongoDB, add more check Mechanism to make sure connect perfect
 */

// Insert MongoDB
const { MongoClient } = require('mongodb');

// Connect URI
const uri = "mongodb://127.0.0.1:27017";

const dbName = "assignment3db";
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect with MongoDB
        await client.connect();
        console.log("Connected successfully to MongoDB server.");

        const db = client.db(dbName);
        const usersCollection = db.collection('users');

        // Test data
        const result = await usersCollection.insertMany([
            {
                username: "test1",
                password: "pass123",
                email: "test1@gmail.com",
                fullname: "Test One"
            },
            {
                username: "test2",
                password: "pass234",
                email: "test2@gmail.com",
                fullname: "Test Two"
            },
            {
                username: "test3",
                password: "pass456",
                email: "test3@gmail.com",
                fullname: "Test Three"
            }
        ]);

        console.log(`Inserted ${result.insertedCount} users into the collection.`);
    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        // Close connect
        await client.close();
        console.log("Connection closed.");
    }
}

run();
