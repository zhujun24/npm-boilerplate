import request from 'request'

export default () => {
  request('https://www.baidu.com', (error, response, body) => {
    if (!error && response && response.statusCode === 200) {
      console.log(body)
    } else {
      console.log('ERROR!')
    }
  })
}
