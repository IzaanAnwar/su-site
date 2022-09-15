import { NextPage } from 'next';
import About from './About';
import Navbar from './Navbar';
import Form from './Form';

const Landing: NextPage = () => {
    return (
        <div className="">
            <Navbar />
            <Form />
            <About />
        </div>
    );
};

export default Landing;
