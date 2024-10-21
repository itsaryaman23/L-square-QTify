import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Album from "./components/Album/Album";
import AlbumScroll from "./components/AlbumScroll/AlbumScroll";
import Divider from "./components/Divider/Divider";
import {useEffect, useState} from 'react';
import Faq from './components/Faq/Faq';

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme/theme";
import SongsSection from "./components/SongsSection/SongsSection";

function App() {
  const [expandNew, setExpandNew] = useState(false);
  const [expandTop, setExpandTop] = useState(false);

  const handleExpandNew = (e) =>
  {
    setExpandNew(e);
  }
  const handleExpandTop = (e) =>{
    setExpandTop(e);
  }

  const newUrl = "https://qtify-backend-labs.crio.do/albums/top";
  const topUrl = "https://qtify-backend-labs.crio.do/albums/new";
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Section title={"Top Albums"} collapse={true} handleClick = {handleExpandTop}>
          <Album url={newUrl} expand={expandTop}/>
        </Section>
        <Divider />
        <Section title={"New Albums"} collapse={true} handleClick = {handleExpandNew}>
          <Album url={topUrl} expand={expandNew}/>
        </Section>
        <Divider />
        <Section title={"Songs"} collapse={false}>
          <SongsSection/>
        </Section>
        <Divider />
        {/* <Faq /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
