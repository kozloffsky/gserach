define(['config'], function (config) {
    function SearchBar() {}

    SearchBar.prototype = {
        input: null,

        init: function () {
            this.input = document.getElementById(config.searchBar.inputId)
            this.searchButton = document.getElementById(config.searchBar.buttonId)
            this.searchButton.addEventListener("click", this.searchHandler.bind(this))
        },

        searchHandler:function(event) {
            window.dispatchEvent(new CustomEvent("doSearchCommand", { detail: this.input.value }))
        }
    }
    return new SearchBar()
})