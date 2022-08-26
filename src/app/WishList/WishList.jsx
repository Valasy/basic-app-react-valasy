import React from "react";
import PropTypes from 'prop-types';
import WishItem from "../WishItem/Index";

const WishList = ({ wishes, onWishesChange}) => (

    <ul className="wish-list">
            {wishes.map(({done,text}, i) => (
                <WishItem text={text} done={done} id={'wish${i}'} key={text} onDoneChange={(value) => {
                    const updatedWishes =[...wishes];
                    updatedWishes[i].done = value;
                    onWishesChange(updatedWishes);
                }}/>
            ) )}
        </ul>

);

WishList.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.PropTypes)),
    onWishesChange: PropTypes.func,
};
WishList.defaultProps ={
    wishes:[],
    onWishesChange: () => {},
};

export default WishList;