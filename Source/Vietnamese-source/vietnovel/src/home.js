function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input:  "https://www.vietnovel.com/truyen-sang-tac-moi-nhat/", script: "gen.js"},
        {title: "Truyện Nổi Bật", input:  "https://www.vietnovel.com/truyen-sang-tac-chon-loc/", script: "gen.js"},
        {title: "Truyện Nhiều Người Đọc", input:  "https://www.vietnovel.com/truyen-sang-tac-nhieu-nguoi-doc/", script: "gen.js"},
        {title: "Royal Ranking - BXH Truyện Chữ", input:  "https://www.vietnovel.com/royal-ranking/", script: "gen.js"},
        {title: "Đã Hoàn Thành", input:  "https://www.vietnovel.com/truyen-sang-tac-full/", script: "gen.js"},
    ]);
}