import authInstance from "../ApiService/AuthInstance";

async function AssignStudent(enrollId: number, batch: string) {
    try {
      const response = await authInstance.patch(`/enrollments/approve`, {
        id: enrollId,
        approved: true,
        batch: batch,
      });
      alert("Assigned successfully");
    } catch (error: any) {
      alert(`Course creation failed ${error?.response?.data?.message}`);
    }
  }

  export default AssignStudent