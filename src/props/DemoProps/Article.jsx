import React, { Component } from 'react'

export default class Article extends Component {

    render() {
        /*
            khác biệt giữa state và props
            + giống nhau: đều là thuộc tính có sẵn của react class component dùng để binding dữ liệu lên giao diện
            + khác nhau: state sẽ quản lý giá trị thay đổi trên component và có thể set lại giá trị mới được thông qua phương thức setState.
            props thì dùng để nhận dữ liệu từ component cha truyền vào và không thể gán lại giá trị mới được.
        
        */
        const {title,content} = this.props.data;
        const {button} = this.props;
        return (
            <div className='card'>
                <h3 className='card-header'>{title}</h3>
                <div className='card-body'>
                    <p>{content}</p>
                    {button}
                </div>


            </div>
        )
    }
}
