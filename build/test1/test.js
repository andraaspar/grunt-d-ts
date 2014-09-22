var test1;
(function (test1) {
    var Main = (function () {
        function Main() {
            grunt.config.init({});
        }
        Main.instance = new Main();
        return Main;
    })();
    test1.Main = Main;
})(test1 || (test1 = {}));
