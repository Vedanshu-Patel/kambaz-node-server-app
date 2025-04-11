// import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function enrollUserInCourse(userId, courseId) {
  console.log(courseId)
  // const { enrollments } = Database;
  // enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  return model.create(({ user: userId, course: courseId, _id: `${userId}-${courseId}` }));
};
export function findAllEnrollments(){
    return model.find();
};
export function unenrollUserInCourse(userId, courseId){
  // const {enrollments} = Database;
  // Database.enrollments = enrollments.filter((enrollment)=>!(userId===enrollment.user &&  courseId===enrollment.course ));
return model.deleteOne({user:userId,course:courseId})
}

export function unenrollAllInCourse(courseId){
  // const {enrollments} = Database;
  // Database.enrollments = enrollments.filter((enrollment)=>!(userId===enrollment.user &&  courseId===enrollment.course ));
return model.deleteMany({course:courseId})
}



 