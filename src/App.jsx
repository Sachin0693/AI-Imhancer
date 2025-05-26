import Home from "./components/Home"
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 px-2 py-5">
      <div className="text-center pb-2"><h1 className="text-3xl font-bold text-gray-800 hover:text-gray-600">AI Imhancer</h1></div>
      <Home />
      <div className="text-xl p-4 text-emerald-500">Made with love by Sachin</div>
    </div>
  )
}

export default App
