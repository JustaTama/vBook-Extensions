function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://truyenfull.vn/danh-sach/truyen-moi/", script: "gen.js"},
        {title: "Truyện HOT", input: "https://truyenfull.vn/danh-sach/truyen-hot/", script: "gen.js"},
        {title: "Truyện Full", input: "https://truyenfull.vn/danh-sach/truyen-full/", script: "gen.js"},
        {title: "Tiên Hiệp", input: "https://truyenfull.vn/danh-sach/tien-hiep-hay/", script: "gen.js"},
        {title: "Kiếm Hiệp", input: "https://truyenfull.vn/danh-sach/kiem-hiep-hay/", script: "gen.js"},
        {title: "Ngôn Tình", input: "https://truyenfull.vn/danh-sach/ngon-tinh-hay/", script: "gen.js"},
    ]);
}
