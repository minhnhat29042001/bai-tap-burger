import React, { Component } from 'react'
import { connect } from 'react-redux'

 class XucXac extends Component {
  render() {
    return (
      <div className='container-fluid' >
        <div className='row text-center'>
            <div className='col-4'>
                <button className='btn btn-danger mx-5'>
                    <div className='bg-danger display-4 p-5 '>
                        Tài
                    </div>
                </button>
            </div>
            <div className='col-4'>
                    <img src="./img/1.png" alt="..." width={50} height={50} />
                    <img src="./img/1.png" alt="..." width={50} height={50} />
                    <img src="./img/1.png" alt="..." width={50} height={50} />
            </div>
            <div className='col-4'>
            <button className='btn btn-danger mx-5'>
                    <div className='bg-danger display-4 p-5 '>
                        Xỉu
                    </div>
                </button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(XucXac)