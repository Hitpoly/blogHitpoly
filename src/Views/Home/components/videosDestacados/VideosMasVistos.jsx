import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importamos los datos desde el archivo JSON
import videosData from "./masVistos.json"; // Asegúrate de que la ruta sea correcta

import VideosMasDestacados from "../../../components/cards/cardVideosDestacados";

function VideosDestacados() {
  // Creamos una referencia para Swiper
  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
        padding: { xs: "20px 20px", md: "40px 20px" },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            width: "90%",
            fontSize: "2.2rem",
            fontWeight: "700",
            color: "#211E26",
            margin: "10px",
            textAlign: "center",
          }}
        >
          Estos son los videos más destacados.
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Swiper
          ref={swiperRef} // Referencia de Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={100}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {videosData.map((video, index) => (
            <SwiperSlide key={index}>
              <Box sx={{margin: "50px 0px"}}>
                <VideosMasDestacados
                  image={video.image}
                  title={video.title}
                  linkArticle={video.linkArticle}
                  linkText={video.linkText}
                  duration={video.duration}
                  date={video.date}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Contenedor de botones fuera del swiper (solo visible en pantallas grandes) */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          right: "20px",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 9999,
          display: { xs: "none", md: "flex" }, // Mostrar solo en pantallas más grandes
        }}
      >
        <div
          className="swiper-button-prev"
          onClick={() => swiperRef.current.swiper.slidePrev()} // Navegación previa
        ></div>
        <div
          className="swiper-button-next"
          onClick={() => swiperRef.current.swiper.slideNext()} // Navegación siguiente
        ></div>
      </Box>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: white;
          border-radius: 50%;
          padding: 12px;
          color: #f21c63 !important;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .swiper-button-prev {
          top: 50px;
          left: -30px; /* Ajusta según la necesidad */
        }

        .swiper-button-next {
          right: -30px; /* Ajusta según la necesidad */
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }

        .swiper-pagination {
          position: relative;
          top: 0px;
          z-index: 99999;
          display: flex;
          justify-content: center;
        }

        .swiper-pagination-bullet {
          position: relative;
          top: 0px;
          background-color: #f21c63;
          width: 12px;
          height: 12px;
          margin: 0 5px;
          border-radius: 50%;
          z-index: 99999;
        }

        .swiper-pagination-bullet-active {
          background-color: #f21c63;
          width: 16px;
          height: 16px;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #f21c63;
          color: white !important;
        }
      `}</style>
    </Box>
  );
}

export default VideosDestacados;
