import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ViewCourseCardProps {
  title: string;
  description: string;
  courseCode: number
}

const ViewCourseCard: React.FC<ViewCourseCardProps> = ({ title, description, courseCode }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: "56.25%",
        }}
        image="https://source.unsplash.com/random?space"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title} ({courseCode})
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ViewCourseCard;
