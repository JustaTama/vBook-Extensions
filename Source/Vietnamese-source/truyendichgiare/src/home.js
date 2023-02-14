function execute() {
    return Response.success([
        {title: "Truyện Mới", input: "https://truyenfulldich.com/danh-sach/truyen-moi", script: "gen.js"},
        {title: "Truyện Hot", input: "https://truyenfulldich.com/danh-sach/truyen-hot", script: "gen.js"},
        {title: "Truyện Full", input: "https://truyenfulldich.com/danh-sach/truyen-full", script: "gen.js"},
        {title: "Truyện Free", input: "https://truyenfulldich.com/danh-sach/truyen-free", script: "gen.js"},
    ]);
}