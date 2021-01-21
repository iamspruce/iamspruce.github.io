const pluginDate = require("eleventy-plugin-date");
module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(pluginDate);
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.setTemplateFormats([
        "md",
        "html",
        "css",
        "jpg",
        "png",
        "webp",
        "mp4"
    ]);

    eleventyConfig.addShortcode("codepen", function(name, title,  hash) {
        return `<p data-height="370" data-theme-id="light" data-slug-hash="${hash}" data-default-tab="result" data-user="Spruce_khalifa" class="codepen">
            See the pen 
            <a href="https://codepen.io/${name}/pen/${hash}/">
        ${title}
        </a>, by @${name} on <a href="https://codepen.io">Codepen</a>
        </p>`
    }); 
    eleventyConfig.addShortcode("caniuse", function(feature) {
        return `<p class="ciu_embed" data-feature="${feature}" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
        <picture>
            <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/${feature}.webp">
            <source type="image/png" srcset="https://caniuse.bitsofco.de/image/${feature}.png">
            <img src="https://caniuse.bitsofco.de/image/${feature}.jpg" alt="Data on support for the ${feature} feature across the major browsers from caniuse.com">
        </picture>
    </p>`
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
        templateFormats: ["html","md","liquid"]        
    };
};
