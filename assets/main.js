const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCoGDh1Xa3kUCpok24JN5DKA&part=snippet%2Cid&order=date&maxResults=5"

const containerYouTube = null || document.querySelector("#contentYouTube");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'X-RapidAPI-Key': 'bdcfc6c8bfmsh72e05c5c4aea2d7p143be8jsn82017204f123',
        
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json(); /* Retorna en JSON */
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `${videos.items.map(element => `<div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${element.snippet.thumbnails.high.url}" alt="${element.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${element.snippet.title}
          </h3>
        </div>
        `)
            .slice(0, 4) /* Solo muestra 4 elementos por el momento */
            .join('')}
        `
        containerYouTube.innerHTML = view;
    }
    catch (error){
        console.log(error);
    }
})(); /* Función que se llama a sí misma */