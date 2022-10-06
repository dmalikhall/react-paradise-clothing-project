import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaShoppingCart } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import sublinks from '../sublinks';
import { Link } from 'react-router-dom';




function Navbar() {
    // const [showLinks, setShowLinks] = useState(false);
    const data = useGlobalContext();


    const { openSidebar, openSubmenu, closeSubmenu } = data;
    const { isSidebarOpen, closeSidebar } = data;
    const { amount } = data;


    const [isFixedNavbar, setIsFixedNavbar] = useState(false)


    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom })
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu()
        }

    }

    const fixedNavbar = () => {
        if (window.scrollY >= 67) {
            setIsFixedNavbar(true)
        } else {
            setIsFixedNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fixedNavbar);
        return () => {
            window.removeEventListener('scroll', fixedNavbar)
        }

    }, [])

    // window.addEventListener('scroll', fixedNavbar)





    return (
        <>
            <section className={`${isSidebarOpen ? 'mobile-nav open_mobile-nav' : 'mobile-nav'}`}>
                <div className="mobile-nav_header">
                    <div className="full-cart">
                        <button type='button'>
                            <FaShoppingCart />
                            <span className='full-cart-amount'>{amount}</span>
                        </button>
                    </div>
                    <button onClick={closeSidebar} className='close-btn'>
                        <AiOutlineCloseCircle />

                    </button>
                </div>

                <div className="mobile-nav_list">
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return <article key={index} className='link-header'>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map((link, index) => {
                                    const { url, label } = link;
                                    return (
                                        <Link key={index} to={url} onClick={closeSidebar}>{label}</Link>
                                    )

                                })}
                            </div>
                        </article>
                    })}

                </div>

                <div className="mobile-nav_socials">
                    <a href="https://www.facebook.com/" className='mobile-nav_social-link'>
                        <FaFacebookSquare />
                    </a>
                    <a href="https://www.instagram.com/" className='mobile-nav_social-link'>
                        <FaInstagramSquare />
                    </a>
                    <a href="https://twitter.com/" className='mobile-nav_social-link'>
                        <FaTwitterSquare />
                    </a>
                </div>
            </section>

            <header className='header'>
                <p>1234 Clothing Drive, Pittsburgh, PA 15120 | Daily 10AM-10PM</p>
            </header>

            <nav onMouseOver={handleSubmenu}>
                <div className={`${isFixedNavbar ? 'nav-container fixed-nav' : 'nav-container'}`}>

                    <ul className="nav-list">
                        <li>
                            <button className='link-btn' onMouseOver={displaySubmenu}>tops</button>
                        </li>
                        <li>
                            <button className='link-btn' onMouseOver={displaySubmenu}>bottoms</button>
                        </li>
                        <li>
                            <button className='link-btn' onMouseOver={displaySubmenu}>accessories</button>
                        </li>

                        <div className="web-full-cart">
                            <button type='button'>
                                <FaShoppingCart />
                                <span className='full-cart-amount'>{amount}</span>
                            </button>
                        </div>
                    </ul>

                    <div className="brand">
                        <Link to='/' className='brand-color'>
                            Paradise
                        </Link>

                    </div>



                    <div className="icons">
                        <div className="web-full-cart">
                            <button type='button'>
                                <FaShoppingCart />
                                <span className='full-cart-amount'>{amount}</span>
                            </button>
                        </div>
                        <div className="socials">

                            <a href="https://www.facebook.com/" className='social-link'>
                                <FaFacebookSquare />
                            </a>
                            <a href="https://www.instagram.com/" className='social-link'>
                                <FaInstagramSquare />
                            </a>
                            <a href="https://twitter.com/" className='social-link'>
                                <FaTwitterSquare />
                            </a>
                        </div>



                    </div>
                    {/* <div className="socials">

                        <a href="https://www.facebook.com/" className='social-link'>
                            <FaFacebookSquare />
                        </a>
                        <a href="https://www.instagram.com/" className='social-link'>
                            <FaInstagramSquare />
                        </a>
                        <a href="https://twitter.com/" className='social-link'>
                            <FaTwitterSquare />
                        </a>
                    </div> */}

                    {/* <div className="full-cart">
                        <button type='button'>
                            <FaShoppingCart />
                            <span className='full-cart-amount'>{amount}</span>
                        </button>
                    </div> */}

                    <div className='toggle-menu-btn'>
                        <button onClick={openSidebar}>
                            <FaBars />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar