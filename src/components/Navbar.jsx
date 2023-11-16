import { useState } from 'react'
import { close, logo, menu, newlogo } from '../assets'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py- justify-between items-center navbar'>
      <img src={newlogo} alt="azemora" className='w-[124px] h-[60px] object-contain'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'> 
      {navLinks.map((nav, index)=> (
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-white` }  >
          <Link to={`/${nav.id}`}>
            {nav.title}
          </Link>
        </li>
      ))}
      </ul>

      <div className='sm:hidden flex  flex-1 justify-end items-center'>
        <img src={toggle ? close: menu} alt="menu" className="w-[20px] h-[20px] object-contain" onClick={()=> setToggle((prev) => !prev)} />

        <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
         
        <ul className='list-none flex flex-col justify-end items-center flex-1'> 
          {navLinks.map((nav, index)=> (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white` }  >
              <Link to={`/${nav.id}`}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar