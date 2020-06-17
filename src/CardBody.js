import React from 'react'
import {FaCartPlus} from 'react-icons/fa'

export default class CardBody extends React.Component{
    render(){

        return(
            <div className="item">
                <div className="card-img-banner">
                    <p className="banner">{this.props.banner}</p>
                    <img className="img-responsive" src={this.props.imageUrl} alt={this.props.title + 'item'} />
                </div>

                <div className="card-content">
                    <h2 className="title">{this.props.title}</h2>
                    <p className="text">{this.props.text}</p>
                    <span className="oldprice" style={{color:'red',textDecorationLine:'line-through'}}>
                        {this.props.oldprice}
                    </span>
                </div>

                <div className="card-base">
                    <span className="price">
                            {this.props.price}
                    </span>
                    <span className="cart">
                        <FaCartPlus />
                        <span style={{marginLeft:'2px'}}> 
                            {this.props.cart}
                        </span>
                    </span>
                </div>
            </div>
        )
    }
}
