import { IShow } from "@/typings/show";
import { fetcher } from './fetcher';

export interface IListShows{
shows:Array<IShow>;
}
export function getShowsList() {
	return fetcher<IListShows>('/api/shows');
}

export function getTopRatedShowsList() {
	return fetcher<IListShows>('/api/shows/top-rated');
}

export function getShow(id: string) {
    return fetcher<IShow>(`/api/shows/${id}`)
}