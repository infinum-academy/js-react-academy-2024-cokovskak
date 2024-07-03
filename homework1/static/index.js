let mockReviews = [
    { text : "The plot is good.",
    rating : "5"
    },
{
    text : "I liked the cast",
    rating : "5"
},
{
    text : "Boring show!!",
    rating : "3"
},

];
function renderReviewsList()
{
    const reviewList = document.getElementById('reviews-list');
    reviewList.innerHTML='';
    mockReviews.forEach(reviewObj => {
      reviewList.appendChild(createReviewItem(reviewObj));
       
    });
}
function createReviewItem(reviewObj)
{
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    const reviewText = document.createElement('p');
    reviewText.textContent = reviewObj.text;
    const reviewRating = document.createElement('p');
    reviewRating.textContent = `Rating: ${reviewObj.rating}/5`;

    reviewDiv.appendChild(reviewText);
    reviewDiv.appendChild(reviewRating);

    return reviewDiv;
}
const addButtonHandler= ()=>{
    const reviewText=document.getElementById('add-review');
    const newReviewText=reviewText.value;
    const reviewRating=document.getElementById('add-rating');
    const newReviewRating=reviewRating.value;
    if(!newReviewText)
        {
            return;
        }
    const newReview={
        
            text: newReviewText,
            rating: newReviewRating,
        
    
    };
    mockReviews.push(newReview);
    renderReviewsList();
    reviewText.value='';
    reviewRating.value='';
   
};
renderReviewsList();