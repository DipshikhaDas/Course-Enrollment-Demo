import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import CustomTextField from "@/components/CustomTextField";
import CustomButton from "@/components/signInUpPage/CustomButton";
import CustomImage from "@/components/signInUpPage/CustomImage";
import CustomContainer from "@/components/signInUpPage/CustomContainer";
import CustomDropdown from "@/components/CustomDropDown";
import CustomTypo from "@/components/signInUpPage/CustomTypo";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.name);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email && password) {
      router.push("/todo/todoList");
    } else {
      alert("Enter username and password");
    }
  };

  const handleRoleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRole(event.target.value as string);
  };

  return (
    <CustomContainer>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <CustomImage />
        </Grid>
        <Grid item xs={12} md={6}>
          <form>
            <Typography variant="h4" gutterBottom>
              Registration
            </Typography>
            <CustomTextField
              label="Username"
              name="username"
              type="string"
              value={name}
              onChange={handleNameChange}
            />
            <CustomTextField
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <CustomTextField
              label="Password"
              name="password"
              type="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <CustomDropdown
              value={role}
              label="Select a role"
              onChange={handleRoleChange}
              options={[
                { value: "teacher", label: "Teacher" },
                { value: "student", label: "Student" },
              ]}
            />
            <CustomButton label="Registration" onClick={handleLogin} />
          </form>
          <CustomTypo>
            <Link href="/login"> Login to your account </Link>
          </CustomTypo>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}
