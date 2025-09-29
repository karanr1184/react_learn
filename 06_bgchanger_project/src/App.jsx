import Colorbtn from "./components/Colorbtn"


function App() {
  const colors = [
    {
      "color": "Red",
      "hex": "#E62727",
      "fontcolor": "#ffffff"
    },
    {
      "color": "Green",
      "hex": "#78C841",
      "fontcolor": "#ffffff"
    },
    {
      "color": "Blue",
      "hex": "#33A1E0",
      "fontcolor": "#ffffff"
    },
    {
      "color": "Olive",
      "hex": "#B8C4A9",
      "fontcolor": "#ffffff"
    },
    {
      "color": "Gray",
      "hex": "#DCDCDC",
      "fontcolor": "#ffffff"
    },
    {
      "color": "Yellow",
      "hex": "#FFD93D",
      "fontcolor": "#000000"
    },
    {
      "color": "Pink",
      "hex": "#F564A9",
      "fontcolor": "#000000"
    },
    {
      "color": "Purple",
      "hex": "#9929EA",
      "fontcolor": "#ffffff"
    },
    {
      "color": "Lavender",
      "hex": "#c77dff",
      "fontcolor": "#000000"
    },
    {
      "color": "White",
      "hex": "#ffffff",
      "fontcolor": "#000000"
    },
    {
      "color": "Black",
      "hex": "#292929",
      "fontcolor": "#ffffff"
    },
  ]
  return (
    <>
      <div className="w-6xl p-3 bg-white rounded-2xl fixed bottom-10 place-self-center-safe">
        <div className="flex gap-2">
          {colors.map(({color, hex, fontcolor}) => <Colorbtn color={color} hexValue={hex} fontcolor={fontcolor}/>)}
        </div>
      </div>
    </>
  )
}

export default App
