import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Paper } from "@mui/material";
import HomeData from "@/components/teacher/HomeData";
import PublishCard from "@/components/courseCards/PublishCourseCard";
import { useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { Enrollment } from "@/components/interfaces/Enrollment";
import { NotEnrolledCourse } from "@/components/interfaces/NotEnrolledCourse";

const defaultTheme = createTheme();

export default function Pricing() {
  const { cardData } = HomeData();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [notEnrolled, setNotEnrolled] = useState<NotEnrolledCourse[]>([])

  useEffect(() => {
    // async function fetchStudentData() {
    //   try {
    //     const headers: AxiosRequestConfig["headers"] = {
    //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     };
    //     const response = await axios.get(
    //       "http://192.168.13.126:3000/enrollments/myEnrollments",
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //         },
    //       }
    //     );
    //     const response1 = await axios.get(
    //       "http://192.168.13.126:3000/courses/published-not-enrolled",
    //       {headers}
    //     );
    //     setEnrollments(response.data);
    //     setNotEnrolled(response1.data)
    //     console.log('not enrolled', notEnrolled);
    //   } catch (error: any) {
    //     alert(`Error occured ${error?.response?.data?.message}`);
    //   }
    // }
    // fetchStudentData();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <Box sx={{ width: "1300px", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Box></Box>
        </Box>
        <Box>
          <Grid container spacing={8}>
            <Grid item xs={8}>
              <Typography
                variant="h4"
                color="text.primary"
                // gutterBottom
                sx={{
                  marginBottom: 4,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Your courses
              </Typography>
              <Paper sx={{ p: 2, bgcolor: "#f3f3f3", borderRadius: 4 }}>
                <Grid container spacing={4}>
                  {enrollments.map((enrollment) => (
                    <Grid item key={enrollment.id} xs={12} md={4}>
                      <Card>
                        <CardHeader
                          title={enrollment.course.courseName}
                          titleTypographyProps={{ align: "center" }}
                          subheaderTypographyProps={{
                            align: "center",
                          }}
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.mode === "light"
                                ? theme.palette.grey[200]
                                : theme.palette.grey[700],
                          }}
                        />
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "baseline",
                              mb: 2,
                            }}
                          >
                            <Typography variant="h7">
                              <Box>
                                {`Course Code: ${enrollment.course.courseCode}`}
                              </Box>
                              <Box>
                                {`Course Credit: ${enrollment.course.credit}`}
                              </Box>
                              <Box sx={{ mt: 3 }}>
                                {enrollment.approved
                                  ? "Approved"
                                  : "Not Approved yet"}
                              </Box>
                            </Typography>
                          </Box>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h4"
                color="text.primary"
                // gutterBottom
                sx={{ display: "flex", justifyContent: "center" }}
              >
                Available Courses
              </Typography>
              <Box>
                {notEnrolled.map((course, index) => (
                  <Box key={index}>
                    <CardContent sx={{ textAlign: "center" }}></CardContent>
                    <PublishCard
                      title={course.courseName}
                      image={cardData.image}
                      // buttonText="View Details"
                      link="/student/newCourse"
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
