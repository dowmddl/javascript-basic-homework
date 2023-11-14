// 여기에 1번 문제의 답을 작성하세요.
const getPosts = async () => {
    const res = await fetch('https://dummyjson.com/products/add');
    const data = await res.json();
    return data;
}
// 여기에 2번 문제의 답을 작성하세요.
