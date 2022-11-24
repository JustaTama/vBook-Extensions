function execute() {
    return Response.success([
        { title: "Truyện Mới", input: "/danh-sach/truyen-moi", script: "gen.js" },
        { title: "Truyện HOT", input: "/danh-sach/truyen-hot", script: "gen.js" },
        { title: "Đã Hoàn Thành", input: "/danh-sach/truyen-full", script: "gen.js" },
    ]);
}
