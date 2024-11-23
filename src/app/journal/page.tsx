import { Box, Typography } from "@mui/material";

export default function JournalPage() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '4rem',
            color: '#fff',
            fontFamily: 'serif',
          }}>
            Journal Coming Soon!
          </Typography>
      </Box>
    </>
  )
}