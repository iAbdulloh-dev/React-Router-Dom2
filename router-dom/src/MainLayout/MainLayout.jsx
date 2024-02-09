import { NavLink, Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <header>
                <div className='w-[100vw] h-[100px] bg-teal-600'>
                    <ul className=' h-[100%] flex items-center ml-[750px] text-[20px]'>
                        <li > 
                            <NavLink className='ml-[50px] transition-[1.2s]' to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='ml-[50px]' to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className='ml-[50px]' to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className='ml-[50px]' to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink className='ml-[50px]' to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    )
}

export default MainLayout