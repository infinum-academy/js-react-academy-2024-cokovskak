import { ShowCard } from './ShowCard';
import { render, screen } from '@testing-library/react';

describe('ShowCard', ()=>{
    const mock1={
        title: 'show1',
        description: 'this is show1',
        id: '100',
        image_url: '/images/noImage.jpg',
        average_rating: 0,
        no_of_reviews: 0,

    };
    const mock2={
        title: 'show2',
        description: 'this is show2',
        id: '101',
        image_url: '/images/noImage.jpg',
        average_rating: 5,
        no_of_reviews: 0,

    };
    it("should render show's title",()=>{
        render(<ShowCard show={mock1} />);
        expect(screen.getByText(mock1.title)).toBeInTheDocument();      
    });
    it("should contain image",()=>{
        render(<ShowCard show={mock1}/>);
        const image=screen.getByTestId('details-image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src',mock1.image_url);
    });
    it("should render correct average rating if average rating is >=0",()=>{
        render(<ShowCard show={mock2}/>);
        const avgRating=screen.getByText(mock2.average_rating+' / 5');
        expect(avgRating).toBeInTheDocument();
    });
    it("should render correct  average rating if average rating is 0",()=>{
        render(<ShowCard show={mock1}/>);

        const avgRating=screen.getByText('No ratings');
        expect(avgRating).toBeInTheDocument();
    })
})