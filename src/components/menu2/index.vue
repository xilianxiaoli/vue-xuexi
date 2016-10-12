<template>

    <div style="">
        <div class="row a-bounceinT" style="text-align:center;padding:100px;">
            <p>welcome to vue seeds menu2</p>
            <p>path: {{$route.path}}</p>
            <div>
                <p>当前路径: {{$route.path}}</p>
                <p>当前路由参数: {{$route.params | json}}</p>
            </div>
            <span v-on:click="makeArr">{{name | capitalize }}</span>
            <p v-if='1==1' v-bind:class='classObj' @click="change()">v-if</p>
            showCount = {{showCount}}
        </div>
        <input type="text" v-model="currentView">
        <component :is="currentView"></component>
        <ul>
            <li v-for="item in list">
                {{item.name}}
            </li>
        </ul>

        <button @click='goto()'>切换路由</button>

        <a v-link="'comm'">comm</a>

        <!--<a>-->

    </div>

</template>

<script>
    import com from './com.vue'
    import comm from './comm.vue'

    export default{
        data: function() {
            return {
                currentView:'com',
                name: 'xiaoli',
                classObj: {
                    pp: true
                },
                list:[],
                show:true,
                count:1
            }
        },
        computed: {
            qq:function() {
                return !this.classObj.pp
            },
            showCount:function() {
                if(this.show){
                    this.count += 1
                }
                return this.count
            }
        },
        methods: {
            makeArr : function () {
                for(var i=0;i<10;i++){
                    var _item = {name:'name='+i}
                    this.list.push(_item)
                }
                this.$dispatch('child-msg', 'child')
                console.log('activate path: '+$route.path)

            },
            change:function() {
                this.show = !this.show;
            },
            goto:function (){
                router.go({name:'comm'})
            }
        },
        components:{
            com,
            comm
        },
        activate:function(done) {
            console.log('activate path: ')
        }
    }

</script>

<style>
    .pp {
        color: red;
    }
</style>
