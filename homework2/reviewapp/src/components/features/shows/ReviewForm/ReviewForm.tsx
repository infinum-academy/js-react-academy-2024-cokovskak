import StarsRatingInput from '@/components/shared/StarsRating/StarsRatingInput';
import { authFetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { IReview } from '@/typings/review';
import { IUser } from '@/typings/user';
import { Box, Button, Flex, FormControl, FormErrorMessage, Input, Textarea, chakra } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';

export interface IReviewFormProps {
	index: number,
	onAddReview: (review: IReview) => void;
}
export interface IReviewFormInput {
	comment: string;
}
export const ReviewForm = ({ onAddReview,index }: IReviewFormProps) => {
	const [rating, setRating] = useState(0);
	const {register, handleSubmit, reset, formState: {isSubmitting, errors}} = useForm<IReviewFormInput>();
	const { data } = useSWR<{ user: IUser }>(swrKeys.user, authFetcher);
	
	const handleRatingChange = (selectedRating: number) => {
		setRating(selectedRating);
	};

	const addReview = async ({ comment }: IReviewFormInput) => {
		if (!data) return;
		const newReview: IReview = {
			show_id: index,
			comment: comment,
			rating: rating,
		};
		onAddReview(newReview);

		setRating(0);
		reset();
	};
	return (
		<chakra.form onSubmit={handleSubmit(addReview)}>
			  <FormControl isInvalid={Boolean(errors.comment)} isDisabled={isSubmitting} marginBottom={10}>
            <Textarea {...register("comment", {required: 'Please write a comment'})} textColor="black" backgroundColor="white"placeholder="Add review" width="100%" marginBottom={1} paddingTop={1} />
            <FormErrorMessage marginTop={0} marginBottom={1}>{errors.comment?.message}</FormErrorMessage>
         </FormControl>

			
		<FormControl isDisabled={isSubmitting} marginBottom={10}>
				<Flex alignItems={'center'} marginBottom={1} data-testid="review-rating">
					<StarsRatingInput value={rating} onChange={handleRatingChange} />
				</Flex>
			</FormControl>
		
		<FormControl isDisabled={isSubmitting} marginBottom={10}>
            <Button isLoading={isSubmitting} type="submit" >Post</Button>
         </FormControl>
		</chakra.form>
	);
};
