import Input from "./Input";
import Output from "./Output";

const Content = ({ inputText, setInputText }) => {
  return (
    <main className="Content" role="main">
      <Input
        inputText={inputText}
        setInputText={setInputText}
      />
      <Output inputText={inputText} />
    </main>
  )
};

export default Content;