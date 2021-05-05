import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import Search_Header from './components/search_header/search_header'
import VideoDetail from './components/video_detail/video_detail'
import VideoList from './components/video_list/video_list'

function App({ youtube }) {
    /*Dependency Injection*/
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const selectVideo = video => {
        setSelectedVideo(video)
    }

    const search = query => {
        youtube.search(query).then(videos => setVideos(videos))
    }

    useEffect(() => {
        youtube.mostPopular().then(videos => setVideos(videos))
    }, []) /* 
    두번째 인자에 아무값도 안줬으므로
    맨 처음 mount됐을때 한번만 호출 
    */

    return (
        <div className={styles.app}>
            <Search_Header onSearch={search} />
            <section className={styles.content}>
                <div className={styles.detail}>
                    {
                        /*selectedVideo가 있다면 VideoDetail컴포넌트 실행*/
                        selectedVideo && <VideoDetail video={selectedVideo} />
                    }
                </div>
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        onVideoClick={selectVideo}
                        display={selectedVideo ? 'list' : 'grid'}
                    />
                </div>
            </section>
        </div>
    )
}

export default App
