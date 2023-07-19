const getApiData =require("../../data/data")
const {Product}= require("../db")


const getApi= async()=>{
    const subir=await getApiData()
    await subir.product.map((e)=> Product.create(e))
  
}


module.exports = getApi;