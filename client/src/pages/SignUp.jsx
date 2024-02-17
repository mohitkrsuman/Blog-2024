import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value.trim() });
  };
  // console.log(formdata);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      const body = { ...formdata };
      const response = await axios.post("/api/auth/signup", body);

      if (!response.data.success) {
        setErrorMessage("An error occurred. Please try again.");
      } 

      if(response.data.success){
         navigate("/sign-in");
      }

      setLoading(false);
    } catch (err) {
      setErrorMessage("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-6 md:gap-8 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <div className="flex-1">
          <Link to="/" className="text-4xl semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 rounded-lg text-white">
              Auto
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-semibold">
            This website is a blog about cars. It is a place where car
            enthusiasts can share their thoughts and experiences about cars.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="text"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading....</span>
                </>
              ) : (
                "Sign up"
              )}
            </Button>
          </form>
          <div className="text-sm mt-5 flex gap-2">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-indigo-500">
              Sign in
            </Link>
          </div>
          {errorMessage && (
            <Alert type="danger" color="failure" className="mt-5">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
