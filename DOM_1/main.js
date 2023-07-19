// console.log(location.toString().toUpperCase());
// window.alert('BOM');
// window.confirm('BOM');
// var name = window.prompt('Enter name: ');
// if(name!==''){
//     alert(`Hello ${name}`);
// }

(function(){

    var elems = document.getElementsByTagName("p"), //более быстрый
        classElems=document.getElementsByClassName("para"),
        elemSelector = document.querySelector("p"), //первый
        elemsSelectorAll = document.querySelectorAll("p"), //все
        elemInDiv = document.querySelectorAll("div p"), //вложенные
        elemById = document.querySelectorAll("#idpara") //==getElementById
        ;
    //console.log(elemInDiv);
    for(var i =0,len=elems.length;i<len;i++) {
        // console.log(elems[i].tagName);
        // console.log(elems[i].parentNode);
        console.log(elems[i].previousSibling.nodeName);
    }
})();