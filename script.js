// DOM Elements & Variables

const header = document.getElementById('header')
const content = document.getElementById('content')
const footer = document.getElementById('footer')
const loader = document.getElementById('loader')

const slideshows = document.getElementsByClassName('content__element--slideshow')

const imagesLoaded = 0




// Toggle between loading page and everything else
const toggleLoadingPage= (showLoadingPage) => {
    header.style.display = showLoadingPage ? 'none' : 'flex'
    content.style.display = showLoadingPage ? 'none' : 'flex'
    footer.style.display = showLoadingPage ? 'none' : 'flex'

    loader.style.display = showLoadingPage ? 'flex' : 'none'
}


// Create the left side of page with title, paragraph, and github link
const createLeftDiv = (picture) => {
    // CREATE DIV
    const div = document.createElement('div')
    div.classList.add('content__element--text')

    // CREATE TITLE
    const title = document.createElement('h1')
    title.classList.add('content__element--text--title')
    title.textContent = picture.title                         

    // CREATE PARAGRAPH
    const paragraph = document.createElement('p')
    paragraph.classList.add('content__element--text--paragraph')
    paragraph.textContent = picture.paragraph             

    // CREATE GITHUB LINK
    const github = document.createElement('a')
    github.classList.add('content__element--text--githubLink')
    github.href = picture.githubLink
    github.textContent = 'Source Code on Github'

    // APPEND TEXT TO DIV AND RETURN
    div.append(title, paragraph, github)
    return div
}


// Create the right side of page with image slideshow
const createSlideshow = (picture, slideshowNum) => {
    // CREATE SLIDESHOW
    const slideshow = document.createElement('section')
    slideshow.classList.add('content__element--slideshow')

    // CREATE LINK(S) & IMAGE(S)
    picture.pictureNames.forEach((name) => {
        // LINK
        const link = document.createElement('a')
        link.href = picture.link

        // IMAGE
        const image = document.createElement('img')
        image.classList.add('slideshow__img')
        image.classList.add(`slideshow__img--${slideshowNum}`)
        image.src = `./img/${name}`

        // APPEND IMAGE TO LINK
        link.appendChild(image)

        // APPEND LINK TO SLIDESHOW
        slideshow.appendChild(link)
    })

    // RETURN SLIDESHOW
    return slideshow
}


// Create each work example's div
const createContent = () => {
    let slideshowNum = 1

    // Show loading page until all images loaded
    toggleLoadingPage(true)

    pictures.forEach((picture, index) => {
        // CREATE DIV
        const div = document.createElement('div')
        div.classList.add('content__element')

        // CREATE TITLE, PARAGRAPH, AND GITHUB LINK, APPEND TO DIV
        div.appendChild(createLeftDiv(picture))

        // CREATE SLIDESHOW AND APPEND TO DIV
        div.appendChild(createSlideshow(picture, slideshowNum))
        
        // APPEND DIV TO CONTENT DIV
        content.appendChild(div)

        // INCREASE COUNT
        slideshowNum += 1

        // IF THIS WAS THE LAST PICTURE, HIDE LOADING PAGE
        if (index === pictures.length - 1) {
            toggleLoadingPage(false)
        }
    })
}

createContent()








// Automatic Slideshow - change image every 3 seconds
let slideshowNum = 1;

function slideshow() {
    for (let slideshow in slideshows) {
        const images = document.getElementsByClassName(`slideshow__img--${slideshowNum}`)

        if (images.length > 1) {
            
            // Set every image's display to 'none'
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
            }

            // Show the current image
            let currentIndex = pictures[slideshow].activeIndex
            images[currentIndex].style.display = "block";

            // Increase index to next picture in slideshow, or reset back to 0
            pictures[slideshow].activeIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;          
        }
        slideshowNum += 1
        
    }

    slideshowNum = 1
    setTimeout(slideshow, 3000);
     
    
}
slideshow();
