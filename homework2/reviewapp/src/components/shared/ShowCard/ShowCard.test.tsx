import { ShowCard } from './ShowCard';
import { describe, it } from 'node:test';
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
    it("should render show's title",()=>{
        render(<ShowCard show={mock1} />);

        const title = screen.getByText(mock1.title);
        expect(title).toBeInTheDocument();      
    });
    it("should contain image",()=>{
        render(<ShowCard show={mock1}/>);
        const image=screen.getByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src");
    });
    it("should have average rating",()=>{
        render(<ShowCard show={mock1}/>);

        const avgRating=screen.getByText(mock1.average_rating+'/5');
        expect(avgRating).toBeInTheDocument();
    })
})