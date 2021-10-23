
fetch('https://noting-co.github.io/api/data.json').then(response => {
    console.log('resolved',response);
    return response.json();
}).then(data => {
    console.log("data",data);
    document.write(data[0].name, data[0].phone);
}).catch(err => {
    console.log("error facing",err);
})