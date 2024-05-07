console.log(location);
const queries = new URL(location.href)
const pid = queries.searchParams.get("id")
console.log(pid);

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


fetch("/api/products/"+pid)
.then(res => res.json())
.then(res => {
    console.log(res);
    const products = Array.isArray(res) ? res : [res];
    console.log(products);
    document.querySelector("#details").innerHTML = products
    .map((each) => template(each))
    .join("");
})
.catch((err) => console.log(err));
