import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import Search_Header from './components/search_header/search_header'
import VideoDetail from './components/video_detail/video_detail'
import VideoList from './components/video_list/video_list'

function App({ youtube }) {
    /*Dependency Injection*/
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)    

    /*selectedVideo state셋팅*/
    const selectVideo = video => {
        setSelectedVideo(video)
    }

    const search = query => {
        setSelectedVideo(null)
        youtube.search(query).then(videos => {
            setVideos(videos)
            setSelectedVideo(null)
        })
    }

    const home = () => {        
        setSelectedVideo(null) //아무런 비디오도 선택안된상태
        youtube.mostPopular().then(videos => setVideos(videos)) //가장 인기있는 비디오 목록으로 세팅
    }

    useEffect(() => {
        //가장 인기있는 비디오 목록으로 세팅
        youtube.mostPopular().then(videos => setVideos(videos))
    }, []) 
    /* 
    두번째 인자에 아무값도 안줬으므로
    맨 처음 mount됐을때 한번만 호출 
    */

    return (
        <div className={styles.app}>
            <Search_Header onSearch={search} Main={home}/> {/*검색바*/}
            <section className={styles.content}>                
                    {
                        /*selectedVideo가 있다면 VideoDetail컴포넌트 실행*/
                        selectedVideo && (
                            <div className={styles.detail}>
                                <VideoDetail video={selectedVideo} />
                            </div>
                        )
                    }                
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        onVideoClick={selectVideo} //비디오 클릭됐을때 state세팅
                        display={selectedVideo ? 'list' : 'grid'}
                    />
                </div>
            </section>
        </div>
    )
}

export default App
