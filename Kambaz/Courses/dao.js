import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
import enrollmentsModel from "../Enrollments/model.js"
export function findAllCourses() {
  // return Database.courses;
  return model.find();
}
export async function findCoursesForEnrolledUser(userId) {
    //const { courses, enrollments } = Database;
    const enrollments = await enrollmentsModel.find();
    const courses= await model.find();
    const enrolledCourses = courses.filter((course) =>
      enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    //console.log(enrolledCourses)
    return enrolledCourses;
  }

  // export async function NewFindCoursesForEnrolledUser(userId){
  //   const enrolledCourses = await enrollmentsModel.find({"user" : userId}).populate("course");
  //   const courses = enrolledCourses.map((enrollment) => enrollment.course);
  //   console.log(courses);
  //   return courses;
  // }

  export function createCourse(course) {
    const newCourse = { ...course, _id: uuidv4() };
    // Database.courses = [...Database.courses, newCourse];
    // return newCourse;
    return model.create(newCourse);
  }
  export function deleteCourse(courseId) {
  //   const { courses, enrollments } = Database;
  //   Database.courses = courses.filter((course) => course._id !== courseId);
  //   Database.enrollments = enrollments.filter(
  //     (enrollment) => enrollment.course !== courseId
  // );
  return model.deleteOne({ _id: courseId });
}
  export function updateCourse(courseId, courseUpdates) {
    // const { courses } = Database;
    // const course = courses.find((course) => course._id === courseId);
    // Object.assign(course, courseUpdates);
    // return course;
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
  }
  
  