import {
  Box,
  Typography,
  Grid,
} from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Box sx={{
          width: '100vw',
          mt: 8,
          // height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // border: 1,
          borderColor: 'green',
        }}
      >
        <Box sx={{
            width: '80%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'initial',
              fontSize: '3rem',
              color: 'white',
              fontWeight: 600,
              // textDecoration: 'underline'
            }}
          >
            Reagan Austin
          </Typography>
          <Typography 
            sx={{
              fontFamily: 'initial',
              fontSize: '1.3rem',
              color: 'white',
            }}
          >
            Student & Software Developer
          </Typography>

          {/* -- Home Page Content -- */}
          <Grid container spacing={2} columns={2} 
            sx={{
              mt: 3,
              display: {
                xs: 'none',
                sm: 'inherit',
              }
            }}>
            <Grid item xs={1}>
              <Link href="/about" style={{textDecoration: 'none', color: 'white'}}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '40%',
                  minHeight: '12rem',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  transition: '200ms',
                  "&:hover": {
                    transition: '200ms',
                    backgroundColor: '#3F3351'
                  }
                }}>
                  <Typography sx={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'initial',
                  }}>
                    About
                  </Typography>
                  <Typography sx={{
                    fontSize: 16,
                    color: '#ababab',
                    fontFamily: 'initial',
                    textAlign: 'center'
                  }}>
                    A little bit about me :)
                  </Typography>
                </Box> 
              </Link>
            </Grid> 
            <Grid item xs={1}>
              <Link href="/projects" style={{textDecoration: 'none', color: 'white'}}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '40%',
                  minHeight: '12rem',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  transition: '200ms',
                  "&:hover": {
                    transition: '200ms',
                    backgroundColor: '#3F3351'
                  }
                }}>
                  <Typography sx={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'initial',
                  }}>
                    Projects
                  </Typography>
                  <Typography sx={{
                    fontSize: 16,
                    color: '#ababab',
                    fontFamily: 'initial',
                    textAlign: 'center'
                  }}>
                    My favorite projects I have worked on throughout the last few years that I am really proud of.
                  </Typography>
                </Box> 
              </Link>
            </Grid> 
            <Grid item xs={1}>
              <Link href="/music" style={{textDecoration: 'none', color: 'white'}}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '40%',
                  minHeight: '12rem',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  transition: '200ms',
                  "&:hover": {
                    transition: '200ms',
                    backgroundColor: '#3F3351'
                  }
                }}>
                  <Typography sx={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'initial',
                  }}>
                    Music
                  </Typography>
                  <Typography sx={{
                    fontSize: 16,
                    color: '#ababab',
                    fontFamily: 'initial',
                    textAlign: 'center'
                  }}>
                    Some music I make in my free time. I am making some for an upcoming game as well.
                  </Typography>
                </Box> 
              </Link>
            </Grid> 
            <Grid item xs={1}>
              <Link href="/journal" style={{textDecoration: 'none', color: 'white'}}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '40%',
                  minHeight: '12rem',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  transition: '200ms',
                  "&:hover": {
                    transition: '200ms',
                    backgroundColor: '#3F3351'
                  }
                }}>
                  <Typography sx={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'initial',
                  }}>
                    Journal
                  </Typography>
                  <Typography sx={{
                    fontSize: 16,
                    color: '#ababab',
                    fontFamily: 'initial',
                    textAlign: 'center'
                  }}>
                    Some thoughts documenting what I have learned through my professional, academic, and personal experiences.
                  </Typography>
                </Box> 
              </Link>
            </Grid> 
          </Grid>
        </Box>
      </Box>
    </main>
  )
}
