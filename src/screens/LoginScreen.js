import { useState } from "react";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  console.log(email)

  return (
    <div className="flex flex-col mt-36 justify-center items-center">
      <div className="flex flex-col w-[250px] font-bold">
        <input
          className="border-2 mb-3  py-2 px-2 rounded-lg"
          placeholder="Email"
          onChange={emailHandler}
        />
        <input
          className="border-2 mt-3 py-2 px-2 rounded-lg"
          placeholder="Password"
          onChange={passwordHandler}
        />
      </div>
      <button className="bg-blue-400 text-white font-bold rounded-xl px-9 py-2 mt-9 focus:outline-none focus:ring-2">
        Login
      </button>
    </div>
  );
}
