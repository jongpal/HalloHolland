import './EventDetailPage.css';
import {useState} from 'react';
import React from 'react';
import tan from '../tan.jpg';
import Review from '../components/review';
import cm from '../child making jam.jpg';
import cm2 from '../child making jam2.jpg';
import tj from '../tj.jpg';

function EventDetailPage(){
    const [reviews, setReviews] = useState([
        {img:tj,rate:'Good!  ★★★★', author:'KIM',createdDate:'2021-04-03'},
        {img:cm2,rate:'Not bad!  ★★★', author:'Max',createdDate:'2021-04-01'},
        {img:cm,rate:'Great!  ★★★★★', author:'Lyle',createdDate:'2021-04-02'},

    ]);
    const applyAction = () => {
        window.confirm('Are you sure you want to apply for this event?');
    }
    let eventData = {title:'Making a tangerine jam', subtitle:'for every children',img:tan,  numberOfOpening:7, date:'2021-06-30', host:'Alice Graybeal',content:'Pariatur eu duis amet qui veniam ad et elit ea Lorem. Nostrud cillum pariatur dolor quis ut. Magna aute mollit aliquip nostrud aliqua cupidatat ullamco consequat do aliqua proident duis. Lorem minim consequat non in do ad aliquip. Nostrud mollit aliquip laboris sit consectetur enim proident. Incididunt eiusmod enim fugiat irure officia nostrud do id est sunt dolore. Adipisicing sunt irure anim dolore excepteur nisi anim exercitation aliqua ad.Eiusmod ipsum et est sit consectetur veniam aute eiusmod eiusmod fugiat. Laboris ex aute et voluptate amet nostrud excepteur. Dolor laboris nulla voluptate laborum eu non ipsum commodo sunt.Irure Lorem laborum nulla ullamco. Excepteur nostrud commodo esse esse laborum. Ut aute irure proident mollit sit reprehenderit elit nostrud esse Lorem nostrud ullamco eu cupidatat. Deserunt cillum veniam est pariatur. Ea laborum ut ipsum magna ut minim amet duis consectetur culpa laborum sint irure. Aute deserunt dolore ullamco elit deserunt veniam deserunt aliquip qui adipisicing deserunt sunt excepteur. Id esse anim occaecat eu veniam duis dolor excepteur esse velit.Officia et commodo nostrud eu minim culpa. Pariatur consequat velit incididunt ullamco. Laborum commodo ea aute Lorem veniam deserunt. Ullamco cillum ipsum reprehenderit pariatur reprehenderit eu quis mollit ex adipisicing duis ad proident occaecat.Officia sunt consequat eiusmod et officia ut consequat deserunt nostrud cillum ipsum enim. Ad qui sit qui sint laboris ullamco nostrud magna laborum voluptate ut occaecat exercitation. Veniam magna exercitation aliqua veniam. Non ipsum commodo est incididunt exercitation anim veniam cillum.' };
    const renderReview = reviews.map(reviewData => {
        return(
            <Review reviewData={reviewData}/>
        );
        
    });

    return(
        <div className="event">
            <div className="abstract">
                <div className="image"><img src={eventData.img}></img></div>
                <div className="info">
                    <div className="title">{eventData.title}</div>
                    <div className="subtitle"><span className="bold">{eventData.subtitle}</span></div>
                    <div className="date"><span className="bold">Date:</span> {eventData.date}</div>
                    <div className="numberOfOpening"><span className="bold">Number of Opening:</span> {eventData.numberOfOpening}</div>
                    <div className="host"><span className="bold">Host:</span> {eventData.host}</div>
                    <div className="apply"><button className="btn btn-primary" onClick={applyAction}>Apply</button></div>
                </div>
            </div>
            <hr></hr>
            <div className="content">
                {eventData.content}
            </div>
            <div className="reviewSection">
                <div className="heading">
                    Reviews<button class="btn btn-primary">WRITE</button>
                </div>
                <div className="reviews">
                    {renderReview}
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;