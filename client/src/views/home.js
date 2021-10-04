import React from 'react';
import Cookies from 'universal-cookie';

const Home = () => {

    const cookies = new Cookies();
    const sessionCookie = cookies.get('currentsession');
    console.log(sessionCookie);

    return (
        <div>
            <p>Home Page</p>
        </div>
    );
};

export default Home;