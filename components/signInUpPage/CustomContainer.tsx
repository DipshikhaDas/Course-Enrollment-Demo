import React, { ReactNode } from "react";
import { Container } from "@mui/material";

interface CustomContainerProps {
  children: ReactNode;
}

const CustomContainer = ({ children }: CustomContainerProps) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "100px" }}>
      {children}
    </Container>
  );
};

export default CustomContainer;
