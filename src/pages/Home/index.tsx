import FilterBar from '../../components/FilterBar';
import ProductCard from '../../components/ProductCard';

import './styles.scss';

const data = [
    {
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        price: 49.5,
        shipping: 'Eligible for Shipping To Mars or somewhere else',
        rating: 4.05,
    },
];

const Viewer = () => {
    return (
        <div className="list">
            
            {data.map((item) => (
                <ProductCard
                    title={item.title}
                    price={item.price}
                    shipping={item.shipping}
                    rating={item.rating}
                />
            ))}
        </div>
    );
};

const Home = () => {
    return (
        <div className="home_container">
            <FilterBar />
            <div className="results_container">
                <Viewer />
            </div>
        </div>
    );
};

export default Home;
