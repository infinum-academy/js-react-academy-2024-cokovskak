import { IReview } from '@/typings/review';
import { render } from '@testing-library/react';
import { mock } from 'node:test';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewList } from './ReviewList';

jest.mock('../ReviewItem/ReviewItem', () => {
	return {
		ReviewItem: jest.fn().mockReturnValue(null),
	};
});
describe('ReviewList',()=>{

    const mock1:IReview[]=[{comment:"show is great",rating:2,show_id:1},{comment:"show is great",rating:2,show_id:3},
        {comment:"show is great",rating:3,show_id:2}]
        it('should check if all the review items are rendered', () => {
            render(<ReviewList reviewList={mock1} />);
    
            expect(ReviewItem).toHaveBeenCalledTimes(mock1.length);
        });
    
        it('should check if the review item was called with the given props', () => {
            render(<ReviewList reviewList={mock1} />);
    
            mock1.forEach((review, index) =>
                expect(ReviewItem).toHaveBeenNthCalledWith(index + 1, { review: review }, expect.anything())
            );
        });
})