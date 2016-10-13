<template>
    <div>
        <div>this is com component</div>

        <com-child></com-child>

    </div>
</template>
<style>

</style>
<script>

    var comChild =  require ('./comChild.vue')

    module.exports = function() {
        data:function() {
            return{
                msg:'hello vue'
            }
        },

        components:{
            comChild
        }
    }

//    export default{
//        data:function() {
//            return{
//                msg:'hello vue'
//            }
//        },
//
//        components:{
//            comChild
//        }
//    }
</script>
