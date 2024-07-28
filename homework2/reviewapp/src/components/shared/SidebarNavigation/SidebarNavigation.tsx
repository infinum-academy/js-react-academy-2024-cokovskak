'use client'
import { swrKeys } from "@/fetchers/swrKeys";
import { fontSize } from "@/styles/theme/foundations/font";
import { Button, Flex,Heading,Hide,Show,Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useSWR, { mutate } from "swr";
import { Header } from "../Header/Header";
import { SidebarNavigationMobile } from "./layouts/SidebarNavigation.mobile";
import { SidebarNavigationDesktop } from "./layouts/SidebarNavigation.desktop";
export const SidebarNavigation=()=>{
  
return (
  <Flex direction={"column"} >
    <Flex direction={"row"} padding={10}  alignItems="center"justifyContent="space-between" >
    <Header/>
    <Hide above='md'>
     <SidebarNavigationMobile/>
   </Hide>
    </Flex>
   
    <Show above='md'>
      <SidebarNavigationDesktop/>
    </Show>
   
    
    
  </Flex>
);

}