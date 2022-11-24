function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://truyena.net/index.php?cat=tat-ca", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyena.net/index.php?cat=tat-ca&order=1", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://truyena.net/index.php?cat=tat-ca&full=1", script: "gen.js"},
    ]);
}