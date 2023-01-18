import { Route, Routes } from 'react-router-dom';
import App from '../core/App';
import Movie from '../functional/Movie';
import { NotFound } from '../functional/NotFound';

export const routing = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/movies/:title' element={<Movie />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};
