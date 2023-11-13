import React from 'react';

const SectionTitleComponent = ({ title }) => {
  const sectionStyle = {
    width: '100%',
    backgroundColor: 'gray', // Color de fondo gris oscuro
    color: 'white', // Color del texto blanco
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={sectionStyle}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitleComponent;
