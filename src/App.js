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
      dataBack: dataBack,
      skills: [],
      colorClass: "",
      fontClass: "",
      loading: true,
      cardURL: "",
      fr: new FileReader(),
      hidden: "hidden",
      isPushing: false
    };

    this.handleColorClass = this.handleColorClass.bind(this);
    this.handleFontClass = this.handleFontClass.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
    this.sendCardToBackend = this.sendCardToBackend.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fakeFileClick = this.fakeFileClick.bind(this);
    this.addImageToState = this.addImageToState.bind(this);
    this.resetFunction = this.resetFunction.bind(this);
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    this.getSkills();
  }

  addImageToState() {
    this.setState((prevState) => {
      return {
        dataBack: {
          ...prevState.dataBack,
          photo: this.state.fr.result,
        }
      }
    });
  }

  fakeFileClick() {
    const fileInputEl = this.fileInput.current;
    fileInputEl.click();
    fileInputEl.addEventListener("change", this.handleSubmit);
  }

  handleSubmit(event) {
    event.preventDefault();
    const fileUpdatedByUser = this.fileInput.current.files[0];
    this.state.fr.addEventListener('load', this.addImageToState);
    this.state.fr.readAsDataURL(fileUpdatedByUser);
    this.getSkills();
  }

  handleInputs(event) {
    const { name, value } = event.target;
    this.setState(prevState => {
      const newState = {
        dataBack: {
          ...prevState.dataBack,
          [name]: value,
        }
      }
      if(name === "palette"){
        newState.colorClass = this.handleColorClass(value);
      } else if (name === "typography"){
        newState.fontClass = this.handleFontClass(value);
      } 
      return newState;
    });
  }

  handleColorClass(palette) {
    if (palette === "1") {
      return "box__card"
    } else if (palette === "2") {
      return "box__card--red"
    } else if (palette === "3") {
      return "box__card--grey"
    } else if (palette === "4") {
      return "box__card--purple"
    } else if (palette === "5") {
      return "box__card--orange"
    }
  }

  handleFontClass(typography) {
    if (typography === "1") {
      return "userInfo--ubuntu"
    } else if (typography === "2") {
      return "userInfo--quaternary"
    } else if (typography === "3") {
      return "userInfo--mont"
    } else if (typography === "4") {
      return "userInfo--hand"
    } else if (typography === "5") {
      return "userInfo--libre"
    }
  }

  handleSkills(event) {
    const selectedSkill = event.target.value;
    const { skills } = this.state.dataBack;

    if (skills.includes(selectedSkill)) {
      let newSkills = skills.filter(skill => skill !== selectedSkill);
      this.setState(prevState => {
        return {
          dataBack: {
            ...prevState.dataBack,
            skills: newSkills
          }
        };
      });
    } else if (skills.length < 3) {
      this.setState(prevState => {
        return {
          dataBack: {
            ...prevState.dataBack,
            skills: skills.concat(selectedSkill)
          }
        };
      });
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
      return true;
    } else {
      return false;
    }
  }

  renderSkills() {
    return this.state.skills.map((skill, index) => {
      return (
        <label htmlFor={skill} key={index} className="checkbox-label">
          <input
            id={skill}
            type="checkbox"
            value={skill}
            name="skills"
            className="checkbox-input"
            checked={this.isChecked(skill)}
            onChange={this.handleSkills}
          />
          <p>{skill}</p>
        </label>
      );
    });
  }

  sendCardToBackend() {
    this.setState({ isPushing: true })
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(this.state.dataBack),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((url) => {
        const cardURL = url.cardURL;
        this.setState({
          cardURL: cardURL,
          hidden: '', isPushing: false
        })
      })
      .catch((error) => console.log(error))
  }

  resetFunction(event) {
    this.setState((prevState) => {
      return {
        dataBack: {
          ...prevState,
          dataBack: dataBack,
          skills: [],
          cardURL: '',
          colorClass: "",
          fontClass: "",
        }
      }
    })
  }

  render() {
    const { dataBack, skills, colorClass, fontClass, cardURL, hidden, isPushing } = this.state;

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
                handleInputs={this.handleInputs}
                handleSkills={this.handleSkills}
                renderSkills={this.renderSkills}
                sendCardToBackend={this.sendCardToBackend}
                cardURL={cardURL}
                fakeFileClick={this.fakeFileClick}
                fileInput={this.fileInput}
                hidden={hidden}
                cardCreationLoading={isPushing}
                resetFunction={this.resetFunction}
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
