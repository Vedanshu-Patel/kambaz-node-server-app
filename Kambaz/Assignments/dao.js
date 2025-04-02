import assignments from "../Database/assignments.js";
import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
export function findAllAssignments(){
    return Database.assignments;
}
export function findAssignmentsForCourse(courseId){
    const {assignments} = Database;
    return assignments.filter((assignment)=> courseId===assignment.course)
}

export function createAssignment(assignment){
    const newAssignment = {...assignment, _id: uuidv4()};
    Database.assignments = [...assignments, newAssignment];
    return newAssignment;
}
export function updateAssignment(assignmentId,assignmentUpdates){
    const {assignments} = Database;
    const assignment = assignments.find((assignment)=> assignmentId===assignment._id);
    Object.assign(assignment,assignmentUpdates);
    return assignment;
}
export function deleteAssignment(assignmentId){
    const {assignments} = Database;
    Database.assignments = assignments.filter((assignment)=> assignmentId!==assignment._id);
}