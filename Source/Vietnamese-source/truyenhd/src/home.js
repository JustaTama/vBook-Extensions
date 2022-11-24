function execute() {
    return Response.success([
        {title: "Truyện Dịch/Edit", script: "hot.js", input: "https://truyenhdx.com/truyen-dich DICHEDIT new-chap"},
        {title: "Truyện Sáng Tác", script: "hot.js", input: "https://truyenhdx.com/truyen-sang-tac SANGTAC new-chap"}
    ])
}