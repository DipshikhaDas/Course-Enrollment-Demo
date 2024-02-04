export interface Enrollment {
    id: number;
    approved: boolean;
    batch: null | string; 
    student: {
      id: number;
      name: string;
      email: string;
      phone: null | string;
      level: number;
      grade: null | string;
    };
    course: {
      courseCode: number;
      courseName: string;
      courseDescription: string;
      credit: number;
      isPublished: boolean;
    };
  }