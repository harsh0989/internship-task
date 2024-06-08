import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img4 from '@/public/images/4.png'
import img5 from '@/public/images/5.png'
import data from "./data.json";
import { Icon } from "@iconify/react";

export default function Advantages() {
  return (
    <>
    <Box
      sx={{
        height: "40rem",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 4rem",
        marginX: 6,
      }}
    >
      <Grid container>
        <Grid item md={6} sx={{display:'flex', flexDirection:'column', justifyContent:'center', paddingY:'2rem'}}>
        <Typography
            sx={{
              fontFamily: "Clash Display",
              fontSize: "1rem",
              letterSpacing:'0.2rem',
              color: "#FF5555",
              fontWeight: "500",
            }}
          >
            ADVANTAGES
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "3.3rem",
              fontWeight: "900"
            }}
          >
            Why Choose Uifry?
          </Typography>
          <Box sx={{paddingRight:'5rem'}}>
          <Box sx={{display:'flex', alignItems:'center', marginTop:'2rem'}}>
            <Box sx={{bgcolor:'#FF5555', borderRadius:'50%', width:'2.5rem', height:'2.5rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Icon icon="ph:bell" style={{color:'white', fontSize:'1.2rem'}} />
            </Box>
            <Typography sx={{marginLeft:'1rem', fontFamily:'Clash Display', fontSize:'1.3rem', fontWeight:'600'}} >{data?.advantages[0]?.title}</Typography>
          </Box>
            <Typography sx={{ color:'#7F7F7F', fontFamily:'Clash Display', fontWeight:'500', paddingY:'1rem'}} >{data?.advantages[0]?.description}</Typography>
          </Box>
        </Grid>
        
        <Grid item md={6}>
          <Image
            src={img4}
            alt="Mask image"
            placeholder="blur"
            style={{
              width: "auto",
              height: "45rem",
              objectFit: "cover",
              marginRight: "-6rem",
            }}
          />
        </Grid>
      </Grid>
    </Box>
    

    <Box
      sx={{
        height: "40rem",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 4rem",
        marginX: 6,
      }}
    >
      <Grid container>
      <Grid item md={6}>
          <Image
            src={img5}
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
        <Grid item md={1}/>
        <Grid item md={5} sx={{display:'flex', flexDirection:'column', justifyContent:'center', paddingY:'2rem'}}>
          <Box>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Box sx={{bgcolor:'#FF5555', borderRadius:'50%', width:'2.5rem', height:'2.5rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Icon icon="streamline:star-2" style={{color:'white', fontSize:'1.2rem'}} />
            </Box>
            <Typography sx={{marginLeft:'1rem', fontFamily:'Clash Display', fontSize:'1.3rem', fontWeight:'600'}} >{data?.advantages[1]?.title}</Typography>
          </Box>
            <Typography sx={{ color:'#7F7F7F', fontFamily:'Clash Display', fontWeight:'500', paddingY:'1rem'}} >{data?.advantages[1]?.description}</Typography>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
    </>
  );
}
