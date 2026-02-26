const containerEl = document.getElementById('container')
let containerHtml = ""
img_urls = [
    "https://4kwallpapers.com/images/walls/thumbs_3t/24069.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/3984.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/25476.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/22476.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/2448.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/2348.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/1112.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/1116.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/1658.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/1348.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/1652.jpg",
]

function createUploadMenu() {
    const uploadSection = document.createElement('div')
    uploadSection.id = "uploadSection"
    const title = document.createElement('h3')
    title.textContent = "Select Images to Upload"
    uploadSection.innerHTML += title.outerHTML
    containerEl.innerHTML += uploadSection.outerHTML

    img_urls.forEach(url => {
        const imageUploadDiv = document.createElement('div')
    });
    containerHtml += uploadSection.outerHTML
}

// createUploadMenu()
// containerEl.innerHTML = containerHtml