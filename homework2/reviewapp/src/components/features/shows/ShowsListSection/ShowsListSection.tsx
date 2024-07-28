'use client';


import { ShowList } from '@/components/shared/ShowsList/ShowList';
import { authFetcher, fetcher } from '@/fetchers/fetcher';
import { IListShows, getShowsList } from '@/fetchers/shows';
import { swrKeys } from '@/fetchers/swrKeys';
import { IShow } from '@/typings/show';
import { WarningIcon } from '@chakra-ui/icons';
import { Flex, Spinner } from '@chakra-ui/react';
import useSWR from 'swr';

export const ShowsListSection = () => {
    const { data, isLoading, error } = useSWR<IListShows>(swrKeys.all_shows,authFetcher);

	if (error) {
		return <WarningIcon boxSize={100} mx="50%" />;
	}

	if (isLoading) {
		return <Spinner thickness="8px" emptyColor="white" color="darkblue" boxSize={100} mx="50%"></Spinner>;
	}

	const shows = data?.shows || [];

	return (
		<Flex bg="darkpurple" width="100%" padding="60px" justifyContent="center">
			<ShowList showList={shows} />
		</Flex>
	);
};