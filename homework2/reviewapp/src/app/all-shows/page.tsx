"use client";

import { ShowsListSection } from "@/components/features/shows/ShowsListSection/ShowsListSection";
import { ShowList } from "@/components/shared/ShowsList/ShowList";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Flex } from "@chakra-ui/react";
import useSWR from 'swr';
export default function AllShows(){
   
        return <ShowsListSection />;
    
}