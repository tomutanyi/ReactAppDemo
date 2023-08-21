// import React from 'react';

function Form() {
    return (
        <div className="container">
            <h1>Expense Details</h1>
            <form id="expense-form">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required /><br />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" required /><br />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" required /><br />

                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" step="0.01" required /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
