import React from 'react'
// import nav data
import { navData } from '../data'

// import Link
import { Link } from 'react-scroll'

const Nav = () => {
  // destructure nav data
  const { items } = navData
  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index} className=" hover:text-accent cursor-pointer">
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="link hover:border-b-2 hover:border-dark transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
