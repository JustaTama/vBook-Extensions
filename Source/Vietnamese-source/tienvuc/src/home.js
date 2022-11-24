function execute() {
    return Response.success([
        { title: "Mới Cập Nhật", input: "new-books", script: "gen.js" },
        { title: "Truyện VIP", input: "hot-books", script: "gen.js" },
        { title: "Truyện HOT Free", input: "hot-free-books", script: "gen.js" },
        { title: "Đã Hoàn Thành", input: "full-books", script: "gen.js" },
    ]);
}