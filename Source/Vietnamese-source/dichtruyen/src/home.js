function execute() {
	var doc = Http.get("https://dichtruyentranh.com/").html()
	var homes =  doc.select(".dtm_expand .list_status .b_type")

	var listHome = []
	homes.forEach(home =>listHome.push({
		title : home.text(),
		input : "https://dichtruyentranh.com" + home.attr("href"),
		script: "gen.js"
	}))
	return Response.success(listHome)
}

//https://dichtruyentranh.com/danh-sach/truyen-vfc/