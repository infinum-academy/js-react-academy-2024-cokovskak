
import StarsRatingInput from "@/components/shared/StarsRating/StarsRatingInput";
import { authFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReview } from "@/typings/review";
import { Box, Button, Flex, FormControl, Input, chakra } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

export interface IReviewFormProps
{
    onAddReview:(review:IReview)=>void;
}
export interface IReviewFormInput{
    comment:string
}
export const ReviewForm=({onAddReview}:IReviewFormProps) =>
    {
        const [rating, setRating] = useState(0);
        const {data} = useSWR<{user: {email: string}}>(swrKeys.user, authFetcher);
        const {register, handleSubmit, reset, formState: {isSubmitting}} = useForm<IReviewFormInput>();
       const handleRatingChange = (selectedRating: number) => {
        setRating(selectedRating); };
        const addReview=async({comment}:IReviewFormInput)=>
            {
                if( rating==0 || comment==='')
                    return;
                const newReview:IReview={
                    comment: comment,
                    rating: rating,
                    email: data?.user.email

                };
                onAddReview(newReview);
                reset();
                setRating(0);


            };
        return (

            <chakra.form onSubmit={handleSubmit(addReview)}>               
                <FormControl          isDisabled={isSubmitting} >
                <Input textColor="black" {...register("comment")} data-testid="review-input" marginBottom={5} height={100} borderRadius={10} bg="white" id="comment-input" placeholder="Add review.."></Input>

                <Flex alignItems={'center'} marginBottom={1} data-testid="review-rating">
                     <StarsRatingInput   value={rating} onChange={handleRatingChange}/>              
                </Flex>
                </FormControl>
                <Button   isDisabled={isSubmitting} data-testid="review-button" type="submit" flexDirection="column" marginBottom={5} height={50} borderRadius={30} width={100} marginTop={5} bg="white">Post</Button>
            </chakra.form>
            
          
        );
    }