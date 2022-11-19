function execute() {
    return Response.success([
        { title: "Truyện Mới Cập Nhật", input: "new", script: "gen.js" },
        { title: "VIP Truyện Siêu Hay", input: "Truyện Siêu Hay", script: "source.js" },
        { title: "Chuyển Sinh", input: "Chuyển Sinh", script: "source.js" },
        { title: "Xuyên Không", input: "Xuyên Không", script: "source.js" },
        { title: "Fantasy", input: "Fantasy", script: "source.js" },
        { title: "Ngôn Tình", input: "Ngôn Tình", script: "source.js" },
    ]);
}