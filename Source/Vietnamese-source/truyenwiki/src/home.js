function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://truyenwiki.net/index.php?filter=tat-ca&order=1", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyenwiki.net/index.php?filter=tat-ca&order=2", script: "gen.js"},
        {title: "Top Tuần", input: "https://truyenwiki.net/?rank", script: "gen.js"},
    ]);
}