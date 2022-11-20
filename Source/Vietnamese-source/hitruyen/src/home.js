function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://hitruyen.vip", script: "jen.js"},
        {title: "Xem Nhiều", input: "https://hitruyen.vip/top-truyen/?m_orderby=views", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://hitruyen.vip/the-loai/truyen-full", script: "gen.js"},
    ]);
}