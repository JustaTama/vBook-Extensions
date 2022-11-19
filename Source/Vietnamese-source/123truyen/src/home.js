function execute() {
    return Response.success([
        {title: "Truyện Mới Cập Nhật", input: "https://123truyenvip.com/danh-sach/truyen-moi", script: "gen.js"},
        {title: "Truyện HOT", input: "https://123truyenvip.com/danh-sach/truyen-hot", script: "gen.js"},
        {title: "Truyện Full", input: "https://123truyenvip.com/danh-sach/truyen-full", script: "gen.js"},
    ]);
}