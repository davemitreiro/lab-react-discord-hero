import "./App.css";
import image from "./assets/discord-background.png";
import discord from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";

function App() {
  return (
    <div>
      <img id="discord-image" src={discord} alt="discord-logo" />
      <img id="menu-image" src={menu} alt="menu-icon" />

      <h1 id="headline">IMAGINE A PLACE...</h1>
      <h2 id="text">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </h2>
      <img id="backgound-image" src={image} alt="backgroundimage" />
      <div>
        <button id="mac-button" type="button">
          Download for Mac
        </button>
      </div>
      <div>
        <button id="discord-button" type="button">
          Open Discord on your browser
        </button>
      </div>
    </div>
  );
}

export default App;
