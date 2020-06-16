import React from 'react'
import data from './CardData'
import CardBody from './CardBody'
import {FaShoppingBag} from 'react-icons/fa'
import {FaWallet} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'



const Card = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <aside className="side-bar">
                        <div>  
                            <p>
                                <FaShoppingBag /> <span>Hand Bags</span>
                            </p>
                            <p>
                                <FaWallet/> <span>Wallet</span>
                            </p>
                            <p>
                                <FaWallet/> <span>Shoulder Bag</span>
                            </p>
                            <p>
                                <MdWork/> <span>Laptop Bags</span>
                            </p>
                        </div>
                    </aside>
                </div>

                <div className="card-section">
                    <div className="card-section">
                        <div className="col-md-3">
                            {
                                data.map((item) => 
                                <div className="card">
                                <CardBody {...item}/>
                            </div>)}
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card;