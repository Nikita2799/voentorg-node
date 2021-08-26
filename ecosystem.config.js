module.exports = {
	apps: [
		{
			name: "app1",
			script: "./dist/server.js",
			watch: true,
			watch_delay: 1000,
			ignore_watch: ["node_modules", "./img"],
		},
	],
};
