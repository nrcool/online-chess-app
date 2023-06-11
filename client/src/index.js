
import React from "react"
import "./index.css"
import { socket } from "./socket"
import App from "./App.js"
import reactDOM from "react-dom"
import Container from "./context/Container.js"
import { HashRouter } from "react-router-dom"
import axios from "axios"
axios.defaults.baseURL="http://localhost:8080"

reactDOM.render(<HashRouter> <Container> <App/></Container></HashRouter>,document.getElementById("root"))