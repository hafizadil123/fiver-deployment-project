import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form, Input, Button } from 'antd';

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

const AddQuestion = ({ productDetails, questionList }) => {

  // const [form] = Form.useForm()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  };

  const modalContent = 
      (<Form {...layout} name="nest-messages" onFinish={(values) => console.log(values)} validateMessages={validateMessages}>
        <h2>Ask Your Question</h2>
        <h3>About the {productDetails.productName}</h3>
      <Form.Item 
      name={['user', 'question']} 
      label="Your Question"
      rules={[
            {
              required: true,
              message: "Please enter your question!"
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
        placeholder="Example: jackson11!" 
        maxLength="60" 
        />
        {/* <div>For privacy reasons, do not use your full name or email address</div> */}
      </Form.Item>
      <div>For privacy reasons, do not use your full name or email address</div>
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
      <div>For authentication reasons, you will not be emailed</div>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>);

  return (
    <div>
      {isModalOpen === false ? (
            <div className="closedPanel">
               <Button 
               id={questionList.length === 0 ? "addAQuestionBtnEmpty" : "addAQuestionBtnNotEmpty"}
               type="primary" 
               onClick={() => toggleModal()}>
                Add A Question +
               </Button>
            </div>
          ): 
          <div className="openPanel">
            <Modal 
            isOpen={isModalOpen}
            onRequestClose={() => toggleModal()}
            ariaHideApp={false}
            style={
              {
                overlay: {
                  backgroundColor: 'grey'
                },
              }
            }
            >
              {modalContent}
              <Button onClick={() => toggleModal()}>
                  Close
              </Button>
            </Modal>
          </div>}
    </div>
  )
}

export default AddQuestion;





