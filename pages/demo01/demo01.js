Component({
  data: {
    message: "欢迎来到demo1",
    testWord: "这是父组件传给子组件的值",
    showMsg: true,
    array: [{
        name: "张三"
      },
      {
        name: "李四"
      }
    ],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-06-18'
    }
  },
  methods: {
    receiveValue(res) {
      console.log(res.detail)
    },
    changeMsgState() {
      this.setData({
        message: "Hello World"
      })
    }
  }
})