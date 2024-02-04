export interface NotEnrolledCourse {
    courseCode: number;
    courseName: string;
    courseDescription: string;
    credit: number;
    isPublished: boolean;
    teacher: {
      id: number;
      name: string;
      email: string;
      phone: string | null;
      designation: string | null;
      specialization: string | null;
    };
  }
  