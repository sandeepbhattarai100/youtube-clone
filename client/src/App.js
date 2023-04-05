
import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import NavBar from './components/NavBar';

import { darkTheme, lightTheme } from './utils/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import VideoPage from './pages/VideoPage';
import SignIn from './pages/SignIn';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container >
        <BrowserRouter>
          {/* menu */}
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* main */}
          <Main>
            <NavBar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Homepage />} />
                  <Route path='video' >
                    <Route path=":id" element={<VideoPage/>} />
                  </Route>
<Route path='signin' element={<SignIn/>}></Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
display: flex;
`;
const Main = styled.div`
flex: 7;
background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
padding: 20px 15px;

`;
