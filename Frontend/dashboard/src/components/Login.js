import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/schemes");
  }
  return (
    <form onSubmit={submitHandler} className="justify-center mx-auto max-w-[1280px]">
      <label className="text-green-800">
        <p>
          Email Address<sup>*</sup>
        </p>
        <input className=""
          required
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Email Address"
          onChange={changeHandler}
        />
      </label>
      <label className="text-green-800">
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          placeholder="Enter Passward"
          onChange={changeHandler}
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">Forgot Password</Link>
      </label>
      <button className="text-green-800 ml-[100px] border-2 border-x-black p-2">Login</button>
    </form>
  );
}

export default LoginForm;
