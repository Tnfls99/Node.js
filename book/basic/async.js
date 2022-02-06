const fs = require('fs').promises;

fs.writeFile('./readme2.txt', '저를 여러 번 읽어보세요')
    .then(()=>{
        console.log('쓰기 성공!');
    })
    .catch((err)=>{
        console.error(err);
    });

console.log('시작');
fs.readFile('./readme2.txt')
    .then((data)=>{
        console.log('1번', data.toString());
    })
    .catch((err)=>{
        console.error(err);
    });

fs.readFile('./readme2.txt')
    .then((data)=>{
        console.log('2번', data.toString());
    })
    .catch((err)=>{
        console.error(err);
    });

fs.readFile('./readme2.txt')
.then((data)=>{
    console.log('3번', data.toString());
})
.catch((err)=>{
    console.error(err);
});