import React, { Component } from "react";
import { btnData } from "./data/btnData";
import Button from "./components/button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Please press button",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(`get Derived State From Props`);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`should Component Update`);

    return true;
  }

  componentDidMount() {
    console.log(`component Did Mount`);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 5;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    console.log(`component Did Update`);
  }

  /************************************** Unmounting **************************************/
  componentWillUnmount() {
    console.log(`component Will Unmount`);
  }

  /************************************ Error Handling ************************************/
  static getDerivedStateFromError(error) {
    console.log(`get Derived State From Error`);
    return null;
  }

  componentDidCatch(error, info) {
    console.log(`component Did Catch`);
  }

  updateDisplay(token) {
    const { display } = this.state;
    if (display === "Please press button") {
      this.setState({ display: token });
    } else {
      this.setState({ display: display + token });
    }
  }

  calculate() {
    const { display } = this.state;
    const results = eval(display);
    this.setState({ display: results });
  }

  handleButtonClick(token) {
    if (token === "=") {
      this.calculate();
    } else if (token === "C") {
      this.setState({ display: "Please press button" });
    } else {
      this.updateDisplay(token);
    }
  }

  render() {
    const { display } = this.state;
    return (
      <section className="w-screen h-screen justify-center items-center flex flex-col">
        <div className="w-1/2 p-5 bg-gray-200 rounded shadow">
          <h1 className="text-center sm:text-3xl font-bold">Calculator</h1>
          <div className="bg-white p-2 my-4">{display}</div>
          <div className="grid grid-cols-4 gap-2 ">
            {btnData.map((token, index) => (
              <Button
                key={index}
                onClick={() => this.handleButtonClick(token)}
                extraClass={
                  index === btnData.length-1
                    ? "col-span-3"
                    : "col-span-1 text-lg font-semibold "
                }
              >
                {token}
              </Button>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
