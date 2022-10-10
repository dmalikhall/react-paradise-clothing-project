import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Home() {
    const { closeSubmenu } = useGlobalContext()
    return (
        <div className="whole-container" onMouseOver={closeSubmenu}>
            <main>
                <div className='hero-img'>
                    <img src="https://source.unsplash.com/_KaMTEmJnxY" alt="cupcakess" />
                    <Link to='/shop-all' className="hero-call-to-action">
                        <h1>Love the way you look</h1>
                        <div className="hca-button">
                            <button type='button'>shop now</button>
                        </div>

                    </Link>
                </div>
                <h2>yep</h2>

                <section className='featured-items'>
                    <header>
                        <div className='line'></div>
                        <p>featured items</p>
                        <div className='line'></div>
                    </header>

                    {/* <div className="the-items">
                        <Link to='all-tops' className="item">
                            <img src="https://source.unsplash.com/fTDWpCxLA0k" alt="cupcakess" />
                            <div className="all-category tops">
                                <h3>All tops</h3>
                                <button>shop now</button>
                            </div>
                        </Link>
                        <Link to='all-bottoms' className="item">
                            <img src="https://source.unsplash.com/rj8ohjW9RBA" alt="cupcakess" />
                            <div className="all-category bottoms">
                                <h3 className='bottoms'>All bottoms</h3>
                                <button>shop now</button>
                            </div>
                        </Link>
                        <Link to='all-accessories' className="item">
                            <img src="https://source.unsplash.com/yzLvKZuK4hs" alt="cupcakess" />
                            <div className="all-category accessories">
                                <h3>All accessories</h3>
                                <button>shop now</button>
                            </div>
                        </Link>
                    </div> */}
                </section>
            </main>


            
        </div>
    )
}

export default Home