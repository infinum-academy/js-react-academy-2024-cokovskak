import { useContext } from "react"
import { StepperContext } from "./StepperContextProvider"
import { Card, CardBody, Flex, Grid, GridItem, Heading,Image,Text } from "@chakra-ui/react";
import { ShowCard } from "@/components/shared/ShowCard/ShowCard";
import { IShow } from "@/typings/show";
import { fontSize } from "@/styles/theme/foundations/font";
import { StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const StepperResults=()=>{
    const{selectedShowsList}=useContext(StepperContext);
    return(
        <Flex alignItems="center"direction="column" gap={4}>
            <Heading fontSize={fontSize.md}>Your selection of tv shows:</Heading>
            <Grid 
          templateColumns="repeat(2, 1fr)" 
          gap={4} 
          width="100%" 
         
        > 
           {selectedShowsList.length > 0 ? (
        selectedShowsList.map((show: IShow) => (
           <GridItem key={show.id} >
             <Card  as={NextLink} 
            href={`/all-shows/${show.id}`}  variant="primary" size="sm" width="170px"    
            height="260px"
             >
                     <Image alt={show.title} height="150px" width="170px" src = {show.image_url ? show.image_url : '/images/noImage.jpeg'}  />
                    
                    <CardBody alignItems="center"color="purple.200" justifyContent="space-between"  >
                       <Text fontSize={fontSize.sm} fontWeight="bold"  marginBottom={4} > {show.title} </Text>
                       <Flex alignContent="center" alignItems="center">
                          <StarIcon alignContent="center" color="purple.200" marginRight="8px" />
                          <Text  flexGrow={1} >{show.average_rating ? `${show.average_rating} / 5` : 'No ratings'}</Text>
                       </Flex> 
                    </CardBody>
                    
            </Card>
        </GridItem>
           
           
        ))
      ) : (
        <p>No shows selected.</p>
      )} </Grid>
        </Flex>
    )
}