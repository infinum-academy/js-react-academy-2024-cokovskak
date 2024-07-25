import StarsRatingInput from '@/components/shared/StarsRating/StarsRatingInput';
import { authFetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { IReview } from '@/typings/review';
import { IUser } from '@/typings/user';
import { StarIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Menu, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { ReviewMenuButton } from './components/ReviewMenuButton/ReviewMenuButton';
import { fontSize } from '@/styles/theme/foundations/font';

export interface IReviewItemProps {
	review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
	const {data} = useSWR(swrKeys.user, authFetcher<{user: IUser}>);

	return (
		<Flex bg="#371587" fontSize={fontSize.captionWeb} borderRadius="15px" flexDirection="row" marginBottom={3}
			width="100%" padding={8} height="fit-content" textColor="white" border="15px" align="flex-start">
			
			
			<Flex direction="row" alignItems="start" marginRight="80px">
				<Avatar height="32px" width="32px" name={review.user?.email} marginRight={5}/>
                
			<Flex flexDirection="column" alignItems="start" width="200px" >
				<Text data-testid="email"  marginBottom={4}>{review.user?.email}</Text>
				<Flex flexDirection="row" gap={3}>
					<Text data-testid="rating" marginBottom={4}>{`${review.rating}/5`}</Text>
					<StarsRatingInput value={review.rating} />
				</Flex>
			
			</Flex>
			</Flex>
			<Text data-testid="comment" marginBottom={4}  flexGrow={1}>{review.comment}</Text>
			
			<Flex>
			{data?.user.email === review.user?.email && <ReviewMenuButton review={review} />}
			</Flex>
			
		


		</Flex>
	);
};
