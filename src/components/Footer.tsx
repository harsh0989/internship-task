import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          height: "20rem",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 4rem",
          marginX: 6,
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid item md={3}>
            <Image
              src={logo}
              alt="Mask image"
              placeholder="blur"
              style={{ width: "auto", height: "3rem", objectFit: "cover" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
              }}
            >
                <Box sx={{display:'flex', alignItems:'center'}}>
              <Icon
                icon="lets-icons:message-fill"
                style={{ color: "#FF5555", fontSize: "1.5rem" }}
              />
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                  marginLeft:'10px'
                }}
              >
                Help@Frybix.Com
              </Typography>
                </Box>
                <Box sx={{display:'flex', alignItems:'center'}}>
                <Icon icon="fluent:call-24-filled"
                style={{ color: "#FF5555", fontSize: "1.5rem" }}
              />
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                  marginLeft:'10px'
                }}
              >
                +1 234 456 678 89
              </Typography>
                </Box>
            </Box>
          </Grid>
          <Grid item md={2}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "2.3rem",
              fontWeight: "900",
              color:'black'
            }}
          >
            Links
          </Typography>
          <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Bookings
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Blog
              </Typography>
          </Grid>
          <Grid item md={2}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "2.3rem",
              fontWeight: "900",
              color:'black'
            }}
          >
            Legal
          </Typography>
          <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Terms Of Use
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Cookie Policy
              </Typography>
          </Grid>
          <Grid item md={2}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "2.3rem",
              fontWeight: "900",
              color:'black'
            }}
          >
            Product
          </Typography>
          <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Take Tour
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Live Chat
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Reviews
              </Typography>
          </Grid>
          <Grid item md={3}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "2.3rem",
              fontWeight: "900",
              color:'black'
            }}
          >
            Newsletter
          </Typography>
          <Typography
                sx={{
                  color: "black",
                  fontFamily: "Clash Display",
                  fontWeight: "600",
                  paddingY: "1rem",
                }}
              >
                Stay Up To Date
              </Typography>
              <Box sx={{display:'flex'}} >
                <TextField placeholder="Your Email"/>
                <Button sx={{bgcolor:'black', color:'white', textTransform:'none' , fontFamily:'Clash Display'}}>Subscribe</Button>
              </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
