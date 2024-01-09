import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector("#app").innerHTML = `
<div>
<h1>Hello Bit-Wise Code Titans!</h1>
<div id="contents">
</div>
</div>
 
 
`
function printInfo() {
  let a1 = 5;
  let a2 = 10;
  let result_of_sum = a1 + a2; 
  document.getElementById("contents").innerHTML = "Sum of "+ a1 + "+" + a2 + " = " + result_of_sum;  
}
window.onload(printInfo());