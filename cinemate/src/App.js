



import React, { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`);
      const result = await response.json();
      setData(result.Search);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const download = (url) => {
    fetch(url)
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.png');
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <center>
        <h1>Search your Favorite Movie</h1>
        <form onSubmit={submitHandler}>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" /> <br />
          <input type="submit" value="search" />
        </form>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.map((movie) => (
            <div className="col-md-4" key={movie.imdbID}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} style={{ width: '100%' }} />
                <div className="card-body">
                  <h4 className="card-title">{movie.Title}</h4>
                  <a href={movie.Poster} className="btn btn-primary" onClick={() => download(movie.Poster)} download>
                    Download Poster
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default App;

