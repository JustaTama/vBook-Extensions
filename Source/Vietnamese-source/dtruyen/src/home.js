function execute() {
    return Response.success([
        { title: "Mới cập nhật", input: "https://dtruyen.com/all", script: "gen.js" },
        { title: "Truyện Dịch Chọn Lọc", input: "https://dtruyen.com/truyen-dich/", script: "gen.js" },
        { title: "Xem nhiều", input: "https://dtruyen.com/truyen-duoc-xem-nhieu-nhat", script: "gen.js" },
        { title: "Yêu Thích", input: "https://dtruyen.com/truyen-duoc-yeu-thich-nhat/", script: "gen.js" },
        { title: "Đã Hoàn Thành", input: "https://dtruyen.com/truyen-full/", script: "gen.js" }
    ]);
}