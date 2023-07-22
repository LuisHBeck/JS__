const axios = require("axios"); 

// const data = axios.get('https://cat-fact.herokuapp.com/facts')

// async function fetchData(){}

const fetchData = async () => {  
    try {
        const data = await axios.get('https://cat-fact.herokuapp.com/factgfdsfg');
        console.log(data.data)
    }catch (err){
        console.log(err)
    }
};

fetchData();



// data.then((res) => {
//     console.log(res.data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('PROMISSE FINESHED')
// });
