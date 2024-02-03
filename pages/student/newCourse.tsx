import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Grid, Link, Paper } from "@mui/material";
import CustomTypo from "@/components/signInUpPage/CustomTypo";

export default function NewCourseDetails() {
  return (
    <Box sx={{ maxWidth: 800, margin: "auto", marginTop: "120px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random?space"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
              <Button variant="contained" sx={{ mt:2 }}>Enroll to this course</Button>
            </CardContent>
          </Card>
        </Grid>
      </Paper>
      <Link href="/student" sx={{ fontFamily: 'bold', textDecoration: 'underline', color: 'primary', fontSize: '25px', mt: '5px' }}> Back to home page </Link>

    </Box>
  );
}
