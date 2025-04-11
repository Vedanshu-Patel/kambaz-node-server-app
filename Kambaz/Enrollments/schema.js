import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
 {
   _id: String,
   course: String,
   user:   String,
   
   
 },
 { collection: "enrollments" }
);
export default enrollmentSchema;