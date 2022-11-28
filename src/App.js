import * as React from "react";
import "./App.css";
import munchLogo from "./munch-logo.png";
import { List } from "./List.tsx";
// import { Map } from "./Map.tsx";
// import { loadMapApi } from "./utils/GoogleMapsUtils.ts";

const App = () => {
  // const [scriptLoaded, setScriptLoaded] = React.useState(false);

  // React.useEffect(() => {
  //   const googleMapScript = loadMapApi();
  //   googleMapScript.addEventListener("load", function() {
  //     setScriptLoaded(true);
  //   });
  // }, []);

  return (
    <>
      <div className="app">
        <img className="app-header w-75 m-3" src={munchLogo} alt="Munch" />
        <ul className="nav justify-content-center">
          <div class="input-group input-group-md m-3">
            <span class="input-group-text" id="inputGroup-sizing-md">
              Location
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Location search"
              aria-describedby="inputGroup-sizing-md"
            ></input>
          </div>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Map</a>
          </li>
        </ul>
        <List />
        {/* {scriptLoaded && (
          <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
        )} */}
      </div>
    </>
  );
};

export default App;
