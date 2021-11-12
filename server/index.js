require('dotenv').config() //비밀번호 환경변수로 사용가능
const express = require('express'); // express 사용 가능
const app = express(); // express 사용 가능
const fs = require('fs'); //파일 처리 관련 (파일 만들고 읽기 가능)
const https = require('https')
const cors = require('cors'); //보안정책
const cookieParser = require('cookie-parser'); //쿠키 정보에 접근 가능 도움줌


app.use(express.json());
app.use(express.urlencoded({ extended: false })); //주소 형식으로 들어온 요청 파싱 옵션 지정
app.use(
  cors({
    origin: ['https://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  })
);


 // TODO : get,post 등 메소드  컴포넌트 연결

app.use(cookieParser());
app.get()
app.post()


const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning'));
} else {
  server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
}
module.exports = server;