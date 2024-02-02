import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import cerB from "../assets/Certificate for B.png";
import cerC from "../assets/Certificate for C.png";
import cerD from "../assets/Certificate for D.png";
import cerE from "../assets/Certificate for E.png";
import cerF from "../assets/Certificate for F.png";
import cerG from "../assets/Certificate for G.png";

function Certificate() {
  return (
    <Box sx={{ pt: "10rem" }}>
      <Typography
        sx={{
          ml: "3rem",
          mb: "3rem",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: "bold",
        }}
      >
        CERTIFICATES
      </Typography>

      <Box sx={{ mx: "3rem" }}>
        <Swiper
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Paper elevation={5}>
              <CardMedia component="img" image={cerB} />
            </Paper>
          </SwiperSlide>

          <SwiperSlide>
            <Paper elevation={5}>
              <CardMedia component="img" image={cerC} />
            </Paper>
          </SwiperSlide>

          <SwiperSlide>
            <Paper elevation={5}>
              <CardMedia component="img" image={cerD} />
            </Paper>
          </SwiperSlide>

          <SwiperSlide>
            <Paper elevation={5}>
              <CardMedia component="img" image={cerE} />
            </Paper>
          </SwiperSlide>

          <SwiperSlide>
            <Paper elevation={5}>
              <CardMedia component="img" image={cerF} />
            </Paper>
          </SwiperSlide>

          <SwiperSlide>
            <Paper elevation={5}>
              <CardMedia component="img" image={cerG} />
            </Paper>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Certificate;
