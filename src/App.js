import React, { Component } from "react";
import "./stylesheets/scss/main.scss";
import Footer from "./components/Footer";
import Header from "./components/Header.js";
import ContainerCard from "./components/ContainerCard.js";
import CollapsableContainer from "./components/CollapsableContainer";
import dataBack from "./services/DataBack";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataBack: dataBack,
      skills: [],
      colorClass: '',
    };

    this.handleCustomInputs = this.handleCustomInputs.bind(this);
    this.handleColorClass = this.handleColorClass.bind(this);
    this.getSkills();
  }

  handleCustomInputs(event) {
    const currentValue = event.target.value;
    dataBack.palette = currentValue;
    console.log(dataBack);
    this.handleColorClass();
  }

  handleColorClass() {
    const { palette } = this.state.dataBack;
    if (palette === "1") {
      this.setState({
        colorClass: 'box__card'
      })
    } else if (palette === "2") {
      this.setState({
        colorClass: 'box__card--red'
      })
    } else if (palette === "3") {
      this.setState({
        colorClass: 'box__card--grey'
      })
    } else if (palette === "4") {
      this.setState({
        colorClass: 'box__card--purple'
      })
    } else if (palette === "5") {
      this.setState({
        colorClass: 'box__card--orange'
      })
    }
  }

  getSkills() {
    fetch(
      "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ skills: data.skills });
      });
  }

  render() {
    const { skills } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="created__target">
          <ContainerCard dataBack={this.state.dataBack} colorClass={this.state.colorClass} />
          <CollapsableContainer skills={skills} handleCustomInputs={this.handleCustomInputs} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
