class Youtube {/*Dependency Injection*/
    constructor(key) {
        this.key = key
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
        }
    }

    async mostPopular() { /*프로미스 리턴*/
        console.log('most'+this.key);
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items;
    }

    async search(query) {        
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));                        
    }
}

export default Youtube;
