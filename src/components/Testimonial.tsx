import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img5 from '@/public/images/6.png'
import img7 from '@/public/images/7.png'

export default function Testimonial() {
  return (
    <>
    <Box
      sx={{
        height: "40rem",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        padding: "8rem 4rem",
        marginX: 6,
      }}
    >
      <Grid container>
        <Grid item md={12} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography
            sx={{
              fontFamily: "Clash Display",
              fontSize: "1rem",
              letterSpacing:'0.2rem',
              color: "black",
              fontWeight: "400",
            }}
          >
            TESTIMONIAL
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "3.3rem",
              fontWeight: "900",
              textAlign:'center'
            }}
          >
            What Our Users Say <br/> About Us?
          </Typography>
        </Grid>
      <Grid item md={6}>
          <Image
            src={img5}
            alt="Mask image"
            placeholder="blur"
            style={{
              width: "auto",
              height: "40rem",
              objectFit: "cover",
              marginLeft: "-6rem",
            }}
          />
        </Grid>
        <Grid item md={1}/>
        <Grid item md={5} sx={{display:'flex', marginTop:'-6rem', flexDirection:'column', justifyContent:'center'}}>
          <Box>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography sx={{fontFamily:'Clash Display', fontSize:'2rem', fontWeight:'600'}} >The Best Financial Accounting <br/> App Ever!</Typography>
          </Box>
            <Typography sx={{ color:'#7F7F7F', fontFamily:'Clash Display', fontWeight:'500', paddingY:'1rem'}} >“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</Typography>
            <Image
            src={img7}
            alt="Mask image"
            placeholder="blur"
            style={{
              width: "auto",
              height: "2rem",
              objectFit: "cover",
            }}
          />
            <Typography sx={{ color:'black', fontFamily:'Clash Display', fontWeight:'700'}} >Nick Jonas</Typography>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
    </>
  );
}
