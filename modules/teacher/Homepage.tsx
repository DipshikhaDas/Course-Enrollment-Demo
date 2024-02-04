import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
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
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/router";
import HomeData from "../../components/teacher/HomeData";
import ViewCourseCard from "../../components/courseCards/ViewCourseCard";
import PublishCard from "../../components/courseCards/PublishCourseCard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";
import { Unpublished } from "@mui/icons-material";

interface Course{
  couseCode: number,
  courseName: string,
  courseDescription: string,
  courseCredit: number,
  isPublished: boolean,
}

const Home: React.FC = () => {
  const { cardData, courses } = HomeData();

  useEffect(() => {
    async function FetchPublishCourseData() {
      try {
        const response = await axios.get(
          "http://192.168.13.126:3000/teachers/courses",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        console.log(response.data)
      } catch (error:any) {
        alert(`Course creation failed ${error?.response?.data?.message}`);
      }
    }
    FetchPublishCourseData()
  }, []);

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
        <Typography
          component="h4"
          variant="h4"
          color="text.primary"
          gutterBottom
        >
          Your course
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <Paper sx={{ p: 2, bgcolor: "#f3f3f3", borderRadius: 4 }}>
              <Grid container spacing={4}>
                {[...Array(9)].map((_, index) => (
                  <Grid key={index} item xs={4}>
                    <ViewCourseCard
                      title="Example Title"
                      description="This is an example description."
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          {/* List */}
          <Grid item xs={4}>
            <List sx={{ border: "1px solid #ccc", borderRadius: 4 }}>
              {courses.map((course, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={course.name}
                      secondary={course.description}
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
                    <FormControl sx={{ maxWidth: 200 }}>
                      <InputLabel variant="standard" htmlFor={`age-${index}`}>
                        Assign Batch
                      </InputLabel>
                      <NativeSelect
                        inputProps={{
                          name: "Assign Batch",
                        }}
                      >
                        <option value={1}>Batch - 1</option>
                        <option value={2}>Batch - 2</option>
                        <option value={3}>Batch - 3</option>
                      </NativeSelect>
                    </FormControl>
                    <Button size="small" variant="outlined">
                      <CheckCircleOutlineIcon sx={{ mr: 1 }} /> Approve
                    </Button>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>

            <Box>
              <Typography
                // component="h1"
                variant="h5"
                // color="text.primary"
                // gutterBottom
                sx={{ mt: 4, mb: -3 }}
              >
                Unpublished course
              </Typography>
              {Unpublished.map((course, index) => (
                <Box key={index}>
                  <CardContent sx={{ textAlign: "center" }}></CardContent>
                  <PublishCard
                    title={cardData.title}
                    image={cardData.image}
                    description={courses.}
                    buttonText="Publish"
                    link="/teacher/home"
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
