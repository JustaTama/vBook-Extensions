function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", script: "gen.js", input: "https://daoquan.vn/tim-kiem-tong-hop?"},
        {title: "Truyện Đề cử", script: "gen.js", input: "https://daoquan.vn/tim-kiem-tong-hop?rank=nominate"},
        {title: "Truyện Mới", script: "gen.js", input: "https://daoquan.vn/tim-kiem-tong-hop?srt=dateCreated"},
        {title: "Xem nhiều", script: "gen.js", input: "https://daoquan.vn/tim-kiem-tong-hop?rank=view"},
        {title: "Yêu thích", script: "gen.js", input: "https://daoquan.vn/tim-kiem-tong-hop?rank=like"},
        {title: "Theo dõi nhiều", script: "gen.js", input: "https://daoquan.vn/tim-kiem-tong-hop?rank=follow"},
        {title: "Truyện Đã Hoàn Thành", script: "gen.js", input: "https://daoquan.vn/tim-kiem-tong-hop?cpt=1"}
    ]);
}