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
        tech={["C++", "Vulkan", "SPIR-V"]} 
        github="https://github.com/raustin9/YetAnotherEngine"
      />
      <ProjectItem 
        name="Envy Rendering Engine" 
        tech={["JavaScript", "WebGL", "GLSL"]} 
        github="https://github.com/raustin9/Envy-Rendering-Engine"
      />
      <ProjectItem 
        name="ThunderBird Compiler" 
        tech={["C++", "LLVM"]} 
        github="https://github.com/raustin9/ThunderBirdCompiler"
      />
      <ProjectItem 
        name="C Webserver" 
        tech={["C"]} 
        github="https://github.com/raustin9/CWebServer"
      />
      <ProjectItem 
        name="Rust Webserver" 
        tech={["Rust", "Tokio"]} 
        github="https://github.com/raustin9/rust_web_server_basic"
      />
      <ProjectItem 
        name="Aurora Text Editor" 
        tech={["Rust"]} 
        github="https://github.com/raustin9/Aurora-Text-Editor"
      />
      <ProjectItem 
        name="Scratchbook" 
        tech={["TypeScript", "React"]} 
        github="https://github.com/raustin9/ScratchBookNotes"
      />
    </Box>
  </>
}