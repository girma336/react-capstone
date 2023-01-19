import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { feachData } from './Redux/elementSlices';
import SearchElement from './component/SearchElement';
import DetailElement from './component/detailElement';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feachData());
  });

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<SearchElement />} />
          <Route path="/detailes/:idAPP" element={<DetailElement />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
