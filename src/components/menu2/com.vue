<template>
    <div>
        <div>this is comm component</div>

        <span>父组件name:{{name}}</span>

        <div>
            <span class="bb" v-for='ms in messages'></span>
        </div>

        <com-child :f_name.sync='name'></com-child>

    </div>
</template>

<script>

    var comChild =  require ('./comChild.vue');

    var ff =  {
        data:function() {
            return{
                msg:'com vue',
                name:'com',
                messages:[]
            }
        },

        components:{
            comChild
        },
        // 在创建实例时 `events` 选项简单地调用 `$on`
        events: {
            'com-child': function (msg) {
                // 事件回调内的 `this` 自动绑定到注册它的实例上
                this.messages.push(msg)
            }
        }
    }

    module.exports = ff;
</script>

<style>
.bb{
    display: block;
    color: #00b3ee;
}
</style>
