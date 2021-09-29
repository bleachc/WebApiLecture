navigator.mediaDevices.getUserMedia({
    video: { width: 400, height: 300 },
    audo: false
}).then((stream) => {
    const videoEl = document.getElementById('webcam')
    videoEl.srcObject = stream
    videoEl.play()
}).catch(() => window.alert('Permission Denied'))

navigator.geolocation.getCurrentPosition((result) => {
    const { coords } = result
    console.log(result)
    document.getElementById('location').innerText = `${coords.longitude} ${coords.latitude}`
})

// navigator.geolocation.watchPosition((result) => {
//     console.log('watch', result)
// }, undefined, {
//     enableHighAccuracy: true
// })

const testNotification = () => {
    switch (Notification.permission) {
        case 'default':
            Notification.requestPermission().then(testNotification)
        case 'granted':
            new Notification('Test', { 
                body: 'Hello World', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' 
            })
        default:
            return
    }
}

testNotification()

document.getElementById('notify-btn').addEventListener('click', testNotification)
