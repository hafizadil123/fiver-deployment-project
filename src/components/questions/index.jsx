import React, { useState, useEffect } from 'react';
import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
import AddQuestion from './AddQuestion.jsx';
import dummyData from './dummyData.js';

const QuestionsAndAnswers = () => { 

  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const [productObj, setProductObj] = useState({});
  useEffect(() => {
    setProductObj(dummyData[0])
    setFilteredQuestions(dummyData[0].questions)
  }, [])

  const handleSearchQuestion = query => {
    if (query.length < 3) {
      setFilteredQuestions(productObj.questions)
    } else {
      const questions = productObj.questions;
      const refinedQuestions = questions.filter(question => {
        return question.body.toLowerCase().includes(query.toLowerCase());
      })
      setFilteredQuestions(refinedQuestions)
    }
  };
  return (
    <div>
      <h2>Questions & Answers</h2>
      <SearchBar searchQuestion={(query) => handleSearchQuestion(query)}/>
      <Questions 
      questionList={filteredQuestions || []} 
      productDetails={productObj}
      />
      <AddQuestion
      productDetails={productObj} 
      questionList={productObj.questions || []}
      />
    </div>
  );
};

export default QuestionsAndAnswers;