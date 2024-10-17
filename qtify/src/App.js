import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Album from "./components/Album/Album";
import AlbumScroll from './components/AlbumScroll/AlbumScroll';
import Divider from './components/Divider/Divider';

function App() {
  const newUrl = "https://qtify-backend-labs.crio.do/albums/top";
  const topUrl = "https://qtify-backend-labs.crio.do/albums/new";
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title={"Top Albums"}>
        <Album url = {newUrl}/>
      </Section>
      <Divider />
      <Section title={"New Albums"}>
        <Album url ={topUrl}/>
      </Section>
      <AlbumScroll />
    </div>
  );
}

export default App;
