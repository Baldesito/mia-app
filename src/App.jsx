import "./App.css";
import MyFirstComponent from "./components/MyFirstComponents";
import MyFirstClass from "./components/MyFirstClass";
import MyButtonComponent from "./components/MyButtonComponent";
import ImageComponent from "./components/ImageComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <div className="row mt-4">
          <MyFirstComponent />
          <MyFirstClass />
          <MyButtonComponent text="balde" />
          <div className="col-md-4">
            <button className="btn btn-danger">Click me</button>
            <ImageComponent
              src="https://cdn.pixabay.com/photo/2024/11/05/20/59/artistic-9176859_1280.jpg"
              alt="atsu"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
