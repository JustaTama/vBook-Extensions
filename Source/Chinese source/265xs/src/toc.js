function execute(url) {
    let sid = url.match(/\d+/g)[1];
    let response = fetch('http://www.265xs.com/'+sid);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select("#list dd a")
        const data = [];
        for (let i = 12;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: 'https://www.265xs.com'+e.attr("href"),
                host: "https://www.265xs.com"
            })
        }
        return Response.success(data);
    }
    return null;
}