import React, { Component } from 'react'

export default class HandleEvent extends Component {


    handleClickMe = (name,event) => {
        //Lấy ra thẻ từ biến Event: event.target sẽ là thẻ xảy ra sự kiện
        console.log(event.target);
        let tag = event.target;
        tag.innerHTML = 'Clicked';
        tag.style.color = 'red';
        // alert('Hello cybersoft!!!!');
        alert('hello ' + name);

    }
    sayHello = (name) => {
        alert('hello ' + name);
    }

    render() {
        return (
            <div className='container'>

                <button className='btn btn-success' onClick={(event) => {
                    //Lấy ra thẻ từ biến Event: event.target sẽ là thẻ xảy ra sự kiện
                    console.log(event.target);
                    let tag = event.target;
                    tag.innerHTML = 'Clicked';
                    tag.style.color = 'red';
                    // alert('Hello cybersoft!!!!');
                    this.sayHello('Quách Sang !!');
                }}>Click me!!!</button>
                <br />
                {/* <button className='btn btn-success' onClick={this.handleClickMe.bind(this,'Sang')}>Click me!!!</button> */}
            </div>
        )
    }
}


// function main (callback) {
//     callback('abc');
// }


// main((title)=>{
//     console.log(title)
// })