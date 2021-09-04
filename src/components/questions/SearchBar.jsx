import React, { useState } from 'react';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';


const SearchBar = ({searchQuestion}) => {

  const { Search } = Input;

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleChange = e => {
      setSearchQuery(e.target.value);
      searchQuestion(e.target.value)
  };

  return (
    <Space direction="vertical">
      <Search 
      id="searchQuestions"  
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."  
      name="searchQuestions"
      value={searchQuery}
      type="text"
      enterButton 
      maxLength="1000" 
      onChange={(e) => handleChange(e)}
      style={{boxSizing: "content-box", padding: 3, width: "99.8vw"}}
      />
    </Space>
  );
};

export default SearchBar;