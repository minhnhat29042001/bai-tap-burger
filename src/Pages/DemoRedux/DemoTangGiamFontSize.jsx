import React, { Component } from 'react'
import {connect} from 'react-redux';

class DemoTangGiamFontSize extends Component {
  render() {
    return (
      <div>
        <h3>Ví dụ !! Tăng giảm font size</h3>
        <p style={{fontSize:this.props.fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam eos quis, nulla voluptates consectetur nobis aliquam voluptate esse dolorum, laudantium qui enim incidunt adipisci excepturi harum hic debitis doloribus!</p>
        <button className='btn btn-success mx-2' onClick={()=>{
            const action ={
                type:'TANG_GIAM_FONT_SIZE',
                payload: 1
            }
            // Gửi dữ liệu lên redux = this.props.dispatch
            this.props.dispatch(action);
        }}>+</button>
        <button className='btn btn-success' onClick={()=>{
            const action ={
                type:'TANG_GIAM_FONT_SIZE',
                payload: -1
            }
            // Gửi dữ liệu lên redux = this.props.dispatch
            this.props.dispatch(action);
        }}>-</button>
      </div>
    )
  }
}

// Định nghĩa 1 hàm lấy dư liệu redux về
const mapStateToProps =(state)=>({
    // lấy dữ liệu của redux để biến thành props của component
    
        fSize: state.fontSizeState, //this.props
        imgSrc:state.imgState
    
})


// kết nối react với reduct => tạo ra componenent mới có chưa dữ liệu của redux và giao diện của component đó
 const DemoFontSizeRedux =connect(mapStateToProps)(DemoTangGiamFontSize);

 export default DemoFontSizeRedux;