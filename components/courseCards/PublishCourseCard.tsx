import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";

interface PublishCardProps {
  title: string;
  image: string;
  buttonText: string;
  link: string
}

const PublishCard: React.FC<PublishCardProps> = ({ title, image, buttonText, link }) => {
  return (
    <Card sx={{ display: "flex", backgroundColor: "#f3f3f3" }}>
      <Box sx={{ flexDirection: "column" }}>
        <CardContent sx={{ flex: "0", textAlign: "center" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Course no
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Link href={link}><Button variant="outlined" startIcon={<SendIcon />}>
            {buttonText}
          </Button></Link>
        </Box>
      </Box>
      <CardMedia component="img" sx={{ width: 151 }} image={image} alt={title} />
    </Card>
  );
};

export default PublishCard;
