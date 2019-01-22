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
      fr: new FileReader()  
    };

  

    this.handleColorInput = this.handleColorInput.bind(this);
    this.handleColorClass = this.handleColorClass.bind(this);
    this.handleFontClass = this.handleFontClass.bind(this);
    this.handleFontInput = this.handleFontInput.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.getSkills();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fakeFileClick = this.fakeFileClick.bind(this);
    this.addImageToState = this.addImageToState.bind(this);
    this.fileInput = React.createRef();
  }

  addImageToState() {
    this.setState((prevState)=>{ 
      return{
        dataBack: {
          ...prevState.dataBack,
          photo: this.state.fr.result,
        }
    }});
  }

  fakeFileClick(){
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
                fakeFileClick={this.fakeFileClick}
                fileInput={this.fileInput}
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
