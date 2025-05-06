import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

function About() {
  return (
    <Box id="About" sx={{ pt: "10rem", mb: "5rem" }}>
      <Typography
        sx={{
          ml: "3rem",
          mb: "3rem",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: "bold",
        }}
      >
        ABOUT ME
      </Typography>

      <Grid container xs={12} sm={12} md={12}>
        <Grid
          xs={3}
          sm={3}
          md={3}
          sx={{ px: { xs: "0.5rem", sm: "2rem", md: "3rem" } }}
        >
          <a
            href="https://drive.google.com/file/d/1681UdMoqFfc2HlbmJkVkQ6tDLhwIEftA/view?usp=sharing"
            target="blank"
          >
            <Button
              variant="contained"
              color="green"
              sx={{
                fontSize: { xs: "1rem", sm: "1.4rem", md: "1.6rem" },
                height: "4rem",
                width: "100%",
              }}
            >
              <Typography>
                <i className="fa-regular fa-file"></i> resume
              </Typography>
            </Button>
          </a>
        </Grid>

        <Grid
          xs={3}
          sm={3}
          md={3}
          sx={{ px: { xs: "0.5rem", sm: "2rem", md: "3rem" } }}
        >
          <a href="mailto:trairatk1984@gmail.com">
            <Button
              variant="contained"
              color="green"
              sx={{
                fontSize: { xs: "1rem", sm: "1.4rem", md: "1.6rem" },
                height: "4rem",
                width: "100%",
              }}
            >
              <Typography>
                <i className="fa-regular fa-envelope"></i> email
              </Typography>
            </Button>
          </a>
        </Grid>

        <Grid
          xs={3}
          sm={3}
          md={3}
          sx={{ px: { xs: "0.5rem", sm: "2rem", md: "3rem" } }}
        >
          <a
            href="https://www.linkedin.com/in/trairat-kaewsaad-5028732aa"
            target="blank"
          >
            <Button
              variant="contained"
              color="green"
              sx={{
                fontSize: { xs: "1rem", sm: "1.4rem", md: "1.6rem" },
                height: "4rem",
                width: "100%",
              }}
            >
              <Typography>
                <i className="fa-brands fa-linkedin"></i> linkedin
              </Typography>
            </Button>
          </a>
        </Grid>

        <Grid
          xs={3}
          sm={3}
          md={3}
          sx={{ px: { xs: "0.5rem", sm: "2rem", md: "3rem" } }}
        >
          <a href="https://github.com/eurekaMarch" target="blank">
            <Button
              variant="contained"
              color="green"
              sx={{
                fontSize: { xs: "1rem", sm: "1.4rem", md: "1.6rem" },
                height: "4rem",
                width: "100%",
              }}
            >
              <Typography>
                <i className="fa-brands fa-github"></i> github
              </Typography>
            </Button>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
