module.exports = {
	apps: [
		{
			name: "app1",
			script: "./dist/server.js",
			watch: true,
			stop_exit_codes: [0],
		},
	],
};
