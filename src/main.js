require("@babel/runtime/regenerator")
require("@babel/register")
require("webpack-hot-middleware/client?reload=true")

require("./main.css");
// require("./index.html");

import React from 'react';
import ReactDOM from 'react-dom'
import App from './app';

ReactDOM.render(
<App/>,
document.getElementById("root")
)
