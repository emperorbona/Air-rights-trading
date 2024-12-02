import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Welcome to the Air Rights Marketplace</h2>
            <div className="links">
                <Link to="/listings">View Listings</Link> |{" "}
                <Link to="/add-listing">Add a Listing</Link> |{" "}
                <Link to="/dashboard">My Dashboard</Link>
            </div>
        </div>
    );
}

export default Home;
