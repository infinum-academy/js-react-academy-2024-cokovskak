import { IShow } from "@/typings/show";
import { Card, CardBody, Flex,  Heading,  Image, Text} from "@chakra-ui/react";

export interface IShowItemProps{
    show: IShow

}
export const ShowDetails=({show}: IShowItemProps) =>
{

    return (
        
            <Card marginBottom={5}>
               <Image   alt=" " src={ show.imageUrl ? show.imageUrl: 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/bk99/brooklyn-99-social.jpg/_jcr_content/renditions/original.JPEG'}/>
                <CardBody>
                    <Heading size="md" padding={3}>{show.title}</Heading>
                    <Text padding={3}>{show.description}</Text>
                    <Text padding={3}>  {show.averageRating ? `${show.averageRating.toFixed(1)}/5` : "No rating."}</Text>
                </CardBody>
           
            </Card>


            
        
    );
};