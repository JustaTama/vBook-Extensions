function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", script: "gen.js", input: "https://metruyencv.com/truyen?"},
        {title: "Truyện Chất lượng cao", script: "gen.js", input: "https://metruyencv.com/truyen?sort_by=new_chap_at&props=2"},
        {title: "Truyện Chọn Lọc", script: "gen.js", input: "https://metruyencv.com/truyen?sort_by=new_chap_at&props=1"},
        {title: "Thịnh hành", script: "rank.js", input: "https://metruyencv.com/bang-xep-hang/thang/thinh-hanh"},
        {title: "Đọc nhiều", script: "rank.js", input: "https://metruyencv.com/bang-xep-hang/thang/doc-nhieu"},
        {title: "Tặng thưởng", script: "rank.js", input: "https://metruyencv.com/bang-xep-hang/thang/tang-thuong"},
        {title: "Đề cử", script: "rank.js", input: "https://metruyencv.com/bang-xep-hang/thang/de-cu"},
        {title: "Yêu thích", script: "rank.js", input: "https://metruyencv.com/bang-xep-hang/thang/yeu-thich"},
        {title: "Thảo luận", script: "rank.js", input: "https://metruyencv.com/bang-xep-hang/thang/thao-luan"}
    ]);
}
