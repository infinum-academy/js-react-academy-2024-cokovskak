import { IReview, IReviewList } from "@/typings/review"
import { Flex, Spinner } from "@chakra-ui/react";
import { Fragment, useState, useEffect } from "react";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { IShow } from "@/typings/show";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection";
import { useParams } from 'next/navigation';
import useSWR from "swr";
import { WarningIcon } from "@chakra-ui/icons";
import { getShow } from "@/fetchers/shows";

const mockReviews:IReviewList={
    reviews: [],
};
export const ShowContainer=()=>{
    const params = useParams();
    const [reviewList, setReviewList] = useState(mockReviews);
    const [averageRating, setAverageRating] = useState(0);
    const { data, isLoading, error } = useSWR(`/shows/${params.id}`, () => getShow(params.id as string));

    // const [show, setShow] = useState(data);

	if (error) {
		return <WarningIcon boxSize={100} mx="50%" />;
	}

	if (isLoading || !data) {
		return <Spinner thickness="8px" emptyColor="white" color="darkblue" boxSize={100} mx="50%"></Spinner>;
	}

   
    // useEffect(() => {
    //     setShow((prevShow) => ({
    //       ...prevShow,
    //       averageRating: averageRating
    //     }));
    //   }, [averageRating]);
    // useEffect(()=>{

    //     const storedList=loadFromLocalStorage();
    //     setReviewList(storedList);
    //     setAverageRating(calculateRating(storedList));
    // },[]);

    const onAddReview=(review:IReview)=>{
    const newList={
        reviews:[...reviewList.reviews,review]
    };
    setReviewList(newList);
    setAverageRating(calculateRating(newList));
    saveToLocalStorage(newList);
    
   };

    const calculateRating=(reviewList:IReviewList)=>{
    
        if(reviewList.reviews.length==0)
            return 0;
        let sum=0;
        reviewList.reviews.forEach((review) => (sum+=review.rating));
        return (sum/reviewList.reviews.length);
   };
   const onDeleteReview=(reviewRem:IReview)=>
   {
        const newList:IReviewList={
        reviews:reviewList.reviews.filter((review)=>review!=reviewRem),

    };
    setReviewList(newList);
    setAverageRating(calculateRating(newList));
    saveToLocalStorage(newList);

   };
   const loadFromLocalStorage=()=>
    {
        const reviewListString=localStorage.getItem('reviewsList');
        if(!reviewListString)
        {
            return mockReviews;
         }
        return JSON.parse(reviewListString);
    };
    const saveToLocalStorage=(reviewList:IReviewList)=>
        {
            localStorage.setItem('reviewsList',JSON.stringify(reviewList));
        }
   return(
    <Fragment>
        <Flex flexDirection="column"  alignItems="center" >
            <Flex flexDirection="column">
                <ShowDetails show={data} />
                <ShowReviewSection reviewList={reviewList} addReview={onAddReview} deleteReview={onDeleteReview}/>
            </Flex>
        </Flex>
    </Fragment>
   );

};