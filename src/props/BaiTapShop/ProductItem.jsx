import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        //bs5-card -> html to jsx
        const {prod} = this.props;
        return (
            <div className="card text-start">
                <img className="card-img-top" src={prod.image} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{prod.name}</h4>
                    <p className="card-text">{prod.price}$</p>
                    <button className='btn btn-dark'>Add to cart</button>
                </div>
            </div>

        )
    }
}
