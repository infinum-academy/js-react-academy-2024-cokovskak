"use client";

import { IShow } from "@/typings/show";
import {Flex, SimpleGrid} from "@chakra-ui/react"
import NextLink from "next/link";
import { ShowCard } from "../ShowCard/ShowCard";

interface IShowListProps {
    showList: Array<IShow>;
  }
  
export const ShowList=({showList}:IShowListProps)=>{
    return (
        <SimpleGrid data-testid="list" columns={{base:1,sm:1,md:2,lg:4}} padding={4} gap={4}>
			{showList.map((show) => (
				<ShowCard key={show.id} show={show}></ShowCard>
			))}
		</SimpleGrid>
    );

}