import { IUser } from "./user";

export interface IReview{
    id?: string;
    rating: number;
    comment: string;
    user?:IUser;
    show_id: number;
}
export interface IReviewList
{
    reviews: Array<IReview>;
}