import {Link} from 'react-router-dom'
const Nav=()=>{
    return (
        <div className="sticky top-0 z-50 bg-white">
    <nav className="flex h-20  items-center">
        <div className="ml-6">
            <img src={'./'} alt="logo"/>
        </div>
        <div>
            <ul className="flex">
                <li className="ml-6"><Link to="/">Home</Link></li>
                <li className="ml-6"><Link to="/">How it works</Link></li>
                <li className="mx-6"><a href="mailto:abcd@gmail.com">Email</a></li>
            </ul>
        </div>
        <div className="flex flex-1"></div>
        <button className="mr-6 bg-green-400 px-3 py-2 rounded-sm text-white hover:bg-green-500 text-center rounded-xl shadow-md"><Link to="/login">Login</Link></button>
    </nav>
    </div>
    )
}

export default Nav;