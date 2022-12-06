import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrNguoiDungReducer } from '../../../redux/reducers/arrNguoiDungReducer'

class TableNguoiDung extends Component {
  render() {
    let {arrNguoiDungReducer} =this.props
    return (
        <table className='table mt-2'>
            <thead className='bg-dark text-white'>
                <tr>
                   <th>Tài khoản</th>
                   <th>Mật khẩu</th> 
                </tr>
            </thead>
            <tbody>
              { arrNguoiDungReducer.map((nd,index)=>{
                return <tr key={index}>
                    <td>{nd.taiKhoan}</td>
                    <td>{nd.matKhau}</td>
                </tr>
              })

              }
            </tbody>
        </table>
    )
  }
}

const mapStateToProps = (state) => ({
    arrNguoiDungReducer: state.arrNguoiDungReducer
})



export default connect(mapStateToProps)(TableNguoiDung)