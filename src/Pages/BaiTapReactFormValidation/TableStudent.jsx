import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class TableStudent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor child');
        this.state = {
    
        }
    
      }

    
    
      static getDerivedStateFromProps(newProps, currentState) {
        //Hàm này dùng để xử lý state trước khi render ra giao diện
        console.log('getDerivedStateFromProps child')
        return null;
      }


      shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        return true;
    }






  render() {
  
    const {arrSinhVien,handleDelSinhVien,handleEditSV} =this.props;
    console.log(arrSinhVien);
    return (
        <table className='table'>
            <thead className='bg-dark text-white  '>
                <tr >
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>

                </tr>
            </thead>
            <tbody>
                {arrSinhVien.map(({id,name,phone,email},index)=>{
                    return <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>
                        <button onClick={()=>{
                           handleDelSinhVien(id);
                        }} className='btn btn-danger'>
                            <i className='fa fa-trash'></i>
                        </button>
                        <button onClick={()=>{
                            let svEdit = {id,name,phone,email}
                            handleEditSV(svEdit)
                        }} className='btn btn-primary mx-2'>
                            <i className='fa fa-edit'></i>
                        </button>
                    </td>
                </tr>
                })}
            </tbody>
        </table>
    )
  }

 
}
