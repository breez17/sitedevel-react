import React, { Component } from 'react';
import './App.css';
import Layout from "./hoc/Lay/Layout";
import Quiz from "./containers/Quiz/Quiz";

class App extends Component {
  render() {
    return(
        <Layout>
            <Quiz />
        </Layout>
    )
  }
}

export default App;
