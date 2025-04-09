// import assignments from "../Database/assignments.js";
// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export function findAllAssignments(){
    return model.find();
}
export function createAssignment(assignment){
    // const newAssignment = {...assignment, _id: uuidv4()};
    // Database.assignments = [...assignments, newAssignment];
    // return newAssignment;
    delete assignment._id;
    return model.create(assignment);
}

export function findAssignmentsForCourse(courseId){
    // const {assignments} = Database;
    // return assignments.filter((assignment)=> courseId===assignment.course)
    return model.find({ course: courseId });
}


export function updateAssignment(assignmentId,assignmentUpdates){
    // const {assignments} = Database;
    // const assignment = assignments.find((assignment)=> assignmentId===assignment._id);
    // Object.assign(assignment,assignmentUpdates);
    // return assignment;
    return model.updateOne({ _id: assignmentId }, assignmentUpdates);
}
export function deleteAssignment(assignmentId){
    // const {assignments} = Database;
    // Database.assignments = assignments.filter((assignment)=> assignmentId!==assignment._id);
    return model.deleteOne({ _id: assignmentId });
}