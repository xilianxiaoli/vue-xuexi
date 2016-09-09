<template>

    <div style="">
        <div class="row a-bounceinT" style="text-align:center;padding:100px;">
            <p>welcome to vue seeds menu2</p>
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
            },
            change:function() {
                this.show = !this.show;
            }
        },
        components:{
            com,
            comm
        },
        activate:function(done) {
            console.log('activate')
        }
    }

</script>

<style>
    .pp {
        color: red;
    }
</style>
