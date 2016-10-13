<style>
    .red{
        color: red;
    }
</style>
<template>
    <div>
        <div>this is template body comm</div>
        <div :class='{red:true}'>this is {{aa | numberToZero}}</div>
        <div v-my-directive:fn.a.b = 'msg'>
        </div>

        <pre @click='cc()'>{{ nestedObject | json 4 }}</pre>

        <span v-for='(key,val) in nestedObject'>
        {{key}}:{{val}}
        </span>

        {{msg}}

        <partial v-bind:name="partialId"></partial>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue',
                nestedObject:{
                    aa:12,
                    bb:'abc'
                }
            }
        },
        methods:{
            cc:function (){
                this.msg = 'change now'
            }
        },

        //生命周期
        init: function () {
            console.log('comm init')
        },
        created:function(){
            console.log('comm created');
        },
        beforeCompile:function() {
            console.log('comm beforeCompile')
        },
        compiled:function() {
            console.log('comm compile')
        },
        attached: function() {
            console.log('comm attached')
        },
        ready:function(){
            console.log('comm ready');
            console.log(this.$el);
            console.log(this.$root);
            this.$log();
        },

        //当切换到该组件是触发该函数
        activate: function (done) {
            console.log('activate comm')
            done()  //必须要调用该函数，否则页面不会渲染
        }

    }
</script>

