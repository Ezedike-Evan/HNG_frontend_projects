const data = {
    slackProfilePicturePath : './me-564px.jpg',
    DisplayName : 'Evan',
    slackEmail : 'egwomevan323@gmail.com',
    dayOfWeek : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    time : {
        hrs : '',
        mins : '',
        secs : ''
    }
}

const slackProfilePicture = document.querySelector('[data-testid="slackProfilePicture"]')
const slackEmail = document.querySelector('[data-testid="slackEmail"]')
const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]')
const currentDay = document.querySelector('[data-testid="currentDay"]')
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]')

slackProfilePicture.src = data.slackProfilePicturePath
slackProfilePicture.alt = data.DisplayName
slackDisplayName.textContent = data.DisplayName
slackEmail.textContent = data.slackEmail

const updateFunction = ()=>{
    const currentDate = new Date()
    currentDay.textContent = data.dayOfWeek[currentDate.getUTCDay()]

    data.time.hrs = currentDate.getUTCHours() < 10 ? '0'+currentDate.getUTCHours() : currentDate.getUTCHours()
    data.time.mins = currentDate.getUTCMinutes() < 10 ? '0'+currentDate.getUTCMinutes() : currentDate.getUTCMinutes()
    data.time.secs = currentDate.getUTCSeconds() < 10 ? '0'+currentDate.getUTCSeconds() : currentDate.getUTCSeconds()

    currentTimeUTC.textContent = `${data.time.hrs}:${data.time.mins}:${data.time.secs}:${currentDate.getUTCMilliseconds()}`
}
setInterval(updateFunction, 50)
