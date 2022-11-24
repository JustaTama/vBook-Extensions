function execute() {
    return Response.success([
        {title: "Kiếm Hiệp", input: "https://truyenchu.vn/danh-sach/kiem-hiep-hay", script: "gen.js"},
        {title: "Ngôn Tình", input: "https://truyenchu.vn/danh-sach/ngon-tinh-hay", script: "gen.js"},
        {title: "Tiên Hiệp", input: "https://truyenchu.vn/danh-sach/tien-hiep-hay", script: "gen.js"},
        {title: "Truyện Full", input: "https://truyenchu.vn/danh-sach/truyen-full", script: "gen.js"},
        {title: "Truyện Hot", input: "https://truyenchu.vn/danh-sach/truyen-hot", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyenchu.vn/danh-sach/truyen-moi", script: "gen.js"}
    ]);
}
