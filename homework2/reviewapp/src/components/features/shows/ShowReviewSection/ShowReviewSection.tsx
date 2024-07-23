
import { IReview, IReviewList } from "@/typings/review";
import { IReviewFormProps, ReviewForm } from "../ReviewForm/ReviewForm";
import { Fragment } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import useSWR, { mutate } from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { createReview } from "@/fetchers/review";
import { authFetcher } from "@/fetchers/fetcher";
import useSWRMutation from "swr/mutation";
import { fontSize } from "@/styles/theme/foundations/font";



export interface ShowReviewSectionProps{
    id: number;


}
export const ShowReviewSection=({id}:ShowReviewSectionProps)=>{
   const {data,error,isLoading}=useSWR(swrKeys.review(id),authFetcher<IReviewList>);
   const{trigger}=useSWRMutation(swrKeys.reviews(''),createReview,{
    onSuccess:()=>{
        mutate(swrKeys.review(id));
    }
   });
   const addReview=async(newReview:IReview)=>{
    await trigger(newReview);
   };

   if (error) {
    if (error.status !== 401) return <Box color="white">Something went wrong...</Box>;
 }
 if (isLoading || !data) {
    return <Box color="white">In progress..</Box>;
 }  
    return(
        <Fragment>
            <Flex direction="row" width="1053px" marginTop={20}  >
                <Heading marginRight={40} fontSize={fontSize.title} marginBottom={5} textColor="white">
                Reviews
                </Heading>
                
                <Flex  direction="column" width="870px">
                <ReviewForm index={id} onAddReview={addReview}/>
                <ReviewList reviewList={data.reviews} />
                </Flex>
               
            </Flex>
            
            
            
        </Fragment>
    );
    

}       