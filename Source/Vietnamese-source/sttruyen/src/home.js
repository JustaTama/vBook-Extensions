function execute() {
    return Response.success([
        {title: "Truyện Dịch", input: "https://sttruyen.com/cat/truyen-dich", script: "gen.js"},
        {title: "Tiên Hiệp", input: "https://sttruyen.com/cat/tien-hiep/", script: "gen.js"},
        {title: "Huyền Huyễn", input: "https://sttruyen.com/cat/huyen-huyen/", script: "gen.js"},
        {title: "Xuyên Không", input: "https://sttruyen.com/cat/xuyen-khong", script: "gen.js"},
        {title: "Trọng Sinh", input: "https://sttruyen.com/cat/trong-sinh/", script: "gen.js"},
        {title: "Hệ Thống", input: "https://sttruyen.com/cat/he-thong/", script: "gen.js"},
        {title: "Mạt Thế", input: "https://sttruyen.com/cat/mat-the/", script: "gen.js"},
        {title: "Đô Thị", input: "https://sttruyen.com/cat/do-thi/", script: "gen.js"},
    ]);
}