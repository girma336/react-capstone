import React from 'react';
import '../styleSheet/listElement.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ElementList = (props) => {
  const navigate = useNavigate();
  const {
    name, id, imageUrl, species, origin, data,
  } = props;
  const handleRouter = () => {
    navigate(`detailes/${id}}`, { state: data });
  };

  return (
    <button className="btn-action" type="button" onClick={handleRouter}>
      <div className="flex-container">
        <div className="name-h">
          <h5 className="name">{name}</h5>
        </div>
        <div className="image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="disc">
          <h6 className="origin">{origin}</h6>
          <p className="spa-name">
            {species}
            {' '}
            species
          </p>
        </div>
      </div>
    </button>
  );
};

ElementList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(Array)).isRequired,
};
export default ElementList;
