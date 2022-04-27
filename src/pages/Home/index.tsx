import FilterBar from '../../components/FilterBar';
import ProductCard from '../../components/ProductCard';
import SortBar from '../../components/SortBar';

import './styles.scss';

const data = [
    {
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        price: 49.5,
        shipping: 'Eligible for Shipping To Mars or somewhere else',
        rating: 4.05,
    },
    {
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        price: 125.5,
        shipping: 'Eligible for Shipping To Mars or somewhere else',
        rating: 5,
    },
    {
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        price: 10.52,
        shipping: 'Eligible for Shipping To Mars or somewhere else',
        rating: 1.65,
    },
    {
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        price: 50.5,
        shipping: 'Eligible for Shipping To Mars or somewhere else',
        rating: 2.75,
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
                <SortBar />
                <Viewer />
            </div>
        </div>
    );
};

export default Home;
