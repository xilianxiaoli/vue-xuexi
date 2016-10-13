<style>
    a{
        display: block;
    }
</style>
<template>
    <div>
        <div>this is comm child </div>
        <span style="display:block">子组件name:{{f_name}}</span>


        <input type="text" v-model='f_name'>


        <a href="https://vuejs.org.cn/" target="_blank">vue</a>
        <a href="https://github.com/vuejs/vue-router" target="_blank">vue-router</a>
        <a href="http://vue-loader.vuejs.org/en/index.html" target="_blank">vue-loader</a>
        <a href="http://vuex.vuejs.org/en/intro.html" target="_blank">vuex</a>
        <a href="https://github.com/vuejs/awesome-vue#libraries--plugins" target="_blank">vue插件列表</a>
        <a href="http://javascript.ruanyifeng.com/nodejs/module.html" target="_blank">CommonJS规范</a>
        <a href="https://babeljs.io/docs/learn-es2015/" target="_blank">babel-es6</a>
        <a href="http://es6.ruanyifeng.com/" target="_blank">es6</a>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                index:0
            }
        },
        props:{
            f_name:String
        },
        methods:{
          cc:function(){
              console.log(this.f_name);
              this.$dispatch('com-child', 'child send ms'+this.index);
              this.index++;
          }
        }
    }
</script>
