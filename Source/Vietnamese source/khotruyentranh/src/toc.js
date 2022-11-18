function execute(url) {
    var doc = fetch(url).html();
    var el = doc.select(".chapter-list a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "https://khotruyentranhhot.com"
        })
    }
    return Response.success(data);
}