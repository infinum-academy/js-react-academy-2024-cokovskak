'use client';

import { ShowList } from "@/components/shared/ShowsList/ShowList";
import { WarningIcon } from "@chakra-ui/icons";
import { Flex, Spinner } from "@chakra-ui/react";
import useSWR from "swr";
import { getTopRatedShowsList } from '@/fetchers/shows';

export const TopRated=()=>{
    const { data, isLoading, error } = useSWR('/shows/top-rated', getTopRatedShowsList);

	if (error) {
		return <WarningIcon boxSize={100} mx="50%" />;
	}

	if (isLoading) {
		return <Spinner thickness="10px" emptyColor="white" color="darkblue" boxSize={100} mx="50%"></Spinner>;
	}

	const shows = data?.shows || [];

	return (
		<Flex bg="#2a0066" width="100%" justifyContent="center">
			<ShowList showList={shows} />
		</Flex>
	);

}