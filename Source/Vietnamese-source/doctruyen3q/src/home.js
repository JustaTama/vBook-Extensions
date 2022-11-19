function execute() {
    return Response.success([
        { title: "Mới Cập Nhật", input: "https://doctruyen3qme.com/", script: "gen.js" },
        { title: "Truyện Hot", input: "https://doctruyen3qme.com/hot", script: "gen.js" },
        { title: "18+", input: "https://doctruyen3qme.com/tim-truyen/18", script: "gen.js" },
        { title: "Top all", input: "2", script: "top.js" },
        { title: "Top Tháng", input: "3", script: "top.js" },
        { title: "Top Tuần", input: "5", script: "top.js" },
        { title: "Top Ngày", input: "6", script: "top.js" },
        { title: "Đã Hoàn Thành", input: "https://doctruyen3qme.com/tim-truyen?status=1&sort=2", script: "gen.js" },
        { title: "Top Yêu Thích", input: "9", script: "top.js" },

    ]);
}