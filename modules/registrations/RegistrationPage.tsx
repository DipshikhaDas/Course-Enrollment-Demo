import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import CustomImage from "@/components/signInUpPage/CustomImage";
import CustomContainer from "@/components/signInUpPage/CustomContainer";
import CustomButton from "@/components/signInUpPage/CustomButton";
import CustomTypo from "@/components/signInUpPage/CustomTypo";
import CustomInput from "@/components/CustomTextField";
import CustomDropdown from "@/components/CustomDropDown";
import { useRegistrationForm } from "../../components/Registration";

export default function RegistrationPage() {
  const { register, handleSubmit, errors, handleRegistration } =
    useRegistrationForm();

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
