import { useState } from "react";

const HexaDecimal = () => {
  const [hexaDecimal, setHexaDecimal] = useState("");

  let clear = () => {
    setHexaDecimal("");
  };

  const hexaDecimalNumber = "0123456789ABCDEF";

  let handleChange = (e) => {
    let num = e.target.value;
    if (hexaDecimalNumber.indexOf(num[num.length - 1]) !== -1) setHexaDecimal(e.target.value);
  };

  let judge = (num) => {
    let temp = 0;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      temp = Math.pow(16, num.length - 1 - i) * parseInt(hexaDecimalNumber.indexOf(num[i]));
      sum += temp;
      //   console.log(temp);
    }
    return sum;
  };

  return (
    <div className="ml-14 mt-14 border-2 border-yellow-300 pb-10 inline-block">
      <div className="flex gap-4 my-10 mx-10">
        <div>
          <p>
            16進数: <input value={hexaDecimal} onChange={handleChange} className="border-2 border-blue-700" type="text" />
          </p>
          <div className="flex justify-end">
            <button onClick={clear} className="border-2 border-blue-500 px-3 mt-3 bg-blue-500 text-white">
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 ml-10">
        <p className="my-7">10進数: {judge(hexaDecimal)}</p>
        <p className="my-7">10進数:100以上かどうか：{judge(hexaDecimal) >= 100 ? "true" : "false"}</p>
      </div>
    </div>
  );
};

export default HexaDecimal;
