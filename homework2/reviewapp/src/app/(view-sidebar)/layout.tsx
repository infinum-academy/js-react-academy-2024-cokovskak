import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Flex } from "@chakra-ui/react";
import { Providers } from "../providers";
import { Header } from "@/components/shared/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#1B004C' }}>
       <Providers> 
        
        <Header/>
            <Flex textColor="white" >
               <SidebarNavigation/>
               {children}
            </Flex> 
          </Providers>
      </body>
    </html>
  );
}
