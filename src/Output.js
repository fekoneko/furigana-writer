const Output = ({ inputText }) => {
  return (
    <div className="Output">
      <label htmlFor="output">Output:</label>
      <pre id="output">
        {
          (() => {
            const rubyExpression = /\[[^,[\]]+,[^,[\]]+\]/g;
            const rubies = inputText.match(rubyExpression);
            const strings = inputText.split(rubyExpression);
            if (rubies)
            {
              return (
                <>
                  {
                    rubies.map((ruby, i) => {
                      const rubyParts = ruby.match(/[^,[\]]+/g);
                      return (
                        <span key={i} id={`outputBlock${i}`}>
                          {strings[i]}
                          <ruby>
                            {rubyParts[0]}
                            <rt>{rubyParts[1]}</rt>
                          </ruby>
                        </span>
                      );
                    })
                  }
                  <span id={`outputBlock${rubies.length}`}>
                    {strings[rubies.length]}
                  </span>
                </>
              );
            } else {
              return (
                <span id={0}>
                  {strings[0]}
                </span>
              );
            }
          })()
        }
      </pre>
    </div>
  );
}

export default Output;