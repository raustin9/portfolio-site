import React, { useState , useRef , useEffect} from 'react'
import * as FaIcon from 'react-icons/fa'

import cycles from './Songs/cycles.mp3'
import everest from './Songs/everest.mp3'
import dogma from './Songs/Dogma.mp3'
import s32120 from './Songs/32120.mp3'
import s122418 from './Songs/122418.mp3'
import mmwremix from './Songs/markmywordsremix.mp3'
import lonely from './Songs/lonely.mp3'
import pressure from './Songs/pressure.mp3'
import eclipse from './Songs/eclipse.mp3'

// import cityimg from './Images/vaporwavecity.jpg'
// import greenimg from './Images/greenaesthetic.jpg'
import sunset from './Images/sunsetvaporwave.jpg'

import './Styles/music.css'
import './Styles/slider.css'
import './Styles/thumb.css'


function Music() {
  return(
    <div className="music-content">
      <div className="music-context">
        <div className="music-link-div">
          <a rel="noreferrer" target="_blank" href="https://soundcloud.com/user-940134563" className="music-link">
            {/* <FaIcon.FaMusic className="music-logo"/>
            <FaIcon.FaMusic className="music-logo-shadow"/> */}
            
              <FaIcon.FaMusic className="music-logo"/>
              <FaIcon.FaMusic className="music-logo-shadow"/>
            
          </a>
        </div>
        <div className="context-text-container">
          <h1 className="context-text">
            
          </h1>
        </div>
      </div>
      <div className="song-container">
        <Song 
        src={cycles} 
        img={sunset} 
        className="song-item" 
        id="Cycles"
      >Cycles</Song>
      <Song 
        src={everest} 
        img={sunset} 
        className="song-item" 
        id="Everest"
      >Everest</Song>
      <Song 
        src={lonely} 
        img={sunset} 
        className="song-item" 
        id="Lonely"
      >Lonely</Song>
      <Song 
        src={dogma} 
        img={sunset} 
        className="song-item" 
        id="Dogma"
      >Dogma</Song>
      <Song 
        src={mmwremix} 
        img={sunset} 
        className="song-item" 
        id="MMWRemix"
      >Nipsey Hustle - Mark My Words (Remix)</Song>
      <Song 
        src={pressure} 
        img={sunset} 
        className="song-item" 
        id="pressure"
      >Pressure</Song>
      <Song 
        src={eclipse} 
        img={sunset} 
        className="song-item" 
        id="eclipse"
      >Eclipse</Song>
      <Song 
        src={s122418} 
        img={sunset} 
        className="song-item" 
        id="s122418"
      >12.24.18</Song>
      <Song 
        src={s32120} 
        img={sunset} 
        className="song-item" 
        id="s32120"
      >3.21.20 - 3:23:20, 4.01 PM</Song>
      </div>
    </div>
  )
}

function Song(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onChange = (e) => {
    const audio = audioEl.current;
    audio.currentTime = (audio.duration / 100)  * e.target.value;
    setPercentage(e.target.value);
  }

  const getCurrentDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
    const time = e.currentTarget.currentTime;
    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  }

  useEffect(() => {
    if(isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  useEffect(() => {
    if (isMute) {
      audioEl.current.muted = true;
    } else {
      audioEl.current.muted = false;
    }
  })

  return(
    <div className="player">
      <div className="image-box">
        <img src={props.img} alt="cover art" />
      </div>
      <div className="music-controls">
        
        <h1 className="song-title">{props.children}</h1>
        <div className="music-buttons">
          <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <FaIcon.FaPause/> : <FaIcon.FaPlay/>}
          </button>
          <div className="slider-info">
            <Slider percentage={percentage} onChange={onChange}/>
            <div className="timer-container">
              <CurrTimer currentTime={currentTime} />
              <DurationTimer duration={duration} />
            </div>
          </div>
          <button className="volumesvg" onClick={() => setIsMute(!isMute)}>
            {isMute ? <FaIcon.FaVolumeMute/> : <FaIcon.FaVolumeUp/>}
          </button>
          <audio 
            src={props.src} 
            ref={audioEl} 
            onTimeUpdate={getCurrentDuration}
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration.toFixed(2));
            }}
          />
        </div>
      </div>
    </div>
  )
}

function Slider({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const rangeRef = useRef()
  const thumbRef = useRef()

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * percentage * -1
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
    setPosition(percentage)
    setMarginLeft(centerThumb)
    setProgressBarWidth(centerProgressBar)
  }, [percentage])

  return (
    <div className='slider-container'>
      <div
        className='progress-bar-cover'
        style={{
          width: `${progressBarWidth}px`
        }}
      ></div>
      <div
        className='thumb'
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`
        }}
      ></div>
      <input
        type='range'
        value={position}
        ref={rangeRef}
        step='0.01'
        className='range'
        onChange={onChange}
      />
    </div>
  )
}

function CurrTimer({ currentTime }) {
  function secondsToHms(seconds) {
    if (!seconds) return '00m 00s'

    let duration = seconds
    let hours = duration / 3600
    duration = duration % 3600

    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)

    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`
    } else if (min === 0) {
      return `00m ${sec}s`
    } else {
      return `${min}m ${sec}s`
    }
  }

  return(
    <div className="timer ctimer">{secondsToHms(currentTime)}</div>
  )
}

function DurationTimer({ duration }) {
  function secondsToHms(seconds) {
    if (!seconds) return '00m 00s'

    let duration = seconds
    let hours = duration / 3600
    duration = duration % 3600

    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)

    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`
    } else if (min === 0) {
      return `00m ${sec}s`
    } else {
      return `${min}m ${sec}s`
    }
  }

  return(
    <div className="timer dtimer">{secondsToHms(duration)}</div>
  )
}

export default Music;