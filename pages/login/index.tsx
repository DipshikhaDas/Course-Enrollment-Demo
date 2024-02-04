import React, { useState } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import CustomTextField from "@/components/CustomTextField";
import CustomButton from "@/components/signInUpPage/CustomButton";
import CustomImage from "@/components/signInUpPage/CustomImage";
import CustomContainer from "@/components/signInUpPage/CustomContainer";
import CustomTypo from "@/components/signInUpPage/CustomTypo";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const {register, handleSubmit, formState:{errors}, reset} = useForm<FormData>()
  const router = useRouter()

  const handleLogin = async (formData: FormData) => {
    try{
      const response = await axios.post("http://192.168.13.126:3000/users/public/signin", formData)
      console.log(response.data.userType)
      const route = response.data?.userType === 'Teacher' ? '/teacher/home/' : '/student';
      const ACCESS_TOKEN = response.data.tokens.accesstoken
      console.log(ACCESS_TOKEN) 
      localStorage.setItem("accessToken", ACCESS_TOKEN)
      console.log(localStorage.getItem("accessToken"))
      router.push(route);
    }catch(error : any){
      console.log(error)
      alert(`Login failed ${error?.response?.data?.message}`)
    }finally{
      reset()
    }
  }

  return (
    <CustomContainer>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <CustomImage />
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <CustomTextField
              label="Email"
              name="email"
              register={register}
              errors={errors}
            />
            <CustomTextField
              label="Password"
              name="password"
              register={register}
              errors={errors}
            />
            <CustomButton label="Login" />
          </form>
          <CustomTypo>
            <Link href="/registration"> Create new account </Link>
          </CustomTypo>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}
