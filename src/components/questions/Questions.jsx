import React, { useState } from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;

const Questions = ({questionList, productDetails}) => { 

  const [isMoreQARendered, setIsMoreQARendered] = useState(false);

  const [toggleRemainingAs, setToggleRemainingAs] = useState(false);

  const [firstQObj, secondQObj, thirdQObj, fourthQObj, ...remainingQList] = questionList;

  const sortedInitialQs = questionList.slice(0, 4).sort((a, b) => b.helpfulCount - a.helpfulCount);

  const sortedRemainingQs = remainingQList.slice(0, 4).sort((a, b) => b.helpfulCount - a.helpfulCount);

  const sortedInitialAs = answers => {

    let result = [];

    const sortedSellersList = answers.slice(0, 2).filter(answer => answer.isSeller === true);

    const sortedHelpfulCountList = answers.slice(0, 2).sort((a, b) => b.helpfulCount - a.helpfulCount);

    const combinedList = sortedSellersList.concat(sortedHelpfulCountList);

    for (let i = 0; i < combinedList.length; i++) {
      if (result.indexOf(combinedList[i]) === -1) {
        result.push(combinedList[i]);
      }
    }
    return result;
  };

  const sortedRemainingAs = answers => {

    const [firstAnswerObj, secondAnswerObj, ...remainingAnswersList] = answers;

    let result = [];

    const sortedSellersList = remainingAnswersList.filter(answer => answer.isSeller === true);

    const sortedHelpfulCountList = remainingAnswersList.sort((a, b) => b.helpfulCount - a.helpfulCount);

    const combinedList = sortedSellersList.concat(sortedHelpfulCountList);

    for (let i = 0; i < combinedList.length; i++) {
      if (result.indexOf(combinedList[i]) === -1) {
        result.push(combinedList[i]);
      }
    }
    console.log('REMAINING ANSWERS SORTED: ',result);
    return result;
  };

  const toggleRemainingQA = () => {
    setIsMoreQARendered(!isMoreQARendered);
  };

  return (
    <div> 
      <Collapse accordion> 
      {sortedInitialQs && sortedInitialQs.length > 0 && sortedInitialQs.map(question => (
        <Panel 
        key={question.questionId}
        header={
        <Question 
        questionObj={question}
        updatedDataList={questionList}
        productObj={productDetails}
        />}
        >
          {sortedInitialAs(question.answers) && sortedInitialAs(question.answers).length > 0 && sortedInitialAs(question.answers).map(answer => 
              <div key={answer.answerId}>
                {<Answer 
                answerObj={answer} 
                updatedDataArr={questionList}
                />}
              </div>
          )}
          {question.answers.length > 2 && (
          <a href="#!"
          className="seeMoreAnswersLink"
          onClick={() => setToggleRemainingAs(!toggleRemainingAs)}
          >
            {toggleRemainingAs === false ? "See more answers" : "Collapse answers"}
          </a>
          )}
          {toggleRemainingAs === true && (
              sortedRemainingAs(question.answers).map(answer => (
                <div key={answer.answerId}>
                  {<Answer 
                  answerObj={answer} 
                  updatedDataArr={questionList}
                  />}
                </div>
              ))
          )}
        </Panel>
      ))}
      </Collapse>   
      {(questionList.length - 1 > 4) && (
        <div id="moreAnsweredQs">
          <Button 
          id="moreAnsweredQsBtn"
          type="primary"
          onClick={() => {toggleRemainingQA()}}
          >
            <span>MORE ANSWERED QUESTIONS</span>
          </Button>
          
          {isMoreQARendered && (
            <div id="moreAnsweredQsAccordion">
              <Collapse accordion> 
                {sortedRemainingQs.map(question => (
                <Panel 
                  key={question.questionId}
                  header={
                  <Question 
                  questionObj={question}
                  updatedDataList={questionList}
                  productObj={productDetails}
                  />}
                >
                    {question.answers.map(answer => 
                        <div key={answer.answerId}>
                          {<Answer 
                          answerObj={answer} 
                          updatedDataArr={questionList}
                          />}
                        </div>
                    )}
                </Panel>
                ))}
              </Collapse>
            </div>
          )}
        </div>
        )}   
        {console.log('Question List: ',questionList)}
        {console.log('REMAINING QA LIST: ',remainingQList)}                
      </div>  
    );
};

export default Questions;











// import React, { useState } from 'react';
// import Question from './Question.jsx';
// import Answer from './Answer.jsx';
// import { Button, Collapse } from 'antd';

// const { Panel } = Collapse;

// const Questions = ({questionList, productDetails}) => { 

//   const [isMoreQARendered, setIsMoreQARendered] = useState(false);

//   const [toggleRemainingAs, setToggleRemainingAs] = useState(false);

//   const [firstQObj, secondQObj, thirdQObj, fourthQObj, ...remainingQList] = questionList;

//   const sortedInitialQs = questionList.slice(0, 4).sort((a, b) => b.helpfulCount - a.helpfulCount);

//   const sortedRemainingQs = remainingQList.slice(0, 4).sort((a, b) => b.helpfulCount - a.helpfulCount);

//   const sortedInitialAs = answers => {

//     let result = [];

//     const sortedSellersList = answers.slice(0, 2).filter(answer => answer.isSeller === true);

//     const sortedHelpfulCountList = answers.slice(0, 2).sort((a, b) => b.helpfulCount - a.helpfulCount);

//     const combinedList = sortedSellersList.concat(sortedHelpfulCountList);

//     for (let i = 0; i < combinedList.length; i++) {
//       if (result.indexOf(combinedList[i]) === -1) {
//         result.push(combinedList[i]);
//       }
//     }
//     return result;
//   };

//   const sortedRemainingAs = answers => {

//     const [firstAnswerObj, secondAnswerObj, ...remainingAnswersList] = answers;

//     let result = [];

//     const sortedSellersList = remainingAnswersList.filter(answer => answer.isSeller === true);

//     const sortedHelpfulCountList = remainingAnswersList.sort((a, b) => b.helpfulCount - a.helpfulCount);

//     const combinedList = sortedSellersList.concat(sortedHelpfulCountList);

//     for (let i = 0; i < combinedList.length; i++) {
//       if (result.indexOf(combinedList[i]) === -1) {
//         result.push(combinedList[i]);
//       }
//     }
//     console.log('REMAINING ANSWERS SORTED: ',result);
//     return result;
//   };

//   const toggleRemainingQA = () => {
//     setIsMoreQARendered(!isMoreQARendered);
//   };

//   return (
//     <div> 
//       <Collapse accordion> 
//       {sortedInitialQs.map(question => (
//         <Panel 
//         key={question.questionId}
//         header={
//         <Question 
//         questionObj={question}
//         updatedDataList={questionList}
//         productObj={productDetails}
//         />}
//         >
//           {sortedInitialAs(question.answers).map(answer => 
//               <div key={answer.answerId}>
//                 {<Answer 
//                 answerObj={answer} 
//                 updatedDataArr={questionList}
//                 />}
//               </div>
//           )}
//           {question.answers.length > 2 && (
//           <a href="#!"
//           className="seeMoreAnswersLink"
//           onClick={() => setToggleRemainingAs(!toggleRemainingAs)}
//           >
//             {toggleRemainingAs === false ? "See more answers" : "Collapse answers"}
//           </a>
//           )}
//           {toggleRemainingAs === true && (
//               sortedRemainingAs(question.answers).map(answer => (
//                 <div key={answer.answerId}>
//                   {<Answer 
//                   answerObj={answer} 
//                   updatedDataArr={questionList}
//                   />}
//                 </div>
//               ))
//           )}
//         </Panel>
//       ))}
//       </Collapse>   
//       {(questionList.length - 1 > 4) && (
//         <div id="moreAnsweredQs">
//           <Button 
//           id="moreAnsweredQsBtn"
//           type="primary"
//           onClick={() => {toggleRemainingQA()}}
//           >
//             <span>MORE ANSWERED QUESTIONS</span>
//           </Button>
          
//           {isMoreQARendered && (
//             <div id="moreAnsweredQsAccordion">
//               <Collapse accordion> 
//                 {sortedRemainingQs.map(question => (
//                 <Panel 
//                   key={question.questionId}
//                   header={
//                   <Question 
//                   questionObj={question}
//                   updatedDataList={questionList}
//                   productObj={productDetails}
//                   />}
//                 >
//                     {question.answers.map(answer => 
//                         <div key={answer.answerId}>
//                           {<Answer 
//                           answerObj={answer} 
//                           updatedDataArr={questionList}
//                           />}
//                         </div>
//                     )}
//                 </Panel>
//                 ))}
//               </Collapse>
//             </div>
//           )}
//         </div>
//         )}   
//         {console.log('Question List: ',questionList)}
//         {console.log('REMAINING QA LIST: ',remainingQList)}                
//       </div>  
//     );
// };

// export default Questions;
