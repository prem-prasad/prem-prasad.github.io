import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: 0,
  backgroundColor: "rgba(242, 204, 84, 0.6)",
  '&:hover': {
    backgroundColor: "rgba(242, 204, 84, 0.8)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
//   width: '100%',
height:"100%",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  color: 'black',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  fontsize: 20,
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  height: '100%',
  width: '100%',
  fontsize: 20,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'black',
    height: '100%',
    
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header({searchValue, setSearchValue}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{display:"grid", gridTemplateColumns:"1fr 2.5fr 2.5fr", backgroundColor:"rgba(245, 195, 39, 0.8)"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{display:"contents", mr: 2 }}
          >
            <ArrowBackIcon  sx={{ color: 'black' }}/>
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=> setSearchValue(e.target.value)}
              value={searchValue}
            />
          </Search>
          <div></div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
