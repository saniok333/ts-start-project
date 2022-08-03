const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  // <string> 'cause resolve('This is done!')
  setTimeout(() => {
    resolve('This is done!');
  }, 3000);
});

promise.then((data) => {
  data.split(' ');
});
