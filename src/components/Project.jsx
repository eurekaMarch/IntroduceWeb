import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { lightGreen } from "@mui/material/colors";
import Link from "@mui/material/Link";
import ecommerce from "../assets/E-Commerce.png";
import airbnb from "../assets/airbnb.png";
import cal from "../assets/cal.png";
import Certificate from "./Certificate";

function Project() {
  return (
    <Box id="Project" sx={{ pt: "10rem" }}>
      <Typography
        sx={{ ml: "3rem", mb: "3rem", fontSize: "3rem", fontWeight: "bold" }}
      >
        PROJECTS
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: "5rem" }}>
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            maxWidth: "60%",
            bgcolor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            image={ecommerce}
            sx={{
              width: "35rem",
              height: "25rem",
              py: "1rem",
              pl: "2rem",
            }}
          />

          <Box
            sx={{
              py: "1rem",
              pl: "3rem",
              pr: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "2.5rem", fontWeight: 600 }}
                gutterBottom
              >
                Final Project
              </Typography>
              <Typography sx={{ fontSize: "2rem", fontWeight: 500 }}>
                E-commerce Website
              </Typography>
              <Typography sx={{ fontSize: "1.4rem" }}>
                Web application decorate with MUI and build with MERN stack.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pr: "3rem",
              }}
            >
              <Typography sx={{ color: lightGreen[600], fontSize: "2rem" }}>
                MERN | MUI
              </Typography>

              <Box sx={{ display: "flex" }}>
                <Link
                  href="https://ecommerce-project-mern.vercel.app/"
                  sx={{ mr: "1.5rem", fontSize: "2.5rem" }}
                  target="blank"
                >
                  <i
                    className="fa-solid fa-link"
                    style={{ color: "#7cb342" }}
                  ></i>
                </Link>

                <Link
                  href="https://github.com/eurekaMarch/Ecommerce_Project-MERN"
                  sx={{ fontSize: "2.5rem" }}
                  target="blank"
                >
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "#7cb342" }}
                  ></i>
                </Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: "5rem" }}>
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            width: "60%",
            bgcolor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            image={airbnb}
            sx={{
              maxWidth: "35rem",
              height: "25rem",
              py: "1rem",
              pl: "2rem",
            }}
          />

          <Box
            sx={{
              py: "1rem",
              pl: "3rem",
              pr: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "2.5rem", fontWeight: 600 }}
                gutterBottom
              >
                Static page
              </Typography>
              <Typography sx={{ fontSize: "2rem", fontWeight: 500 }}>
                Exercise Airbnb clone
              </Typography>
              <Typography sx={{ fontSize: "1.4rem" }}>
                Practice HTML and CSS by recreate Airbnb homepage.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pr: "3rem",
              }}
            >
              <Typography sx={{ color: lightGreen[600], fontSize: "2rem" }}>
                HTML | CSS
              </Typography>

              <Box sx={{ display: "flex" }}>
                <Link
                  href="https://airbnb-clone-gamma-umber.vercel.app/"
                  sx={{ mr: "1.5rem", fontSize: "2.5rem" }}
                  target="blank"
                >
                  <i
                    className="fa-solid fa-link"
                    style={{ color: "#7cb342" }}
                  ></i>
                </Link>

                <Link
                  href="https://github.com/eurekaMarch/Airbnb-Website_Clone"
                  sx={{ fontSize: "2.5rem" }}
                  target="blank"
                >
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "#7cb342" }}
                  ></i>
                </Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            width: "60%",
            bgcolor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            image={cal}
            sx={{
              maxWidth: "35rem",
              height: "25rem",
              py: "1rem",
              pl: "2rem",
            }}
          />

          <Box
            sx={{
              py: "1rem",
              pl: "3rem",
              pr: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "2.5rem", fontWeight: 600 }}
                gutterBottom
              >
                Javascript
              </Typography>
              <Typography sx={{ fontSize: "2rem", fontWeight: 500 }}>
                JavaScript calculator App
              </Typography>
              <Typography sx={{ fontSize: "1.4rem" }}>
                Practiced building a calculator using HTML CSS and JavaScript.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pr: "3rem",
              }}
            >
              <Typography sx={{ color: lightGreen[600], fontSize: "2rem" }}>
                HTML | CSS | Javascript
              </Typography>

              <Box sx={{ display: "flex" }}>
                <Link
                  href="https://calculator-dom-chi.vercel.app/"
                  sx={{ mr: "1.5rem", fontSize: "2.5rem" }}
                  target="blank"
                >
                  <i
                    className="fa-solid fa-link"
                    style={{ color: "#7cb342" }}
                  ></i>
                </Link>

                <Link
                  href="https://github.com/eurekaMarch/Calculator-HTML_CSS_JavaScript"
                  sx={{ fontSize: "2.5rem" }}
                  target="blank"
                >
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "#7cb342" }}
                  ></i>
                </Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Certificate />
    </Box>
  );
}

export default Project;
