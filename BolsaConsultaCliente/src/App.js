
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Footer } from "./components/footer";
import './App.css';


  const App = () => {

  
    return (
      <div>
        <Header data={Header} />
        <Body data={Body} />
        <Footer data={Footer} />
      </div>
    );
  };
  
  export default App;
