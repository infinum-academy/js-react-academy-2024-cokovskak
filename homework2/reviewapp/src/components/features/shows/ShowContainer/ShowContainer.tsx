import { IReview, IReviewList } from "@/typings/review"
import { Flex } from "@chakra-ui/react";
import { Fragment, useState, useEffect } from "react";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { IShow } from "@/typings/show";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection";
const mockShow : IShow = {
    title: 'Brooklyn99',
    description: `Comedy series following the exploits of Det. Jake Peralta and his diverse, 
                 lovable colleagues as they police the NYPD's 99th Precinct.`,
    imageUrl: 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/bk99/brooklyn-99-social.jpg/_jcr_content/renditions/original.JPEG',
    averageRating: 0
  };
const mockReviews:IReviewList={
    reviews: [],
};
export const ShowContainer=()=>{
    const [reviewList, setReviewList] = useState(mockReviews);
    const [averageRating, setAverageRating] = useState(0);
    const [show, setShow] = useState(mockShow);
    useEffect(() => {
        setShow((prevShow) => ({
          ...prevShow,
          averageRating: averageRating
        }));
      }, [averageRating]);
    useEffect(()=>{

        const storedList=loadFromLocalStorage();
        setReviewList(storedList);
        setAverageRating(calculateRating(storedList));
    },[]);

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
                <ShowDetails show={show} />
                <ShowReviewSection reviewList={reviewList} addReview={onAddReview} deleteReview={onDeleteReview}/>
            </Flex>
        </Flex>
    </Fragment>
   );

};