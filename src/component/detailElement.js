import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../styleSheet/detaileElement.css';

const DetailElement = () => {
  const { idAPP } = useParams();
  const spaces = useSelector((state) => state.spaces.spaces);
  const navigate = useNavigate();
  const result = idAPP.indexOf('}');
  const numValu = idAPP.slice(0, result);
  const newVale = spaces.filter((data, index) => (index === Number(numValu) - 1));
  const render = newVale.map((data) => (
    <div key={data.id} className="detaile-val">
      <div className="detaile-val">
        <div className="image">
          <img src={data.img_url} alt={data.name} />
        </div>
        <div className="discription">
          <h5 className="name">
            <span>Name: </span>
            {' '}
            {data.name}
          </h5>
          <div>
            <p className="gender">
              <span>Gender: </span>
              {' '}
              {data.gender}
            </p>
            <p>
              <span>Origin : </span>
              {' '}
              {data.origin}
            </p>
            <p>
              <span>species : </span>
              {' '}
              {data.species}
            </p>
            <p>
              <span>Status : </span>
              {' '}
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="details-page">
      <header className="home-header">
        <div className="logo">
          <button
            type="button"
            className="btn-logo"
            onClick={() => navigate(-1)}
          >
            {' '}
            <IoIosArrowBack />
            Go back
          </button>
        </div>
      </header>
      <div className="detaile">
        <div className="image-new">
          {render}
        </div>
      </div>
    </div>
  );
};

export default DetailElement;
