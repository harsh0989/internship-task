import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import data from "./data.json";
import img1 from "@/public/images/1.png";
import img2 from "@/public/images/2.png";
import star from '@/public/images/star.png'
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <>
      <Grid
        container
        sx={{
          height: "40rem",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 4rem",
          marginX: 6,
        }}
      >
        <Image
            src={star}
            alt="Mask image"
            placeholder="blur"
            style={{
              width: "auto",
              height: "3rem",
              objectFit: "cover",
              marginTop: "1rem",
              marginRight: "-6rem",
              zIndex: -1,
              position: "absolute",
              top: 10,
              left: 0,
            }}
          />
        <Box
          sx={{
            background: "#FDE598",
            zIndex: -1,
            position: "absolute",
            top: 150,
            left: 150,
            filter: "blur(50px)",
            width: "230px",
            height: "120px",
          }}
        ></Box>
        <Box
          sx={{
            background: "#FF5555",
            zIndex: -1,
            position: "absolute",
            top: 50,
            left: 150,
            filter: "blur(50px)",
            width: "230px",
            height: "120px",
          }}
        ></Box>

        <Grid item md={5}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "3.3rem",
              fontWeight: "900",
              marginTop:'3rem'
            }}
          >
            {" "}
            {data?.hero?.headline}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Clash Display",
              fontSize: "1rem",
              color: "#7F7F7F",
              fontWeight: "500",
            }}
          >
            {data?.hero?.subheadline}
          </Typography>
          <Box>
            <Button
              sx={{
                bgcolor: "black",
                textTransform: "none",
                color: "white",
                fontFamily: "Clash Display",
                fontWeight: "500",
                letterSpacing: "0.1rem",
                marginTop: "2rem",
                padding: "0.8rem 1.5rem",
                border: "1px solid black",
                "&:hover": {
                  border: "1px solid black",
                  bgcolor: "transparent",
                  color: "black",
                  fontWeight: "700",
                },
              }}
            >
              Get Started
              <Icon
                icon="pajamas:long-arrow"
                style={{ fontSize: "1.5rem", marginLeft: "1rem" }}
              />
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "black",
                fontFamily: "Clash Display",
                fontWeight: "600",
                fontSize: "1rem",
                marginTop: "2rem",
                padding: "0.8rem 1.5rem",
                border: "1px solid transparent",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "black",
                  fontWeight: "700",
                },
              }}
            >
              <Icon
                icon="el:play-alt"
                style={{ fontSize: "1.5rem", marginRight: "0.7rem" }}
              />
              Watch Video
            </Button>
          </Box>
          <Image
            src={img2}
            alt="Mask image"
            placeholder="blur"
            style={{
              width: "auto",
              height: "22rem",
              objectFit: "cover",
              marginTop: "1rem",
              marginRight: "-6rem",
            }}
          />
        </Grid>
        <Grid item md={7} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Image
            src={img1}
            alt="Mask image"
            placeholder="blur"
            style={{
              width: "auto",
              height: "45rem",
              objectFit: "cover",
              marginTop: "-2rem",
              marginRight: "-6rem",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
