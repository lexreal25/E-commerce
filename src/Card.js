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
                        <div className="side-bar">  
                            <p>
                                <FaShoppingBag className="icon"/> <span>Hand Bags</span>
                            </p>
                            <p>
                                <FaWallet className="icon"/> <span>Class Wallet</span>
                            </p>
                            <p>
                                <FaWallet className="icon"/> <span>Shoulder Bag</span>
                            </p>
                            <p>
                                <MdWork className="icon"/> <span>Laptop Bags</span>
                            </p>
                        </div>
                </div>
                <div className="col-md-10 text-center card-section">
                        <div className="check">
                            {
                                data.map((item) => 
                                <div className="card">
                                <CardBody {...item}/>
                            </div>)}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Card;