import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
    { "title": String, 
        "course":  { type: String, ref: "CourseModel" },
        "description":String,
        "dueDate":String ,
        "fromDate":String,
        "untilDate":String,
        "notUntilDate":String,
        "time":String,
        "points":String
    },
    {collection: "assignments"}
);
export default assignmentSchema;