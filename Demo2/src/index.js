import _ from "lodash";
import printMe from "./print.js"
import  "./style.css"

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const h1 = document.createElement("h1");
  const input = document.createElement("input");

  element.innerHTML = _.join(["Hello", "Webpack"], "");
  
  //子元素1
  btn.innerHTML = "点我试试";
  btn.onclick = printMe;
  element.appendChild(btn);

  //子元素2
  h1.innerHTML = "哈哈哈哈哈";
  element.appendChild(h1);


  //子元素3
  element.appendChild(input);

  return element;
}

document.body.appendChild(component());

if(module.hot){
  module.hot.accept('./print.js',function(){
    console.log('接收模块热更新');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}