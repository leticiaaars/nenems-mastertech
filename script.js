let elems = document.querySelectorAll('.sidenav');
let instances = M.Sidenav.init(elems, {});

// let instance = M.Carousel.init({
//     fullWidth: true
//   });

let carouselList = document.querySelectorAll('.carousel');
let carouselInstances = M.Carousel.init(carouselList, {fullWidth: true});

for (const carousel of carouselList) {
    setInterval(() => {
        M.Carousel.getInstance(carousel).next();
    }, 5000);
}