function execute(url) {
    url = url.replace("qmanga.net", "qmanga.co");
    url = url.replace("qmanga.co", "qmanga2.net");
    url = url.replace("qmanga2.net", "qmanga4.com");
    url = url.replace("qmanga4.com", "qmanga3.net");
    var doc = Http.get(url).html();

     var el = doc.select(".ul-list-chaper-detail-commic li a")
    const data = [];
    for (var i = el.size() - 1; i >= 0 ; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://qmanga4.com"
        })
    }

    return Response.success(data);
}