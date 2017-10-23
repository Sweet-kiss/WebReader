var id = location.href.split('?id=').pop();
$.get('/ajax/book?id=' + id,function(d){
	console.log(d);
	new Vue({
		el:'#app',
		data:d,
		methods:{
			readBook:function(){
				location.href = "/reader"
			}
		}
	});
},'json');