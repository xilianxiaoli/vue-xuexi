<style>
    
</style>
<template>
    <div>
        <div>this is template body commoooo</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        //当切换到该组件是触发该函数
        activate:function(done) {
            console.log('activate comm')
            done()  //必须要调用该函数，否则页面不会渲染
        }
    }
</script>

