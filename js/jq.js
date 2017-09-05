// JavaScript Document

//如果是字符串类型，则返回选取以id名字的方式。如果是对象类型则返回本身。如果是函数类型，则模拟一个window.onload 事件 并把函数 赋给此onload事件。

function getId(obj)
{
	//return document.getElementById('div1');
	return document.getElementById(obj);
};


//getId('div2');

function $(V)
{
	
	if( typeof V == 'string' )
	{
		return document.getElementById( V );
	}
	else if( typeof V == 'object' )
	{
		return V;
	}else if( typeof V == 'function' )
	{
		window.onload = V;
	};
	
};


//模拟jquery css工具方法  两个参数获取样式，三个参数设置样式
function css(obj,attr,value)
{
	
	
	//alert( arguments.length );
	//arguments[0] = document.getElementById(arguments[0]);
	
	if( arguments.length == 2 )
	{
		return obj.style[attr];	
	}
	else if( arguments.length == 3 )
	{
		obj.style[attr] = value;
	};
	
};


// 获取任意元素的任意样式
function getStyle(obj,attr)
{
	
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
	
};


//var timer = null;
function move(obj,attr,target,endFn)
{
	
	var dir = parseInt(getStyle(obj,attr)) < target ? 10 : -10;
	
	clearInterval( obj.timer );
	obj.timer = setInterval(function(){
					
		var speed = parseInt(getStyle(obj,attr)) + dir;//600
		
		if( (speed >= target && dir > 0) || (speed <= target && dir < 0))
		{
			speed = target;//600
		}
		
		obj.style[attr] =speed + 'px';//590
	
		
		if(speed == target)
		{
			clearInterval( obj.timer );
			
			endFn && endFn();
			
			
		};
		
		
	},30);
};
