import React from "react";

const WishList = ({ wishes}) => (

    <ul className="wish-list">
            {wishes.map(({text,done}) => (
                <li className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
                    
                    <label htmlFor={'wish${i}'}>
                        <input id={'wish${i}'} type="checkbox" checked={done}/>
                        {text}
                    </label>
                </li>
            ) )}
        </ul>

);

export default WishList;