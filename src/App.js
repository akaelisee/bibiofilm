import './assets/style/index.scss';
import LoadingHome from './Components/loadingHome';
import Router from './Routes/router';

function App() {
  return (
    <div className="App">
      <Router />
      <LoadingHome />
    </div>
  );
}

export default App;