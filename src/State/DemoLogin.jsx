import React, { Component } from 'react'
import style from './DemoLogin.module.css';
export default class DemoLogin extends Component {

    state = { //this.state là thuộc tính có sẵn của react class component, chứa các giá trị thay đổi trên giao diện
        login: false //false chưa đăng nhập
    }
    username = 'QuangKhai';

    renderLogin = () => {
        if (this.state.login) {
            return <>
                <span className='nav-link text-white'>Hello ! {this.username}</span>
                <a className="nav-link active text-white" href="#" aria-current="page" onClick={() => {
                    this.handleLogout();
                }}>Đăng xuất</a>
            </>
        }

        return <>
            <a className="nav-link active text-white" href="#" aria-current="page" onClick={() => {
                //Gọi hàm 
                this.handleLogin();
            }}>Đăng nhập</a>

        </>
    }

    handleLogout = () => {
        this.setState({
            login: false
        })
    }
    handleLogin = async () => {
        console.log('handle login');
        // this.state.login = true;
        //this.setState là phương thức có sẵn của react class component. 
        /*
            + Thay đổi giá trị this.state
            + Xử lý render lại giao diện với giá trị state mới
            + Hàm this.setState là 1 hàm bất đồng bộ
        */
        // await this.setState({ 
        //     login : true 
        // });

        this.setState({
            login: true
        }, () => {
            //Tham số callback function của hàm setState sẽ tự động kích hoạt sau khi state thay đổi và giao diện render lại
            console.log(this.state)

        })

    }


    render() {
        //bs5-nav-a
        return (
            <>
                <nav className="nav justify-content-end text-white bg-dark ">
                    {this.renderLogin()}
                    {/* {this.login ?  <span className='nav-link'>Hello ! {this.username}</span>  : <a className="nav-link active" href="#" aria-current="page">Đăng nhập</a>}
                 */}

                </nav>


                <p className={`${style['bg-orange']} p-5 text-dark mt-2`}> hello abc</p>

                 <span style={{
                    marginTop:'15px',
                    backgroundColor:'black',
                    fontSize:15,
                    color:'white',
                    padding:15
                 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, impedit!</span>
            </>
        )
    }
}
