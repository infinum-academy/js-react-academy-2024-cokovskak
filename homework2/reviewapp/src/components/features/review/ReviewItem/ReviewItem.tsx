import StarsRatingInput from "@/components/shared/StarsRating/StarsRatingInput";
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
            <StarsRatingInput value={review.rating}/>
            <Button   cursor="pointer" onClick={()=>onDelete(review)}>
                Remove
            </Button>
        </Flex>
    );

}