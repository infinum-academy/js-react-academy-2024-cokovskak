import StarsRatingInput from '@/components/shared/StarsRating/StarsRatingInput';
import { authFetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { IReview } from '@/typings/review';
import { IUser } from '@/typings/user';
import { StarIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { ReviewDeleteButton } from './components/ReviewDeleteButton/ReviewDeleteButton';
import {ReviewEditButton} from './components/ReviewEditButton/ReviewEditButton';
export interface IReviewItemProps {
	review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
	const {data} = useSWR(swrKeys.user, authFetcher<{user: IUser}>);

	return (
		<Flex
			bg="#371587"
			fontSize="xl"
			borderRadius="15px"
			flexDirection="column"
			marginBottom={3}
			width="100%"
			padding={8}
			height="fit-content"
			textColor="white"
			border="15px"
			align="flex-start"
		>
			<Flex alignItems="center"  justifyContent="space-between">
				<Avatar height="32px" width="32px" name={review.user?.email} marginRight={1}/>
                
			</Flex>
			<Text data-testid="email"  marginBottom={4}>{review.user?.email}</Text>

			<Text data-testid="comment" marginBottom={4}>{review.comment}</Text>
			<Text data-testid="rating" marginBottom={4}>{`${review.rating}/5`}</Text>
          

			<StarsRatingInput value={review.rating} />
			{data?.user.email === review.user?.email && <ReviewEditButton  editedReview={review} />}
			{data?.user.email === review.user?.email && <ReviewDeleteButton review={review}/>}


		</Flex>
	);
};
