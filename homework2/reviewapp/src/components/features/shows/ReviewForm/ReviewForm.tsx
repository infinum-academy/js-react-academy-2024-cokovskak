import StarsRating from "@/components/shared/StarsRating/StarsRating";
import StarIconComponent from "@/components/shared/StarsRating/StarsRating";
import { IReview } from "@/typings/review";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

export interface IReviewFormProps
{
    onAddReview:(review:IReview)=>void;
}
export const ReviewForm=({onAddReview}:IReviewFormProps) =>
    {
        const [rating, setRating] = useState(0);

       const handleRatingChange = (selectedRating: number) => {
        setRating(selectedRating); };
        const onClickHandler=()=>
            {
                const reviewInputComment= document.getElementById('comment-input') as HTMLInputElement;
                const commentValue=reviewInputComment.value;
                if( rating==0 || commentValue==='')
                    return;
                const newReview:IReview={
                    comment: commentValue,
                    rating: rating

                };
                onAddReview(newReview);
                reviewInputComment.value="";
                setRating(0);


            };
        return (
            <Flex gap={3}  textColor="grey"   direction={'column'} >
                <Input marginBottom={5} height={100} borderRadius={10} bg="white" id="comment-input" placeholder="Add review.."></Input>
                    <Flex direction={'row'}>{Array(5).fill('').map((_, index) => (<StarsRating key={index} selected={index < rating}  onChange={() => handleRatingChange(index + 1)}/>  ))}
                    </Flex>
               
                    
                <Button  flexDirection="column" marginBottom={5} height={50} borderRadius={30} width={100} marginTop={5} bg="white" onClick={onClickHandler}>Post</Button>
            </Flex>
          
        );
    }