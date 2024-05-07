const template = (data) => `
<div class="Container container-fluid ">
    <figure class="figure">
        <figcaption class="editorial figure-caption">${data.publisher}</figcaption>
        <figcaption class="titulo figure-caption">${data.title}</figcaption>
        <figcaption class="precio figure-caption">${data.price}</figcaption>
        <button type="button" class="btn" onclick="delete('${data._id}')">Delete</button>
    </figure>
</div>`;


fetch("/api/carts?user_id=66300e78465a634dfd0105e0")
    .then(res => res.json())
    .then(res => {
        console.log(res);
        const products = Array.isArray(res) ? res : [res];
        console.log(products);
        document.querySelector("#productsOnCart").innerHTML = products.map(each => template(each)).join("")
    })
    .catch(err => console.log(err))