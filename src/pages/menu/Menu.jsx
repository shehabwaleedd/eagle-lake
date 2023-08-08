import React from 'react'
import './Menu.css'
import Data from './Data'

const Menu = () => {
    return (
        <section className='menu' id='menu'>
            <div className="menu__container">
                <h1>Taste Our Menu</h1>
                <div className="menu__items">
                    {Data.map((category, index) => (
                        <div key={index} className="menu__category">
                            <h2>{category.category}</h2>
                            <div className="menu__category-items">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="menu__item">
                                        <img src={item.image} alt={item.name} />
                                        <p>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menu;
