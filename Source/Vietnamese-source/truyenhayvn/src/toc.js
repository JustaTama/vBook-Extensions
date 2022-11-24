function execute(url) {
    url = url.replace(/(www.)?truyenhayvn.com/g, "2.truyenhay.com");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let list = [];
        doc.select("#list-chap .list-item li a").forEach(e => list.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://2.truyenhay.com"
        }));
        return Response.success(list);

    }
    return null;
}