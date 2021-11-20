import React, { useState } from "react";
import axios from "axios";
import "slackcontactform.css";
// tailwind styling imported in index.html
//https://www.youtube.com/watch?v=kyIKpsWNHCw , https://tailwindcss.com/docs

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    // webhook from slack channel hook setup (https://justintime-talk.slack.com/services/2723913526019?updated=1) p3 setup here
    const webhookUrl =
      "https://hooks.slack.com/services/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";

    const data = {
      text: `Name: ${name} \n Email:${email} \n Message:${message}`,
    };

    let res = await axios.post(webhookUrl, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          // removing default axios headers - but with this the message isnt sent hence commenting this out
          // delete headers.post["Content-Type"];
          return data;
        },
      ],
    });

    // if the message was successfully sent
    if (res.status === 200) {
      alert("Message Sent! Please expect a response in 48 hours!");

      //clear state so text boxes clear after a successful submission
      setName("");
      setEmail("");
      setMessage("");
    } else {
      // else notify there was an error
      alert("There was an error.  Please try again later.");
    }
  }

  return (
    <div className="flex">
      <div className="w-1/2 container mx-auto mt-5">
        <form className="bg-gray-400 shadow-2xl border-gray-900 border-2 border-double shadow-md rounded px-8 pt-6 pb-8 mb-4 self-center">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2 "
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="message"
            type="message"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

        
           {/* https://tailwindcss.com/docs/outline */}
           <button
            className="mt-4 shadow-2xl bg-blue-600 w-full hover:bg-blue-700 focus:shadow-outline focus:outline-black text-black font-bold py-2 px-4 rounded"
            onClick={(e) => submitForm(e)}
          > Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
