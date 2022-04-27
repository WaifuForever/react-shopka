import product from '../../assets/mock/product.svg';
import heart from '../../assets/productCard/heart.svg';

import './styles.scss';

const Star: React.FC<{ fill: number }> = ({ fill }) => {
    return (
        <div className="star">
            <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter
                        id={`fillpartial${fill}`}
                        primitiveUnits="objectBoundingBox"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                    >
                        <feFlood
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            flood-color="white"
                        />
                        <feOffset dx={fill}></feOffset>
                        <feComposite operator="in" in2="SourceGraphic" />
                        <feComposite operator="over" in2="SourceGraphic" />
                    </filter>
                </defs>
                <path
                    filter={`url(#fillpartial${fill})`}
                    d="M6.00004 8.31063L9.41996 10.3359L8.51241 6.51884L11.5339 3.95059L7.55505 3.61395L6.00004 0.0195007L4.44503 3.61395L0.466187 3.95059L3.48214 6.51884L2.58012 10.3359L6.00004 8.31063Z"
                    fill="#FB8200"
                />
                <path
                    stroke="#FB8200"
                    strokeWidth={0.5}
                    d="M6.00004 8.31063L9.41996 10.3359L8.51241 6.51884L11.5339 3.95059L7.55505 3.61395L6.00004 0.0195007L4.44503 3.61395L0.466187 3.95059L3.48214 6.51884L2.58012 10.3359L6.00004 8.31063Z"
                    fill="#transparent"
                />
            </svg>
        </div>
    );
};

interface Props {
    title: string;
    price: number;
    shipping: string;
    rating: number;
}
const ProductCard: React.FC<Props> = ({ title, price, shipping, rating }) => {
    const starLevel = (limit: number) => {
        return rating - 1 >= limit
            ? 1
            : rating - limit >= 0
            ? rating - limit
            : 0;
    };
    return (
        <div className="product_container">
            <img src={product} />
            <div className="info pd-inline-4">
                <span className="title font-400-4 pd-block-1">{title}</span>
                <span className="price font-700-7 pd-block-1">
                    ${price.toFixed(2)}
                </span>
                <span className="shipping font-400-3 pd-block-1">
                    {shipping}
                </span>
            </div>
            <div className="footer">
                <div className="rating">
                    <Star fill={starLevel(0)} />
                    <Star fill={starLevel(1)} />
                    <Star fill={starLevel(2)} />
                    <Star fill={starLevel(3)} />
                    <Star fill={starLevel(4)} />

                    <span className="font-500-3 mg-inline-start-2">
                        {' '}
                        {rating}
                    </span>
                </div>
                <div className="watch pd-inline-3 pd-block-1 font-500-3">
                    <img className="mg-inline-end-2" src={heart} alt="" />
                    <span>Watch</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
