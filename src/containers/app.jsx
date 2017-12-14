import React from 'react';
import ReactDOM from "react-dom";

import Hello from '../components/hello';

export default class App extends React.Component {
    render(){
        return (
            <div className="app-container">
                 <Hello />
            </div>
        );
    }
}