import * as React from "react";
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
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { List, ListItem, ListItemText, Paper } from "@mui/material";
import ViewCourseCard from "@/components/courseCards/ViewCourseCard";
import HomeData from "@/components/teacher/HomeData";
import PublishCard from "@/components/courseCards/PublishCourseCard";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
    ],
  },
  {
    title: "Pro",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
    ],
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
    ],
  },
];
const defaultTheme = createTheme();

export default function Pricing() {
  const { cardData, courses } = HomeData();

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
                component="h1"
                variant="h4"
                color="text.primary"
                // gutterBottom
                sx = {{ marginBottom: 4 }}
              >
                Your course
              </Typography>
              <Paper sx={{ p: 2, bgcolor: "#f3f3f3", borderRadius: 4 }}>
                <Grid container spacing={4}>
                  {tiers.map((tier) => (
                    <Grid
                      item
                      key={tier.title}
                      xs={12}
                      sm={tier.title === "Enterprise"}
                      md={4}
                    >
                      <Card>
                        <CardHeader
                          title={tier.title}
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
                            <Typography
                              component="h2"
                              variant="h3"
                              color="text.primary"
                            >
                              ${tier.price}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              /mo
                            </Typography>
                          </Box>
                          <ul>
                            {tier.description.map((line) => (
                              <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                                key={line}
                              >
                                {line}
                              </Typography>
                            ))}
                          </ul>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Typography
                component="h1"
                variant="h4"
                color="text.primary"
                // gutterBottom
              >
                Latest Courses
              </Typography>
              <Box>
                {[...Array(3)].map((_, index) => (
                  <Box key={index}>
                    <CardContent sx={{ textAlign: "center" }}></CardContent>
                    <PublishCard
                      title={cardData.title}
                      image={cardData.image}
                      buttonText="View Details"
                      link='/student/newCourse'
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
