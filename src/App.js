import React, { Component } from "react";
import Footer from "./components/Footer";
import HeaderCardCreator from "./components/HeaderCardCreator.js";
import HeaderHome from "./components/HeaderHome";
import dataBack from "./services/DataBack";
import { Route, Switch } from "react-router-dom";
import MainCardCreator from "./components/MainCardCreator";
import MainHome from "./components/MainHome";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataBack: this.getDataFromLocalStorage(),
      skills: [],
      colorClass: "",
      fontClass: ""
    };

    this.handleColorInput = this.handleColorInput.bind(this);
    this.handleColorClass = this.handleColorClass.bind(this);
    this.handleFontClass = this.handleFontClass.bind(this);
    this.handleFontInput = this.handleFontInput.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
    this.saveDataAtLocalStorage = this.saveDataAtLocalStorage.bind(this);
    this.getSkills();
  }

  handleInputs(event) {
    const { name, value } = event.target;

    this.setState(prevState => {
      const newDataBack =  {
        ...prevState.dataBack,
        [name]: value,
      }
      this.saveDataAtLocalStorage(newDataBack);
      return {
        dataBack: newDataBack
      }
    });

  }

  handleColorInput(event) {
    const currentValue = event.target.value;
    dataBack.palette = currentValue;
    this.handleColorClass();
  }

  handleColorClass() {
    const { palette } = this.state.dataBack;
    if (palette === "1") {
      this.setState({
        colorClass: "box__card"
      });
    } else if (palette === "2") {
      this.setState({
        colorClass: "box__card--red"
      });
    } else if (palette === "3") {
      this.setState({
        colorClass: "box__card--grey"
      });
    } else if (palette === "4") {
      this.setState({
        colorClass: "box__card--purple"
      });
    } else if (palette === "5") {
      this.setState({
        colorClass: "box__card--orange"
      });
    }
  }

  handleFontInput(event) {
    const currentValue = event.target.value;
    dataBack.typography = currentValue;
    this.handleFontClass();
  }

  handleFontClass() {
    const { typography } = this.state.dataBack;
    if (typography === "1") {
      this.setState({
        fontClass: "userInfo--ubuntu"
      });
    } else if (typography === "2") {
      this.setState({
        fontClass: "userInfo--quaternary"
      });
    } else if (typography === "3") {
      this.setState({
        fontClass: "userInfo--mont"
      });
    } else if (typography === "4") {
      this.setState({
        fontClass: "userInfo--hand"
      });
    } else if (typography === "5") {
      this.setState({
        fontClass: "userInfo-libre"
      });
    }
  }

  handleSkills(event) {
    const selectedSkill = event.target.value;
    const { skills } = this.state.dataBack;

    if (skills.includes(selectedSkill)) {
      let newSkills = skills.filter((skill) => skill !== selectedSkill);
      this.setState((prevState) => {
        const savedSkills = {
          ...prevState.dataBack,
          skills: newSkills
        }
        
        this.saveDataAtLocalStorage(savedSkills);
        return {
          dataBack: savedSkills
        }
      })
    } else if (skills.length < 3) {
      this.setState((prevState) => {
        const savedSkills = {
          ...prevState.dataBack,
          skills: skills.concat(selectedSkill)
        }
        this.saveDataAtLocalStorage(savedSkills);
        return {
          dataBack: savedSkills
        }
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

  isChecked(currentSkill) {
    const { skills } = this.state.dataBack;
    if (skills.includes(currentSkill)) {
      return true
    } else {
      return false
    }
  }

  saveDataAtLocalStorage(data) {
    localStorage.setItem('preferences', JSON.stringify(data));
  }

  getDataFromLocalStorage() {
    const data = localStorage.getItem('preferences');
    if (!data) {
      return dataBack
    } else {
      return JSON.parse(data)
    }
    
  }
  renderSkills() {
    return this.state.skills.map(skill => {
      return (
        <label for={skill} className="checkbox-label">
          <input id={skill} type="checkbox" value={skill} name="skills" className="checkbox-input" checked={this.isChecked(skill)} onChange={this.handleSkills} />
          <p>{skill}</p>
        </label>)
    })
  }

  render() {
    const { dataBack, skills, colorClass, fontClass } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HeaderHome} />
          <Route path="/card-creator" component={HeaderCardCreator} />
        </Switch>
        <Switch>
          <Route exact path="/" component={MainHome} />
          <Route
            path="/card-creator"
            render={() => (
              <MainCardCreator
                dataBack={dataBack}
                colorClass={colorClass}
                fontClass={fontClass}
                skills={skills}
                handleColorInput={this.handleColorInput}
                handleFontInput={this.handleFontInput}
                handleInputs={this.handleInputs}
                handleSkills={this.handleSkills}
                renderSkills={this.renderSkills}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
