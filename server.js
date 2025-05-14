/*
 * Author: Junyuan Wu
 * Date: 2025-04-26
 * Description: Node.js + Express server to handle login requests
 * Supports login with username or email, and auto-registers users with correct field mapping
 */

const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// MongoDB connection URI
const uri = "mongodb://127.0.0.1:27017";
const dbName = "assignment3db";

app.use(cors());
app.use(bodyParser.json()); 

app.use(express.static('public'));

const client = new MongoClient(uri);

// POST login - Handle login and registration
app.post('/login', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const usersCollection = db.collection('users');

        const { identifier, password } = req.body;

        // Try to find the user by username OR email
        const user = await usersCollection.findOne({
            $or: [
                { username: identifier },
                { email: identifier }
            ]
        });

        if (user) {
            // User found
            if (user.password === password) {
                res.json({ message: `Welcome, ${user.fullname}!`, user: user });
            } else {
                res.json({ message: "Incorrect password. Please try again." });
            }
        } else {
            // User not found, register new user with appropriate fields
            let newUser = {};

            if (identifier.includes('@')) {
                // Input is an Email
                newUser = {
                    username: "",
                    email: identifier,
                    password: password,
                    fullname: "New User"
                };
            } else {
                // Input is a Username
                newUser = {
                    username: identifier,
                    email: "",
                    password: password,
                    fullname: "New User"
                };
            }

            await usersCollection.insertOne(newUser);
            res.json({ message: "New user registered successfully. Welcome!" });
        }
    } catch (err) {
        console.error("Server error:", err);
        res.status(500).json({ message: "Server error. Please try again later." });
    } finally {
        await client.close();
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
