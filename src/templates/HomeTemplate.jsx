import React, { Component } from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <header className='bg-dark text-white p-2 nav'>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/home'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/register'>Register</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/login'>Login</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/btgiohang'>
                        <i className='fa fa-cart-plus'></i> BT giỏ hàng

                    </NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/form'>Form</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/reactlifecycle'>React lifecycle</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/redux'>Redux</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/demogame'>BaiTapGame</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/reactformvalidation'>BaiTapReactFormValidation</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to='/baitapburger'>BaiTapBurger</NavLink>
                </header>
                <div className='content' style={{minHeight:'75vh'}}>
                    <Outlet />
                </div>
                
            </div>
        )
    }
}

// function main ({id,isActive}) {
//     let {id,isActive} = props
// }