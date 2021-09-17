import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import SignInModal from "./components/SignInModal";
import Main from "./components/Main";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Canvas />
      <SignInModal />
      <Main />
      <SearchBox />
    </>
  );
}

export default App;
