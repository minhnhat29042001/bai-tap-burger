import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableNguoiDung from './TableNguoiDung'

class BaiTapQLND extends Component {
  handleSubmit = (e)=>{
    e.preventDefault();
    let taiKhoan =document.getElementById('taiKhoan').value;
    let matkhau =document.getElementById('matKhau').value;
    let nguoiDung ={taiKhoan,matkhau};
    // tạo ta action đưa dữ liệu lên reducer
    const action={
      type:'THEM_NGUOI_DUNG',
      payload:nguoiDung
    }
    this.props.dispatch(action);
  }
  render() {
    return (
      <div style={{marginBottom:'300px'}}>
        <hr />
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='card'>
              <div className='card-header bg-dark text-white'>
                  Thông tin người dùng
              </div>
              <div className='card-body'>
                  <div className='form-group'>
                      <p>Tài khoản</p>
                      <input className='form-control' id='taiKhoan' name='taiKhoan' />
                  </div>
                  <div className='form-group'>
                      <p>Mật khẩu</p>
                      <input className='form-control' id='matKhau' name='matKhau' />
                  </div>
                  
              </div>
              <div className='card-footer'>
                  <button className='btn btn-success' type='submit'>
                    Thêm người dùng
                  </button>
              </div>
          </div>
        </form>
        <TableNguoiDung/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(BaiTapQLND)
