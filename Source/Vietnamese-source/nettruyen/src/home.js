function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://www.nettruyenin.com/tim-truyen", script: "gen.js"},
        {title: "Top Yêu Thích", input: "https://www.nettruyenin.com/tim-truyen?status=-1&sort=20", script: "gen.js"},
        {title: "Truyện mới", input: "https://www.nettruyenin.com/tim-truyen?status=-1&sort=15", script: "gen.js"},
        {title: "Top All", input: "https://www.nettruyenin.com/tim-truyen?status=-1&sort=10", script: "gen.js"},
        {title: "Top Tháng", input: "https://www.nettruyenin.com/tim-truyen?status=-1&sort=11", script: "gen.js"},
        {title: "Top Tuần", input: "https://www.nettruyenin.com/tim-truyen?status=-1&sort=12", script: "gen.js"},
        {title: "Top Ngày", input: "https://www.nettruyenin.com/tim-truyen?status=-1&sort=13", script: "gen.js"},
        {title: "Xuyên Không", input: "https://www.nettruyenin.com/tim-truyen/xuyen-khong-205", script: "gen.js"},
        {title: "Chuyển Sinh", input: "https://www.nettruyenin.com/tim-truyen/chuyen-sinh-2130", script: "gen.js"},
        {title: "Ngôn Tình", input: "https://www.nettruyenin.com/tim-truyen/ngon-tinh", script: "gen.js"},
        {title: "18+", input: "https://www.nettruyenin.com/tim-truyen/truong-thanh", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://www.nettruyenin.com/truyen-full", script: "gen.js"},
    ]);
}