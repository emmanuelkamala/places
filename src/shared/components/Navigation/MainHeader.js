import React from 'react';
import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <MainHeader className="MainHeader">
      { props.children }
    </MainHeader>
  )
}

export default MainHeader;
