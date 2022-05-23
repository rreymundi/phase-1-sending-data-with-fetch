// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });


// MY SOLUTION
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res => res.json())
    .then(object => {
        const newId = document.createElement('p')
        newId.innerHTML = `ID: ${object.id}`
        document.querySelector('script').insertBefore(newId, document.querySelector('script').childNodes[0])
    })
    .catch(function(error){
        document.querySelector('body').innerHTML = `<p> error: ${error.message} </p>`
    })
};

// function submitData(userName, userEmail){
//     return fetch('http://localhost:3000/users',{
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             name: userName,
//             email: userEmail
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//         const newId = document.createElement('p')
//         newId.innerHTML = `New ID: ${data.id}`
//         document.querySelector('script').insertBefore(newId, document.querySelector('script').childNodes[0])
//     })
//     .catch(function(error){
//         document.querySelector('body').innerHTML = `<p> error: ${error.message} </p>`
//     })
// }