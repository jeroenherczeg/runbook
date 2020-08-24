const runBtns = document.getElementsByClassName('run-button')

Array.from(runBtns).forEach((el) => {
  el.addEventListener('click', (event) => {
    const { exec } = require('child_process');
    const container = el.parentElement.parentElement;
    const output = container.getElementsByClassName('output')[0];
    output.innerHTML = '';
    const cmd = container.getElementsByTagName('code')[0].innerHTML;
    console.log(cmd);
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      output.innerHTML = '<pre>' + stdout + '</pre>';
      // console.error(`stderr: ${stderr}`);
    });
  })
});