//za velike projekte cepamo store.js u module organizujuci po celini-oblastima
//ako imamo nesto sto ceo projekat koristi ne moramo te funkcije cepati
//po modulima vec mozemo napraviti zasebne fajlove na nivou sa
//stoje.js i onda njih importovati u store.js i onda ih registrujemo
//ovde u store konstanti
import Vue from 'vue'
import Vuex from 'vuex'
import counter from '../store/modules/counter'
//registrujemo plugin (paket) koji nam daje dodane alate da napravimo taj state menadzment
Vue.use(Vuex);

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

//vuex ima metod store koji prima objekat koji konfigurise taj store
export const store = new Vuex.Store({
    //state je rezervisana rec

    //da se ne bi ponavljali pravimo gettere u store fajlu i onda pomocu njega uzimamo metod koji se koristi na vise mesta
    //nas kod se cuva samo na jednom mestu i onda dolazimo getterom iz delova nase aplikacije po ono sto zelimo
    //getter rezervisana rec
    //state vezujemo za metod

    //postoje takodje i mutacije koje su ustvari setteri one menjaju atanje store
    //state se preko njih uppdateuje i onda sve komponente koje slusaju bivaju promenjene
    //mutacije su uvek po pravilu sinhrone, da bi mogli da pratimo promene. ako hocemo da kombinujemo tj da pravimo asinhrone taskove sa mutacijama koristimo "akcije"
    //AKCIJE SU kao neki lejer izmedju komponenti i mutacija u kojima obavljamo asinhrone operacije pre no sto se pozove mutacija koja uvek mora da je sinhrona po prirodi
    //po pravilu mutacije bi uvek preko njih i trebali ubacivati 

    
    //svi iscepkani fajlovi koji se nalaze u modulima idu u objekat modules
    //u ovom centralnom store.js fajlu
    actions,
    getters,
    mutations,
    modules:{
        counter
    }
});