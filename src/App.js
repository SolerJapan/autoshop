import './App.css';
import servicesList from './servicesList';
import Title from './Title';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <Title
          title="My Auto Shop"
          subHeading="This is my shop"
        />
        <servicesList serviceData={props.serviceData} />
      </header>
    </div>
  );
}

export default App;
