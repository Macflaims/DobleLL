import React from 'react';

const SectionTitleComponent = ({ title }) => {
  const sectionStyle = {
    width: '100%',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div classname="" style={sectionStyle}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitleComponent;
