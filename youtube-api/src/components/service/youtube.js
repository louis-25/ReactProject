import axios from 'axios';

class Youtube {/*Dependency Injection*/
    constructor(key) {
        this.youtube = axios.create({ // api 기본경로
            baseURL:'https://www.googleapis.com/youtube/v3',
            params: {key: key},
        });
        
    }

    async mostPopular() { /*프로미스 리턴*/
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });
        return response.data.items;        
    }

    async search(query) {        
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,
            },
        });
        return response.data.items.map(item => ({...item, id: item.id.videoId}));
    }
}

export default Youtube;
