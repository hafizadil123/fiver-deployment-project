import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: 'Your email is not a valid email!',
  },
};
/* eslint-enable no-template-curly-in-string */
    
const Question = ({questionObj, productObj, updatedDataList}) => {

    const [updatedData, setUpdatedData] = useState(updatedDataList);
    const [helpfulCount, setHelpfulCount]= useState(questionObj.helpfulCount);
    const [isOnlyOnce, setIsOnlyOnce]= useState(true);
    const [isModalOpen, setIsModalOpen]= useState(false);
    const [uploadFilesCount, setUploadFilesCount] = useState(0);

    const toggleModal = e => {
      e.stopPropagation();
      setIsModalOpen(!isModalOpen);
    };

    const handleUpdateHelpfulCount = e => {
      e.preventDefault();
      e.stopPropagation();

      if (isOnlyOnce === true) {
          setHelpfulCount(helpfulCount + 1);
          setIsOnlyOnce(false);
          const newData = [...updatedDataList, questionObj.helpfulCount = questionObj.helpfulCount + 1];
          setUpdatedData(newData)
      }
    };

  const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log('Not uploading ', info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
    setUploadFilesCount(info.fileList.length);
  },
};

    const modalContent = 
      (<Form {...layout} name="nest-messages" onFinish={(values) => console.log(values)} validateMessages={validateMessages}>
        <h2>Submit your Answer</h2>
        <h4>{productObj.productName}: {questionObj.body}</h4>
      <Form.Item 
      name={['user', 'answer']} 
      label="Your Answer"
      rules={[
            {
              required: true,
              message: "Please enter your answer!"
            },
          ]}
      >
        <Input.TextArea 
        maxLength="1000"
        />
      </Form.Item>
      <Form.Item
       name={['user', 'nickname']} 
       label="What is your nickname"
       rules={[
            {
              required: true,
              message: "Please enter your nickname!"
            },
          ]}
      >
        <Input 
        placeholder="jack543!" 
        maxLength="60" 
        />
        {/* <div>For privacy reasons, do not use your full name or email address.</div> */}
      </Form.Item>
       <div>For privacy reasons, do not use your full name or email address.</div>
      <Form.Item
        name={['user', 'email']}
        label="Your email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input 
        placeholder="Example: jack@email.com" 
        maxLength="60" 
        />
      </Form.Item>
      <div>For authentication reasons, you will not be emailed.</div>
        <Upload
          {...props}
          listType="picture"
          maxCount={5}
          multiple
          onDrop
        >
          {uploadFilesCount < 5 && (
          <Button icon={<UploadOutlined />}>
            Upload (Max: 5)
          </Button>)}
        </Upload>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>);

    return (
      <div className="question">
        <h4 className="questionBody">
          Q: {questionObj.body}
        </h4>  
        <span className="questionHelpful">
          Helpful? <a href="#!" onClick={handleUpdateHelpfulCount}><u>Yes</u></a> <span className ="questionHelpfulCount">({helpfulCount})</span> | <a className="addAnswer" href="#!" onClick={(e) => toggleModal(e)}> <u>Add Answer</u></a> 
       </span>
      <hr  style={{height: .5, borderColor : 'red'}}/>
       {isModalOpen && (
          <div className="openPanel">
          <Modal 
          isOpen={isModalOpen}
          onRequestClose={(e) => toggleModal(e)}
          ariaHideApp={false}
          style={
            {
              overlay: {
                backgroundColor: 'grey'
              }
            }
          }
          >
            {modalContent}
            <Button onClick={(e) => toggleModal(e)}>
                Close
            </Button>
          </Modal>
          </div>)}
          {console.log(updatedData)}
    </div> 
  );
}

export default Question;













