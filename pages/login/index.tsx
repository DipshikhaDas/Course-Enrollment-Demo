import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import CustomTextField from "@/components/CustomTextField";
import CustomButton from "@/components/signInUpPage/CustomButton";
import CustomImage from "@/components/signInUpPage/CustomImage";
import CustomContainer from "@/components/signInUpPage/CustomContainer";
import CustomTypo from "@/components/signInUpPage/CustomTypo";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email && password) {
      router.push("/");
    } else {
      alert("Enter username and password");
    }
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
              Login
            </Typography>
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
            <CustomButton label="Login" onClick={handleLogin} />
          </form>
          <CustomTypo>
            <Link href="/registration"> Create new account </Link>
          </CustomTypo>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}
