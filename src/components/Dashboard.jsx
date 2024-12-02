import React from "react";


function Dashboard() {
    const userListings = [
        { id: 1, location: "New Jersey", size: "5000 sqft", price: "$2040" },
    ];

    const transactions = [
        { id: 1, action: "Bought", location: "Queens", price: "$2100" },
    ];

    return (
        <div>

            <h2>My Dashboard</h2>
            <h3>My Listings</h3>
            <ul>
                {userListings.map((listing) => (
                    <li key={listing.id}>
                        {listing.location}: {listing.size} - {listing.price}
                    </li>
                ))}
            </ul>
            <h3>Transaction History</h3>
            <ul>
                {transactions.map((txn) => (
                    <li key={txn.id}>
                        {txn.action} - {txn.location}: {txn.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
