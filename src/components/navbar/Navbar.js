import React from 'react'
import {AppBar, styled, Toolbar, Typography,InputBase, MenuItem, Menu, } from '@mui/material'
import { Box } from '@mui/system'
import { Facebook,Menu as MenuIcon ,Instagram, Twitter,} from '@mui/icons-material';
import { useState } from 'react';



const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  
  })
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  })
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 10,
  
})
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contactus", Link: "#" },
  ];
  const[open, SetOpen] = useState(false);
  return (
    <AppBar sx={{background:'black'}} position={"static"}>
      <StyledToolbar>
          
          <Box>
          <Facebook />
          <Instagram />
          <Twitter />
          </Box>   
        <MenuBox sx={{display:{xs:"none",sm:"none",md:"flex"}}}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer" ,fontSize:'14px' }}>
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <Menu sx={{ display: { xs: "block", sm: "block", md: "none" } }} />
      
        <SearchBox>
          <InputBase placeholder="search..." sx={{ color: "white" }}/>
          <MenuIcon sx={{ color: "white", display: { xs: "block", sm: "block", md: "none" }, }} onClick={()=> SetOpen(!open)}
          />
          
        </SearchBox >
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=> SetOpen(!open)}
       anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          
          {MenuItems.map((item) => (
            <MenuItem  sx={{ cursor: "pointer" ,fontSize:'14px' }}>
              {item.Name}
            </MenuItem>
          ))}
        </Box>
        
      </Menu>
     </AppBar>
  )
}

export default Navbar
