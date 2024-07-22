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
import { swrKeys } from "@/fetchers/swrKeys";
import { authFetcher, fetcher } from "@/fetchers/fetcher";

const mockReviews:IReviewList={
    reviews: [],
};
const mockShow: IShow = {
	id: '',
	image_url: '',
	title: '',
	description: '',
	average_rating: 0,
	no_of_reviews: 0,
};
export interface IShowResponse{
    show:IShow;
}

export const ShowContainer=()=>{
    const params = useParams();
    let id=params.id as string;
    const [reviewList, setReviewList] = useState(mockReviews);
    const [averageRating, setAverageRating] = useState(0);
    const { data, isLoading, error } = useSWR<IShowResponse>(swrKeys.show(id), authFetcher);
    console.log(id);
    

	if (error) {
		return <WarningIcon boxSize={100} mx="50%" />;
	}

	if (isLoading || !data) {
		return <Spinner thickness="8px" emptyColor="white" color="darkblue" boxSize={100} mx="50%"></Spinner>;
	}
   
   return(
    <Fragment>
        <Flex flexDirection="column"  alignItems="center" >
            <Flex flexDirection="column" maxWidth="80%">
                <ShowDetails show={data.show} />
                <ShowReviewSection id={parseInt(id)}/>
            </Flex>
        </Flex>
    </Fragment>
   );

};