
import _ from 'lodash';
import './style.css'
import Icon from './icon.png'
import Person from './person.json'
import Data from './data.xml'

function component(){

    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello','Webpack'],'');
    
    //webpack加载css
    element.classList.add('hello');


    //webpack加载图片
    let img = new Image();
    img.src = Icon;
    element.appendChild(img);
     
    //webpack加载数据
    
    console.log(Person);

   
    console.log(Data);

    return element;
}

document.body.appendChild(component());