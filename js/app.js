// Galeria de imagenes dinamica
const generaGaleria1 = () => {
    let imagenes = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12', 'img13', 'img14', 'img15', 'img16'];
    let galeria = document.getElementById('galeria1');

    for (let imagen of imagenes) {
        galeria.innerHTML += `
    <div class="card">
            <a href="" data-toggle="modal" data-target="#id${ imagen }">
                <img src="../asset/img/palpala/${ imagen }.png" alt="" class="card-img-top">
            </a>
        </div>
        <div class="modal fade" id="id${ imagen }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <img src="../asset/img/palpala/${ imagen }.png" alt="" class="img-fluid rounded">
            </div>
        </div>
    `;
    }
};
generaGaleria1();

const generaGaleria2 = () => {
    let imagenes = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12'];
    let galeria = document.getElementById('galeria2');

    for (let imagen of imagenes) {
        galeria.innerHTML += `
    <div class="card">
            <a href="" data-toggle="modal" data-target="#id${ imagen }">
                <img src="../asset/img/gral-san-martin/${ imagen }.png" alt="" class="card-img-top">
            </a>
        </div>
        <div class="modal fade" id="id${ imagen }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <img src="../asset/img/gral-san-martin/${ imagen }.png" alt="" class="img-fluid rounded">
            </div>
        </div>
    `;
    }
};
generaGaleria2();