import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
//import "./App.css";
import Tickets from "./Tickets"
function Prompt() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );
  const configuration = new Configuration({
    apiKey: "",
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setLoading(false);
    setResult(res.data.data[0].url);
  };
  return (
    <div className="flex flex-col gap-8 justify-center items-center p-10 ">
      {loading ? (
        <>
          <h2 className="text-3xl font-bold text-white">Generating..Please Wait..</h2>
          <div className="animate-bounce w-6 h-6 rounded-full bg-blue-700 relative top-10"></div> 

          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-white">Generate an Image using Open AI API</h2>
            <textarea
            className="border-2 border-white bg-gradient-to-r from-gray-900 to-gray-700 text-white w-[55%] round-lg p-1"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />
            
          
          <button onClick={generateImage} className="text-lg font-bold p-3 bg-gray-600 rounded-lg border-gray-400 border-2 text-white">Generate an Image</button>
          {result.length > 0 ? (
            <div>
              <img className="rounded-lg w-[50%] flex items-center justify-center" src={result} alt="result" />
            <  Tickets />
            </div>
            
          ) : (
            <></>
          )}
        </>
      )}
    </div>


  );
}

export default Prompt;
