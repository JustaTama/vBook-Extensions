function execute(url) {
    url = url.replace("gacsach.com", "gacsach.club");
    let response = fetch(url);
    if(response.ok) {
        let doc = response.html();
        let name = "-+ " + doc.select("h1.page-title").text() + " - ";
        let el = doc.select("div.book-nav option");
        let list = [];
        for (let i = 2; i< el.size(); i++) {
            let e = el.get(i);
            list.push({
                name: e.text().replace(new RegExp(name), ""),
                url: e.attr("value").match(/(http.*?)$/)[1],
                host: "https://gacsach.com",
            });
        }
        return Response.success(list);
    }

    return null;
}