import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import sublinks from '../sublinks';
import Submenu from './Submenu';




function Navbar() {
    // const [showLinks, setShowLinks] = useState(false);
    const data = useGlobalContext()
    
    const {openSidebar,openSubmenu, closeSubmenu} = data;
    const {isSidebarOpen, closeSidebar} = data;
    const {isSubmenuOpen} = data;

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center  = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, {center, bottom})
    }

    const handleSubmenu = (e) => {
        if(!e.target.classList.contains('link-btn')) {
            closeSubmenu()
        }
        
    }
    return (
        <>
            <section className={`${isSidebarOpen ? 'mobile-nav open_mobile-nav' : 'mobile-nav'}`}>
                <div className="mobile-nav_header">
                    <button onClick={closeSidebar} className='close-btn'>
                        <AiOutlineCloseCircle />
                    </button>
                </div>

                <div className="mobile-nav_list">
                    {sublinks.map((item, index)=> {
                        const {links, page} = item;
                        return <article key={index} className='link-header'>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map((link, index) => {
                                    const {url, label} = link;
                                    return (
                                        <a key={index} href={url}>{label}</a>
                                    )

                                })}
                            </div>
                        </article>
                    })}
                    {/* <a href="#" className='mobile-nav_item'>All</a>
                    <a href="#" className='mobile-nav_item'>Tops</a>
                    <a href="#" className='mobile-nav_item'>Bottoms</a>
                    <a href="#" className='mobile-nav_item'>Accessories</a> */}
                </div>

                <div className="mobile-nav_socials">
                    <a href="#" className='mobile-nav_social-link'>
                        <FaFacebookSquare />
                    </a>
                    <a href="#" className='mobile-nav_social-link'>
                        <FaInstagramSquare />
                    </a>
                    <a href="#" className='mobile-nav_social-link'>
                        <FaTwitterSquare />
                    </a>
                </div>
            </section>

            <header className='header'>
                <p>1234 Clothing Drive, Pittsburgh, PA 15120 | Daily 10AM-10PM</p>
            </header>

            <nav onMouseOver={handleSubmenu}>
                <div className="nav-container">
                    
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
                    </ul>

                    <div className="brand">Paradise</div>

                    <div className="socials">
                        <a href="#" className='social-link'>
                            <FaFacebookSquare />
                        </a>
                        <a href="#" className='social-link'>
                            <FaInstagramSquare />
                        </a>
                        <a href="#" className='social-link'>
                            <FaTwitterSquare />
                        </a>
                    </div>

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