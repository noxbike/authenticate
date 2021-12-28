import './App.css';
import Form from './component/Form';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <img src='./image/compagnie_logo.png' alt='logo_compagnie' width="200"/>
        <Form/>
        <div className='login_link'>
          <a href='www.google.com'><small>Forgot password</small></a>
          <a href='www.google.com'><small>Don't have an account? Sign Up</small></a>
        </div>
        <small>Copyright © noxbike 2021</small>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
