function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "", script: "gen2.js"},
        {title: "Truyện VIP Đọc Nhiều", input: "vip", script: "gen.js"},
        {title: "Truyện Huyền Huyễn", input: "", script: "gen3.js"},
        {title: "Truyện Đô Thị", input: "", script: "gen4.js"},
        {title: "Truyện Võ hiệp/tiên hiệp", input: "", script: "gen5.js"},
        {title: "Truyện Võng du/cạnh kỹ", input: "", script: "gen7.js"},
        {title: "Đã Hoàn Thành", input: "", script: "gen6.js"},
    ]);
}