import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
//Components
import Main from "./components/Main";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/buynow" element={<WorkPage />} />
            <Route path="/ourproducts" element={<MySkillsPage />} />
            {/* <Route path="*" element={<Main />} /> */}
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
