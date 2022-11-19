function execute() {
    return Response.success([
        { title: "Lastest Updates", input: "latest", script: "gen.js" },
        { title: "Popular Novels", input: "popular", script: "gen.js" },
        { title: "Top of the day", input: "top/day", script: "gen.js" },
        { title: "Top of the week", input: "top/week", script: "gen.js" },
        { title: "Top of the month", input: "top/month", script: "gen.js" },
    ]);
}