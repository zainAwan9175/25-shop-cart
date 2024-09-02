import React, { useState } from 'react';

function CustomerReview() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to handle form submission
    console.log({ name, email, rating, review });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setRating(0);
    setReview('');
  };

  return (
    <div className="max-w-md  bg-white p-8 rounded-lg shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Write a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating:</label>
          <input
            type="number"
            id="rating"
            min="0"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="mt-1 p-3 w-20 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">Your Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="mt-1 p-3 w-full h-32 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 w-full">Submit Review</button>
      </form>
    </div>
  );
}

export default CustomerReview;
