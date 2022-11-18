function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1").first().text(),
            cover: doc.select(".summary_image img").first().attr("src"),
            author: doc.select(".author-content").first().text(),
            description: doc.select(".description-summary p").html(),
            detail: doc.select(".summary-content").first().text()+'<br>Author : '+doc.select(".author-content").text(),
            host: "https://sayhentai.vip",
            ongoing: doc.select(".post-content_item").text().indexOf("OnGoing") != -1
        });
    }
    return null;
}