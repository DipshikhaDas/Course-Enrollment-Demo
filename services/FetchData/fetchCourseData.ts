import { Course } from "@/components/interfaces/CourseDetails";
import authInstance from "../ApiService/AuthInstance";
import { useState } from "react";
import { Enrollment } from "@/components/interfaces/Enrollment";
import { json } from "stream/consumers";

async function FetchPublishCourseData() {

    try {
      const courseData = await authInstance.get("/teachers/courses");
      const courses: Course[] = courseData.data;

      const published = (courses.filter((course) => course.isPublished));
      const unPublished = (courses.filter((course) => !course.isPublished));

      localStorage.setItem('published', JSON.stringify(published))
      localStorage.setItem('unPublished', JSON.stringify(unPublished))
      
    } catch (error: any) {
      alert(`Course creation failed ${error?.response?.data?.message}`);
    }
  }

  export default FetchPublishCourseData
