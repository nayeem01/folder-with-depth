const fs = require("fs");

const creatFolder = (path, inside) => {
    try {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
            console.log("folder created", path);
            fs.writeFileSync(
                `${path}/${inside}.txt`,
                `relativePath = ${path}/${inside}.txt`
            );
            console.log("file created", path, ".txt");
        }
    } catch (err) {
        console.error(err);
    }
};
const createTree = (n, w = 1, level = 0, path = "./tmp") => {
    let relativePath = path;
    for (var i = 0; i < w; i++) {
        creatFolder(relativePath + `/${i}`, i);

        if (n > 0) {
            relativePath = path + `/${level}`;
            creatFolder(relativePath, level);
            createTree(n - 1, w + 1, level++, relativePath);
        }
    }
    return;
};
if (process.argv[2] == "depth") {
    createTree(process.argv[3]);
} else {
    console.log("invalid argument");
}
