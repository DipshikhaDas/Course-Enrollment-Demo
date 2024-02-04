import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import axios from "axios";
import { access } from "fs";

interface PublishCardProps {
  title: string;
  image: string;
  buttonText: string;
  description: string
  courseCode: number
}

async function publishCourse(courseCode:number) {
  try{
    const response = await axios.put(`http://192.168.13.126:3000/courses/publish/${courseCode}`,{"isPublished": true},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        }
      }, )
    alert('Published course successfully')
  }catch(error:any){
    console.log(courseCode)
    console.log('acessToken from publish button', localStorage.getItem('accessToken'))
    alert(`Course creation failed ${error?.response?.data?.message}`);
  }
}

const PublishCard: React.FC<PublishCardProps> = ({ title, image, buttonText, description, courseCode }) => {
  return (
    <Card sx={{ display: "flex", backgroundColor: "#f3f3f3" }}>
      <Box sx={{ flexDirection: "column" }}>
        <CardContent sx={{ flex: "0", textAlign: "center" }}>
          <Typography component="div" variant="h6">
            {title} ({courseCode}) 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button variant="outlined" startIcon={<SendIcon />} onClick={() => publishCourse(courseCode)}>
            {buttonText}
          </Button>
        </Box>
      </Box>
      <CardMedia component="img" sx={{ width: 151 }} image={image} alt={title} />
    </Card>
  );
};

export default PublishCard;
