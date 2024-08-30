const apiUrl = 'http://127.0.0.1:80';



// Make a GET request
fetch(apiUrl + "/listado_tot")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });