/**
 * Created by lizc on 2016/10/4.
 */
module.exports = {
    vue : undefined,
    init:function(v){
        this.vue = v;
        this.vue.directive('myDirective',{
            bind: function () {
                console.log('demo bound!')
            },
            update: function (value) {
                this.el.innerHTML =
                    'name - '       + this.name + '<br>' +
                    'expression - ' + this.expression + '<br>' +
                    'argument - '   + this.arg + '<br>' +
                    'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
                    'value - '      + value
            }
        })
    }
};
