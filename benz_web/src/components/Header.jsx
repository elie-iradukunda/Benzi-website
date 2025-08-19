import React from 'react'
import favicon from '../assets/favicon.ico'

const Header = () => {
  return (
    <>
    <div>
        <div>
            <nav>
                <li>Deutisch</li> |
                <li>English</li>
                <span>Providers / privacy</span>
            </nav>
            <div>
<img src={favicon} alt="benzi logo" />
            </div>

            <div>
                <input type="text" placeholder='search' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
