mui.init({
//	subpages:[{
//		url:'sub.html',
//		id:'sub.html',
//		styles:{
//			top:'45px',
//			bottom:'0px'
//		}
//	}]
//预加载
//	preloadPages:[{
//		url:"tel.html",
//		id:"tel.html",
//		extras:{name:小明;age:18}
//	}]
});
 
//使用mui固有的一些属性,要通过获取id再调用openwindow打开
//mui.plusReady(function(){
//	document.getElementById('tab2').addEventListener('tap',function(){
//		mui.openWindow({
//			url:'tel.html',
//			id:'tel.html'
//		});
//	});
//});
//mui.plusReady(function(){
//	document.getElementById('btn1').addEventListener('tap',function(){
//		mui.toast('ok');
//	});
//});
//function tel(){
//	mui.openWindow({
//		url:'tel.html',
//		id:'tel.html',
//		extras:{name:'xiaoming',age:18}
//	});
//}
mui.plusReady(function(){
	var prPage = mui.preload({url:'tel.html',id:'tel.html'});
	mui('#lists').on('tap','li',function(){
		mui.fire(prPage,'newsEvent',{'title':this.innerHTML,
		'id':this.getAttribute('id')});
		mui.openWindow({url:'tel.html',id:'tel.html'});
	});
});
