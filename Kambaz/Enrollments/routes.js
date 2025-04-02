import * as enrollmentsDao from "./dao.js";
export default function EnrollmentsRoute(app){
    app.delete("/api/enrollments/:userId/:courseId",async (req,res)=>{
        const {userId,courseId} = req.params;
        await enrollmentsDao.unenrollUserInCourse(userId,courseId);
        res.sendStatus(200);
    });
    app.post("/api/enrollments/:userId/:courseId",async (req,res)=>{
        const {userId,courseId} = req.params;
        await enrollmentsDao.enrollUserInCourse(userId,courseId);
        res.sendStatus(200);
    });
    app.get("/api/enrollments",async (req,res)=>{
        const enrollments = await enrollmentsDao.findAllEnrollments();
        res.send(enrollments);
    });
};