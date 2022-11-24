function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://truyentiki.com/index.php?filter=tat-ca&order=1", script: "gen.js"},
        {title: "Truyện HOT", input: "https://truyentiki.com/?rank", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyentiki.com/index.php?filter=tat-ca&order=2", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://truyentiki.com/index.php?cat=tat-ca&full=1", script: "gen.js"},
    ]);
}