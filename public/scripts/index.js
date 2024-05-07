const template = (data) => `
    <div class="Container container-fluid ">
        <figure class="figure">
            <a href="">
                <img style="width: 253px; height: 351px" class="img-fluid rounded" src="${data.photo}" alt="${data._id}" />
            </a>
            <figcaption class="editorial figure-caption">${data.publisher}</figcaption>
            <figcaption class="titulo figure-caption">${data.title}</figcaption>
            <figcaption class="precio figure-caption">${data.price}</figcaption>

        </figure>
    </div>`;

fetch("/api/products")
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        const products = Array.isArray(res) ? res : [res];
        console.log(products);
        document.getElementById("products").innerHTML = products
            .map((each) => template(each))
            .join("")
    })
    .catch((err) => console.log(err));

/*async function addToCart(pid) {
    try {
        const url = "/api/cart"
        const opts = {
            method: "POST",
            body: data
        }
        const response = fetch.post(url, opts)
    } catch (error) {
        
    }
}*/