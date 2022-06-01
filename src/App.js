import { Binary, Decimal, HexaDecimal } from "./component/index";
function App() {
  return (
    <div className="w-screen flex justify-center">
      <div>
        <div className="py-10 flex justify-center items-center">
          <p className="px-10 font-mono text-4xl text-blue-500 border-b-2 border-blue-400">is100Over?</p>
        </div>
        <div className="flex justify-around">
          <Decimal />
          <Binary />
          <HexaDecimal />
        </div>
      </div>
    </div>
  );
}

export default App;
