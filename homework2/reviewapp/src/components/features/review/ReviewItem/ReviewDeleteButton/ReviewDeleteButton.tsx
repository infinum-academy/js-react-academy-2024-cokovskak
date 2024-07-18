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
            mutate(swrKeys.review(review.show))
        }
    });
    const dltReview=async()=>{
        try{
            await trigger();
        }
        catch(error){}
    }
    return(
    <Fragment>
              <Button width={'30%'} onClick={() => {dltReview()}}>Remove</Button>

    </Fragment>);

}