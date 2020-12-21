import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Fruitables',
  description: 'We sell fresh organic fruits and vegetables',
  keyword: 'fresh, fruits, organic, vegetables, vegetarian, vegan',
};

export default Meta;
