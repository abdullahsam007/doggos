// HAMBURGER
const hamburger = document.querySelector('.hamburger')
const navUl = document.querySelector('.mobile-ul');
const mobileAbout = document.querySelector('.mobile-ul-about');
const clickAbout = document.querySelector('.click-about');

const backIcon = document.getElementById('back-icon');
const backIconWrap = document.querySelector('.back-icon-wrap');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active')
    navUl.classList.toggle('active')
})

clickAbout.addEventListener('click', function() {
    mobileAbout.classList.toggle('active');
    backIconWrap.classList.add('active');
    console.log('asdf;ashdf')
})

backIcon.addEventListener('click', function() {
    mobileAbout.classList.remove('active');
    backIconWrap.classList.remove('active');
})

// document.querySelectorAll('.mobile-a').forEach(n => n.addEventListener('click', function() {
//     hamburger.classList.remove('active');
//     navUl.classList.toggle('active');
// }))

// SCROLL 
const root = document.documentElement;
const marqueElementsDisplayed = getComputedStyle(root).getPropertyValue('--marque-elements-displayed');

const marqueContent = document.querySelector('.marque-content');

root.style.setProperty('--marque-elements', marqueContent.children.length);

for (let i = 0; i < marqueElementsDisplayed; i++) {
    marqueContent.appendChild(marqueContent.children[i].cloneNode(true))
}

// MEDIA QUERY 
const desktop = document.getElementById('desktop');
const mobile = document.getElementById('mobile');

function screenChange900(e) {
    if(e.matches) { // if the screen is below 925px
        desktop.classList.add('hide');
        mobile.classList.remove('hide');
        mobileAbout.classList.remove('hide');
    }
    else {
        desktop.classList.remove('hide');
        mobile.classList.add('hide');
        mobileAbout.classList.add('hide');
    }
}

const mediaQuery = window.matchMedia('(max-width: 925px)')

mediaQuery.addListener(screenChange900)

screenChange900(mediaQuery)




const marqueAni = document.getElementById('marque-ani')
const marqueFixed = document.getElementById('marque-fixed')

function screenChange(e) {
    if(e.matches) { 
        marqueFixed.classList.add('hide');
        marqueAni.classList.remove('hide');
    } else { 
        marqueAni.classList.add('hide');
        marqueFixed.classList.remove('hide');
    }
}

const mediaQueryMQ = window.matchMedia('(max-width: 1050px)')

mediaQueryMQ.addListener(screenChange)

screenChange(mediaQueryMQ)




// const ctaOne = document.querySelector('.cta1');
// const ctaNormal = document.querySelector('.cta1-normal')

// function screenChange800(e) {
//     if(e.matches) { // if the screen is below 800px
//         ctaOne.classList.add('hide');
//         ctaNormal.classList.remove('hide');
//     }
//     else { // if the screen is above 800px 
//         ctaOne.classList.remove('hide');
//         ctaNormal.classList.add('hide');
//     }
// }

// const mediaQueryCTA = window.matchMedia('(max-width: 800px)')

// mediaQueryCTA.addListener(screenChange900)

// screenChange800(mediaQueryCTA)



// VIDEO 
const playPauseBtn = document.querySelector('.play-pause-btn');
const theatherBtn = document.querySelector('.theather-btn');
const fullScreenBtn = document.querySelector('.fullscreen-btn');
const miniPlayerBtn = document.querySelector('.miniplayer-btn');

const video = document.querySelector('video');
const videoContainer = document.querySelector('.video-container');
const videoLeft = document.querySelector('.video-left')

const muteBtn = document.querySelector('.mute-btn');
const volumeSlider = document.querySelector('.volume-slider');

const currentTimeElem = document.querySelector('.current-time');
const totalTimeElem = document.querySelector('.total-time');

const captionsBtn = document.querySelector('.captions-btn');

const speedBtn = document.querySelector('.speed-btn')

const previewImg = document.querySelector('.preview-img');
const thumbnailImg = document.querySelector('.thumbnail-img')
const timelineContainer = document.querySelector('.timeline-container')

const bodyEl = document.querySelector('body');
const htmlEl = document.querySelector('html');

// function keyDisable()
// {
//  document.onkeydown = function (e)  {
//   return false;
//  }
// }


// function keyEnable()
// {
//  document.onkeydown = function (e)  {
//   return true;
//  }
// }

// function keypress() {
    
//         document.addEventListener('keydown', e => {
//             const tagName = document.activeElement.tagName.toLowerCase()
//             // keyEnable()
        
//             if (tagName === "input") return 
//             switch(e.key.toLowerCase()) {
//                 case " ":
//                     if(tagName === "button") return;
//                 case "k":
//                     togglePlay()
//                     break;
//                 case "f":
//                     toggleFullScreenMode();
//                     break;
//                 case "t":
//                     toggleTheatherMode();
//                     break;
//                 case "i":
//                     toggleMiniPlayerMode();
//                     break;
//                     case "m":
//                         toggleMute();
//                         break;
//                     case "arrowleft":
//                         skip(-5);
//                         break;
//                 case "arrowright":
//                     skip(5);
//                     break;
//                 case "j":
//                     skip(-10);
//                     break;
//                 case "l":
//                     skip(10);
//                     break;
//                 case "c":
//                     toggleCaptions();
//                     break;
        
//             }
//         })

// }







// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) { 
//             entry.target.classList.add('show');
//             // entry.target.classList.remove('hidden');
//             console.log('on screen') 


//         } else {
//             entry.target.classList.remove('show');
//             // entry.target.classList.add('hidden');
//             console.log('not on screen') 
//             document.removeEventListener("keydown", keypress);
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll('.show');
// hiddenElements.forEach((el) => observer.observe(el));

// keypress();


// document.addEventListener("DOMContentLoaded", function(){
// //    keypress();
//    const observer = new IntersectionObserver(onIntersection);
//    observer.observe(document.getElementById('video'));
// });

// function onIntersection(entries) {
//     entries.forEach(entry => {
//         if (entry.intersectionRatio < 1) {
//             document.removeEventListener("keydown", keypress);
//         } else {
//             keypress();
//         }
//     });
// }



// TIMELINE

timelineContainer.addEventListener('mousemove', handleTimelineUpdate);
timelineContainer.addEventListener('mousedown', toggleScrubbing)
document.addEventListener("mouseup", e => {
    if (isScrubbing) toggleScrubbing(e)
  })
  document.addEventListener("mousemove", e => {
    if (isScrubbing) handleTimelineUpdate(e)
  })


let isScrubbing = false
let wasPaused 

function toggleScrubbing(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    isScrubbing = (e.buttons & 1) === 1
    videoContainer.classList.toggle('scrubbing', isScrubbing)
    if (isScrubbing) {
        htmlEl.classList.add('nocursor');
        videoContainer.classList.add('nocursor');
        timelineContainer.classList.add('nocursor');
        wasPaused = video.paused
        video.pause()
    } else {
        htmlEl.classList.remove('nocursor');
        videoContainer.classList.remove('nocursor');
        timelineContainer.classList.remove('nocursor');
        video.currentTime = percent * video.duration
        if (!wasPaused) video.play()
    } 

    handleTimelineUpdate(e);
}

function handleTimelineUpdate(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    // const previewImgNumber = Math.max(
    //   1,
    //   Math.floor((percent * video.duration) / 10)
    // )
    // const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
    // previewImg.src = previewImgSrc
    timelineContainer.style.setProperty("--preview-position", percent)

    if (isScrubbing) {
        // e.preventDefault() 
        // thumbnailImg.src = previewImgSrc
        timelineContainer.style.setProperty('--progress-position', percent);
    }

    }

// PLAYBACK SPEED
speedBtn.addEventListener('click', changePlaybackSpeed)

function changePlaybackSpeed() {
    let newPlaybackRate = video.playbackRate + .25
    if (newPlaybackRate > 2) newPlaybackRate = .25
    video.playbackRate = newPlaybackRate
    speedBtn.textContent = `${newPlaybackRate}x`;
}

// CAPTIONS 
// const captions = video.textTracks[0]
// captions.mode = "hidden"

// captionsBtn.addEventListener("click", toggleCaptions)

// function toggleCaptions() {
//   const isHidden = captions.mode === "hidden"
//   captions.mode = isHidden ? "showing" : "hidden"
//   videoContainer.classList.toggle("captions", isHidden)
// }

// DURATION 
video.addEventListener('loadeddata', () => {
    totalTimeElem.textContent = formatDuration(video.duration);
})

video.addEventListener('timeupdate', () => {
    currentTimeElem.textContent = formatDuration(video.currentTime);
    const percent = video.currentTime / video.duration
    timelineContainer.style.setProperty('--progress-position', percent);
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2
})

function formatDuration(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    } else {
        return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
    }
}

function skip(duration) {
    video.currentTime += duration;
}

// VOLUME 
video.volume = 0.2;
muteBtn.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', e => {
    video.volume = e.target.value // we get to control this
    video.muted = e.target.value === 0;
})

function toggleMute() {
    video.muted = !video.muted;
}

video.addEventListener('volumechange', () => {
    volumeSlider.value = video.volume
    let volumeLevel 
    if(video.muted || video.volume === 0) {
        volumeSlider.value = 0;
        volumeLevel = "muted";
    }
    else if (video.volume >= .5) {
        volumeLevel = "high";
    }
    else {
        volumeLevel = "low";
    }

    videoContainer.dataset.volumeLevel = volumeLevel;

})




// View Modes
// theatherBtn.addEventListener('click', toggleTheatherMode);
fullScreenBtn.addEventListener('click', toggleFullScreenMode);
miniPlayerBtn.addEventListener('click', toggleMiniPlayerMode);

function toggleTheatherMode() {
    videoContainer.classList.toggle('theather')
}



function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
    }
    else {
        document.exitFullscreen();  
    }
}

document.addEventListener('fullscreenchange', () => {
    videoContainer.classList.toggle('fullscreen', document.fullscreenElement);
})

function toggleMiniPlayerMode() {
    if (videoContainer.classList.contains('miniplayer')) {
        document.exitPictureInPicture();
    }
    else {
        video.requestPictureInPicture();
    }
}

video.addEventListener('enterpictureinpicture', () => {
    videoContainer.classList.add('miniplayer')
})

video.addEventListener('leavepictureinpicture', () => {
    videoContainer.classList.remove('miniplayer')
})


// Play / Pause
playPauseBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);


function togglePlay() {
    video.paused ? video.play() : video.pause();
}

video.addEventListener('play', () => {
    videoContainer.classList.remove('paused');
})

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused');
})

// MOUSE SHADOW 

const heroBtn = document.querySelector('.hero-btn');
const dogText = document.querySelector('.dog-text');

const aboutSec = document.querySelector('.about');


const walk = 10;

function shadow(e) {
    const width = aboutSec.offsetWidth;
    const height = aboutSec.offsetHeight;

    x = e.offsetX;
    y = e.offsetY;

    if(this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2))

    dogText.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(79, 79, 79, 0.3)`;
}   

aboutSec.addEventListener('mousemove', shadow)
