import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"

Vue.config.productionTip = false


const socketOptions = {
  autoConnect: false
}

Vue.use(
  new VueSocketIO({
    debug: true ,
    connection: SocketIO("127.0.0.1:1024", socketOptions),
    store,
  })
)


new Vue({
  sockets: {
    connecting() {
      console.log('正在连接')
    },
    disconnect() {
      console.log("Socket 断开");
    },
    connect_failed() {
      cosnole.log('连接失败')
    },
    connect() {
      console.log('socket connected')
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
