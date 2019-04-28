const http = require('http');
const url = require('url');

const server = http.createServer();

server.on('request', (req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === '/request') {
    // 获取callBack 的名称，
    const cbName = query.callback;
    const data = {name : 'fy', age: 18};
    //然后返回调用,并且传参
    res.end(`${cbName}(${JSON.stringify(data)})`)
  }
});

server.listen(3000, () => {console.log('run in port 3000...')})

