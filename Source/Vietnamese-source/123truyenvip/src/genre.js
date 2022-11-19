function execute() {
    let response = fetch('https://123truyenvip.com');
    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select('.list-cat-inner  a').forEach(e => {
            data.push({
                title: e.select('a').text(),
                input: e.attr('href'),
                script: 'gen.js'
            });
        });
        return Response.success(data);
    }
    return null;
}