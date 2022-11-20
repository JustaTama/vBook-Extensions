function execute() { 
    return Response.success([ 
    {title: "Văn học Việt Nam ", input: "https://www.sachhayonline.com/danh-muc/van-hoc-viet-nam", script: "gen.js"},
    {title: "Văn Học nước ngoài", input: "https://www.sachhayonline.com/danh-muc/van-hoc-nuoc-ngoai", script: "gen.js"},
    {title: "Giải thích Thành ngữ/Tục ngữ", input: "https://www.sachhayonline.com/tua-sach/giai-thich-thanh-ngu-tuc-ngu", script: "gen.js"},
    {title: "Truyện cổ tích Việt Nam", input: "https://www.sachhayonline.com/tua-sach/kho-tang-truyen-co-tich-viet-nam", script: "gen.js"},
    {title: "Việt Nam sử lược", input: "https://www.sachhayonline.com/tua-sach/viet-nam-su-luoc", script: "gen.js"},
    {title: "Các thể loại khác", input: "https://www.sachhayonline.com/danh-muc/the-loai-khac", script: "gen.js"},
    ]);
}