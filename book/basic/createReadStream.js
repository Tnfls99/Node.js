const fs = require('fs');

fs.writeFile('./readme3.txt', '저는 조금씩 조금식 나눠서 전달됩니다. 나눠진 조각을 chunk라고 부릅니다.', ()=>{
    console.log('글쓰기 성공');
});

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunk)=>{
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});

readStream.on('end', () =>{
    console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err)=>{
    console.log('error :', err);
});