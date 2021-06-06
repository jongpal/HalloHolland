import React,{useState} from 'react';
import './review.css';

function Review({reviewData}){
    return(
        <div className="review">
            <img src={reviewData.img}></img>
            <div className="rate">{reviewData.rate}</div>
            <div className="author">{reviewData.author}</div>
            <div className="createdDate">{reviewData.createdDate}</div>
        </div>
    )
}

export default Review;