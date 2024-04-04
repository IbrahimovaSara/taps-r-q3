





const apiKey = '4cc43c9591f08a993e37d3de55e50a72';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    console.log("Ən məşhur filmlər:");
    movies.forEach(movie => {
      console.log(movie.title);
    });
  })
  .catch(error => console.log("Xəta baş verdi:", error));






