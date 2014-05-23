require(['js/views/views#View'], function (View) {
    console.log(View);
    var Button = function () {
        this.node.innerHTML = 'Button';
    };
    Button.prototype = new View();
    Button.prototype.constructor = View;
    exports.Button = Button;
})
