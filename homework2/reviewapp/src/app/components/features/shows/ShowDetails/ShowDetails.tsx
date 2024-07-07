import { IShow } from "@/app/typings/show";
import { Card, CardBody, Flex,  Image, Text} from "@chakra-ui/react";

export interface IShowItemProps{
    show: IShow

}
export const ShowDetails=({show}: IShowItemProps) =>
{

    return (
        <Flex>
            <Card>
               <Image alt=" " src={ show.imageUrl ? show.imageUrl: 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/bk99/brooklyn-99-social.jpg/_jcr_content/renditions/original.JPEG'}/>
                <CardBody>
                    <Text>{show.title}</Text>
                    <Text>{show.description}</Text>
                    <Text>  {show.averageRating ? show.averageRating : "No rating."}</Text>
                </CardBody>
           
            </Card>


            
        </Flex>
    );
};