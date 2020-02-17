import React from 'react';
import {Link} from 'react-router-dom';
//import logo from '../logo.webp';

const Navbar = () => {
    // const [time, setTime] = useState(new Date());

    // useEffect(() =>{
    //     setInterval(() =>{
    //         setTime(new Date());
    //     },1000)
    // })
    return (
        <header className="main-header row p-2">
            {/* <Link to='/'><img src={logo} alt="deevio" /></Link> */}
            <Link to='/'><h3>Shohreh Modarresi</h3></Link>
            {/* <span className="ml-auto">{time.toLocaleTimeString()}</span> */}
        </header>
    );
};

export default Navbar;