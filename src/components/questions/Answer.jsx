import React, { useState } from 'react';

const Answer = ({answerObj, updatedDataArr}) => {
  const [helpfulCount, setHelpfulCount] = useState(answerObj.helpfulCount);
  const [helpfulIsOnlyOnce, setHelpfulIsOnlyOnce] = useState(true);
  const [isReported, setIsReported] = useState(answerObj.isReported);
  const [photoHelpfulCount, setPhotoHelpfulCount] = useState(answerObj.photo.photoHelpfulCount);
  const [photoHelpfulIsOnlyOnce, setPhotoHelpfulIsOnlyOnce] = useState(true);
  const [isPhotoReported, setIsPhotoReported] = useState(answerObj.photo.isPhotoReported);
  const [updatedData, setUpdatedData] = useState(updatedDataArr);

  const handleUpdateHelpfulCount = e => {
    e.preventDefault();

    if (helpfulIsOnlyOnce === true) {
      setHelpfulCount(helpfulCount + 1);
      setHelpfulIsOnlyOnce(false);
      const newData = [...updatedDataArr, answerObj.helpfulCount = answerObj.helpfulCount + 1];
      setUpdatedData(newData)
    }
  };

  const handleUpdatePhotoHelpfulCount = e => {
    e.preventDefault();

    if (photoHelpfulIsOnlyOnce === true) {
      setPhotoHelpfulCount(photoHelpfulCount + 1);
      setPhotoHelpfulIsOnlyOnce(false);
      const newData = [...updatedDataArr, answerObj.photo.photoHelpfulCount = answerObj.photo.photoHelpfulCount + 1];
      setUpdatedData(newData);
    }
  }

  const handleReports = () => {
    setIsReported(true);
    const newData = [...updatedDataArr, answerObj.isReported = true];
    setUpdatedData(newData)
  };

  const handlePhotoReports = () => {
    setIsPhotoReported(true);
    const newData = [...updatedDataArr, answerObj.photo.isPhotoReported = true];
    setUpdatedData(newData)
  };

  // const handleImages = () => {
  //   return answerObj.photo.images.map((pic, idx) => {
  //     return (
  //     <img 
  //     src ={pic} 
  //     key={answerObj.answerId + idx}
  //     alt = "some photo"
  //     width = "200px"
  //     height = "200px"
  //     />
  //     );
  //   })
  // };

  return (
    <div>
        <div className="answer">
          <span>
            <strong>A:</strong>
          </span>
          <p className="answerBody">
            {answerObj.body}
          </p>
        </div>

        <span>
          by: {answerObj.isSeller ? <strong>Seller</strong> : answerObj.user}, {answerObj.date} | Helpful? <a href="#!" onClick={(e) => handleUpdateHelpfulCount(e)}><u>Yes</u></a> <span className="answerHelpfulCount">({helpfulCount})</span> | <a href="#!" onClick={() => handleReports()}><u>{isReported === true ? 'Reported': 'Report'}</u></a>
        </span>
         <hr style={{borderColor: 'orange'}}/>
          {answerObj.photo.images.length > 0 && (
          <div className="photoInfo">
            <p>{answerObj.photo.photoBody}</p>
            {/* {handleImages()} */}
            {answerObj.photo.images.map((pic, idx) => (
              <img 
              key={answerObj.answerId + idx}
              src={pic}
              alt="some photo"
              width="200px"
              height="200px"
              />
              )
            )}
            <br/>
            <span>
              by: {answerObj.isSeller ? <strong>Seller</strong> : answerObj.user}, {answerObj.date} | Helpful? <a href="#!" onClick={(e) => handleUpdatePhotoHelpfulCount(e)}><u>Yes</u></a> ({answerObj.photo.photoHelpfulCount}) | <a href="#!" onClick={() => handlePhotoReports()}><u>{isPhotoReported === true ? 'Reported': 'Report'}</u></a>
            </span>
            <hr style={{borderColor: 'purple'}}/>
          </div>)}
          {console.log(updatedData)}
      </div>
  );
};

export default Answer;