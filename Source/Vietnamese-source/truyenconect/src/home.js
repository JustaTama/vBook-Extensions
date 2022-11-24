function execute() {
	return Response.success([
		{title : "Mới Cập Nhật",input: "moi-cap-nhat", script : "gen.js"},
		{title : "Xem Nhiều",input: "xem-nhieu", script : "gen.js"},
		{title : "Truyện Dịch",input: "https://truyenconect.com/truyen-dich?page=", script : "gen.js"},
		{title : "Truyện Convert",input: "https://truyenconect.com/convert?page=", script : "gen.js"},

	])
}