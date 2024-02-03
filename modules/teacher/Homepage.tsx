import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
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

const Home: React.FC = () => {
  const { cardData, courses } = HomeData();

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
        <Typography
          component="h1"
          variant="h2"
          color="text.primary"
          gutterBottom
        >
          Your course
        </Typography>

        <Box></Box>
      </Box>
      <Box>
        <Button variant="contained" sx={{ mb: 4 }}>
          <AddCircleOutlineIcon sx={{ mr: 1 }} />{" "}
          <Link href="/teacher/create-course">Create Course</Link>{" "}
        </Button>

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
                <ListItem key={index} sx={{ borderBottom: "1px solid #ccc" }}>
                  <ListItemText
                    primary={course.name}
                    secondary={course.description}
                  />
                  <Button size="small" variant="outlined">
                    View
                  </Button>
                </ListItem>
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
              {[...Array(3)].map((_, index) => (
                <Box key={index}>
                  <CardContent sx={{ textAlign: "center" }}></CardContent>
                <PublishCard title={cardData.title} image={cardData.image} buttonText="Publish" link='/teacher/home'/>
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
