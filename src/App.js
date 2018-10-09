import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateEmployee  from  './componentsEmployee/GenerateEmployee';
import  DisplayEmployee  from  './componentsEmployee/DisplayEmployee';
import ButtonSimpson from './componentsSimpson/ButtonSimpson';
import DisplaySimpson from './componentsSimpson/DisplaySimpson.jsx';

const  sampleEmployee = {
  gender:  'male',
  name: {
      title:  'mr',
      first:  'mathys',
      last:  'aubert'
  },
  location: {
      street:  '9467 rue gasparin',
      city:  'perpignan',
      postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
      medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};

const sampleQuote = {
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  character: "Nelson Muntz",
  quote: "Shoplifting is a victimless crime, like punching someone in the dark."
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee:  sampleEmployee,
      descriptQuote: sampleQuote

    };
  }

  getEmployee() {
      // Récupération de l'employé via fetch
      fetch("https://randomuser.me/api?nat=fr")
        .then(response  =>  response.json())
        .then(data  => {
          // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
          this.setState({
            employee:  data.results[0],
          });
      });
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          descriptQuote:  data[0],
        });
    });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
        <DisplayEmployee  employee={this.state.employee}  />
        <hr />
        <ButtonSimpson selectQuote={() =>  this.getQuote()} />
        <DisplaySimpson descriptQuote={this.state.descriptQuote} />
      </div>
    );
  }
}

export default App;
