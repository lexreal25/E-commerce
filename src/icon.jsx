import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import {FaWallet} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'

const Icon = () => {
    return (
        <div className="side-bar">  
            <p>
                <FaShoppingBag className="icon"/> <span>Hand Bags</span>
            </p>
            <p>
                <FaWallet className="icon"/> <span>Classic Wallet</span>
            </p>
            <p>
                <FaWallet className="icon"/> <span>Shoulder Bag</span>
            </p>
            <p>
                <MdWork className="icon"/> <span>Laptop Bags</span>
            </p>
            <p>
                <MdWork className="icon"/> <span>Backpack Bags</span>
            </p>
            <p>
                <MdWork className="icon"/> <span>Classic Extra</span>
            </p>
        </div>
    )
}
export default Icon