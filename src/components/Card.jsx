import PropTypes from 'prop-types'; 

const Card = ({ article }) => {

  const fallbackImage = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'; 

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
      <img 
        src={article.urlToImage || fallbackImage} 
        alt={article.urlToImage ? article.title : "No image available"} 
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{article.description}</p>
      <a href={article.url || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold mt-2 inline-block">
        Read More
      </a>
      <p className="text-xs text-gray-500 mt-1">By {article.author || "Unknown"}</p>
      <p className="text-xs text-gray-500">Published at: {article.publishedAt ? new Date(article.publishedAt).toLocaleString() : "Unknown date"}</p> 
    </div>
  );
};

Card.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string,
    publishedAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
