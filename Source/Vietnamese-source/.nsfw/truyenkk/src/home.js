function execute() {
    return Response.success([
    {title : "Mới Cập Nhật", input : "SANGTAC new-chap", script: "gen.js" },
    {title : "Truyện HOT", input : "HOT top-all", script: "gen.js" },
    {title : "Truyện Mới", input : "SANGTAC new", script: "gen.js" },
    ])
}