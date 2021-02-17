import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreams from "./components/IceCreams";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer />
        <IceCreams/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
