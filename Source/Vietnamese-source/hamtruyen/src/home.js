function execute() {
    return Response.success([
        { title: "Mới Cập Nhật (T.Tranh)", input: "2", script: "gen1ttranh.js" },
        { title: "Mới Cập Nhật (T.Chữ)", input: "2", script: "gen1tchu.js" },
        { title: "Bảng Xếp Hạng (T.Tranh)", input: "1", script: "gen1ttranh.js" },
        { title: "Bảng Xếp Hạng (T.Chữ)", input: "1", script: "gen1tchu.js" },
        { title: "Truyện Mới (T.Tranh)", input: "3", script: "gen1ttranh.js" },
        { title: "Truyện Mới (T.Chữ)", input: "3", script: "gen1tchu.js" },
        { title: "Đã Hoàn Thành (T.Tranh)", input: "2", script: "gen2ttranh.js" },
        { title: "Đã Hoàn Thành (T.Chữ)", input: "2", script: "gen2tchu.js" },
    ]);
}