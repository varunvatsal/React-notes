import React, { useRef } from 'react'

const VideoControl = () => {

    let videoRef = useRef();
    console.log(videoRef)

    let playMe = () => {
        videoRef.current.play()
    }

    let pauseVideo = () => {
        videoRef.current.pause()
    }

    let loadVideo = () => {
        videoRef.current.load()
    }
  return (
    <>
        <section>
            <aside>
                <video src="src/video/Farazi _ Dobro - Vecer _ (Slowed + Reverb).mp4" height="500px" width="500px" ref={videoRef} controls></video>
            </aside>
            <aside>
                <button onClick={playMe}>PLAY</button>
                <span>{" "}</span>
                <button onClick={pauseVideo}>PAUSE</button>
                <span>{" "}</span>
                <button onClick={loadVideo}>LOAD</button>
            </aside>
        </section>
    </>
  )
}

export default VideoControl