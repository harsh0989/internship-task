import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import data from "./data.json";
import Image from "next/image";
import star from '@/public/images/star.png'


export default function FAQ() {
  return (
    <Box
      sx={{
        height: "40rem",
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
              zIndex: -1,
              position: "absolute",
              top: 20,
              left: '60%',
            }}
          />
      <Box>
        <Typography
          sx={{
            fontFamily: "Clash Display",
            fontSize: "1rem",
            letterSpacing: "0.2rem",
            color: "#FF5555",
            fontWeight: "500",
          }}
        >
          FAQ
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Clash Display",
            fontSize: "3.3rem",
            fontWeight: "900",
          }}
        >
          Frequently Asked <br /> Questions
        </Typography>

        <Grid container columnSpacing={2}>
          {data?.faq.map((f, i) => {
            return (
                <>
              <Grid item md={5.5} sx={i%2 === 0 ? {marginY:'1rem', marginRight:'6rem'} : {marginY:'1rem'}} >
                {i === 0 || i === 3 || i===4 ? (
                  <Box sx={{ bgcolor: "#FF5555", borderRadius: "10px", padding:'1rem' }}>
                    <Typography
                      sx={{
                        fontFamily: "Clash Display",
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      {f?.question}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ffffff5c",
                        fontFamily: "Clash Display",
                        fontWeight: "500",
                        paddingY: "1rem",
                      }}
                    >
                      {f?.answer}
                    </Typography>
                  </Box>
                ) : (
                    <Box sx={{ bgcolor: "white", borderRadius: "10px", padding:'1rem' }}>
                    <Typography
                      sx={{
                        fontFamily: "Clash Display",
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "black",
                      }}
                    >
                      {f?.question}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#0000005c",
                        fontFamily: "Clash Display",
                        fontWeight: "500",
                        paddingY: "1rem",
                      }}
                    >
                      {f?.answer}
                    </Typography>
                  </Box>
                )}
              </Grid>
                </>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
