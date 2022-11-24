function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?fns=dr"},
        {title: "Truyện Đề cử", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?rank=nm"},
        {title: "Xem Nhiều", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?rank=vw"},
        {title: "Yêu Thích", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?rank=yt"},
        {title: "Theo Dõi Nhiều", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?rank=td"},
        {title: "Truyện Mới", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?ord=new"},
        {title: "TOP Truyện Convert", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?tp=cv"},
        {title: "Đã Hoàn Thành", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?fns=ht"}
    ]);
}