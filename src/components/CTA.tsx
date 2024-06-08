import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img8 from "@/public/images/8.png";
import star from "@/public/images/star.png";
import data from "./data.json";
import { Icon } from "@iconify/react";

export default function CTA() {
  return (
    <>
      <Box
        sx={{
          height: "30rem",
          display: "flex",
          position: "relative",
          alignItems: "center",
          padding: "2rem 4rem",
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
              zIndex: 10,
              position: "absolute",
              top: 150,
              left: 0,
            }}
          />
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
              zIndex: 10,
              position: "absolute",
              top: 30,
              right: 50,
            }}
          />
        <Box
          sx={{
            background: "#FDE598",
            zIndex: -1,
            position: "absolute",
            top: 70,
            left: 10,
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
            top: 70,
            left: 10,
            filter: "blur(50px)",
            width: "230px",
            height: "120px",
          }}
        ></Box>
        <Box sx={{position:'relative', borderRadius:'20px' , bgcolor:'black', height:'25rem', width:'100%', padding:'0'}}>
        <Image
          src={img8}
          alt="Mask image"
          placeholder="blur"
          style={{
            width: "120%",
            height: "30rem",
            objectFit: "cover",
            zIndex: 10,
            position: "absolute",
            left: '-15rem',
          }}
        />
<Grid container sx={{position:'absolute', zIndex:'1000', display:'flex', flexDirection:'column', justifyContent:'center', height:'100%', paddingLeft:'5rem'}}>
    <Grid item md={5} >
    <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "2.3rem",
              fontWeight: "900",
              color:'white'
            }}
          >
            Ready To Get Started?
          </Typography>
          <Typography
                      sx={{
                        color: "#ffffffac",
                        fontFamily: "Clash Display",
                        fontWeight: "500",
                        paddingY: "1rem",
                      }}
                    >
                      Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
                    </Typography>
                    <Button
              sx={{
                bgcolor: "white",
                textTransform: "none",
                color: "black",
                fontFamily: "Clash Display",
                fontWeight: "500",
                letterSpacing: "0.1rem",
                marginTop: "1rem",
                padding: "0.8rem 1.5rem",
                border: "1px solid white",
                "&:hover": {
                  border: "1px solid white",
                  bgcolor: "transparent",
                  color: "white",
                  fontWeight: "700",
                },
              }}
            >
              Download App
              <Icon icon="ri:apple-fill"
                style={{ fontSize: "1.5rem", marginLeft: "1rem" }}
              />
            </Button>
    </Grid>
</Grid>
        </Box>
      </Box>
    </>
  );
}
