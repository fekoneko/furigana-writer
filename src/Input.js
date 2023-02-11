const Input = ({ inputText, setInputText}) => {
  return (
    <form className="Input" onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="input">Input:</label>
        <textarea
          id="input"
          autoFocus
          placeholder="Enter your text here..."
          onChange={ (e) => setInputText(e.target.value) }
          value={inputText}
        />
      </form>
  );
}

export default Input;