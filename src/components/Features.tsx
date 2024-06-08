import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import img1 from '@/public/images/3.png'
import data from "./data.json";
import { Icon } from "@iconify/react";


export default function Features() {
  return (
    <Box sx={{height: "40rem",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 4rem",
        marginX: 6}}>
            <Box
          sx={{
            background: "#FDE598",
            zIndex: -1,
            position: "absolute",
            top: '50%',
            right: -150,
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
            top: '40%',
            right: -150,
            filter: "blur(50px)",
            width: "230px",
            height: "120px",
          }}
        ></Box>
    <Grid container>
        <Grid item md={6}>
        <Image
            src={img1}
            alt="Mask image"
            placeholder="blur"
            style={{
              width: "auto",
              height: "45rem",
              objectFit: "cover",
              marginLeft: "-6rem",
            }}
          />
        </Grid>
        <Grid item md={6} sx={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'2rem'}}>
        <Typography
            sx={{
              fontFamily: "Clash Display",
              fontSize: "1rem",
              letterSpacing:'0.2rem',
              color: "#FF5555",
              fontWeight: "500",
            }}
          >
            FEATURES
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "3.3rem",
              fontWeight: "900"
            }}
          >
            Uifry Premium
          </Typography>
          <Box>
            <Box sx={{marginTop:'2rem'}}>
                {
                    data?.features.map((f, i) => {
                        return <Box sx={{marginBottom:'2rem'}}>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <Icon icon={f?.icon} style={{color:'#FF5555', fontSize:'1rem'}}/>
                            <Typography sx={{marginLeft:'1rem', fontFamily:'Clash Display', fontWeight:'600'}} >{f?.title}</Typography>
                        </Box>
                            <Typography sx={{ color:'#7F7F7F', fontFamily:'Clash Display', fontWeight:'500', paddingY:'1rem'}} >{f?.description}</Typography>
                        </Box>
                    })
                }
            </Box>
          </Box>
        </Grid>
    </Grid>
    </Box>
  )
}
