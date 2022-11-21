function execute() {
    return Response.success([
        {title: "Truyện Nổi Bật", input: "https://qmanga4.com/danh-muc/noi-bat", script: "gen.js"},
        {title: "Truyện Phổ Biến", input: "https://qmanga4.com/danh-muc/pho-bien", script: "gen.js"},
        {title: "Huyền Huyễn", input: "https://qmanga4.com/danh-muc/huyen-huyen", script: "gen.js"},
        {title: "Xuyên Không", input: "https://qmanga4.com/danh-muc/xuyen-khong", script: "gen.js"},
        {title: "Trọng Sinh", input: "https://qmanga4.com/danh-muc/trong-sinh", script: "gen.js"},
        {title: "Ngôn Tình", input: "https://qmanga4.com/danh-muc/ngon-tinh", script: "gen.js"},
        {title: "18+", input: "https://qmanga4.com/danh-muc/18", script: "gen.js"},
    ]);
}