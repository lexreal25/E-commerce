import React from 'react'
import data from './CardData'
import CardBody from './CardBody'
import Icon from './icon'



const Card = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Icon />
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