const burgerOpen = () =>{
    const body = document.body;
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')
    const navLinks = document.querySelectorAll('.nav-link');
    const navBackgroundFull = document.querySelector('.nav-background-full');
    const navOptionMenu = document.querySelector('.nav-option-menu-selector');
    const navExploreMoreList = document.querySelector('.nav-explore-more-list');

    if (body.clientWidth > 758){
        return 0;
    }


    function navToggleClasses () {
        // navExploreMoreList.classList.remove('nav-explore-more-list-active')
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active'); 
        navBackgroundFull.classList.toggle('nav-background-full-active');
        if(body.style.overflow == "hidden"){
            body.style.overflow = "auto"
            body.style.overflowX = "hidden"
        }
        else{body.style.overflow = "hidden";}
    };

    burger.addEventListener('click', navToggleClasses);



    navLinks.forEach((element) =>{
        if(element.classList.contains('nav-option-menu')){
            return 0;
        }
        element.addEventListener('click', navToggleClasses)
    })



    // navOptionMenu.addEventListener('click', () =>{
    //     navExploreMoreList.classList.toggle('nav-explore-more-list-active')
    // });



    navBackgroundFull.addEventListener('click', () =>{     
        navToggleClasses();
    }); 
}
burgerOpen();
// Burger code ended;

// Slider strats
// const gallerySliding = () =>{
//     const galleryContainerInner = document.querySelector('.gallery-container-inner');
//     const galleryElements = document.querySelectorAll('.gallery-element');

//     const prevBtn = document.querySelector('.gallery-button-left');
//     const nextBtn = document.querySelector('.gallery-button-right');
    
//     if (!galleryContainerInner){
//         return 0;
//     }
//     const gallerySize = galleryElements[0].clientWidth;
//     let galleryCounter = 1;
    
//     let sliderInterval;
//     const sliderIntervalTime = 10000; // В мілісекундах
//     const galleryTransition = "all .6s ease-in-out"

//     const prevImage = () => {
//         clearInterval(sliderInterval);
//         sliderInterval = setInterval(nextImage, sliderIntervalTime);
//         if(galleryCounter<=0){
//             return 0;
//         };
//         galleryContainerInner.style.transition = galleryTransition;
//         galleryCounter--;
//         // console.log(galleryCounter);
//         galleryContainerInner.style.transform = 'translateX(' + (-gallerySize * galleryCounter) +'px)';
//         galleryContainerInner.addEventListener('transitionend', () => {
//             if(galleryCounter == 0){
//                 galleryContainerInner.style.transition = "none";
//                 galleryCounter = galleryElements.length - 2;
//                 galleryContainerInner.style.transform = 'translateX(' + (-gallerySize * galleryCounter) +'px)';
//             } 
//         })
//     };
    
//     const nextImage = () =>{
//         clearInterval(sliderInterval);
//         sliderInterval = setInterval(nextImage, sliderIntervalTime);
//         if(galleryCounter >= galleryElements.length - 2){
//             return 0;
//         };
//         galleryContainerInner.style.transition = galleryTransition;
//         galleryCounter++;
//         // console.log(galleryCounter);
//         galleryContainerInner.style.transform = 'translateX(' + (-gallerySize * galleryCounter) +'px)';
//         prevBtn.addEventListener('click', prevImage);
//         galleryContainerInner.addEventListener('transitionend', () =>{
//             if(galleryCounter == (galleryElements.length - 2)){
//                 galleryContainerInner.style.transition = "none";
//                 galleryCounter = 0;
//                 galleryContainerInner.style.transform = 'translateX(' + (-gallerySize * galleryCounter) +'px)';
//             }
//         })
//     };
    
//     nextBtn.addEventListener('click', nextImage);
//     prevBtn.addEventListener('click', prevImage);
//     nextImage();
// }
// gallerySliding();
// Slider ends

const questionAndAnwer =() => {
    const qaBlockText = document.querySelectorAll('.qa-question');
    qaBlockText.forEach((element) =>{
        element.addEventListener('click', () =>{
            if(element.classList.contains('qa-text-active')){
                element.classList.remove('qa-text-active');
            }
            else{
                qaBlockText.forEach((element) => element.classList.remove("qa-text-active"));
                element.classList.toggle('qa-text-active');
            }
        })
    })
}
questionAndAnwer();


// slider triple starts
const reviewBlock = (buttonLeft,buttonRight,container, containerInner, element, setObjectsOnPage) => {
    let objectsOnPage = 4;
    if (window.innerWidth < 500){
        objectsOnPage = 1;
    }
    else if (window.innerWidth < 900){
        objectsOnPage = 2;
    }
    else if (window.innerWidth < 1366){
        objectsOnPage = 3;
    }
    if (setObjectsOnPage){
        objectsOnPage = setObjectsOnPage;
    }
    const reviewButtonLeft = document.querySelector(buttonLeft);
    const reviewButtonRight = document.querySelector(buttonRight);
    const reviewContainer = document.querySelector(container);
    const reviewContainerInner = document.querySelector(containerInner);
    let reviewElements = document.querySelectorAll(element);

    if(!reviewContainer){
        return 0;
    }

    const reviewSlidingWidth = (reviewContainer.clientWidth)/objectsOnPage;
    let reviewElementsLength = reviewElements.length;
    let reviewCounter = objectsOnPage;

    
    reviewElements.forEach((element)=>{
        element.style.width = reviewContainer.clientWidth/objectsOnPage + "px";
    })

    function cloneElements(massive, times, containerToAppend) {
        for (let i = 0; i < times; i++) {
          let appendElement = massive[i].cloneNode(true);
          containerToAppend.append(appendElement);
        }
        for (let k = 1; k <= times;k++){
          let prependElement = massive[massive.length - k ].cloneNode(true);
          containerToAppend.prepend(prependElement);
        }
    }

    cloneElements(reviewElements, objectsOnPage, reviewContainerInner);



    let reviewInterval;
    const reviewIntervalTime = 10000;

    let reviewHeight = reviewContainerInner.clientHeight;

    reviewButtonRight.style.top = "" + reviewHeight/2 + "px";
    reviewButtonLeft.style.top = "" + reviewHeight/2 + "px";
    reviewButtonRight.style.transform = "translateY(-50%)";
    reviewButtonLeft.style.transform = "translateY(-50%)";
    
    const reviewTransition = "all .5s cubic-bezier(0.075, 0.82, 0.165, 1)";

    const reviewSlide = () => {
        reviewContainerInner.style.transform = 'translateX(' + (-reviewCounter * reviewSlidingWidth) + 'px)';
    }
    reviewSlide();
    
    const nextReviewBlock = () => {
        if (reviewCounter >= reviewElementsLength + objectsOnPage - 1){
            return 0;
        }
        clearInterval(reviewInterval);
        reviewInterval = setInterval(nextReviewBlock, reviewIntervalTime);
        reviewContainerInner.style.transition = reviewTransition;
        reviewCounter++;
        // console.log(reviewCounter)
        reviewSlide();
        reviewContainerInner.addEventListener('transitionend', () =>{
            if (reviewCounter == reviewElementsLength + objectsOnPage -1){
                reviewCounter = objectsOnPage - 1;
                reviewContainerInner.style.transition = 'none';
                reviewSlide();
                return 0;
            }
        });
       
    };
    

    const previousReviewBlock = () => {
        if (reviewCounter <= 0){
            return 0;
        }
        clearInterval(reviewInterval);
        reviewInterval = setInterval(nextReviewBlock, reviewIntervalTime);
        reviewContainerInner.style.transition = reviewTransition;
        reviewCounter--;

        reviewSlide();
        reviewContainerInner.addEventListener('transitionend', () =>{
            if (reviewCounter == 0){
                reviewCounter = (reviewElementsLength);
                reviewContainerInner.style.transition = 'none';
                reviewSlide();
            }
        })
        
    };

    reviewButtonRight.addEventListener('click', nextReviewBlock);
    reviewButtonLeft.addEventListener('click', previousReviewBlock);
    nextReviewBlock();
}
reviewBlock('.review-button-left','.review-button-right','.review-container','.review-container-inner','.review-element');
reviewBlock('.restore-slider-button-left', '.restore-slider-button-right','.restore-slider-container','.restore-slider-container-inner','.restore-slider-element',1)




// function scrollToSection(event) {
//     event.preventDefault();
    
//     var targetSection = document.getElementById('target-section');
//     // var offset = document.querySelector('.header-inner').style.height;
//     var offset = 300; // Adjust the offset value as needed
    
//     var targetPosition = targetSection.offsetTop + offset;
//     window.scrollTo({
//       top: targetPosition,
//       behavior: 'smooth'
//     });
//   }

// // sidePagesGallery
