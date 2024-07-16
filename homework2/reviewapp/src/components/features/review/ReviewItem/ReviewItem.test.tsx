import { render, screen } from '@testing-library/react';
import { ReviewItem } from './ReviewItem';
import '@testing-library/jest-dom'

describe('ReviewItem', () => {
	const mock1 = { email: 'test@gmail.com', avatar: '', rating: 1, comment: 'This is a test' };
    //todo: implement it in homework4
    // it('should render user email',()=>{
    //     render(<ReviewItem review={mock1} onDelete={() => {}} />);
    //     const email=screen.getByText(mock1.email);
    //     expect(email).toBeInTheDocument();
    // });
    it('should render  rating',()=>{
        render(<ReviewItem review={mock1} onDelete={() => {}} />);
        const rating=screen.getByText(mock1.rating+'/5');
        expect(rating).toBeInTheDocument();
    });
    it('should render  comment',()=>{
        render(<ReviewItem review={mock1} onDelete={() => {}} />);
        const comment=screen.getByText(mock1.comment);
        expect(comment).toBeInTheDocument();
    });
    it('should render delete button',()=>{
        render(<ReviewItem review={mock1} onDelete={() => {}} />);
        const dlt=screen.getByRole('button');
        expect(dlt).toBeInTheDocument();
    });
    it('should call on delete when button clicked',()=>{
        const onDelete=jest.fn();
        render(<ReviewItem review={mock1} onDelete={onDelete} />);
        const dlt=screen.getByRole('button');
        dlt.click();
        expect(onDelete).toHaveBeenCalled();
        expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(mock1);
    });
})
