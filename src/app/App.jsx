import React from "react";
import './App.css';

const wishes = [
    { text: 'Aprender Node.js', done:false},
    { text: 'Tener aire acondicionado', done:true},
    { text: 'Comer Pizza', done:true},
    { text: 'Viajar a Finlandia', done:false},
];

const App = () => (

    <div className="app">
        <h1>Mi lista de deseos</h1>
        <fieldset className="wish-input">
            <legend className="wish-input__label">Nuevo deseo</legend>
            <input className="wish-input_field" placeholder="Ingresa tu deseo! :D"/>
        </fieldset>
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
        <button className="wish-clear" type="button"> Archivar</button>
    </div>
)
export default App;