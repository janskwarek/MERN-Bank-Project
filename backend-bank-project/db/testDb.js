import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const password = process.env.DBPASSWORD;
const connectionString = process.env.DBCONNECTION.replace("<db_password>", password);
const client = await mongodb.MongoClient.connect(connectionString);
const db = client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");

