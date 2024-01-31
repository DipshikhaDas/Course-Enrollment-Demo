import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../../public/images/banner.png";
import StaticImage from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box
      className="index-header text-center"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        <StaticImage
          src={backgroundImage}
          alt="Image alt"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box
        sx={{
          zIndex: 2,
          width: "600px",
          padding: "50px",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: "20px" }}> Course Enrollment </Typography>
        <Typography variant="body1" paragraph sx={{ marginBottom: "20px" }}>
          Discover endless learning possibilities with our diverse range of
          courses here. Join our vibrant community today and embark on your
          journey of knowledge and growth.
        </Typography>
        <Link href={"/login"} passHref>
          <Button variant="contained" color="primary">
            Explore now
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
