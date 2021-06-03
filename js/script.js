function getImage(){
    const key = '0NWIKe1FnUpE7Z011O2vIB9oD3Q2MhKAjFxPSJHEaX4'
    const url = `https://api.unsplash.com/photos/random/?client_id=${key}`
    fetch(url)
    .then(data =>{ 
        return data.json()})
    .then(data =>{console.log(data)
    
        let result = `<img src=${data.urls.small} />
                        <h2>${data.description ? data.description : data.alt_description}</h2>
                         <p>By User: ${data.user.first_name} ${data.user.last_name}</p>`
        document.getElementById('picture').innerHTML = result || `<p>Loading....</p>`
        document.body.style.backgroundColor = data.color
    })
    .catch((error)=>{console.error('Error:', error)})
}

