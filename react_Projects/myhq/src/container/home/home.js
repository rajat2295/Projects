import React from 'react'
import Header from '../../components/header/header'
import Main from '../../components/main/main'
import Footer from '../../components/footer/footer'
const home =(props)=>{

    return(
    <div className='container'>
        <Header />
        <Main />
        <Footer />
    </div>
    )
}

export default home;