setTimeout(() => {
  let a = 0;
  setInterval(() => {
    console.log(JSON.stringify({event: 'log', timestamp: Date.now(), data: a++}));
  }, 500);
}, 10000);
