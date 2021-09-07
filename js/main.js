$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    // console.log($('#searchText').val());
    e.preventDefault();
  })
});

function getMovies(movieName){
  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=121ad70a' + '&t=' + movieName).then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
}