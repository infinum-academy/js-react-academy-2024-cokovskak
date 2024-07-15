import { render,screen } from "@testing-library/react";
import { ReviewForm } from "./ReviewForm";

describe("ReviewForm",()=>{
    it("should render input",()=>{
        render(<ReviewForm onAddReview={()=>{}}/>);
        expect(screen.getByTestId('review-input')).toBeInTheDocument();
        
    } );
    it("should render button",()=>{
        render(<ReviewForm onAddReview={()=>{}}/>);
        expect(screen.getByTestId('review-button')).toBeInTheDocument();
        
    } );
    it("should render rating",()=>{
        render(<ReviewForm onAddReview={()=>{}}/>);
        expect(screen.getByTestId('review-rating')).toBeInTheDocument();
        
    } );
})