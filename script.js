const fs = require("fs");

const createPathForDepth = (depth) => {
    if (depth <= -1) return console.log("done");
    let tmp = depth;
    let relativePath;
    const path = `./tmp/${depth}`;

    try {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
            while (tmp > -1) {
                relativePath = `${path}/${tmp}`;
                fs.mkdirSync(relativePath);
                console.log("folder created", relativePath);
                fs.writeFileSync(
                    `${relativePath}/${tmp}.txt`,
                    `relativePath = ${relativePath}/${tmp}.txt`
                );
                console.log("file created", tmp, ".txt");
                tmp--;
            }
        }
    } catch (err) {
        console.error(err);
    }
    depth--;
    createPathForDepth(depth);
};

if (process.argv[2] == "depth") {
    createPathForDepth(process.argv[3]);
} else {
    console.log("invalid argument");
}
