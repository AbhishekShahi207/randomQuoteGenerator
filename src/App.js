import { useEffect, useState } from "react";
import "./App.css";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  const genrateQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  return (
    <div className="App  text-center flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-yellow-200 ">
      <div className="container w-[500px] ">
        <div className="box bg-slate-200 h-[190px] bg-gradient-to-r from-slate-500 to-slate-800 text-white rounded font-bold">
          <h1 className=" text-2xl pt-[20px] px-1">{quote}</h1>
          <h4 className="mt-4">-{author}</h4>
        </div>
        <button
          className=" mt-7 border-black border-2 p-3 
           rounded-md 
            bg-gradient-to-r from-slate-300 to-slate-800 text-white"
          onClick={genrateQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
