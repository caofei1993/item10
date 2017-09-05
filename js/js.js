

window.onload = function () {
    var box2 = document.getElementById("box2");
    var oLi = box2.getElementsByTagName("li");
    var p1 = document.getElementById("p1");
    var p3 = document.getElementById("p3");
    var oPicBox = document.getElementById('picBox');
    var oPicUl = oPicBox.getElementsByTagName('ul')[0];
    var aLi = oPicUl.getElementsByTagName('li');
    var oBtnP = oPicBox.getElementsByTagName('p')[0];
    var oBtnSpan = oBtnP.getElementsByTagName('span');
    var sp = document.getElementById("sp");
    var arr=["安徽","河北","北京","广州","上海","河南","湖南","湖北","福建","深圳","海南","山东","山西","陕西","青海","西藏","香港","澳门"];
    oLi[0].className="on";
    p1.innerHTML = arr[0];
    p3.innerHTML ="【"+arr[0]+"政法干警考试公告"+"】"+"【"+"考试大纲"+"】"+"【"+"考前冲刺题"+"】";
    var Mydate =new Date();
    var year = Mydate.getFullYear();
    sp.innerHTML = year;
    for(var i = 0;i<oLi.length;i++){
        oLi[i].index = i;
        oLi[i].onclick =function () {
            for(var j=0;j<oLi.length;j++){
                oLi[j].className = "";
            }
            this.className="on";
            p1.innerHTML = arr[this.index];
            p3.innerHTML ="【"+arr[this.index]+"政法干警考试公告】【考试大纲】【考前冲刺题】"
        }
    }


/*----轮播图------*/
    oPicUl.innerHTML +=oPicUl.innerHTML;
    var len = aLi.length;
    var liWidth = parseInt(getStyle(aLi[0],'width'));

    var num = -1;
    var timer = null;
    var str = '';
    for(var i=0;i<len/2;i++)
    {
        str+='<span></span>';
    };
    oBtnP.innerHTML = str;
    oBtnSpan[0].className = 'active';

    for(var i=0;i<len/2;i++)
    {
        oBtnSpan[i].index = i;
        oBtnSpan[i].onclick = function()
        {
            num = this.index;
            tab();

        };
    };



    function next(){



        if(num==len/2)
        {
            num=1;
            oPicUl.style.left = 0;

        }
        else
        {
            num++;
        };

        tab();
    };

    function tab(){
        for(var i=0;i<len/2;i++)
        {
            oBtnSpan[i].className = '';
        }
        move(oPicUl,'left',-(num*415));
        if(num==len/2)
        {
            oBtnSpan[0].className = 'active';
        }
        else
        {
            oBtnSpan[num].className = 'active';
        };
    };
    next();
    timer = setInterval( next,3000 );
    oPicBox.onmouseover = function()
    {
        clearInterval( timer );
    };
    document.body.onblur=function(){
        clearInterval( timer );
    }
    document.body.onfocus=function(){
        timer = setInterval( next,3000 );
    }
    oPicBox.onmouseout = function()
    {
        timer = setInterval( next,2000 );
    };






};
