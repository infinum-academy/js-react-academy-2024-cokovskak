import { render, screen } from '@testing-library/react';
import { ReviewItem } from './ReviewItem';
import '@testing-library/jest-dom'
import { ReviewDeleteButton } from './ReviewDeleteButton/ReviewDeleteButton';
import { deleteReview } from '@/fetchers/review';

describe('ReviewItem', () => {
	const mock1 = { rating: 1, comment: 'This is a test', show_id: 4, user: { uid: '1', email: 'test@gmail.com', image_url: '' } };
   
    it('should render review/user email', () => {
		render(<ReviewItem review={mock1} />);

		expect(screen.getByTestId('email')).toBeInTheDocument();
	});
    it('should render  rating',()=>{
        render(<ReviewItem review={mock1}  />);
        expect(screen.getByTestId('rating')).toBeInTheDocument();
    });
    it('should render  comment',()=>{
        render(<ReviewItem review={mock1} />);
        expect(screen.getByTestId('comment')).toBeInTheDocument();
    });
   
    
  
    
   
})
