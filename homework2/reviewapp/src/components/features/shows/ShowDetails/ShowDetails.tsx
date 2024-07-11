import { IShow } from "@/typings/show";
import { Card, CardBody, Flex,  Heading,  Image, Text} from "@chakra-ui/react";

export interface IShowItemProps{
    show: IShow;

}
export const ShowDetails=({show}: IShowItemProps) =>
{

    return (
        
            <Card marginBottom={5}>
               <Image   alt={show.title} src={ show.image_url ? show.image_url: 'homework2/reviewapp/src/components/images/noImage.jpg'}/>
                <CardBody>
                    <Heading size="md" padding={3}>{show.title}</Heading>
                    <Text padding={3}>{show.description}</Text>
                    <Text padding={3}>  {show.average_rating ? `${show.average_rating.toFixed(1)}/5` : "No rating."}</Text>
                </CardBody>
           
            </Card>


            
        
    );
};