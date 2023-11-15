import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Main from './Main';

export default function Mainindex() {
  const [questions, setQuestions] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    async function getQuestion() {
      await axios.get("http://localhost:80/api/question/").then((res) => {
        setQuestions(res.data.reverse());
        setAPIData(res.data);
      });
    }
    getQuestion();
  }, []);

  const filteredQuestions = searchInput
    ? APIData.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : questions;

  return (
    <>
      <Sidebar />
      <div className=' p-12 backdrop-blur-md'>
    
    <div className="relative mx-12">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        className="w-full pl-10 pr-4 py-2 border  focus:ring
         focus:ring-blue-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg"
        placeholder="Search questions by title"
      />
      <button className="absolute right-3 bottom-3 text-gray-500 hover:text-purple-800 focus:outline-none">
        <i className="bi bi-search pt-5"></i>
      </button>
    </div>
    <p className="mt-3 mx-12 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-300  rounded-lg">
      {filteredQuestions.length} questions
    </p>
    <Main questions={filteredQuestions} />
  </div>
    </>
  );
}
