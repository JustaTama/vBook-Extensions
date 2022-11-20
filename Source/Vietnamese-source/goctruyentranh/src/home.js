function execute() {
    return Response.success([
        {title: "Truyện Mới Cập Nhật", input: "recent", script: "gen.js"},
        {title: "Truyện Mới", input: "new", script: "gen.js"},
        {title: "Xem Nhiều", input: "view", script: "gen.js"},
    ]);
}