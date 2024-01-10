'use client'
import {
  useState
} from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import ProjectItem from '@/components/ProjectItem'

export default function ProjectsPage() {
  return <>
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
      <ProjectItem 
        name="Pegasus Game Engine" 
        tech={["C++", "Vulkan"]} 
        github=""
        // handleClose={} 
      />
      {/* <ProjectItem name="C Web Server" tech={["C"]}github=""/> 
      <ProjectItem name="Envy Rendering Engine" tech={["WebGL", "JavaScript"]}github="" url="https://web.eecs.utk.edu/~raustin9/envy/"/> 
      <ProjectItem name="ThunderBird Compiler" tech={["C++", "LLVM"]}github=""/>  */}
    </Box>
  </>
}