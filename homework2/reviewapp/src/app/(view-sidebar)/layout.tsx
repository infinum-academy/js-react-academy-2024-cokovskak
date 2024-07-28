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
   <Box>
    <Flex textColor="white" flexDirection={{base:"column",lg:"row"}}>
               <SidebarNavigation/>
               <Flex>
               {children}
               </Flex>
               
            </Flex> 
          
   </Box>
          
  );
}
