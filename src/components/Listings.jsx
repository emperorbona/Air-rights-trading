import React, { useState, useEffect } from "react";

function Listings() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Mock API call
        const mockListings = [
            { id: 1, location: "New Jersey", size: "5000 sqft", price: "$2040" },
            { id: 2, location: "Queens", size: "3000 sqft", price: "$2100" },
        ];
        setListings(mockListings);
    }, []);

    return (
        <div>
            <h2>Available Listings</h2>
            <ul>
                {listings.map((listing) => (
                    <li key={listing.id}>
                        <strong>{listing.location}</strong>: {listing.size} - {listing.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Listings;
