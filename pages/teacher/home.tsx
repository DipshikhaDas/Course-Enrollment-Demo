import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  NativeSelect,
  Paper,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Link from "next/link";
import HomeData from "../../components/teacher/HomeData";
import ViewCourseCard from "../../components/courseCards/ViewCourseCard";
import PublishCard from "../../components/courseCards/PublishCourseCard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";
import { Enrollment } from "@/components/interfaces/Enrollment";
import { Course } from "@/components/interfaces/CourseDetails";
import SelectBatch from "@/components/teacher/SelectBatchDropDown";
import { options } from "@/components/teacher/SelectBatchData";

const Home: React.FC = () => {
  const { cardData } = HomeData();

  const [published, setPublished] = useState<Course[]>([]);
  const [unPublished, setUnPublished] = useState<Course[]>([]);
  const [approvedEnrollments, setApprovedEnrollments] = useState<Enrollment[]>(
    []
  );
  const [notApprovedEnrollments, setNotApprovedEnrollments] = useState<
    Enrollment[]
  >([]);
  const [batch, setBatch] = useState<string>("A");

  const handleBatchChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBatch(event.target.value as string);
  };

  useEffect(() => {
    async function FetchPublishCourseData() {
      try {
        const response1 = await axios.get(
          "http://192.168.13.126:3000/teachers/courses",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const courses: Course[] = response1.data;
        setPublished(courses.filter((course) => course.isPublished));
        setUnPublished(courses.filter((course) => !course.isPublished));

        const response2 = await axios.get(
          "http://192.168.13.126:3000/enrollments/myEnrollments",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const enrollments: Enrollment[] = response2.data;
        setApprovedEnrollments(
          enrollments.filter((enrollment) => enrollment.approved)
        );
        setNotApprovedEnrollments(
          enrollments.filter((enrollment) => !enrollment.approved)
        );
        console.log("not approved", notApprovedEnrollments);
        console.log("approved", approvedEnrollments);
      } catch (error: any) {
        alert(`Course creation failed ${error?.response?.data?.message}`);
      }
    }
    FetchPublishCourseData();
  }, []);

  async function assignStudent(enrollId: number) {
    try {
      const response = await axios.patch(
        `http://192.168.13.126:3000/enrollments/approve`,
        { id: enrollId, approved: true, batch: batch },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      alert("Assigned successfully");
    } catch (error: any) {
      alert(`Course creation failed ${error?.response?.data?.message}`);
    }
  }

  return (
    <Box sx={{ width: "1300px", margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Button variant="contained" sx={{ mb: 4 }}>
          <AddCircleOutlineIcon sx={{ mr: 1 }} />{" "}
          <Link href="/teacher/create-course">Create Course</Link>{" "}
        </Button>
      </Box>
      <Box>
        <Typography variant="h4" gutterBottom>
          Your course
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <Paper sx={{ p: 2, bgcolor: "#f3f3f3", borderRadius: 4 }}>
              <Grid container spacing={4}>
                {published.map((course, index) => (
                  <Grid key={index} item xs={4}>
                    <ViewCourseCard
                      title={course.courseName}
                      description={course.courseDescription}
                      courseCode={course.courseCode}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <List sx={{ border: "1px solid #ccc", borderRadius: 4 }}>
              {notApprovedEnrollments.map((enrollment, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      secondary={`${enrollment.student.name}(${enrollment.student.id}) has requested to enroll into ${enrollment.course.courseName} (${enrollment.course.courseCode})`}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    <SelectBatch
                      label="Assign Batch"
                      options={options}
                      value={batch}
                      onChange={handleBatchChange}
                    />
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => assignStudent(enrollment.id)}
                    >
                      <CheckCircleOutlineIcon sx={{ mr: 1 }} /> Approve
                    </Button>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>

            <Box>
              <Typography variant="h5" sx={{ mt: 4, mb: -3 }}>
                Unpublished course
              </Typography>
              {unPublished.map((course, index) => (
                <Box key={index}>
                  <CardContent sx={{ textAlign: "center" }}></CardContent>
                  <PublishCard
                    title={course.courseName}
                    image={cardData.image}
                    description={course.courseDescription}
                    courseCode={course.courseCode}
                    buttonText="Publish"
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
