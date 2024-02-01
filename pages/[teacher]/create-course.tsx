import React, { useState } from "react";
import {  Grid, Typography, Paper } from "@mui/material";
import Navbar from "@/components/nav-element/Navbar";
import CustomTextField from "@/components/CustomTextField"; // Import the custom text field component
import CustomGridItem from "@/components/form-component/CustomGrid";
import { CourseType } from "@/components/interfaces/CreateCourse";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomButton from "@/components/signInUpPage/CustomButton";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const navLinks = [
  { href: "/home", text: "Home" },
  { href: "/home", text: "About" },
  { href: "/home", text: "Contact" },
];

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsImVtYWlsIjoiZnVhZEBnbWFpbC5jb20iLCJ0eXBlIjoiVGVhY2hlciIsImlhdCI6MTcwNjc4NzM1MywiZXhwIjoxNzA2ODczNzUzfQ.4CscVtEF0JuTeAdv9XBY7b2SOlpVlVZnLDfEjxYyE7I";

export default function CreateCourseForm() {
  const schema = yup.object().shape({
    courseCode: yup.number().positive().integer().required("Course code must be number"),
    courseName: yup.string().required("Name is required"),
    courseDescription: yup.string().required("Course description is required"),
    credit: yup.number().integer().positive().required("Course credit must be number"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CourseType>({
    resolver: yupResolver(schema)
  });

  const handleCreateCourse = async (formData: CourseType) => {
    try {
      const response = await axios.post(
        "http://192.168.13.126:3000/courses",
        formData,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      alert("Course Created successfully");
      console.log(formData)
    } catch (error: any) {
      alert(`Course creation failed ${error?.response?.data?.message}`);
    } finally {
      reset();
    }
  };

  return (
    <div>
      <Navbar title="News Website" links={navLinks} />
      <Paper elevation={3} style={{ padding: "20px" }}>
        <form onSubmit={handleSubmit(handleCreateCourse)}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <CustomGridItem>
              <Typography variant="h4" align="center">
                Create New Course
              </Typography>
            </CustomGridItem>
            <CustomGridItem>
              <CustomTextField
                label="Course Code"
                name="courseCode"
                register={register}
                errors={errors}
              />
            </CustomGridItem>
            <CustomGridItem>
              <CustomTextField
                label="Course Name"
                name="courseName"
                register={register}
                errors={errors}
              />
            </CustomGridItem>
            <CustomGridItem>
              <CustomTextField
                label="Course Description"
                name="courseDescription"
                register={register}
                errors={errors}
              />
            </CustomGridItem>
            <CustomGridItem>
              <CustomTextField
                label="Course Credit"
                name="credit"
                register={register}
                errors={errors}
              />
            </CustomGridItem>
            <CustomGridItem>
              <CustomButton label="Create" />
            </CustomGridItem>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
