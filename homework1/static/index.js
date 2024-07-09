let mockReviews = [];

function renderReviewsList(mockReviews)
{
    const reviewListElement = document.getElementById('reviews-list');
    
    reviewListElement.innerHTML='';
    mockReviews.forEach((reviewObj) => {
      reviewListElement.appendChild(createReviewItem(reviewObj));
       
    });
    renderAverageRating();

 }
//saves the list of reviews to browser's local storage
function saveToLocalStorage(reviewsList)
{
    localStorage.setItem('reviews-list', JSON.stringify(reviewsList));
   

}
//loads the saved list
function loadFromLocalStorage()
{
    const reviewListString=localStorage.getItem('reviews-list');
    if(reviewListString)
        {
         mockReviews=JSON.parse(reviewListString);
   
            return mockReviews;
        }
        return [];
}
//calculates the average rating by summing up the ratings and dividing it by the number of reviews
function calculateAverageRating()
{
    const total = mockReviews.reduce((sum, review) => sum + parseInt(review.rating), 0);
    if(mockReviews.length==0)
        return 0;
    return (total/mockReviews.length).toFixed(1);
}
//updates the average rating displayed on the page.
function renderAverageRating()
{
    const avg=calculateAverageRating();
    const infoElement=document.getElementById('avg-rating');
    infoElement.textContent=`${avg}/5`;
}
//creates a DOM element that represents a review
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
    //stars added
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.innerHTML = '&#9733;'; 
        if (i <= reviewObj.rating) {
            star.classList.add('gold');
        }
        starsContainer.appendChild(star);
    }
    reviewDiv.appendChild(starsContainer);

 
    //delete button added
    const reviewDeleteButton = document.createElement('button');
    reviewDeleteButton.textContent = 'Remove';
    reviewDeleteButton.onclick = () => {
    mockReviews = mockReviews.filter((t) => t !== reviewObj);
    renderReviewsList(mockReviews);
    saveToLocalStorage(mockReviews);
  };
  reviewDiv.appendChild(reviewDeleteButton);
    

    return reviewDiv;
}
//handles the addition of a new review with the button post
const addButtonHandler= ()=>{
    const reviewText=document.getElementById('add-review');
    const newReviewText=reviewText.value;
    const reviewRating=document.getElementById('add-rating');
    const newReviewRating=reviewRating.value;
    if(!newReviewText || !newReviewRating)
        {
            return;
        }
    const newReview={
        
            text: newReviewText,
            rating: newReviewRating,
        
    
    };
    mockReviews.push(newReview);
    renderReviewsList(mockReviews);
    reviewText.value='';
    reviewRating.value='0';
    stars.forEach(s => s.classList.remove('active'));
    saveToLocalStorage(mockReviews);
   
};

// click event listener to all elements with the class star
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const ratingValue = this.getAttribute('data-value');

        
        document.getElementById('add-rating').value = ratingValue;
        
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= ratingValue) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

mockReviews=loadFromLocalStorage();
renderReviewsList(mockReviews);