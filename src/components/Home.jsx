import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
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
    <Box id="Home" sx={{ mx: "3rem", pt: "6rem" }}>
      <Grid container xs={12} sm={12} md={12}>
        <Grid
          xs={12}
          sm={3.5}
          md={3.5}
          sx={{
            display: { xs: "flex", sm: "none", md: "none" },
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={profile}
            sx={{
              maxWidth: "20rem",
              borderRadius: "0.5rem",
              objectFit: "contain",
              mb: "2rem",
            }}
          />
        </Grid>

        <Grid xs={12} sm={8.5} md={8.5}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "5rem", sm: "7rem", md: "10.5rem" },
                fontFamily: "Black Ops One",
                lineHeight: { xs: "6rem", sm: "7rem", md: "12rem" },
              }}
            >
              Trairat <br /> Kaewsaad
            </Typography>

            <Box sx={{ width: { xs: "100%", sm: "81%", md: "81%" } }}>
              <Typography
                sx={{
                  color: "#8C8E8E",
                  mt: "1rem",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
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
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                }}
              >
                I&apos;m changing my career path and am{" "}
                <Typography sx={{ color: "#1CB803", display: "inline" }}>
                  passionate about coding
                </Typography>
                . In 2023, I embarked on my coding journey at WeStride Thailand
                Bootcamp with the goal of becoming a Junior Software Developer.
                This journey is ongoing, and I&apos;m committed to further
                improving my skills to become a{" "}
                <Typography sx={{ color: "#1CB803", display: "inline" }}>
                  proficient software developer
                </Typography>{" "}
                in the future.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          xs={12}
          sm={3.5}
          md={3.5}
          sx={{
            display: { xs: "none", sm: "flex", md: "flex" },
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={profile}
            sx={{
              maxWidth: "24rem",
              borderRadius: "0.5rem",
              objectFit: "contain",
              pl: "1rem",
            }}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: "10rem" }}>
        <Typography
          sx={{
            mb: "3rem",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
          }}
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
