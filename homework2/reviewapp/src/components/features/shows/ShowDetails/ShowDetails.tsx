import { fontSize } from '@/styles/theme/foundations/font';
import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react';

export interface IShowItemProps {
	show: IShow;
}
export const ShowDetails = ({ show }: IShowItemProps) => {
	return (
		<Card variant="primary" size="lg" width={{ md:"75%",lg: "80%" ,sm:"70%"}}  >
			<Image
				height={"440px"}
				width={"1054px"}
				alt={show.title}
				src={show.image_url ? show.image_url : 'public/assets/images/noImage.jpg'}
			/>
			<CardBody>
				<Heading fontSize={fontSize['2xl']}  >
					{show.title}
				</Heading>
				<Text fontSize={fontSize.md}>{show.description}</Text>
				<Flex>
				<StarIcon alignContent="center" marginRight="8px" />
				<Text fontSize={fontSize.xl}> {show.average_rating ? `${show.average_rating.toFixed(1)}/5` : 'No rating.'}</Text>
				</Flex>
				
			</CardBody>
		</Card>
	);
};
