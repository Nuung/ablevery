// 코드상에서는 DB에 대한 정보가 없어야 한다 -> 환경변수로 읽어서 실행되도록

module.exports = (function () {
  return {
    local: { // localhost
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '45812qlgks!#',
      database: 'mydb'
    },
    real: { // real server db info
      host: '127.0.0.1', //54.180.94.2
      port: '3306',
      user: 'root',
      password: '45812qlgks',
      database: 'ablevery_codi'
    },
    dev: { // dev server db info - Not using now
      host: '',
      port: '',
      user: '',
      password: '',
      database: ''
    }
  }
})();