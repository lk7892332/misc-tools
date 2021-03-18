a = [];
document.querySelectorAll("img").forEach((e, i) => {
    a.push(`rename ${e.src.match(/^.*\/(.+.tmp)$/)[1]} ${i + 1}.png`);
});
copy(a.join("\n"));