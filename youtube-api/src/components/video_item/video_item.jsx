import React from 'react'
import styles from './video_item.module.css'

const VideoItem = props => (
    <li className={styles.container}>
        <div className={styles.video}>
            <img
                className={styles.thumbnail}
                src={props.video.snippet.thumbnails.medium.url}
                alt="video"
            />
            <div className={styles.metadata}>
                <p className={styles.title}>{props.video.snippet.title}</p>
                <p className={styles.channel}>
                    {props.video.snippet.channelTitle}
                </p>
            </div>
        </div>
    </li>
)

export default VideoItem
