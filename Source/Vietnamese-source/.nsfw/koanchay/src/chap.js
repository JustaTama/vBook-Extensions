function execute(url) {
    url = url.replace("koanchay.net", "koanchay.com");
    return Response.success(Http.get(url).html().select("div#bookContentBody").html());
}