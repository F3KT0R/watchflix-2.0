import React from 'react';
import AllMovies from '../functional/AllMovies';
import Nav from '../functional/Nav';
import Footer from '../functional/Footer';
import { requests } from '../utils/requests';

function App() {
  return (
    <div className='grid text-center align-middle self-center items-center font-roboto text-white bg-black min-h-screen'>
      <Nav />
      <AllMovies
        fetchUrl={requests.fetchNewMovies}
        searchUrl={requests.fetchSearch}
      />
      <Footer />
    </div>
  );
}

export default App;
