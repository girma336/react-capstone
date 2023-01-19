import PropTypes from 'prop-types';
import React from 'react';
import ElementList from './listElement';
import '../styleSheet/mainElement.css';

const ElementItem = (props) => {
  const { spaces } = props;
  return (
    <div className="container">
      {spaces.map((space) => (
        <ElementList
          key={space.id}
          name={space.name}
          id={space.id}
          gender={space.gender}
          origin={space.origin}
          status={space.status}
          imageUrl={space.img_url}
          species={space.species}
          hair={space.hair}
          data={space}
        />
      ))}
    </div>
  );
};
ElementItem.propTypes = {
  spaces: PropTypes.instanceOf(Array),
};

ElementItem.defaultProps = {
  spaces: null,
};
export default ElementItem;
