import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-6 md:gap-8 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <div className="flex-1">
          <Link
            to="/"
            className="text-4xl semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 rounded-lg text-white">
              Auto
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-semibold">
              This website is a blog about cars. It is a place where car enthusiasts can share their thoughts and experiences about cars.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
            <form className="flex flex-col gap-4">
                <div>
                    <Label value="Your username"/>
                    <TextInput
                       type='text'
                       placeholder='Username'
                       id='username'
                    />
                </div>
                <div>
                    <Label value="Your email"/>
                    <TextInput
                       type='text'
                       placeholder='Email'
                       id='email'
                    />
                </div>
                <div>
                    <Label value="Your password"/>
                    <TextInput
                       type='text'
                       placeholder='Password'
                       id='password'
                    />
                </div>
                <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
            </form>
            <div className="text-sm mt-5 flex gap-2">
                <span>Have an account?</span>
                <Link to="/sign-in" className="text-indigo-500">Sign in</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
