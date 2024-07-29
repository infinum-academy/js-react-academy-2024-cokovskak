import { useContext, useState } from "react";
import { StepperContext } from "./StepperContextProvider";
import { Box, Button, Card, CardBody, Flex,Grid,GridItem,Heading,Image,Text } from "@chakra-ui/react";
import { IShow } from "@/typings/show";
import { fonts, fontSize } from "@/styles/theme/foundations/font";
import NextLink from "next/link";

export const StepperStep=()=>{
    const {showsList, currentStep, totalSteps, setSelectedShows,selectedShowsList,setSelectedShowId,selectedShowId} = useContext(StepperContext);
    const currentShows=[];
    const total=showsList.length;
    const subShows=totalSteps;
    

    for(let i=0;i<total;i+=subShows){
        const arr=showsList.slice(i,i+subShows);
        currentShows.push(arr);
    }
    
    const handleShowClick = (show:IShow) => {
        console.log("Debug")
        console.log(show.title)
        setSelectedShows([...selectedShowsList, show]);
        setSelectedShowId(show.id);
      };
    
    return (
        <Flex alignItems="center"direction="column" gap={4}>
            <Heading fontSize={fontSize.md}>Pick one tv show</Heading>
            <Grid 
          templateColumns="repeat(2, 1fr)" 
          gap={4} 
          width="100%"
          marginBottom={4} 
         
        > 
            {currentShows[currentStep]?.map((show) => (
               <GridItem  key={show.id}>
               <Card   variant="primary" size="sm" width="170px"                            
             borderWidth={show.id === selectedShowId ? "3px" : "0"} borderColor={show.id === selectedShowId ? "red.400" : "transparent"} 
 >
                       <Image alt={show.title} height="150px" width="10px" src = {show.image_url ? show.image_url : '/images/noImage.jpeg'} data-testid = "details-image" />
                      
                      <CardBody alignItems="center"color="purple.200" justifyContent="space-between"  >
                      <Button fontSize={fontSize.sm}onClick={()=>handleShowClick(show)}>{show.title}</Button>
                      </CardBody>
                      
              </Card>
          </GridItem>
                   
               
            ))}</Grid>
        </Flex>
    );
}