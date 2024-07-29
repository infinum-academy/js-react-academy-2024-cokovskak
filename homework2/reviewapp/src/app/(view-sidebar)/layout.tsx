import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Flex } from "@chakra-ui/react";
import { Providers } from "../providers";
import { Header } from "@/components/shared/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Box width="100%" backgroundColor={"purple.300"}>
    <Flex textColor="white" width="100%" flexDirection={{base:"column",lg:"row"}}>
               <SidebarNavigation/>
               <Flex width="100%" >
               {children}
               </Flex>
               
            </Flex> 
          
   </Box>
          
  );
}
