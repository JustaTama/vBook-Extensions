function execute() {
    return Response.success([
        { title: "Mới Cập Nhật", input: "https://truyenvn.vip/danh-sach-truyen", script: "gen.js" },
        { title: "Truyện HOT", input: "https://truyenvn.vip/truyen-hot", script: "gen.js" },
        { title: "Đã Hoàn Thành", input: "https://truyenvn.vip/truyen-hoan-thanh", script: "gen.js" }
    ]);
}