function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "http://truyendichgiare.com/danh-sach/truyen-moi", script: "gen.js"},
        {title: "Truyện HOT", input: "http://truyendichgiare.com/danh-sach/truyen-hot", script: "gen.js"},
        {title: "Truyện Free", input: "http://truyendichgiare.com/danh-sach/truyen-free", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "http://truyendichgiare.com/danh-sach/truyen-full", script: "gen.js"},
    ]);
}