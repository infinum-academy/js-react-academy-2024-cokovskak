'use client'

import { Flex, Heading } from "@chakra-ui/react";
import { SidebarContent } from "../components/SidebarContent/SidebarContent";
import { Fragment } from "react";
import { fontSize } from "@/styles/theme/foundations/font";
export const SidebarNavigationDesktop=()=>{
  
  console.log("Desktop");
return (
<Flex marginRight="200px"
marginLeft="20px"  
 bg="darkpurple"
  flexDirection="column"
  gap={4}
  width="20vw"
  color="white"
   minHeight="max-content"
  // height="200vh"
  padding={10}
  fontSize={fontSize.title} >
<SidebarContent/>
</Flex>   
    
   
)


}