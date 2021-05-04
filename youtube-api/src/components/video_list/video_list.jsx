import React from 'react'
import VideoItem from '../video_item/video_item'
import styles from './video_list.module.css'

const VideoList = props => (
    <ul className={styles.videos}>
        {props.videos.map(video => (
            //여러개의 요소를 전달할때는 id값이 필요하다
            <VideoItem key={video.id} video={video} />
        ))}
    </ul>
)

export default VideoList
