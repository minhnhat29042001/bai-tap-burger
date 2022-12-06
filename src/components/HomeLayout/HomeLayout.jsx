//rcc
import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='d-flex'>
            <div className='w-25'>
                <Navigation />
            </div>
            <div className='w-75'>
                <Content />
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}
