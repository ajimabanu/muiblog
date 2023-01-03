import React from 'react';
import { Box, Stack, styled, Typography } from '@mui/material'
import im from '../images/im.jpg'
import saree from '../images/saree.webp'
import shirt from '../images/shirt.webp'

const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize:"cober",
});
const StyledTypography = styled(Typography)({
    margin: '25% 50px 25% 50px',
    background: 'white',
    opacity:'0.8'
})
const Categories = () => {
    return (
        <Box>
            <Stack  direction={"row"} spacing={4}mt={5}>
                <StyledBox sx={{backgroundImage:`url(${im})`}}><StyledTypography align="center" variant="h3">Kids</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:`url(${shirt})`}}><StyledTypography align="center" variant="h3">Men</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage:`url(${saree})`}}><StyledTypography align="center" variant="h3">women</StyledTypography></StyledBox>
            </Stack>
  
        </Box>
          
     
    );
}

export default Categories;
