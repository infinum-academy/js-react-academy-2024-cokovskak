import { StarsRating } from "@/components/shared/StarsRating/StarsRating";
import { IReview } from "@/typings/review";
import { StarIcon } from "@chakra-ui/icons";
import { Button, Flex,Text } from "@chakra-ui/react";

export interface IReviewItemProps{
    review: IReview
    onDelete:(review:IReview)=>void;
}

export const ReviewItem=({review,onDelete}:IReviewItemProps)=>{
    return(

        <Flex bg="#371587" fontSize='xl' borderRadius="15px" flexDirection="column" marginBottom={3} width= "100%" padding={8} height="fit-content" textColor="white" border="15px" align="flex-start" >
            <Text marginBottom={4}>{review.comment}</Text>
            <Text marginBottom={4}>{`${review.rating}/5`}</Text>
        
            <Flex marginBottom={4}>{Array(5).fill('').map((_, index) => (
              <StarIcon key={index} boxSize={5}  color={index < review.rating ? 'yellow.400' : 'gray.300'}/> ))}  </Flex>
            <Button   cursor="pointer" onClick={()=>onDelete(review)}>
                Remove
            </Button>
        </Flex>
    );

}