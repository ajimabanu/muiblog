import { Box, Typography } from '@mui/material';
import React from 'react';
import img2 from '../images/img2.webp'

const Hero = () => {
    return (
        <Box> 
            <Typography align="center" varient="h1" sx={{ fontSize: 50 }}> Azeerah<b style={{ color: 'red' }}> Boutique </b> </Typography>
              <Typography align="center" varient="body2" sx={{fontSize:16 }}> We make you look the betterof you!</Typography>
            <Box sx={{
        backgroundImage: `url(${img2})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 600,
                width: '100%',
                display: "flex",
        justifyContent:'center'

            
            }}>
                <Box sx={{ width: { xs: "100%", sm: '50%', md: '40%' }, padding: { sx: 3, sm: 2, md: 20 }, }}>
                <Box sx={{ background: "white", opacity: "0.8" }}>
                    <Typography varient="h5"color="tomato" align="center" pt={8}>
                        Trending style
                    </Typography>
                    <Typography variant="h4" align="center">Life is boring without fashion!</Typography>
                    <Typography variant="body1" align="center" pb={8}>We love to change your style lorme ipsum</Typography>
                    </Box>
                    </Box>
        </Box>
      </Box>  
    );
}

export default Hero;
