const myPromise = new Promise((resolve,reject)=>{
//ФУНКЦИИ resolve и reject
});
//УСПЕХ - resolve вызвана
myPromise
    .then(value=>{

    });
//НЕУДАЧА - reject вызвана
myPromise.
    catch(error=> {
    
    });
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log(response)
        return response.json
    })
    .then(json => console.log(json))
    .catch(error=>console.log(error))