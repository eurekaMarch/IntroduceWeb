import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

function About() {
  return (
    <Box id="About" sx={{ pt: "10rem" }}>
      <Typography
        sx={{ ml: "3rem", mb: "3rem", fontSize: "3rem", fontWeight: "bold" }}
      >
        ABOUT ME
      </Typography>
      {/* <a href="">
        <Button
          variant="contained"
          color="green"
          sx={{
            fontSize: "1.6rem",
            height: "5rem",
            fontWeight: 500,
          }}
        >
          Shopping Now
        </Button>
      </a> */}
      {/* <Button variant="contained">Hello world</Button> */}
    </Box>
  );
}

export default About;
