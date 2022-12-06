import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {

    state = {
        fSize: 30, //Xác định state là number => gán giá trị mặc định
        classMode: 'dark',
        imgSrc: 'https://i.pravatar.cc?u=2'
    }

  render() {
    return (
      <div className='container'>
        <h3>Bài tập tăng giảm fontsize</h3>
        <p style={{fontSize: this.state.fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel quod nulla culpa nesciunt, blanditiis suscipit aliquid reiciendis id molestiae?</p>
        <button className='btn btn-success mx-2' onClick={()=>{
            this.setState({
                fSize: this.state.fSize + 5
            })
        }}>+</button>
        <button className='btn btn-success mx-2' onClick={()=>{
              this.setState({
                fSize: this.state.fSize - 5
            })
        }}>-</button>
        <hr />
        <h3>Bài tập change theme</h3>
        <select className='w-25 form-control' onChange={(e)=>{
            const tagSelect = e.target;
            this.setState({
                classMode: tagSelect.value
            })

        }} >
            <option value={'dark'}>Dark mode</option>
            <option value={'light'}>Light mode</option>
        </select>

        <div className={`border border-success p-5 mt-2 ${this.state.classMode}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi nihil impedit voluptas? Hic fugit similique nemo obcaecati perspiciatis, esse qui vel accusamus dignissimos! Omnis culpa accusantium praesentium velit unde.</p>
        </div>
        <hr />

        <div className='w-25 card'>
            <img src={this.state.imgSrc} alt='...' />
            <div className='card-body'>
                <button className='btn btn-danger' onClick={()=>{
                    //output: tạo ra link hình mới
                    const randomNumber = Math.floor(Math.random() * 100);
                    let newImgSrc = 'https://i.pravatar.cc?u=' + randomNumber;
                    this.setState({
                        imgSrc:newImgSrc
                    })


                }}>Random</button>
            </div>
        </div>


      </div>
    )
  }
}
