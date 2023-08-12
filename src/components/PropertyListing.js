import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Login from './Login';

const PropertyList = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dummyProperties = [
      {
        "title": "Luxury Villa with Ocean View",
        "description": "Spacious villa with panoramic ocean view.",
        "image": "https://unsplash.com/photos/y8k6Xxr32sQ"
      },
      {
        "title": "Modern Loft in the City",
        "description": "Sleek and modern loft with rooftop terrace.",
        "image": "https://unsplash.com/photos/yt-3eY5iLso"
      },
      {
        "title": "Countryside Estate",
        "description": "Gorgeous estate with rolling hills and forests.",
        "image": "https://unsplash.com/photos/a8v8577r7f4"
      },
      {
        "title": "French Chateau",
        "description": "Majestic chateau with moat and gardens.",
        "image": "https://unsplash.com/photos/Qe2n1e69i2A"
      },
      {
        "title": "Contemporary Villa in Bali",
        "description": "Luxurious villa with private pool and stunning views.",
        "image": "https://unsplash.com/photos/18jX703y9t0"
      },
      {
        "title": "Tiny House on Wheels",
        "description": "Compact and cozy tiny house perfect for minimalists.",
        "image": "https://unsplash.com/photos/65m9mD6_tH0"
      },
      {
        "title": "Airstream Trailer",
        "description": "Retro-cool airstream trailer perfect for road trips.",
        "image": "https://unsplash.com/photos/1e9q04t6n1Q"
      },
      {
        "title": "Cabin in the Woods",
        "description": "Peaceful cabin in the woods perfect for nature lovers.",
        "image": "https://unsplash.com/photos/9Y5872e0k8g"
      },
      {
        "title": "Reclaimed Shipping Container Home",
        "description": "Sustainable and stylish home made from recycled shipping containers.",
        "image": "https://unsplash.com/photos/3Y77d0p6f9I"
      }
    ];
      
if(!isLoggedIn){
    return <Login onLogin={setIsLoggedIn} />
}
  return (
    <div className="container mt-5">
      <h2>Real Estate Properties</h2>
      <div className="row">
        {dummyProperties.map((property, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;