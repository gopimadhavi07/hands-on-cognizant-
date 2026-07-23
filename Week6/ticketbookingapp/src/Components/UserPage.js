import React from 'react';

function UserPage() {

    const bookTicket = () => {
        alert("Ticket booked successfully!");
    };

    return (
        <div>
            <h1>Welcome back</h1>

            <h2>Flight Details</h2>

            <p>Flight: Air India</p>
            <p>From: Hyderabad</p>
            <p>To: Delhi</p>
            <p>Price: Rs. 5000</p>

            <button onClick={bookTicket}>
                Book Ticket
            </button>
        </div>
    );
}

export default UserPage;