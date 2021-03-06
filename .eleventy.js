const pluginDate = require("eleventy-plugin-date");
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function(eleventyConfig) {

    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPlugin(pluginDate);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    eleventyConfig.addPassthroughCopy("./src/assets/img/");
    eleventyConfig.addPassthroughCopy("./src/assets/js/");
    eleventyConfig.setTemplateFormats([
        "md",
        "html",
        "liquid",
        "css",
        "jpg",
        "png",
        "webp",
        "mp4",
        "xml",
        "json",
        "njk"
    ]);
    eleventyConfig.addShortcode("codepen", function(name, title,  hash) {
        return `<p data-height="370" data-theme-id="light" data-slug-hash="${hash}" data-default-tab="result" data-user="Spruce_khalifa" class="codepen">
            See the pen 
            <a href="https://codepen.io/${name}/pen/${hash}/">
        ${title}
        </a>, by @${name} on <a href="https://codepen.io">Codepen</a>
        </p>`
    });
    eleventyConfig.addShortcode("image", function(url, alt) {
        return `<figure class="p-article__img"><picture><source media="(max-width: 799px)" srcset="img/${url}" class="spdr-c2tn-480xxsw spdr-convert-jpeg">
        <source media="(min-width: 800px)" srcset="img/${url}" class="spdr-c2tn-800xxsw spdr-convert-jpeg">
        <img src="img/${url}" alt="${alt}" class="spdr-convert-jpeg">
        </picture><figcaption>${alt}</figcaption></figure>`
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
        templateFormats: ["html","md","liquid"],        
        dir: {
            input: "src",
            output: "public"
        },
        passthroughFileCopy: true
    };
};
