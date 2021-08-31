import './App.css';
import ServicesList from './ServicesList';
import Title from './Title';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <Title
          title="My Auto Shop"
          subHeading="This is my shop"
        />
        <ServicesList servicesData={props.servicesData} />
      </header>
    </div>
  );
}

export default App;
