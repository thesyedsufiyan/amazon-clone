import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import { BsFillBagFill } from 'react-icons/bs';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue()

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    console.log(basket);

    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='logo' />
            </Link>

            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <BsSearch className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={login} className='header__options'>
                        <span className='header__optionlink1'>Hello {user?.email}</span>
                        <span className='header__optionlink2'>{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link to='/login' className='header__link'>
                    <div className='header__options'>
                        <span className='header__optionlink1'>Returns</span>
                        <span className='header__optionlink2'>& Orders</span>
                    </div>
                </Link>
                <Link to='/login' className='header__link'>
                    <div className='header__options'>
                        <span className='header__optionlink1'>Your</span>
                        <span className='header__optionlink2'>Prime</span>
                    </div>
                </Link>

                <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                        <BsFillBagFill className='header__basket' />
                        <span className='header__optionlink2 header__count'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
            <Link>
            </Link>

        </nav >
    )
}

export default Header
