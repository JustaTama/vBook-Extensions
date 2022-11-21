function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://sstruyen.vn/danh-sach/truyen-moi-cap-nhat/", script: "gen.js"},
        {title: "Truyện HOT", input: "https://sstruyen.vn/danh-sach/truyen-hot/", script: "gen.js"},
        {title: "Ngôn Tình Hay", input: "https://sstruyen.vn/danh-sach/ngon-tinh-hay/", script: "gen.js"},
        {title: "Tiên Hiệp Hay", input: "https://sstruyen.vn/danh-sach/tien-hiep-hay/", script: "gen.js"},
    ]);
}