function execute() {
    return Response.success([
        { title: "Cập Nhật (T.Tranh)", input: "2", script: "gen.js" },
        { title: "Cập Nhật (T.Chữ)", input: "2", script: "gen2.js" },
        { title: "Bảng Xếp Hạng (T.Tranh)", input: "1", script: "gen.js" },
        { title: "Bảng Xếp Hạng (T.Chữ)", input: "1", script: "gen2.js" },
        { title: "Truyện Mới (T.Tranh)", input: "3", script: "gen.js" },
        { title: "Truyện Mới (T.Chữ)", input: "3", script: "gen2.js" },
    ]);
}