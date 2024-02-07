import { CourseType } from "@/components/interfaces/CreateCourse";
import authInstance from "@/services/ApiService/AuthInstance";

export async function CreateCourse(formData: CourseType) {
    try {
        const response = await authInstance.post("/courses", formData);
        console.log("Course Created successfully:", formData);
        return { success: true, data: response.data }; 
    } catch (error: any) {
        console.error("Course creation failed:", error?.response?.data?.message);
        return { success: false, error: error?.response?.data?.message }; 
    }
}
