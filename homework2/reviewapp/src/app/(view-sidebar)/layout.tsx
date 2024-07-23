import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Flex } from "@chakra-ui/react";
import { Providers } from "../providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers> 
          
        <Flex  
            textColor="white"
            bg="#2a0066">
            <SidebarNavigation/>
           {children}
          </Flex> 
          </Providers>
      </body>
    </html>
  );
}
