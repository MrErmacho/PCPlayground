const video_button=document.getElementById('atomic__heart')
let playlist = ["atomic heart", "dlc"]
let num=0

function next() {
    if (num < playlist.length-1){
        num=num+1 
    }
    else {
        num=0
    }
    console.log(num)
    video_button.src=`video/${playlist[num]}.mp4`
}

function prev() {
    if (num > playlist.length+1){
        num=num-1 
    }
    else {
        num=-1
    }
    console.log(num)
    video_button.src=`video/${playlist[num]}.mp4`
}

function pause() {
    if (video_button.paused) {
        video_button.play()
    }
    else {
        video_button.pause()
    }
}

function mute() {
    if (video_button.muted) {
        video_button.muted=false
    }
    else {
        video_button.muted=true
    }
}

