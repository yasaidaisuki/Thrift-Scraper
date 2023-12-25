import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function CreateForm() {
  const history=useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  async function submit(e) {
    e.preventDefault();
    
    try{

      await axios.post("http://localhost:5173/create",{
        email,password
      })
      .then(res => {
        if (res.data == "exist"){
          alert("User already exists")
        }
        else if (res.data == "nonexist"){
          history("/home,",{state:{id:email}})
        }
      })
      .catch(e=>{
        alert("incorrect login");
        console.log(e)
      })

    }
    catch(e) {
      console.log(e);
    }

  }

  return (
    <section>
      <div className=" relative items-center w-full px-5 py-40 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black text-center">CREATE ACCOUNT</h2>
            </div>
          </div>
          <form action="POST">
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) =>  {setEmail(e.target.value)}}
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="user@email.com"
                  autoComplete="off"
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => {setPass(e.target.value)}}
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="******"
                  autoComplete="off"
                />
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                  onClick={submit}
                >
                  Create New Account
                </button>
              </div>
              <div className="col-span-full">
              <Link to="/"
                  className="items-center justify-center w-full px-3 text-center text-black duration-200 hover:text-slate-400 "
                  type="submit"
                >
                  Main Page 
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateForm;
