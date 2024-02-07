import * as yup from 'yup'

export const schema = yup.object().shape({
    courseCode: yup.number().positive().integer().required("Course code must be number"),
    courseName: yup.string().required("Name is required"),
    courseDescription: yup.string().required("Course description is required"),
    credit: yup.number().integer().positive().required("Course credit must be number"),
  })