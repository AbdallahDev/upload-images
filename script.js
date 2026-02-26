import urls from './data.js'

const containerEl = document.getElementById('container')
let containerHtml = ""

function createUploadMenu(urls) {
    const uploadSectionEl = document.createElement('div')
    uploadSectionEl.id = "uploadSection"

    const titleEl = document.createElement("div")
    titleEl.id = "title"
    titleEl.textContent = "Select Images to Upload"
    uploadSectionEl.innerHTML = titleEl.outerHTML

    const uploadBtnEl = document.createElement("button")
    uploadBtnEl.id = "uploadBtn"
    uploadBtnEl.textContent = "Upload"

    const imagesAreaEl = document.createElement('div')
    imagesAreaEl.id = "imagesArea"
    let imagesAreaHtml = ""
    urls.forEach(url => {
        const fileName = url.match(/[^/]+$/)[0]
        imagesAreaHtml += `
            <div class="imageSelection">
                <div class="imageName">${fileName}</div>
                <div class="cross">❌</div>
            </div>
        `
    });
    imagesAreaEl.innerHTML += imagesAreaHtml
    uploadSectionEl.innerHTML += imagesAreaEl.outerHTML

    uploadSectionEl.appendChild(uploadBtnEl)
    uploadBtnEl.addEventListener('click', () => renderImages(urls))


    containerEl.appendChild(uploadSectionEl)
}

async function renderImages(urls) {
    containerHtml = ""
    containerEl.innerHTML = containerHtml
    containerEl.style.backgroundColor = "white"

    const loadingEl = document.createElement('h1')
    loadingEl.textContent = "Loading images, please wait......"
    containerEl.innerHTML += loadingEl.outerHTML

    try {
        const imageViewerEl = document.createElement('div')
        imageViewerEl.id = "imageViewer"

        const images = urls.map((url) => getImage(url))
        const results = await Promise.all(images)
        results.forEach((img) => {
            imageViewerEl.innerHTML += img.outerHTML
        })

        containerHtml += imageViewerEl.outerHTML
        containerEl.innerHTML = containerHtml
    } catch (error) {
        console.log(error)
        containerEl.innerHTML = `<h1 id='error'>Something wrong, Images failed to render.<br>Please try again.</h1>`
    }
}

function getImage(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject(new Error))
        }, 5000)
    })
}

createUploadMenu(urls)
