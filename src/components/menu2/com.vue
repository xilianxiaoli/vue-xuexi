<template>
    <div>
        <div>this is comm component</div>

        <span>父组件name:{{name}}</span>

        <div>
            <span class="bb" v-for='ms in messages' track-by="$index">{{ms}}</span>
        </div>

        <button @click="getFromChild()">dd</button>

        <com-child :f_name.sync='name' v-on:child="getFromChild" v-ref:comChild></com-child>

    </div>
</template>

<script>

    var comChild = require('./comChild.vue');

    var ff = {
        data: function() {
            return {
                msg: 'com vue',
                name: 'com',
                messages: []
            }
        },

        components: {
            comChild
        },
        methods:{
            getFromChild:function(msg) {
                this.messages.push(msg);
            }
        },
        // 在创建实例时 `events` 选项简单地调用 `$on`
        events: {
            'child': function(msg) {
                this.messages.push(msg);
                return true
            }
        },
        ready:function() {
            var c = this.$refs.comchild
            c.wall()
            console.log(c)
        }
    }

    module.exports = ff;
</script>

<style>
    .bb {
        display: block;
        color: #00b3ee;
    }
</style>
