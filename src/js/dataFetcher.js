/*

    dataFetcher(url)
    parameters
    url:string

*/


const dataFetcher = async function (url=null){
    const response = await fetch(url)
    const toDoJSONData = await response.json

    return data
}

export default dataFetcher