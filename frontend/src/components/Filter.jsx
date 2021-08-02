import React from 'react';
import { Input, Button } from 'antd';
import { PlusCircleFilled, SearchOutlined } from '@ant-design/icons';

const Filter = ({ handleChange, handleClick, toggleVisibility }) => (
  <div className="Filter">
    <div className="searchBar">
      <Input
        width=""
        placeholder="Search Tasks"
        onChange={handleChange}
        bordered="true"
        prefix={<SearchOutlined />}
      />
    </div>
    <Button
      type="primary"
      ghost
      shape="circle"
      size="medium"
      icon={<PlusCircleFilled />}
      onClick={handleClick}
    />
  </div>
);

export default Filter;
