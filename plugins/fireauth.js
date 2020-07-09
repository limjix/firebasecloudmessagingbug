// This method negates the need to have cookies
// because all of it is handled within onAuthStateChanged listener

import { auth } from '@/firebase/init.js'

export default (context) => {
  const {store} = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {

      if(user) {
        console.log("logged in", user)
        //store.commit('user/SET_USER', user)
        //store.dispatch('user/getUserData')

        //store.dispatch("notifications/getCases")
        //store.dispatch("notifications/getCasesSubCollection")


      } else {
        console.log("logged out")
        //store.commit('user/UNSET_USER')
        //store.commit('notifications/CLEAR_PAYLOAD')
        //store.dispatch("notifications/destroyListener")
      }
      resolve()
    })
  })
}
