import React from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomImage from "@/components/signInUpPage/CustomImage";
import CustomContainer from "@/components/signInUpPage/CustomContainer";
import CustomButton from "@/components/signInUpPage/CustomButton";
import CustomTypo from "@/components/signInUpPage/CustomTypo";
import CustomInput from "@/components/CustomTextField";
import CustomDropdown from "@/components/CustomDropDown";
import { FormData } from "@/components/interfaces/FormDataInterface";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  userType: yup.string().required("User type is required"),
});

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleRegistration = async (formData: FormData) => {
    try {
      const response = await axios.post(
        "http://192.168.13.126:3000/users/public/signup",
        formData
      );
      console.log(response.data);
      alert(`Signup successful`);
    } catch (error : any) {
      console.error(error);
      alert(`Signup failed: ${error?.response?.data?.message}`);
    }
  };

  return (
    <CustomContainer>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <CustomImage />
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <Typography variant="h4" gutterBottom>
              Registration
            </Typography>
            <CustomInput
              label="Username"
              name="name"
              register={register}
              errors={errors}
            />
            <CustomInput
              label="Email"
              name="email"
              register={register}
              errors={errors}
            />
            <CustomInput
              label="Password"
              name="password"
              register={register}
              errors={errors}
            />
            <CustomDropdown
              label="User Type"
              name="userType"
              register={register}
              options={[
                { value: "Student", label: "Student" },
                { value: "Teacher", label: "Teacher" },
              ]}
              errors={errors}
            />
            <CustomButton label="Registration" />
          </form>
          <CustomTypo>
            <Link href="/login">Login to your account</Link>
          </CustomTypo>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}