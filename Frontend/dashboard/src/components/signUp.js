import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function SignUpForm({setIsLoggedIn}) {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassward, setShowPassward] = useState(false);

  function changeHandler(event) {
    // event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Passward do not Match ");
      return
    }
    setIsLoggedIn(true);
    toast.success("Account Created")
    const accountData={
      ...formData
    }
    console.log(accountData);
    navigate("/dashboard")
  }
  return (
    <div>
      {/* Students -instructur tab */}

      <div>
        <button>Student</button>
        <button>Instructur</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name */}

        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              name="firstName"
            />
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              name="lastName"
            />
          </label>
        </div>

        {/* Email Address  */}

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email"
            name="email"
          />
        </label>

        {/* create Passward and confirm Passward */}
        <div>
          <label>
            <p>
              Create Passward<sup>*</sup>
            </p>
            <input
              required
              type={showPassward ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Create Password"
              name="password"
            />
            <span onClick={() => setShowPassward((prev) => !prev)}>
              {showPassward ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Passward<sup>*</sup>
            </p>
            <input
              required
              type={showPassward ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <span onClick={() => setShowPassward((prev) => !prev)}>
              {showPassward ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignUpForm;
