const Image = require("@11ty/eleventy-img")

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/js/commands.js");
	eleventyConfig.addPassthroughCopy("src/assets/js/terminal.js");
	eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
	});

	// 	let getSvgContent = function (file) {
	// 		let relativeFilePath = `./src/assets/icons/${file}.svg`;
	// 		let data = fs.readFileSync(relativeFilePath, (err, contents) => {
	// 			if (err) return err;
	// 			return contents;
	// 		});

	// 		return data.toString("utf8");
	// 	};

	//   eleventyConfig.addShortcode("svg", getSvgContent)
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
