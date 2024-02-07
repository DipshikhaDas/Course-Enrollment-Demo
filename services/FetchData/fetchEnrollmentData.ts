import { Course } from "@/components/interfaces/CourseDetails";
import authInstance from "../ApiService/AuthInstance";
import { Enrollment } from "@/components/interfaces/Enrollment";

async function FetchEnrollmentData() {
  try {
    const enrollmentData = await authInstance.get("/enrollments/myEnrollments");
    const enrollments: Enrollment[] = enrollmentData.data;
    const approvedEnrollments = enrollments.filter(
      (enrollment) => enrollment.approved
    );
    const notApprovedEnrollments = enrollments.filter(
      (enrollment) => !enrollment.approved
    );
    localStorage.setItem('approvedEnrollment', JSON.stringify(approvedEnrollments));
    localStorage.setItem('notApprovedEnrollment', JSON.stringify(notApprovedEnrollments))
  } catch (error: any) {
    alert(`Course creation failed ${error?.response?.data?.message}`);
  }
}

export default FetchEnrollmentData
