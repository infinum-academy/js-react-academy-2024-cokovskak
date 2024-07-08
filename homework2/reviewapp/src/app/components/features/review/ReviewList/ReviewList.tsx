import { IReview, IReviewList } from "@/app/typings/review";
import { Container, Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { Fragment } from "react";

export interface IReviewListProps{
    reviewList:IReviewList;
    onDeleteReview:(review:IReview)=>void;
}
export const ReviewList=({reviewList,onDeleteReview}:IReviewListProps)=>{  
    return (
        <>
        <Flex  marginBottom={5} gap={3} direction="column"  >
            {reviewList.reviews.map((review,index)=>{
                return <ReviewItem key={index} review={review} onDelete={onDeleteReview}/>
             }

           ) }
        </Flex>
        </>
    );

}