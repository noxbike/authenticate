import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Routes from './routes/index'
import SignIn from './component/SignIn';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div id="view">
          <Dashboard/>
        </div>
        <footer>
          <small className='copyright'>Copyright © noxbike 2021</small>
        </footer>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
