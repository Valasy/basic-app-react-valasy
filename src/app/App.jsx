import React from "react";
import './App.css';
import WishInput from "./WishInput";

const wishes = [
    { text: 'Aprender Node.js', done:false},
    { text: 'Tener aire acondicionado', done:true},
    { text: 'Comer Pizza', done:true},
    { text: 'Viajar a Finlandia', done:false},
];

const App = () => (

    <div className="app">
        <h1>Mi lista de deseos</h1>
        <WishInput/>
        
        <button className="wish-clear" type="button"> Archivar</button>
    </div>
)
export default App;