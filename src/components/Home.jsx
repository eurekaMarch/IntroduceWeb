import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import profile from "../assets/myProfile.png";
import html from "../assets/skill-icons--html.svg";
import css from "../assets/skill-icons--css.svg";
import java from "../assets/skill-icons--javascript.svg";
import vite from "../assets/skill-icons--vite-dark.svg";
import react from "../assets/skill-icons--react-dark.svg";
import node from "../assets/skill-icons--nodejs-dark.svg";
import ex from "../assets/skill-icons--expressjs-dark.svg";
import mongo from "../assets/skill-icons--mongodb.svg";
import sql from "../assets/skill-icons--postgresql-dark.svg";
import postman from "../assets/skill-icons--postman.svg";
import mui from "../assets/skill-icons--materialui-dark.svg";
import git from "../assets/skill-icons--github-dark.svg";

function Home() {
  return (
    <Box id="Home">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "8rem",
          pt: "6rem",
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

      <Box sx={{ mt: "10rem" }}>
        <Typography
          sx={{ ml: "3rem", mb: "3rem", fontSize: "3rem", fontWeight: "bold" }}
        >
          SKILLS
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "space-around", pb: "3rem" }}
        >
          <CardMedia
            component="img"
            image={html}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={css}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={java}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={vite}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={react}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={node}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <CardMedia
            component="img"
            image={ex}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={mongo}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={sql}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={postman}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={mui}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
          <CardMedia
            component="img"
            image={git}
            sx={{
              width: { xs: "4rem", sm: "5rem", md: "6rem" },
              height: { xs: "4rem", sm: "5rem", md: "6rem" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
