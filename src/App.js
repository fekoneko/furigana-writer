import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const [ inputText, setInputText ] = useState('');
  
  return (
    <div className="App">
      <Header />
      <Content 
        inputText={inputText}
        setInputText={setInputText}
      />
      <Footer/>
    </div>
  );
}

export default App;