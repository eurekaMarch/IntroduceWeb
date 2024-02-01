import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import profile from "../assets/myProfile.png";

function Home() {
  return (
    <Box>
      <Box
        id="Home"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "8rem",
          mt: "6rem",
          mb: "8rem",
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

          <Box sx={{ width: "81%" }}>
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

            <Typography
              sx={{
                textAlign: "justify",
                textIndent: 50,
                color: "#8C8E8E",
                fontSize: "1.4rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium adipisci sequi dolorum at voluptate eius? Asperiores
              ad laudantium quae eius consectetur quaerat esse quia ipsam
              cupiditate in repudiandae cumque excepturi delectus illum sit
              libero, culpa reiciendis incidunt minima necessitatibus,
              voluptatem sint eos perspiciatis! Inventore ab necessitatibus iste
              quis. Molestiae, molestias!
            </Typography>
          </Box>
        </Box>

        <CardMedia
          component="img"
          image={profile}
          sx={{
            width: "24rem",
            height: "35rem",
            borderRadius: "0.5rem",
          }}
        />
      </Box>

      <Box sx={{ mb: "8rem" }}>
        <Typography sx={{ ml: "3rem", fontSize: "3rem", fontWeight: "bold" }}>
          SKILLS
        </Typography>

        <Box></Box>
      </Box>
    </Box>
  );
}

export default Home;
