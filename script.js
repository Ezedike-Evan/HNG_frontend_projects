const data = {
    displayImgPath : './me.jpg',
    userName : 'Ezedike-Egwom Evan',
    dayOfWeek : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    myTrack : 'Frontend',
    githubURL : 'https://github.com/Ezedike-Evan/HNG_frontend_projects/tree/stage-1',
    time : {
        hrs : '',
        mins : '',
        secs : ''
    }
}

const displayImg = document.querySelector('[data-testid="slackDisplayImage"]')
const slackUserName = document.querySelector('[data-testid="slackUserName"]')
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const track = document.querySelector('[data-testid="myTrack"]')
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]')
const githubRepo = document.querySelector('[data-testid="githubURL"]')

displayImg.src = data.displayImgPath
displayImg.alt = data.userName
slackUserName.textContent = data.userName
track.textContent = data.myTrack
githubRepo.href = data.githubURL

const updateFunction = ()=>{
    const currentDate = new Date()
    currentDayOfTheWeek.textContent = data.dayOfWeek[currentDate.getUTCDay()]

    data.time.hrs = currentDate.getUTCHours() < 10 ? '0'+currentDate.getUTCHours() : currentDate.getUTCHours()
    data.time.mins = currentDate.getUTCMinutes() < 10 ? '0'+currentDate.getUTCMinutes() : currentDate.getUTCMinutes()
    data.time.secs = currentDate.getUTCSeconds() < 10 ? '0'+currentDate.getUTCSeconds() : currentDate.getUTCSeconds()

    currentUTCTime.textContent = `${data.time.hrs}:${data.time.mins}:${data.time.secs}:${currentDate.getUTCMilliseconds()}`
}
setInterval(updateFunction, 50)