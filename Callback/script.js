let promise = new Promise(
        function(resolve, reject) {
            setTimeout(() => {
                resolve("kids")
            }, 1000);
        }
    )
    .then((sucess) => {
        console.log("sucess comes with : ", sucess)
    })
    .catch((error) => {
        console.log(error)
    })