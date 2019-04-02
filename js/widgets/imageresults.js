define(["config"], function (config) {
    return {
        container: null,
        itemTemplate: null,
        init: function () {
            this.itemTemplate = document.getElementById("images-template")
            this.container = document.getElementById("image-search-results-container")

            window.addEventListener("searchImageDataReceived", function (evt) {
                console.log(evt.detail)
                for (var i in evt.detail.items){
                    var item = evt.detail.items[i]
                    console.log(this.itemTemplate.content)
                    var tpl = document.importNode(this.itemTemplate.content, true)
                    console.log(item)
                    tpl.querySelector("[data=header]").innerText=item.title
                    tpl.querySelector("[data=link").innerText=item.link
                    tpl.querySelector("[data=link").href=item.link
                    tpl.querySelector("[data=snippet").innerText=item.snippet
                    this.container.appendChild(tpl)
                }
            }.bind(this))
        }

    }
})