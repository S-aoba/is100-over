import { useState } from "react";

const Decimal = () => {
  const [decimal, setDecimal] = useState("");

  let handleChange = (e) => {
    setDecimal(e.target.value);
  };

  let clear = () => {
    setDecimal("");
  };

  let judge = (s) => {
    let number = parseInt(s);
    if (number >= 100) return "true";
    else return "false";
  };
  return (
    <div className="ml-14 mt-14 border-2 border-yellow-300 pb-10 inline-block">
      <div className="flex gap-4 my-10 mx-10">
        <div>
          <p>
            10進数: <input value={decimal} onChange={handleChange} className="border-2 border-blue-700" type="number" />
          </p>
          <div className="flex justify-end">
            <button onClick={clear} className="border-2 border-blue-500 px-3 mt-3 bg-blue-500 text-white">
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 ml-10">
        <p className="my-7">10進数:100以上かどうか：{judge(decimal)}</p>
      </div>
    </div>
  );
};

export default Decimal;
