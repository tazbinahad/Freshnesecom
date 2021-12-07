import React from 'react';
import cssClass from './TopHeader.module.scss';

const TopHeader = () => {
    const props = 'Demo';
    console.log(props);
    return (
        <div className={cssClass.topHeader}>
            <div className={[cssClass.wrapper, 'container'].join(' ')}>
                <div className={cssClass.topLeftMenu}>
                    <ul className="navbar nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#chatwithus">
                                Chat with us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#chatwithus">
                                +420 336 775 664
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#chatwithus">
                                info@freshnesecom.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cssClass.topRightMenu}>
                    <ul className="navbar nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#chatwithus">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#chatwithus">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#chatwithus">
                                Careers
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
