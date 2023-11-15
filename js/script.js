const wrapper = document.querySelector('.wrapper'),
      carousel = document.querySelector('.carousel'),
      images = document.querySelectorAll('img'),
      buttons = document.querySelectorAll('.button');

console.log(wrapper, carousel, images, buttons);

let imageIndex = 1,
    intervaleId;



// Auto Image Slider

const autoSlider = ()=>{

    intervaleId = setInterval(()=> slideImages(++imageIndex), 2000);

}

autoSlider();



// Slider Images

const slideImages = ()=>{

    // Calculate the Images Length According to images

    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? imageIndex.length -1 : imageIndex;
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;

}


wrapper.addEventListener('mouseover', ()=> clearInterval(intervaleId));
wrapper.addEventListener('mouseleave', autoSlider)


// Next and Prev Button


const updateClick = (e)=>{

    clearInterval(intervaleId);

    imageIndex += e.target.id === 'next' ? 1 : -1;

    console.log(imageIndex);

    slideImages(imageIndex);

    autoSlider();

}

buttons.forEach(button => button.addEventListener('click', updateClick))