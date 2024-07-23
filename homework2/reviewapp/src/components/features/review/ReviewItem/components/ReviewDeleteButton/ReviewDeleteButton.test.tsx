import { deleteReview } from "@/fetchers/review";
import { ReviewDeleteButton } from "./ReviewDeleteButton";
import { render,screen,act,waitFor } from "@testing-library/react";
import { swrKeys } from "@/fetchers/swrKeys";
import { mutate } from "swr";

jest.mock('@/fetchers/review', () => {
	return {
		deleteReview: jest.fn().mockResolvedValue(null),
	};
});

jest.mock('swr', () => {
	return {
		mutate: jest.fn(),
	};
});
const mock1 = { rating: 1, comment: 'This is a test', show_id: 4, user: { uid: '1', email: 'test@gmail.com', image_url: '' } };

describe('DeleteReviewButton',()=>{
    it('should render and mutate on success',async()=>{
        render(<ReviewDeleteButton review={mock1}/>);
        const deleteButton=screen.getByRole('button');
        act(()=>{
            deleteButton.click();
        })
        await waitFor(()=>{
            expect(mutate).toHaveBeenCalledWith(swrKeys.review(mock1.show_id));
        })
    } )
})