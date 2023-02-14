function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://truyenfulldich.com/danh-sach/truyen-moi", script: "gen.js"},
        {title: "Truyện HOT", input: "https://truyenfulldich.com/danh-sach/truyen-hot", script: "gen.js"},
        {title: "Truyện Free", input: "https://truyenfulldich.com/danh-sach/truyen-free", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://truyenfulldich.com/danh-sach/truyen-full", script: "gen.js"},
    ]);
}