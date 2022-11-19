function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({"page": page}).html()
    var next = doc.select(".paging").select("li:has(a.active) + li").text()
    const el = doc.select(".listComic .list > li")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".detail h3 a").first().text(),
            link: e.select(".detail h3 a").first().attr("href"),
            cover: e.select(".cover img").first().attr("data-src"),
            description: e.select(".chapters a").first().text(),
            host: "https://thienhatruyen.com"
        })
    }
    return Response.success(data, next)
}