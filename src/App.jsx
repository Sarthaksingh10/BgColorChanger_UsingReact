import { useState } from "react";

function App() {
  const [bgcolorchange, setbgcolorchange] = useState("white");
  return (
    <>
      <div
        className="w-screen h-screen bg-slate-400 m-0 p-0 "
        style={{ backgroundColor: bgcolorchange }}
      >
        <div className="h-14 w-4/5 bg-white rounded-xl absolute inset-x-0 bottom-2 left-32 flex">
          <button
            onClick={() => setbgcolorchange("red")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Red", color: "white" }}
          >
            Red
          </button>

          <button
            onClick={() => setbgcolorchange("Green")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1 "
            style={{ backgroundColor: "Green", color: "white" }}
          >
            Green
          </button>

          <button
            onClick={() => setbgcolorchange("Olive")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1 "
            style={{ backgroundColor: "Olive", color: "white" }}
          >
            Olive
          </button>

          <button
            onClick={() => setbgcolorchange("Blue")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Blue", color: "white" }}
          >
            Blue
          </button>

          <button
            onClick={() => setbgcolorchange("Purple")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Purple", color: "white" }}
          >
            Purple
          </button>

          <button
            onClick={() => setbgcolorchange("Orange")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Orange", color: "white" }}
          >
            Orange
          </button>

          <button
            onClick={() => setbgcolorchange("Gray")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Gray", color: "white" }}
          >
            Gray
          </button>

          <button
            onClick={() => setbgcolorchange("Yellow")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Yellow", color: "Black" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setbgcolorchange("Lavender")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Lavender", color: "Black" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setbgcolorchange("Pink")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Pink", color: "white" }}
          >
            Pink
          </button>

          <button
            onClick={() => setbgcolorchange("Black")}
            className="h-12 w-24 rounded-3xl ml-3 border-black border-2 mt-1"
            style={{ backgroundColor: "Black", color: "white" }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
