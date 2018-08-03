import request from 'request'

request('https://www.baidu.com', (error, response, body) => {
  if (!error && response && response.statusCode === 200) {
    console.log(body)
  } else {
    console.log('ERROR!')
  }
})
