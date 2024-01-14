import {
  Box, Typography
} from '@mui/material'
import Link from 'next/link'

export default function AboutPage() {
  return <>
    <Box
      sx={{
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      {/* Put Profile Image Below */}
      {/* <Image
        alt=""
      >

      </Image> */}
      <Box
        sx={{
          width: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'serif',
            color: '#ffffff',
            fontSize: '3rem'
          }}
        >
          About Me
        </Typography>
        <br></br>

        <Typography
          sx={{
            fontFamily: 'serif',
            color: '#ffffff',
            fontSize: '1.2rem',
            width: { xs: '80%', sm: '50%', lg: '40%' },
          }}
        >
          I am a programmer, software developer, and student and the Univeristy of Tennessee - Knoxville! 
          My passions are in game design, compilers, and other low-level systems. My favorite programming language is C++ with C and ruse close behind.
          It is my dream to work on video games and the technologies used to build them!

          <br></br>
          <br></br>
          I also write music! I make mostly instrumentals and remixes, and I have some songs for a game that I never released. You can check out my favorites <Link target='_blank' href={'/music'} style={{textDecoration:'underline', color: 'violet'}}>on this site</Link> or <Link target='_blank' href={'https://soundcloud.com/user-940134563/tracks'} style={{textDecoration:'underline', color: 'orange'}}>SoundCloud</Link>.
        </Typography>

        <br></br>
      
        <Typography
          sx={{
            fontFamily: 'serif',
            color: '#ffffff',
            fontSize: '1.2rem',
            width: { xs: '80%', sm: '50%', lg: '40%' },
          }}
        >
          Much of my recent work has been in compilers and game engines, but I still write all kinds of software. I have written many web applications, and I also teach web development for the club <Link target='_blank' href={'https://utk.hack4impact.org/'} style={{textDecoration: 'underline', color: 'cyan'}}>Hack4Impact</Link>.
        </Typography>
        
        <br></br>
      
        <Typography
          sx={{
            fontFamily: 'serif',
            color: '#ffffff',
            fontSize: '1.2rem',
            width: { xs: '80%', sm: '50%', lg: '40%' },
          }}
        >
          Check out my projects on my <Link target='_blank' href={'https://github.com/raustin9'} style={{textDecoration: 'underline', color: '#6cc644'}}>GitHub</Link>!
        </Typography>
      </Box>
    </Box>
  </>
}