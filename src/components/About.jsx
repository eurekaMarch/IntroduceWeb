import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function About() {
  return (
    <Box id="About" sx={{ pt: "10rem", mb: "5rem" }}>
      <Typography
        sx={{ ml: "3rem", mb: "3rem", fontSize: "3rem", fontWeight: "bold" }}
      >
        ABOUT ME
      </Typography>
      <Box sx={{ mx: "3rem", display: "flex", justifyContent: "space-around" }}>
        <a href="">
          <Button
            variant="contained"
            color="green"
            sx={{
              fontSize: "1.6rem",
              height: "5rem",
            }}
          >
            <Typography>
              <i className="fa-regular fa-file"></i> resume
            </Typography>
          </Button>
        </a>

        <a href="mailto:trairatk1984@gmail.com">
          <Button
            variant="contained"
            color="green"
            sx={{
              fontSize: "1.6rem",
              height: "5rem",
            }}
          >
            <Typography>
              <i className="fa-regular fa-envelope"></i> email
            </Typography>
          </Button>
        </a>

        <a
          href="https://www.linkedin.com/in/trairat-kaewsaad-5028732aa"
          target="blank"
        >
          <Button
            variant="contained"
            color="green"
            sx={{
              fontSize: "1.6rem",
              height: "5rem",
            }}
          >
            <Typography>
              <i className="fa-brands fa-linkedin"></i> linkedin
            </Typography>
          </Button>
        </a>

        <a href="https://github.com/eurekaMarch" target="blank">
          <Button
            variant="contained"
            color="green"
            sx={{
              fontSize: "1.6rem",
              height: "5rem",
            }}
          >
            <Typography>
              <i className="fa-brands fa-github"></i> github
            </Typography>
          </Button>
        </a>
      </Box>
    </Box>
  );
}

export default About;
