const fs = require('fs')

const SpotifyWebApi = require('spotify-web-api-node')
const token = 'BQC85PgxlDwkF5z2OZsE-jf9Fol2Grc5-SGl02zIsYVREsrnKtOyywDZfvefscsYN7jzT6fSw8d5kTU0Aq0gySsGYuBiMsqBr0Q2N44MXyOl4uxk289dnybXtfbO9bZCATWWEAiRBVVO95DhDgUN4467w5yMUpQmypYYCbB2H1-T-UuA3J82tncz4dLRZiBHpw5NR0nfZavafRDDgBZAFGsGYgQrLecOYIWJdhGOPIbqZhTJ0oj8e91jug4twoFVAi-ZHUpTQ7IjyWvdxGoZF1Lj4hhBAWWBelSJ_8334o4EiUn1KY7TIOqpO86RcuTmARHb9PjSVickRx6Yf0REHPMD'

const spotifyApi = new SpotifyWebApi()
spotifyApi.setAccessToken(token)

// GET MY PROFILE DATA
function getMyData() {
    (async ()=>{
        const me = await spotifyApi.getMe()
        console.log(me.body)

    })().catch(e => {
        console.error(e)
    })
}

getMyData()




