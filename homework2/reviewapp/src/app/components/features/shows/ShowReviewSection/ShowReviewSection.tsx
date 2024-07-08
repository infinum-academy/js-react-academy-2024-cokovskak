
import { IReview, IReviewList } from "@/app/typings/review";
import { IReviewFormProps, ReviewForm } from "../ReviewForm/ReviewForm";
import { Fragment } from "react";
import { Heading } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";



export interface ShowReviewSectionProps{
   reviewList:IReviewList;
   addReview:(review:IReview)=>void;
   deleteReview:(review:IReview)=>void;

}
export const ShowReviewSection=({reviewList,addReview,deleteReview}:ShowReviewSectionProps)=>{
    return(
        <Fragment>
            <Heading size="lg" marginBottom={5} textColor="white">
                Reviews
            </Heading>
            <ReviewForm onAddReview={addReview}/>
            <ReviewList reviewList={reviewList} onDeleteReview={deleteReview}/>
        </Fragment>
    );
    

}