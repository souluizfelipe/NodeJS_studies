const timeOut = 3000;
const finished = () => console.log('done!');

let timer = setTimeout(finished, timeOut);

clearTimeout(timer);

console.log('when cancel the timeOut, it will not execute the function with the timeout');