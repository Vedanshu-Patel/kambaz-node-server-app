import * as dao from "./dao.js";
export default function AssignmentRoutes(app){
app.get("/api/assignments", async (req,res)=>{
    const allAssignments = await dao.findAllAssignments();
    res.send(allAssignments);
});
app.get("/api/courses/:courseId/assignments", async (req,res)=>{
    const {courseId} = req.params;
    const courseAssignments = await dao.findAssignmentsForCourse(courseId);
    res.send(courseAssignments);
});
app.post("/api/assignments/create",async (req,res)=>{
    const assignmentFromUI = req.body;
    const newAssignment = await dao.createAssignment(assignmentFromUI);
    res.json(newAssignment);
})
app.put("/api/assignments/:assignmentId", async (req,res)=>{
    const assignmentUpdates = req.body;
    const {assignmentId} = req.params;
    const status = await dao.updateAssignment(assignmentId,assignmentUpdates);
    res.send(status);
});
app.delete("/api/assignments/:assignmentId", async (req,res)=>{
    const {assignmentId} = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
});
}