import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const Newsapp = () => {
  const [search, setSearch] = useState('');
  const [newsData, setNewsData] = useState([]); 
  const [filteredNews, setFilteredNews] = useState([]); 
  const [error, setError] = useState(''); 
  // const API_KEY = import.meta.env.VITE_API_KEY;



  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/news?query=${search || 'Tesla'}`);


      
      
      if (!response.ok) {
        throw new Error('Failed to fetch news articles. Please try again later.');
      }

      const jsonData = await response.json();
      setNewsData(jsonData.articles.slice(0, 10)); 
      setError(''); 
    } catch (err) {
      setError(err.message); 
      setNewsData([]);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  useEffect(() => {
    setFilteredNews(newsData); 
  }, [newsData]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value); 
  };

  const filterArticles = () => {
    const filtered = newsData.filter(article =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNews(filtered); 
  };

  const handleSearchButtonClick = () => {
    filterArticles();
  };

  const renderArticles = () => {
    return filteredNews.map((article, index) => (
      <Card key={index} article={article} /> 
    ));
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <nav className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Trendy News</h1>
        <div className="flex items-center space-x-2">
          <input
            type='text'
            placeholder='Search News'
            value={search}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md p-2"
          />
          <button 
            onClick={handleSearchButtonClick}
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </nav>
      <div className="flex space-x-2 mb-4">
        <button className="bg-gray-200 rounded-md px-3 py-1 hover:bg-gray-300" onClick={() => setSearch('sports')}>Sports</button>
        <button className="bg-gray-200 rounded-md px-3 py-1 hover:bg-gray-300" onClick={() => setSearch('politics')}>Politics</button>
        <button className="bg-gray-200 rounded-md px-3 py-1 hover:bg-gray-300" onClick={() => setSearch('entertainment')}>Entertainment</button>
        <button className="bg-gray-200 rounded-md px-3 py-1 hover:bg-gray-300" onClick={() => setSearch('health')}>Health</button>
        <button className="bg-gray-200 rounded-md px-3 py-1 hover:bg-gray-300" onClick={() => setSearch('fitness')}>Fitness</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {error ? (
          <p className="text-red-500">{error}</p> // Display error message if there's an issue
        ) : (
          filteredNews.length > 0 ? renderArticles() : <p>No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default Newsapp;
