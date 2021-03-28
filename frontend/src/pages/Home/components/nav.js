const Nav=()=>{
    return (
        <div className="sticky top-0 z-50">
    <nav className="flex h-20  items-center">
        <div className="ml-6">
            <img src={'./'} alt="logo"/>
        </div>
        <div>
            <ul className="flex">
                <li className="ml-6">Home</li>
                <li className="ml-6">How it works</li>
                <li className="mx-6">Email</li>
            </ul>
        </div>
        <div className="flex flex-1"></div>
        <button className="mr-6 bg-green-400 px-3 py-2 rounded-sm text-white hover:bg-green-500 text-center rounded-xl shadow-md">Login</button>
    </nav>
    </div>
    )
}

export default Nav;