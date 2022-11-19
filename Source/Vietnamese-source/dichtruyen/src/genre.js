function execute() {
	var doc = Http.get("https://dichtruyentranh.com/").html()
	var genres =  doc.select(".dt_headbot_menu .dt_menu_e").first().select(".dtm_expand a")

	var listGenre = []
	genres.forEach(genre =>listGenre.push({
		title : genre.text(),
		input : "https://dichtruyentranh.com" + genre.attr("href"),
		script: "gen.js"
	}))
	return Response.success(listGenre)
}

// https://dichtruyentranh.com/the-loai/comic/