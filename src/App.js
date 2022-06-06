import React, { useEffect } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import SignIn from './component/SignIn';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import PageNotFound from './component/PageNotFound';
import LogoutRoute from './routes/LogoutRoute';
import { useDispatch } from 'react-redux';
import { auth } from './feature/user/logUser'
import axios from 'axios'
const serveur = 'http://localhost:3001'
axios.defaults.withCredentials = true

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${serveur}/api/isAuth`)
    .then(res => {
       dispatch(auth(res.data.msg));
    })
  },[])

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
