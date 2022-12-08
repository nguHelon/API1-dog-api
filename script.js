const img = document.querySelector("img");
const button = document.querySelector(".buttons button.next");
let prevImg = "";

button.addEventListener("click", () => {

    let DOG_API = "https://dog.ceo/api/breeds/image/random";
    const dogPromise = fetch(DOG_API);

    dogPromise.then((response) => {
        return response.json();
    }).then((json) => {
        img.setAttribute("src", `${json.message}`);
    })

})