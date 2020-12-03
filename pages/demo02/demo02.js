Component({
  properties:{
    sonData:{
      type:"String",
      value:""
    }
  },
  ready:function(){
    // console.log(this.data.sonData)
  },
  methods:{
    sendMesgToFather:function(){
      this.triggerEvent("sendEvent","来自子组件")
    }
  }
})