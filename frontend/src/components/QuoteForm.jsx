import React from "react";

const QuoteForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Get a Free Quote</h2>
        <form>
          <label className="block mb-2">
            Name:
            <input type="text" className="w-full border p-2 rounded mt-1" required />
          </label>

          <label className="block mb-2">
            Email:
            <input type="email" className="w-full border p-2 rounded mt-1" required />
          </label>

          <label className="block mb-2">
            Phone:
            <input type="tel" className="w-full border p-2 rounded mt-1" required />
          </label>

          <label className="block mb-4">
            Message:
            <textarea className="w-full border p-2 rounded mt-1" rows="3" required></textarea>
          </label>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Submit
          </button>
        </form>
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
          ✖
        </button>
      </div>
    </div>
  );
};

export default QuoteForm;
