import logo from './logo.svg';
import classes from './App.scss';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import MainCard from './components/MainCard';
import Examples from './components/Examples';

function App() {
  return (
    <>

    <Header></Header>
    <MainCard></MainCard>
    <Examples></Examples>
    </>
  );
}

export default App;
