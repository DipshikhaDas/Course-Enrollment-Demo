import React, { useState } from "react";
import { Button, Grid, Typography, Paper } from "@mui/material";
import Navbar from "@/components/nav-element/Navbar";
import CustomTextField from "@/components/CustomTextField"; // Import the custom text field component
import CustomGridItem from "@/components/form-component/CustomGrid";

const navLinks = [
  { href: "/home", text: "Home" },
  { href: "/home", text: "About" },
  { href: "/home", text: "Contact" },
];

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  courseCode: string;
  courseName: string;
  courseDescription: string;
  courseCredit: number;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    courseCode: "",
    courseName: "",
    courseDescription: "",
    courseCredit: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <Navbar title="News Website" links={navLinks} />
      <Paper elevation={3} style={{ padding: "20px" }}>
        <form onSubmit={handleSubmit}>
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
                value={formData.courseCode}
                onChange={handleChange}
              />
            </CustomGridItem>
            <CustomGridItem>
              <CustomTextField
                label="Course Name"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
              />
            </CustomGridItem>
            <CustomGridItem>
              <CustomTextField
                label="Course Description"
                name="courseDescription"
                value={formData.courseDescription}
                onChange={handleChange}
              />
            </CustomGridItem>
            <CustomGridItem>
              <CustomTextField
                label="Course Credit"
                name="courseCredit"
                value={formData.courseCredit}
                onChange={handleChange}
              />
            </CustomGridItem>
            <CustomGridItem>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </CustomGridItem>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
