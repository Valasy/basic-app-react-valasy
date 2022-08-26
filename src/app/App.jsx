import React, { useState } from "react";
import './App.css';
import WishInput from "./WishInput";
import WishList from "./WishList";

const initialWishes = [
    { text: 'Aprender Node.js', done:false},
    { text: 'Tener aire acondicionado', done:true},
    { text: 'Comer Pizza', done:true},
    { text: 'Viajar a Finlandia', done:false},
];

const App = () => {

    const[wishes, setWishes] = useState(initialWishes);
    return(

    <div className="app">
        <h1>Mi lista de deseos</h1>
        <WishInput onNewWish={wish => setWishes([wish,...wishes])}/>
        <WishList wishes={wishes} onWishesChange={setWishes}/>
        <button className="wish-clear" type="button" onClick={() => setWishes(wishes.filter(wish => !wish.done))}> Archivar</button>
    </div>
    );
};
export default App;