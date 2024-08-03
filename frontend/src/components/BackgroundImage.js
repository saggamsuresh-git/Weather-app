import React from 'react';

const BackgroundImage = ({ weatherDescription }) => {
  const getBackgroundStyle = () => {
    if (weatherDescription.toLowerCase().includes('rain')) return { backgroundImage: 'url(/path/to/rainy.jpg)' };
    if (weatherDescription.toLowerCase().includes('clear')) return { backgroundImage: 'url(/path/to/clear.jpg)' };
    return { backgroundImage: 'url(/path/to/default.jpg)' };
  };

  return (
    <div style={{ ...getBackgroundStyle(), height: '100vh', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  );
};

export default BackgroundImage;
