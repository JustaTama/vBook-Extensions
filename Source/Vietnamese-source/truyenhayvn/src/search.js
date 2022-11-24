function execute(key, page) {
    if (!page) page = '1';

    let response = fetch("https://2.truyenhay.com/search", {
        method: "GET",
        queries: {keyword: key, page: page}
    });

    if (response.ok) {
        let doc = response.html();
        let novelList = [];
        let next = doc.select(".pagination > li.active + li").last().text();
        doc.select(".list-stores > .item").forEach(e => {
            novelList.push({
                name: e.select(".store-title > a").text(),
                link: e.select(".store-title > a").first().attr("href"),
                description: e.select(".author").text(),
                cover: e.select("img").first().attr("data-src").replace("180/90", "217/300"),
                host: "https://2.truyenhay.com",
            });
        });
        return Response.success(novelList, next);
    }
    return null;
}
