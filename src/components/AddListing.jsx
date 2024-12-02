import React, { useState } from "react";

function AddListing() {
    const [details, setDetails] = useState({
        Location: "",
        size: "",
        price: ""
    });


    function handleChange(e) {
        const { name, value } = e.target
        setDetails((prevValue) => {
            return {
                prevValue,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Listing added successfully!");
        // Reset form fields
        setDetails({
            Location: "",
            size: "",
            price: ""
        })
    };

    return (
        <div>
            <h2>Add a New Listing</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Location:
                    <input
                        type="text"
                        value={details.Location}
                        onChange={handleChange}
                        name="Location"
                    />
                </label>
                <br />
                <label>
                    Size (sqft):
                    <input
                        type="number"
                        value={details.size}
                        onChange={handleChange}
                        name="size"
                    />
                </label>
                <br />
                <label>
                    Price (USDT $):
                    <input
                        type="number"
                        value={details.price}
                        onChange={handleChange}
                        name="price"
                    />
                </label>
                <br />
                <button type="submit">Add Listing</button>
            </form>
        </div>
    );
}

export default AddListing;
