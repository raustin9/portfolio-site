'use client'

import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
} from '@mui/material'
import Link from 'next/link'
import GitHubIcon from "@mui/icons-material/GitHub"
import LaunchIcon from "@mui/icons-material/Launch"
import {
  useState
} from 'react'

interface props {
  name: string;
  tech: string[];
  url?: string;
  github: string;
  // handleClose: (open: boolean) => void;
}

export default function ProjectItem(params: props) {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const colors = [
    'cyan',
    'lightgreen',
    'violet',
  ];

  return <>
  <Box
        sx={{
          mt: 2,
          display: 'flex',
          width: '80%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 1,
          transition: '150ms',
          borderRadius: 1,

          '&:hover': {
            transition: '150ms',
            backgroundColor: '#864879'
          },
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'white',
            flexGrow: 1,
            fontFamily: 'serif',
            fontWeight: 500,
            letterSpacing: '0.05rem',
          }}
        >{params.name}</Typography>
        {
          params.tech.map((item, index) => {
            return <Typography
              key={item}
              variant='inherit'
              sx={{
                // color: '#dddddd',
                color: `${colors[index % colors.length]}`,
                fontSize: '1rem',
                fontFamily: 'serif',
                mr: 1,
              }}
            >[{item}]</Typography>
          })
        }

        {
          params.url && (
            <Link target="_blank" href={params!.url} style={{textDecoration: 'none', color: 'black'}}>
              <LaunchIcon 
                sx={{
                  color: 'white',
                  ml: 1,
                }}
              />
            </Link>
          )
        }
        
        <Link target="_blank" href={params.github} style={{textDecoration: 'none', color: 'black'}}>
          <GitHubIcon 
            sx={{
              transition: '150ms',
              color: 'white',
              ml: 1,
              "&:hover": {
                color: '#6cc644',
                transition: '150ms',
              }
            }}
          />
        </Link>

        {/* <Dialog onClose={params.handleClose} open={isOpen}>
          <DialogTitle>Test Title</DialogTitle>
        </Dialog> */}
      </Box>
  </>
}