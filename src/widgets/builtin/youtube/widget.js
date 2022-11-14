export default {
    package: "mgt.youtube",
    title: "YouTube",
    init: loadYoutube,
    search: searchYoutube,
    data: []
}

async function loadYoutube(){
   let vids = []
   await fetch("https://pipedapi.kavin.rocks/trending?region=US")
   .then((resp) => resp.json())
   .then(
    (data) => data?.map((item) => {
        vids.push({
            title : item?.title,
            background: item?.thumbnail,
            data: item?.uploaderName,
            url : "https://youtube.com" + item?.url,
            style: "landscape",
        })
    })
   )
   return vids
}

async function searchYoutube(query){
    //TODO
}