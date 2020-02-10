import React ,{useState , useEffect} from 'react';
import logo from '../logo.webp';

const Navbar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        setInterval(() =>{
            setTime(new Date());
        },1000)
    })
    return (
        <header className="main-header row p-2">
            <img src={logo} alt="deevio" />
            <span className="ml-auto">{time.toLocaleTimeString()}</span>
        </header>
    );
};

export default Navbar;