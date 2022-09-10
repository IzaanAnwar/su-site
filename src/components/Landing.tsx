import { NextPage } from 'next'
import About from './About'
import Navbar from './Navbar'
import Form from './Form'

const Landing: NextPage = () => {


    return (
        <>
            <Navbar />
            <Form />
            <About />


        </>
    )
}

export default Landing