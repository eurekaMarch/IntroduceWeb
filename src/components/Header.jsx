import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function Header() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#ededed",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "end" },
          pr: { xs: 0, sm: 0, md: "12rem" },
          pt: "2rem",
          pb: "1rem",
          fontSize: "1.2rem",
        }}
      >
        <a href="#Home">
          <Typography sx={{ mr: "4rem", fontWeight: "bold" }}>Home</Typography>
        </a>
        <a href="#Project">
          <Typography sx={{ mr: "4rem", fontWeight: "bold" }}>
            Project
          </Typography>
        </a>
        <a href="#About">
          <Typography sx={{ fontWeight: "bold" }}>About Me</Typography>
        </a>
      </Box>

      <Divider />
    </Box>
  );
}

export default Header;
