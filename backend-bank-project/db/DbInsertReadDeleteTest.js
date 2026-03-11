import { db } from "./dbConn.js";
import bcrypt from "bcrypt";
const insertReadDeleteTest =async () => {
  try {
    const exampleUsers = [
  { "email": "user1@example.com", "password": "Pass1!aB9" },
  { "email": "user2@example.com", "password": "Qw7$Lm2Zx" },
  { "email": "user3@example.com", "password": "Tg5@Rp8Nk" },
  { "email": "user4@example.com", "password": "Vz9#Kd3Lp" },
  { "email": "user5@example.com", "password": "Mn4!Qs7Yt" },
  { "email": "user6@example.com", "password": "Ba8$Hj2Wx" },
  { "email": "user7@example.com", "password": "Cx6@Tq9Er" },
  { "email": "user8@example.com", "password": "Lu3#Pm5Zd" },
  { "email": "user9@example.com", "password": "Nk7!Av4Hs" },
  { "email": "user10@example.com", "password": "Df2$Ry8Jm" }
];
    const usersCollection = await db.collection("user_info");
    exampleUsers.forEach(async element => {
        
        const hashedPassword =await bcrypt.hash(element.password, 10);
        element.password =await hashedPassword;
        await usersCollection.insertOne(element);
    });
    console.log("Example users inserted successfully.")
    console.log("Example users found:", await usersCollection.find({ email: { $in: exampleUsers.map(user => user.email) } }).toArray());
    await usersCollection.deleteMany({ email: { $in: exampleUsers.map(user => user.email) } });
    console.log("example users deleted successfully.")

  }catch (error) {
    console.error("Error inserting example users:", error);
  }
}
insertReadDeleteTest();