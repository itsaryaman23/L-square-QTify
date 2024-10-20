import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Album from "./components/Album/Album";
// import AlbumScroll from './components/AlbumScroll/AlbumScroll';
import Divider from "./components/Divider/Divider";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme/theme";
import SongsSection from './components/SongsSection/SongsSection';

function App() {
  const newUrl = "https://qtify-backend-labs.crio.do/albums/top";
  const topUrl = "https://qtify-backend-labs.crio.do/albums/new";
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Section title={"Top Albums"} collapse={true}>
          <Album url={newUrl} />
        </Section>
        <Divider />
        <Section title={"New Albums"} collapse={true}>
          <Album url={topUrl} />
        </Section>
        <Divider />
        <Section title={"Songs"} collapse={false}>
          <SongsSection />
        </Section>
        {/* <AlbumScroll /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
