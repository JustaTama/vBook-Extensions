function execute(url) {
    const nUrl = url.replace('wap','b');
    var doc = Http.get(nUrl).html();
    var el = doc.select(".DivTable .DivTd a")
    const data = [];
    for (var i = 0;i < el.size(); i++) {
        var e = el.get(i);
        var blink = e.attr("href");
        if (blink.startsWith("//")) {
            blink = "https:" + blink;
        }
        data.push({
            name: e.select("a").text(),
            url: blink,
            host: "https://b.faloo.com"
        })
    }

    return Response.success(data);
}