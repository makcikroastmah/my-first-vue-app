var app = new Vue({
    el: '#app',
    data: {
      name: 'Ayman',
      food_items : ['slurpee','burger','wrap']
    },
    methods:{
     buttonClick: function(){
         alert(this.name);
     }
    },

    

    
  })