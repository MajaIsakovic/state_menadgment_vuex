<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
      computed:{
          counter(){
              //da se ne bi ponavljali pravimo gettere u store fajlu i onda pomocu njega uzimamo metod koji se koristi na vise mesta
              //nas kod se cuva samo na jednom mestu i onda dolazimo getterom iz delova nase aplikacije po ono sto zelimo
              //return this.$store.state.counter * 2;
            return this.$store.getters.doubleCounter;
          }
      }
    }
</script>