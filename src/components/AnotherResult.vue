<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    //moze i bez da postavljamo sve metode u computed property, tj da mapiramo gettere direkt za propertije bez da pravimo metode
    //i za to iz vuexa trebamo da uvezemo mapGetters
    import { mapGetters } from 'vuex';

    export default {
    // 1. metode u computed propery
    //   computed:{
    //       counter(){
    //           return this.$store.getters.doubleCounter;
    //       },
    //       clicks(){
    //            return this.$store.getters.stringCounter;
    //       }
    //   }
    //2. mapGetters u computed propertiju:
        computed: mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
    }
</script>