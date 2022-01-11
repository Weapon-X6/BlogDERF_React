import React from "react";
//import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const apiUrl = "http://127.0.0.1:8000/api/1";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div>Beispiel</div>;
  }
}

export default App;
