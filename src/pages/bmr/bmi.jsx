import React, { useState } from 'react';

export default function BmiResult() {
  const [inputArr, setInputArr] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    rollNo: ""
  });

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleAdd() {
    setInputArr([...inputArr, inputData]);
    console.log(inputData, "input data that we entered...!");
    setInputData({ name: "", rollNo: "" });
  }

  function handleConsole() {
    console.log("Data stored in array:", inputArr);
  }

  return (
    <div>
      <div className="App">
        <input
          type="text"
          name="name"
          value={inputData.name}
          onChange={handleChange}
          className="w-[rem] h-[rem]"
        />
        <input
          type="text"
          name="rollNo"
          value={inputData.rollNo}
          onChange={handleChange}
          className=""
        />
        <button
          onClick={handleAdd}
          className="font-bold text-xl bg-red-600 border-2 rounded-full"
        >
          Add It
        </button>
        <button
          onClick={handleConsole}
          className="font-bold text-xl bg-red-600 border-2 rounded-full"
        >
          Console
        </button>

        <table border={1} width="30%" cellPadding={10} className="">
          <tbody>
            <tr className="">
              <td className="">Name</td>
              <td className="">Roll No</td>
            </tr>
            {inputArr.map((info, ind) => (
              <tr key={ind}>
                <td>{info.name}</td>
                <td>{info.rollNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
