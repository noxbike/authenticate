import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import SignIn from './component/SignIn';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import PageNotFound from './component/PageNotFound';
import LogoutRoute from './routes/LogoutRoute';
import Pages from './routes/index';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Routes id="view">

          <Route element={<LogoutRoute />}>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Route>

          <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <footer>
          <small className='copyright'>Copyright © noxbike 2021</small>
        </footer>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
