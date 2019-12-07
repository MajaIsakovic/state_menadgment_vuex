import Vue from 'vue'
import App from './App.vue'

//registrujemo vuex u glavnom modulu
import { store } from './store/store';

Vue.config.productionTip = false

//Vuex koristi store tj central store gde je nas state sacuvan
//jedan fajl gde cuvamo stanje aplikacije
//to ne znaci da nase komponente ne mogu da imaju svoje stanje (npr ako imamo properti koji 
//koristimo samo u okviru jedne komponente nema potrebe da ga izmestamo u centralno stanje aplikacije ako cemo ga koristiti samo u tom jednom stanju tj jednoj komponenti)
//sve sto koristimo u razlicitim delovima aplikacije treba da stoji u centralizovanom stanju

//konvencija je da ga uglavnom cuvamo u folderu koji se zove store a koji je u istoj ravni sa komponentama
//u store.js
//instaliramo plugin vuex npm install --save vuex i zatim ga inportujemo zajedno sa vue u store.js file
new Vue({
  render: h => h(App),
  //i registrujemo ga unutar glavne Vue instance (ako je isti naziv za key value moze i samo jedan (es6 sintaksa)
  store
}).$mount('#app')
