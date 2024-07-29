import { IShow } from "@/typings/show";
import { Card,Image,CardBody,Text,Flex } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import NextLink from "next/link";
interface IShowCardProps{
    show: IShow
}

export const ShowCard=({show}:IShowCardProps)=>{

  return (

    <Card  as={NextLink} 
    href={`/all-shows/${show.id}`}  variant="primary" size="sm" width="100%">
             <Image alt={show.title} height="300px" width="100%" src = {show.image_url ? show.image_url : '/images/noImage.jpeg'} data-testid = "details-image" />
            
            <CardBody color="purple.200">
               <Text fontWeight="bold"  marginBottom={4} data-testid = "title"> {show.title} </Text>
               <Flex alignContent="center" alignItems="center">
                  <StarIcon alignContent="center" color="purple.200" marginRight="8px" />
                  <Text flexGrow={1} data-testid="rating">{show.average_rating ? `${show.average_rating} / 5` : 'No ratings'}</Text>
               </Flex> 
            </CardBody>
            
    </Card>
  );
}