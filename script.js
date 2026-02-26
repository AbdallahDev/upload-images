const containerEl = document.getElementById('container')
let containerHtml = ""
const imagesAreaEl = document.getElementById('imagesArea')
let imagesAreaHtml = ""
img_urls = [
    "https://4kwallpapers.com/images/walls/thumbs_3t/24069.png",
    "https://4kwallpapers.com/images/walls/thumbs_3t/3984.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/25476.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/22476.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/22476.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/22476.jpg",
]

function createUploadMenu(urls) {
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
}

function renderImages(urls) {
    containerHtml = ""
    containerEl.innerHTML = containerHtml
}

createUploadMenu(img_urls)
// renderImages()


