import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import profile from "../assets/myProfile.png";

function Home() {
  return (
    <Box
      id="Home"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mx: "8rem",
        mt: "2rem",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "12rem",
            fontFamily: "Black Ops One",
            lineHeight: "12rem",
          }}
        >
          Trairat <br /> Kaewsaad
        </Typography>

        <Typography
          sx={{
            color: "#8C8E8E",
            mt: "1rem",
            fontSize: "2.5rem",
            fontWeight: 600,
          }}
        >
          Full-Stack Developer
        </Typography>
      </Box>

      <CardMedia
        component="img"
        image={profile}
        sx={{
          width: "24rem",
          height: "35rem",
          mt: "3rem",
          borderRadius: "0.8rem",
        }}
      />
    </Box>
  );
}

export default Home;
