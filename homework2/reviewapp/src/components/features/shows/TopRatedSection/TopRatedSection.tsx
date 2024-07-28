'use client';

import { ShowList } from "@/components/shared/ShowsList/ShowList";
import { WarningIcon } from "@chakra-ui/icons";
import { Flex, Spinner } from "@chakra-ui/react";
import useSWR from "swr";
import { IListShows, getTopRatedShowsList } from '@/fetchers/shows';
import { swrKeys } from "@/fetchers/swrKeys";
import { authFetcher, fetcher } from "@/fetchers/fetcher";

export const TopRated=()=>{
    const { data, isLoading, error } = useSWR<IListShows>(swrKeys.top_rated,authFetcher);

	if (error) {
		return <WarningIcon boxSize={100} mx="50%" />;
	}

	if (isLoading) {
		return <Spinner thickness="10px" emptyColor="white" color="darkblue" boxSize={100} mx="50%"></Spinner>;
	}

	const shows = data?.shows || [];

	return (
		<Flex bg="purple.300" width="100%" padding="60px" justifyContent="center">
			<ShowList showList={shows} />
		</Flex>
	);

}