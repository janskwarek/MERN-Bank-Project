import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const password = process.env.DBPASSWORD;
const connectionString = process.env.DBCONNECTION.replace("<db_password>", password);
const client = await mongodb.MongoClient.connect(connectionString);
export const db = client.db("bank-project");