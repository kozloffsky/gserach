define(["config","widgets/searchbar","widgets/searchresults","api"], function(config, bar, results,api){
    return {
        init: function() {
            bar.init()
            results.init()
            window.addEventListener("doSearchCommand", function (evt) {
                api.searchText(evt.detail)
                    .then(function (value) {
                        value.json().then(function (result) {
                            console.log(result)
                            window.dispatchEvent(new CustomEvent("searchDataReceived", {
                                detail: result
                            }))
                        })
                    })
                api.searchImages(evt.detail)
                    .then(function (value) {
                        value.json().then(function (result) {
                            window.dispatchEvent(new CustomEvent("searchImageDataReceived", {
                                detail: result
                            }))
                        })
                    })
            })
        }
    }
})