const formElement = document.querySelector('.btn-primary');
const divElement = document.createElement('div');
formElement.addEventListener('click',(e)=>{
    e.preventDefault();
    const data = fetch(`https://dog.ceo/api/breeds/image/random`)
                 .then((response)=>response.json())
                 .then((data)=>{
                  divElement.innerHTML=`<img src=${data.message} alt="dog"  height="300px" width="300px">`
                  document.body.append(divElement)
                 })
                 .catch((error)=>console.log(error));
})
