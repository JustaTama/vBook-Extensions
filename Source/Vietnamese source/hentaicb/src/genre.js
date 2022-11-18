function execute() {
    const doc = Http.get("https://hentaicb.top/the-loai-genres").html();
    const el = doc.select(".genres a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}