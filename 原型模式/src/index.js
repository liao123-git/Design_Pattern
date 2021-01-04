let arr = [1, 2, 3];
let nodeList = document.getElementsByTagName('p');
let $p = $('p');

arr.forEach((item) => {
    console.log(item);
});

let i, length = nodeList.length;
for (i = 0; i < length; i++) {
    console.log(nodeList[i]);
}

$p.each((key, p) => {
    console.log(key, p);
});

function each(data) {
    let $data = $(data); // 生成迭代器

    $data.each((key, val) => {
        console.log(key, val);
    });
}

each(arr);
each(nodeList);
each($p);