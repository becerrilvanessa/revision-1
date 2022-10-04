const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const name = document.querySelector('name');
const blog = document.querySelector('#blog');
const loc = document.querySelector('.location');


const displayUser = async () => {


  try {


    const response = await fetch("https://api.github.com");
  console.log(response);
  `name.textContent = 'cargando...';
  name.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  loc.textContent = '${data.location}';`

  let data = await response.json();
       console.log(data);

    
  } catch (error) {

    function handleError(err) {
      console.log('OH NO!');
      console.log(err);
      `name.textContent = Algo salió mal: ${err}`
    
  }
  
}


}

displayUser('stolinski').catch(error);