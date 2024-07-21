import { deleteReview } from "@/fetchers/review";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReview } from "@/typings/review";
import { Button } from "@chakra-ui/react";
import { Fragment } from "react";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

export interface IReviewDeleteButton{
    review:IReview
}

export const ReviewDeleteButton=({review}:IReviewDeleteButton)=>{
    const{trigger}=useSWRMutation(swrKeys.reviews(`/${review.id}`),deleteReview,{
        onSuccess:()=>{
            mutate(swrKeys.review(review.show_id))
        }
    });
    
    return(
    <Fragment>
              <Button onClick={() => trigger()}>Remove</Button>

    </Fragment>);

}