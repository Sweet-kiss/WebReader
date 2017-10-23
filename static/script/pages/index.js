$.get('/ajax/index',function(d){
	//debugger;
	new Vue({
		el:'#app',
		data: {
			top:d.items[0].data.data,
			hot:d.items[1].data.data,
			recommend:d.items[2].data.data,
			female:d.items[3].data.data,
			male:d.items[4].data.data,
			free:d.items[5].data.data,
			topic:d.items[6].data.data,
			isA:true,
            isB:false,
            bookCity:'书城',
            bookShelf:'书架',
            isshow1:true,
            isshow2:false
		},
		methods: {
		  addClass1() {
               this.isA = true
			   this.isB = false
			   this.isshow1 = true
			   this.isshow2 = false
		  },
		   addClass () {
		   	   this.isA = false
			   this.isB = true
			   this.isshow1 = false
			   this.isshow2 = true
			}
		}		
	})
},'json');