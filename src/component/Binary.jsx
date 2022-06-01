import { useState } from "react";

const Binary = () => {
  const [binary, setBinary] = useState("");
  const handleChange = (e) => {
    let s = e.target.value;
    let last = s[s.length - 1];
    if (last === undefined) return;
    else if (last === "0" || last === "1") setBinary(() => s);
  };

  let clear = () => {
    setBinary("");
  };
  const judge = (num) => {
    let temp = 0;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      temp = Math.pow(2, num.length - 1 - i) * parseInt(num[i]);
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
            2進数: <input value={binary} onChange={handleChange} className="border-2 border-blue-700" type="number" />
          </p>
          <div className="flex justify-end">
            <button onClick={clear} className="border-2 border-blue-500 px-3 mt-3 bg-blue-500 text-white">
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 ml-10">
        <p className="my-7">10進数への変換値： {judge(binary)}</p>
        <p className="my-7">2進数:100以上かどうか：{judge(binary) >= 100 ? "true" : "false"}</p>
      </div>
    </div>
  );
};

export default Binary;
