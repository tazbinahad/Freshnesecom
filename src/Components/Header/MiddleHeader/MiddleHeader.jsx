import React from 'react';
import Logo from '../../../images/Freshnesecom.png';
import cssClass from './MIddleHeader.module.scss';

const MiddleHeader = () => (
    <div className={cssClass.middleHeader}>
        <div className={['container', cssClass.wrapper].join(' ')}>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            {/* Catagori Search Bar  */}
            <div className={cssClass.productCatagoriSearch}>
                <select className={(cssClass.formSelect, cssClass.select)}>
                    <option value="default">All categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <div className={cssClass.searchInput}>
                    <input type="text" placeholder="Search Products, categories ..." />
                    <span>
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.9833 28.5833C29.4266 28.5833 34.65 23.36 34.65 16.9167C34.65 10.4733 29.4266 5.25 22.9833 5.25C16.54 5.25 11.3167 10.4733 11.3167 16.9167C11.3167 23.36 16.54 28.5833 22.9833 28.5833Z"
                                stroke="#151515"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                            />
                            <path
                                d="M14.5335 25.5999L6.7168 33.4165"
                                stroke="#151515"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <div className={cssClass.userCart}>
                <span className={cssClass.user}>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 36.6667L6.31667 31.8667C10.6667 16.0334 29.3333 16.0334 33.6833 31.8667L35 36.6667"
                            stroke="#151515"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M20.0001 19.9667C24.6025 19.9667 28.3334 16.2358 28.3334 11.6334C28.3334 7.03101 24.6025 3.30005 20.0001 3.30005C15.3977 3.30005 11.6667 7.03101 11.6667 11.6334C11.6667 16.2358 15.3977 19.9667 20.0001 19.9667Z"
                            stroke="#151515"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="bevel"
                        />
                    </svg>
                </span>
                <span className={cssClass.cart}>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M29.8163 34.75H10.183C9.65352 34.7505 9.13918 34.5734 8.72222 34.2471C8.30526 33.9208 8.00977 33.4641 7.88299 32.95L3.46632 15.2667C3.42323 15.0945 3.41997 14.9148 3.4568 14.7412C3.49363 14.5676 3.56958 14.4047 3.67886 14.2649C3.78815 14.125 3.92789 14.012 4.08745 13.9343C4.24702 13.8567 4.4222 13.8164 4.59966 13.8167H35.3997C35.5771 13.8164 35.7523 13.8567 35.9119 13.9343C36.0714 14.012 36.2112 14.125 36.3205 14.2649C36.4297 14.4047 36.5057 14.5676 36.5425 14.7412C36.5793 14.9148 36.5761 15.0945 36.533 15.2667L32.1163 32.95C31.9896 33.4641 31.6941 33.9208 31.2771 34.2471C30.8601 34.5734 30.3458 34.7505 29.8163 34.75V34.75Z"
                            stroke="#151515"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.3328 5.25L11.4995 13.8167"
                            stroke="#151515"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M23.1333 5.25L27.9833 13.8167"
                            stroke="#151515"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>4</span>
                </span>
            </div>
        </div>
    </div>
);

export default MiddleHeader;
