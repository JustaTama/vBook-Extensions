function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('https://sayhentai.vip/search', {
        method: "GET",
        queries: {
            s : key,
            page : page
        }
    });
    if (response.ok) {
        let doc = response.html();
        let comiclist = [];
        let next = doc.select(".pager").select('li.active + li').text();
        doc.select(".page-item-detail").forEach(e => {
            comiclist.push({
                name: e.select("h3 a").text(),
                link: e.select("h3 a").attr("href"),
                cover: e.select("img.img-responsive").attr("data-src") || e.select("img.img-responsive").attr("src"),
                description: e.select('.chapter').first().text(),
                host: "https://sayhentai.vip"
            });
        });
        return Response.success(comiclist, next);
    }
    return null;
}