//allows for a get request to be made
const axios = require('axios')
const CircularJson = require('circular-json');



async function getUserRepresentative(req, res){

    let address = "96 Lexington Avenue";
    console.log(address);
    address = address.replace(" ", "%20");
    let key = "AIzaSyD0jmPlxD-id5--Zor5saOYkKmKNBT_E_U"

    try {
        const response = await axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${key}&address=${address}`);
        let data = CircularJson.stringify(response.data);
        res.send(data)
    }catch(error){
        console.log(error);
    }
    

    
/*function(data){
  //  res.json(data)
}*/

}

module.exports = {
    getUserRepresentative: getUserRepresentative
}