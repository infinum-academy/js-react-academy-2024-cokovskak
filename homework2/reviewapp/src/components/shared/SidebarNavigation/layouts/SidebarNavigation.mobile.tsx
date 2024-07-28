'use client'
import { swrKeys } from "@/fetchers/swrKeys";
import { fontSize } from "@/styles/theme/foundations/font";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,Heading,Input,Text, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import useSWR, { mutate } from "swr";
import { SidebarContent } from "../components/SidebarContent/SidebarContent";
export const SidebarNavigationMobile=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    console.log("Here");
    return (
      < >
 
        <HamburgerIcon  boxSize="24px" color="white" onClick={onOpen}/>
        <Drawer
          isOpen={isOpen}
         
          onClose={onClose}
         
        >
          <DrawerOverlay />
          <DrawerContent bg="purple.300" flexDirection="column"  gap={4} width={{ base: "70%", sm: "60%", md: "70%", lg: "70%", xl: "80%" }}>
            <DrawerCloseButton color="white" />
            
  
            <DrawerBody marginTop="30px" >
              <SidebarContent/>
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
        </>
    )

}