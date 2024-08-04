const Image = require("@11ty/eleventy-img")

module.exports = function (eleventyConfig) {

	eleventyConfig.setServerOptions({
		showAllHosts: true,
		port: 3001
	})

	eleventyConfig.addPassthroughCopy("src/assets/js/terminal.js");

	eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
	});
	eleventyConfig.addNunjucksAsyncShortcode(
		"svg",
		async (file, alt, sizes) => {
			let metadata = await Image(`src/assets/icons/${file}`, {
				formats: ["svg"],
				dryRun: true,
			});

			return metadata.svg[0].buffer.toString();
		},
	);

	return {
		dir: {
			input: "src",
		},
	};
};
