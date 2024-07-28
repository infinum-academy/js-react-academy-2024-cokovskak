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
 bg="purple.300"
  flexDirection="column"
  gap={4}
  width={{ base: "70%", sm: "60%", md: "70%", lg: "70%", xl: "80%" }}
  color="white"
   minHeight="max-content"
  // height="200vh"
  padding={10}
  fontSize={fontSize.xl} >
<SidebarContent/>
</Flex>   
    
   
)


}