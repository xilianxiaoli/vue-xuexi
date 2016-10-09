<style>
    .red{
        color: red;
    }
</style>
<template>
    <div>
        <div>this is template body commoooo</div>
        <div :class='{red:true}'>this is {{aa | numberToZero}}</div>
        <div v-my-directive:fn.a.b = 'msg'>
        </div>

        <pre @click='cc()'>{{ nestedObject | json 4 }}</pre>

        <span v-for='(key,val) in nestedObject'>
        {{key}}:{{val}}
        </span>

        {{msg}}

        <input type="text" :msg>

        <partial v-bind:name="partialId"></partial>

    </div>
</template>
<script>
    export default{
//        name:'fuck',
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
        //当切换到该组件是触发该函数
        activate: function (done) {
            console.log('activate comm')
            done()  //必须要调用该函数，否则页面不会渲染
        },
        init: function () {
            console.log('comm init')
        },
        created:function(){
            console.log('comm created');

        },
        ready:function(){
            console.log('comm ready');
            this.$el;
            this.$root;
            this.$log();
        }



    }
</script>

