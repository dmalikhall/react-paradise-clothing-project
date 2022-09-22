import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context';

function Submenu() {
    const {isSubmenuOpen, location, page:{page, links}} = useGlobalContext();
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
                    <a key={index} href={url}>
                        {label}
                    </a>
                )
            })}
        </div>
    </aside>
  )
}

export default Submenu