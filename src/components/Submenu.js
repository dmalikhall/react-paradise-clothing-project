import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

function Submenu() {
    const {isSubmenuOpen, closeSubmenu, location, page:{page, links}} = useGlobalContext();
    const container = useRef(null);
    const [columns, setColumns] = useState('col-2')
    useEffect(()=> {
        setColumns('col-2')
        const submenu = container.current;
        const {center, bottom} = location;
        
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;

        

        if(window.innerWidth < 950) {
            submenu.style.left = `${center - 30}px`
        }

    }, [location, links])
  return (
    <aside className={`${isSubmenuOpen?'submenu show': 'submenu'}`} ref={container}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
            {links.map((link,index) => {
                const {label, url} = link;
                return (
                    <Link key={index} to={url} onClick={closeSubmenu}>
                        {label}
                    </Link>
                )
            })}
        </div>
    </aside>
  )
}

export default Submenu