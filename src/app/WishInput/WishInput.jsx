import React, { useState } from 'react';
import PropTypes from 'prop-types';


const WishInput = ({onNewWish}) => {
    const [newWishText, setNewWishText] = useState('');
    return (
        <fieldset className="wish-input">
            <legend className="wish-input__label">Nuevo deseo</legend>
            <input 
                className="wish-input_field"
                placeholder="Ingresa tu deseo! :D (Enter para ingresar)" 
                value={newWishText} 
                onChange={e => setNewWishText(e.target.value)}
                onKeyUp={e => {
                    if(e.key === 'Enter' && newWishText.length){
                        onNewWish({done:false, text:newWishText});
                        setNewWishText('');
                    }
                }}
            />
        </fieldset>
    );
};


WishInput.propTypes = {
    onNewWish: PropTypes.func,
};
WishInput.defaultProp = {
    onNewWish:() => {},
};
export default WishInput;