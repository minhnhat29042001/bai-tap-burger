import React, { Component } from 'react'
import { PureComponent } from 'react';

/*
  PureComponent: là 1 class giống hệt component tuy nhiên không lifecycle shouldComponentUpdate vì PureComponent đã tự xử lý so sánh props có thay đổi hay không giúp mình rồi (nếu thay đổi thì render không thay đổi thì không render). Tuy nhiên sự so sánh này chỉ xảy ra đối với props là primitive value (number,string,boolean,null,undefined) shadow compare. Đối với props là reference value (object, array,...) thì cần phải xử lý clone ra trước khi thay đổi state.
*/
export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    console.log('constructor child');
    this.state = {

    }

  }

//   shouldComponentUpdate(newProps,newState)  {
//     //this.props là props trước khi thay đổi
//     //newProps là sau khi thay đổi
//     // console.log('this.props',this.props);
//     // console.log('newProps',newProps);
//     if(this.props.like === newProps.like) {
//       return false;
//     }
//     console.log('shouldComponentUpdate child');
//     return true;
// }


  static getDerivedStateFromProps(newProps, currentState) {
    //Hàm này dùng để xử lý state trước khi render ra giao diện
    console.log('getDerivedStateFromProps child')
    return null;
  }
  render() {
    const {obLike} = this.props;
    console.log('render child')
    return (
      <div className='container'>
        <div className='bg-dark text-white p-5'>
          <p>like: {obLike.like}</p>
        </div>
      </div>
    )
  }

  componentDidMount(){
    console.log('componentDidMount child')
  }


  componentDidUpdate(){
    //Tương tự didmount (chạy sau render tuy nhiên sẽ chạy mỗi khi bất kì state nào trên component này thay đổi). Lưu ý: khi setState trong component thì phải có if(bắt buộc)

    // this.setState({

    // })
  }



}
