import "./App.css";
import Card from "./component/Card";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Box from "./component/Box";

const App = () => {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Card />
      <Register />
      <Login />
      <Box />
    </div>
  );
};

export default App;
