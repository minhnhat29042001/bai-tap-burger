import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className='text-center pt-5'>
        <div>
            Bạn cược <span className='display-4 text-success'>Tài</span>
        </div>
        <div>
            Số bàn thắng <span className='display-4 text-success'>0</span>
        </div>
        <div>
            Tổng số bàn chơi <span className='display-4 text-success'>0</span>
        </div>
        <div>
            Tổng số bàn chơi <span className='display-4 text-success'>Play game</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(KetQuaTroChoi)