import { useState } from 'react'
import './App.css'

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = (noClicks * 20) + 16;

  const firstImg = "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg = "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

  const handleNo = () => {
    setNoClicks(prev => prev + 1);
  };

  const handleYes = () => {
    setIsValentine(true);
  };
  const NO_PHRASES = [
    "No 💔",
    "Pretty please? 🥺",
    "But we'd be so cute together! 💕",
    "One more chance, pookie?",
    "Don't break my heart :(",
    "What about a maybe?",
    "Please don't do this to me, I'm fragile",
  ];

  return (
     <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {!isValentine
        ? (
          <>
            <img src={firstImg} />
            <h1>Will you be my Valentine? 💘</h1>
            <div>
              <button
                onClick={handleYes}
                style={{
                  fontSize: `${yesButtonSize}px`,
                  margin: "10px",
                  padding: "10px 20px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                style={{
                  fontSize: "16px",
                  margin: "10px",
                  padding: "10px 20px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {noClicks === 0 ? "No" : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
              </button>
            </div>
          </>
        )
        : (
          <>
            <img src={secondImg} />
            <div
              style={{
                fontSize: "48px",
                color: "pink",
                fontWeight: "bold",
              }}
            >
              Yay!!! 💖🎉
            </div>
          </>
        )}
    </div>
  )
}

export default App
