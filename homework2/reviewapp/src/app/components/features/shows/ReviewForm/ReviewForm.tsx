import { IReview } from "@/app/typings/review";
import { Button, Flex, Input } from "@chakra-ui/react";

export interface IReviewFormProps
{
    onAddReview:(review:IReview)=>void;
}
export const ReviewForm=({onAddReview}:IReviewFormProps) =>
    {
        const onClickHandler=()=>
            {
                const reviewInputComment= document.getElementById('comment-input') as HTMLInputElement;
                const commentValue=reviewInputComment.value;
                const reviewInputRating=document.getElementById('rating-input') as HTMLInputElement;
                const ratingValue=reviewInputRating.value;
                const newReview:IReview={
                    comment: commentValue,
                    rating: parseInt(ratingValue)

                };
                onAddReview(newReview);
                reviewInputComment.value="";
                reviewInputRating.value="";


            };
        return (
            <Flex gap={3} flexDirection="column" textColor="grey">
                <Input marginBottom={5} flexDirection="column" height={100} borderRadius={10} bg="white" id="comment-input" placeholder="Add review.."></Input>
                <Input bg="white" id="rating-input" placeholder="Add rating.."></Input>
                <Button  marginBottom={5} height={50} borderRadius={30} width={100} marginTop={5} bg="white" onClick={onClickHandler}>Post</Button>
            </Flex>
        );
    }