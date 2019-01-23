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



    this.handleColorInput = this.handleColorInput.bind(this);
    this.handleColorClass = this.handleColorClass.bind(this);
    this.handleFontClass = this.handleFontClass.bind(this);
    this.handleFontInput = this.handleFontInput.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
    this.sendCardToBackend = this.sendCardToBackend.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fakeFileClick = this.fakeFileClick.bind(this);
    this.addImageToState = this.addImageToState.bind(this);
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
    console.log(fileUpdatedByUser);
    this.state.fr.addEventListener('load', this.addImageToState);
    this.state.fr.readAsDataURL(fileUpdatedByUser);
  }

  handleInputs(event) {
    const { name, value } = event.target;
    this.setState(prevState => {
      return {
        dataBack: {
          ...prevState.dataBack,
          [name]: value,
        }
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
        return {
          dataBack: {
            ...prevState.dataBack,
            skills: newSkills
          }
        }
      })
    } else if (skills.length < 3) {
      this.setState((prevState) => {
        return {
          dataBack: {
            ...prevState.dataBack,
            skills: skills.concat(selectedSkill)
          }
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

  renderSkills() {
    return this.state.skills.map(skill => {
      return (
        <label htmlFor={skill} className="checkbox-label">
          <input id={skill} type="checkbox" value={skill} name="skills" className="checkbox-input" checked={this.isChecked(skill)} onChange={this.handleSkills} />
          <p>{skill}</p>
        </label>)
    })
  }

  sendCardToBackend() {
    console.log('hola');
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
        //cuando tengamos foto, retornamos el link y cambiamos loading a false
        //tambien debemos cambiar clase del boton e incoporar la movida de twitter al estado
      })
      .catch((error) => console.log(error))
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
                handleColorInput={this.handleColorInput}
                handleFontInput={this.handleFontInput}
                handleInputs={this.handleInputs}
                handleSkills={this.handleSkills}
                renderSkills={this.renderSkills}
                sendCardToBackend={this.sendCardToBackend}
                cardURL={cardURL}
                fakeFileClick={this.fakeFileClick}
                fileInput={this.fileInput}
                hidden={hidden}
                cardCreationLoading={isPushing}
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
