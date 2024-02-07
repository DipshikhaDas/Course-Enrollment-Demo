import React, { useState } from "react";
import { Grid, Typography, Paper, Box, Link } from "@mui/material";
import Navbar from "@/components/nav-element/Navbar";
import CustomTextField from "@/components/CustomTextField"; // Import the custom text field component
import CustomGridItem from "@/components/form-component/CustomGrid";
import { CourseType } from "@/components/interfaces/CreateCourse";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomButton from "@/components/signInUpPage/CustomButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/libs/yupForCreateCourse";
import authInstance from "@/services/ApiService/AuthInstance";
import { CreateCourse } from "@/services/PostPutPatch/createCourse";

export default function CreateCourseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CourseType>({
    resolver: yupResolver(schema),
  });

  const handleCreateCourse = async (formData: CourseType) => {
    const { success, error } = await CreateCourse(formData);
    if (success) {
      alert("Course Created successfully");
      reset();
    } else {
      alert(`Course creation failed ${error}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", marginTop: "120px" }}>
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
              <CustomButton label="Create" disable={isSubmitting} />
            </CustomGridItem>
          </Grid>
        </form>
      </Paper>
      <Link
        href="/teacher/home"
        sx={{
          fontFamily: "bold",
          textDecoration: "underline",
          color: "primary",
          fontSize: "25px",
          mt: "5px",
        }}
      >
        {" "}
        Back to home page{" "}
      </Link>
    </Box>
  );
}
