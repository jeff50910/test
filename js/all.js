//DOM
var list=document.querySelector('.list');
var btn=document.querySelector('#btn');
var data=JSON.parse(localStorage.getItem('todolist'))||[];

//監聽
btn.addEventListener('click',senddata,false);
list.addEventListener('click',deletedata,false);
updatelist(data);

//事件
function senddata(e){
    e.preventDefault();
    var txt=document.querySelector('#textcontent').value;
    var todo={content:txt};
    data.push(todo);
    localStorage.setItem('todolist',JSON.stringify(data));
    updatelist(data);
}

function deletedata(e){
    e.preventDefault();
    var num=e.target.dataset.num;
    if(e.target.nodeName!=='A'){return}
    data.splice(num,1);
    localStorage.setItem('todolist',JSON.stringify(data));
    updatelist(data)
}

function updatelist(item){
    var len=item.length;
    var str='';
    for(var i=0;i<len;i++){
        // str+='<li><a href="#" data-num="'+i+'">刪除</a>'+data[i].content+'</li>';
         str+=`<li><a href="#" data-num="${i}">刪除</a>${data[i].content}</li>`
        
    }
    list.innerHTML=str;
}

