'use client'

import {
  useState
} from 'react'
import Link from 'next/link'
import { 
  AppBar, 
  Container, 
  Toolbar, 
  Typography,
  MenuItem,
  Menu,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

interface props {

}

interface item {
  page: string;
  route: string;
}

const items: item[] = [
  {
    page: 'About',
    route: '/about'
  },
  {
    page: 'Music',
    route: '/music'
  },
  {
    page: 'Projects',
    route: '/projects'
  },
  {
    page: 'Journal',
    route: '/journal'
  },
];

export default function TitleBar(params: props) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'inherit', boxShadow: 'none' }}>
        <Container 
          maxWidth="xl"
          sx={{
          }}
        >
          <Toolbar disableGutters
            sx={{
              display: {xs: 'flex'},
              justifyContent: { xs: 'space-evenly', sm: ''}
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'serif',
                fontSize: '2.5rem',
                fontWeight: 700,
                letterSpacing: '.15rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              A
            </Typography>
            
            <Box sx={{ 
              flexGrow: 0, 
              display: { xs: 'flex', md: 'none' },
            }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {items.map((item) => (
                  <MenuItem 
                    key={item.page} 
                    onClick={handleCloseNavMenu} 
                  >
                    <Link href={item.route} style={{textDecoration: 'none', color: 'black'}}>
                      <Typography 
                        textAlign="center"
                        sx={{
                          color: 'black',
                        }}
                      >{item.page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link target="_blank" href="https://github.com/raustin9" style={{textDecoration: 'none', color: 'white'}}>
              <GitHubIcon 
                sx={{
                  transition: '150ms',
                  mr: 3,
                  "&:hover": {
                    color: '#6cc644',
                    transition: '150ms',
                  }
                }}
              />
            </Link>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 3,
                display: { xs: 'flex', sm: 'none', lg: 'none', md: 'none' },
                // flexGrow: 1,
                fontFamily: 'serif',
                fontSize: '2rem',
                fontWeight: 500,
                letterSpacing: '.15rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              AA
            </Typography>
            <Link target="_blank" href="https://www.linkedin.com/in/ralexaustin9/" style={{textDecoration: 'none', color: 'white'}}>
              <LinkedInIcon 
                sx={{
                  transition: '150ms',
                  mr: 3,
                  "&:hover": {
                    color: '#0077B5',
                    transition: '150ms',
                  }
                }}
              />
            </Link>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                // mr: 2,
                display: { sm: 'flex', xs: 'none',  md: 'none' },
                flexGrow: 3,
                fontFamily: 'serif',
                fontSize: '2rem',
                fontWeight: 700,
                letterSpacing: '.15rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Alexander Austin
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {items.map((item) => (
                <Button
                  key={item.page}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    color: 'white', 
                    display: 'block',
                    fontFamily: 'serif',
                    "&:hover": {
                      backgroundColor: '#864879'
                    }
                  }}
                >
                  <Link href={item.route} style={{textDecoration: 'none', color: 'white'}}> {item.page} </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar> 
    </>
  )
}