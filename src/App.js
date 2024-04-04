// import logo from './logo.svg';
import "./App.css";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/Text";

function App() {
  return (
    <>
      <Navbar title="U App" />

      <div className="container my-5">
        <TextForm heading="Heading One" />
      </div>
    </>

  );
}

export default App;
