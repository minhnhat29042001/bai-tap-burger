import React, { Component } from 'react'

export default class PhoneCard extends Component {
   

    render() {
        const {sp,xemCT} = this.props;
        return (
            <div className='card'>
                <img src={sp.hinhAnh} alt='...' className='w-100' height={450} style={{ objectFit: 'cover' }} />
                <div className='card-body'>
                    <h3>{sp.tenSP}</h3>
                    <p>{sp.giaBan}</p>
                    <button className='btn btn-dark' onClick={() => {
                        xemCT(sp);
                    }}>View detail</button>
                </div>
            </div>
        )
    }
}
