'use client';
import { IReview, IReviewList } from "@/typings/review";
import { Container, Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { Fragment } from "react";

export interface IReviewListProps{
    reviewList:IReview[];
  
}
export const ReviewList=({reviewList}:IReviewListProps)=>{  
    return (
       
        <Flex  marginBottom={5} gap={3} direction="column"  >
            {reviewList.map((review,index)=>{
                return <ReviewItem key={index} review={review} />
             }

           ) }
        </Flex>
      
    );

}