import { Component } from "react";
import "./index.css";

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  };
  onEatMango = () => {
    this.setState((prevMangoCount) => {
      return {
        mango: prevMangoCount.mango + 1,
      };
    });
  };
  onEatBanana = () => {
    this.setState((preBananaCount) => {
      return {
        banana: preBananaCount.banana + 1,
      };
    });
  };
  render() {
    const { mango, banana } = this.state;
    return (
      <div className="container">
        <div className="card-container">
          <h1>{`Bob Ate ${mango} Mangoes And ${banana} Bananas`}</h1>
          <div className="card-flex-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.onEatMango}>
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.onEatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FruitsCounter;
