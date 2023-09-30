import { useState } from "react";
import PropTypes from 'prop-types';

export default function EnterUrl({ setrtspURL }) {
  const [url, setUrl] = useState("");

  const handleUrlChange = (event) => {
    const newValue = event.target.value;
    setUrl(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setrtspURL(url);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Enter URL</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="urlInput"
            className="block text-sm font-medium text-gray-700"
          >
            Enter URL
          </label>
          <input
            type="text"
            id="urlInput"
            name="urlInput"
            placeholder="Enter URL"
            value={url}
            onChange={handleUrlChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

EnterUrl.propTypes = {
  setrtspURL: PropTypes.func.isRequired,
};