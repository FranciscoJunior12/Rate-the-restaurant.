import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Card = ({ restaurant, showLink = true }) => {
    return (
        <div className="movie-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>
                <FaStar /> {restaurant.rating}
            </p>

            {showLink && <Link to={`/restaurant/details/${restaurant.id}`}>Detalhes</Link>}
        </div>
    )
}

export default Card