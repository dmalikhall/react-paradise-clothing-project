import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import Error from './Error';

function Home() {
    const { closeSubmenu, products_loading: loading, products_error: error } = useGlobalContext();
    if(loading) {
        return <Loading/>
      }
      if(error) {
        return <Error/>
      }
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
                <div className="mobile-hero-action">
                    <h1>Love the way you look</h1>
                    <Link to='/shop-all' className="mobile-hca-button">
                        <button type='button'>shop now</button>
                    </Link>
                </div>

                <section className='featured-items'>
                    <header>
                        <div className='line'></div>
                        <p>featured items</p>
                        <div className='line'></div>
                    </header>

                    <div className="the-items">
                        <Link to='all-tops' className="item">
                            <img src="https://source.unsplash.com/fTDWpCxLA0k" alt="cupcakess" />
                            <div className="all-category tops">
                                <h3><span className='all-text'>All</span>tops</h3>
                                <button>shop now</button>
                            </div>
                        </Link>
                        <Link to='all-bottoms' className="item">
                            <img src="https://source.unsplash.com/rj8ohjW9RBA" alt="cupcakess" />
                            <div className="all-category bottoms">
                                <h3 className='bottoms'>
                                    <span className='all-text'>All</span>
                                    bottoms</h3>
                                <button>shop now</button>
                            </div>
                        </Link>
                        <Link to='all-accessories' className="item">
                            <img src="https://source.unsplash.com/yzLvKZuK4hs" alt="cupcakess" />
                            <div className="all-category accessories">
                                <h3><span className='all-text'>All</span>accessories</h3>
                                <button>shop now</button>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>



        </div>
    )
}

export default Home