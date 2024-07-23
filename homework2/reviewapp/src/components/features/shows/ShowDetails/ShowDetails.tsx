import { fontSize } from '@/styles/theme/foundations/font';
import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react';

export interface IShowItemProps {
	show: IShow;
}
export const ShowDetails = ({ show }: IShowItemProps) => {
	return (
		<Card variant={'hugeCard'} >
			<Image
				height={"439px"}
				width={"1053px"}
				alt={show.title}
				src={show.image_url ? show.image_url : 'public/assets/images/noImage.jpg'}
			/>
			<CardBody>
				<Heading fontSize={fontSize.headlineWeb}  >
					{show.title}
				</Heading>
				<Text fontSize={fontSize.bodyWeb}>{show.description}</Text>
				<Flex>
				<StarIcon alignContent="center" marginRight="8px" />
				<Text fontSize={fontSize.title}> {show.average_rating ? `${show.average_rating.toFixed(1)}/5` : 'No rating.'}</Text>
				</Flex>
				
			</CardBody>
		</Card>
	);
};
