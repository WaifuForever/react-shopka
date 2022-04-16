import './styles.scss';

const NavBar = () => {
    return (
        <div className="navbar_container pd-inline-3 mg-block-start-4">
            <div className="logo">
                <div className="icon">
                    <span className="font-bold-8">S</span>
                </div>
                <div className="shopka">
                    <span className="font-500-6 pd-inline-3">Shopka</span>
                </div>
            </div>
            <div className="block_1">
                <span className="pd-inline-3 font-500-4">
                    Sell on Shopka
                </span>
                <span className="pd-inline-3 font-500-4">Support</span>
            </div>

            <div className="searchButton mg-inline-5">
                
                    <div className="mg-inline-4">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
                                fill="#787885"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="font-400-5"
                        placeholder="product"
                    />
                

                <div className="mg-inline-4">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                            fill="#2979FF"
                        />
                    </svg>
                </div>
            </div>
            <div className="block_1">
                <span className="pd-inline-3 font-500-4">Need Help?</span>
                <span className="pd-inline-3 font-500-4">Sign In</span>
                <span className="pd-inline-3 font-500-4">Cart</span>
            </div>
        </div>
    );
};

export default NavBar;
