// //get methof

//     fetch(`https://northwind.vercel.app/api/categories`).then((res) => res.json()).then((data)=>{
//         console.log(data)
//     })
// 

//post method 

function sendData() {
    fetch(`https://northwind.vercel.app/api/categories`, {

        method: "POST",
        headers: {
            "Content-type": "application/json",
        },

        body: JSON.stringify({
            name: "Aykhan Musayev",
            description:"salammm"
            
        })

    }
    )
}


function sendAxios() {
    axios.post(`https://northwind.vercel.app/api/categories`,{
        name: "Aykhan Musayev",
        description:"salammm"
    })
    .then(function(res){
        console.log(res); 
    }).catch(function(err){
        console.log(err);
        
    })
}