import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
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
        sx={{
          ml: "3rem",
          mb: "3rem",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: "bold",
        }}
      >
        PROJECTS
      </Typography>

      <Grid container xs={12} sm={12} md={12}>
        <Grid
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "5rem",
            mx: "1rem",
          }}
        >
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              width: "70rem",
              bgcolor: "transparent",
            }}
          >
            <Grid container xs={12} sm={12} md={12}>
              <Grid
                xs={12}
                sm={6}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CardMedia
                  component="img"
                  image={ecommerce}
                  sx={{
                    maxWidth: "35rem",
                    py: "1rem",
                    pl: "2rem",
                    pr: { xs: "2rem", md: 0 },
                    objectFit: "contain",
                  }}
                />
              </Grid>

              <Grid
                xs={12}
                sm={6}
                md={6}
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
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 600,
                    }}
                    gutterBottom
                  >
                    Final Project
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 500,
                    }}
                  >
                    E-commerce Website
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "1rem", md: "1.4rem" } }}>
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
                  <Typography
                    sx={{
                      color: lightGreen[600],
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    MERN | MUI
                  </Typography>

                  <Box sx={{ display: "flex" }}>
                    <Link
                      href="https://ecommerce-project-mern.vercel.app/"
                      sx={{
                        mr: "1.5rem",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                      target="blank"
                    >
                      <i
                        className="fa-solid fa-link"
                        style={{ color: "#7cb342" }}
                      ></i>
                    </Link>

                    <Link
                      href="https://github.com/eurekaMarch/Ecommerce_Project-MERN"
                      sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                      target="blank"
                    >
                      <i
                        className="fa-brands fa-github"
                        style={{ color: "#7cb342" }}
                      ></i>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container xs={12} sm={12} md={12}>
        <Grid
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "5rem",
            mx: "1rem",
          }}
        >
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              width: "70rem",
              bgcolor: "transparent",
            }}
          >
            <Grid container xs={12} sm={12} md={12}>
              <Grid
                xs={12}
                sm={6}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CardMedia
                  component="img"
                  image={airbnb}
                  sx={{
                    maxWidth: "35rem",
                    py: "1rem",
                    pl: "2rem",
                    pr: { xs: "2rem", md: 0 },
                    objectFit: "contain",
                  }}
                />
              </Grid>

              <Grid
                xs={12}
                sm={6}
                md={6}
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
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 600,
                    }}
                    gutterBottom
                  >
                    Static page
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 500,
                    }}
                  >
                    Exercise Airbnb clone
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "1rem", md: "1.4rem" } }}>
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
                  <Typography
                    sx={{
                      color: lightGreen[600],
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    HTML | CSS
                  </Typography>

                  <Box sx={{ display: "flex" }}>
                    <Link
                      href="https://airbnb-clone-gamma-umber.vercel.app/"
                      sx={{
                        mr: "1.5rem",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                      target="blank"
                    >
                      <i
                        className="fa-solid fa-link"
                        style={{ color: "#7cb342" }}
                      ></i>
                    </Link>

                    <Link
                      href="https://github.com/eurekaMarch/Airbnb-Website_Clone"
                      sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                      target="blank"
                    >
                      <i
                        className="fa-brands fa-github"
                        style={{ color: "#7cb342" }}
                      ></i>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container xs={12} sm={12} md={12}>
        <Grid
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "5rem",
            mx: "1rem",
          }}
        >
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              width: "70rem",
              bgcolor: "transparent",
            }}
          >
            <Grid container xs={12} sm={12} md={12}>
              <Grid
                xs={12}
                sm={6}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CardMedia
                  component="img"
                  image={cal}
                  sx={{
                    maxWidth: "35rem",
                    py: "1rem",
                    pl: "2rem",
                    pr: { xs: "2rem", md: 0 },
                    objectFit: "contain",
                  }}
                />
              </Grid>

              <Grid
                xs={12}
                sm={6}
                md={6}
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
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 600,
                    }}
                    gutterBottom
                  >
                    Javascript
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 500,
                    }}
                  >
                    JavaScript calculator App
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "1rem", md: "1.4rem" } }}>
                    Practiced building a calculator using HTML CSS and
                    JavaScript.
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
                  <Typography
                    sx={{
                      color: lightGreen[600],
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    HTML | CSS | Javascript
                  </Typography>

                  <Box sx={{ display: "flex" }}>
                    <Link
                      href="https://calculator-dom-chi.vercel.app/"
                      sx={{
                        mr: "1.5rem",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                      target="blank"
                    >
                      <i
                        className="fa-solid fa-link"
                        style={{ color: "#7cb342" }}
                      ></i>
                    </Link>

                    <Link
                      href="https://github.com/eurekaMarch/Calculator-HTML_CSS_JavaScript"
                      sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                      target="blank"
                    >
                      <i
                        className="fa-brands fa-github"
                        style={{ color: "#7cb342" }}
                      ></i>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Certificate />
    </Box>
  );
}

export default Project;
