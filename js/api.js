define([], function () {
    var apiKey = "AIzaSyB9K4-o9PSAzipyVB_AVFXPpNJHOvMUZ64"
    var base = "https://www.googleapis.com/customsearch/v1?"
    var cx = "004652122369313339545:kq5u4bbuc2q"
    return {
        searchText: function (text) {
            return fetch(base+"key="+apiKey+"&q="+text+"&cx="+cx, {
                method:"GET",
            })
        },

        searchImages:function(text) {
            return fetch(base+"key="+apiKey+"&q="+text+"&cx="+cx+"&searchType=image", {
                method:"GET",
            })
        }
    }
})