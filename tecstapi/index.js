var myHeaders = new Headers();
myHeaders.append("apikey", "QXTTbIRM4aREGRd7KbJh8uVnpkpTKo9a");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/number_verification/countries", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));