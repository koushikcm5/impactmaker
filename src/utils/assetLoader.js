// Dynamically load all images and PDFs from assets/Events/article
const imageFiles = import.meta.glob('../assets/Events/article/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });
const pdfFiles = import.meta.glob('../assets/Events/article/*.pdf', { eager: true });

// Cache for asset lookups to avoid repeated file scanning
const assetCache = {};

export const getArticleAssets = (title) => {
  // Return cached result if available
  if (assetCache[title]) {
    return assetCache[title];
  }

  const normalizedTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let image = null;
  let pdf = null;

  // Direct mapping for images
  for (const path in imageFiles) {
    const fileName = path.split('/').pop().toLowerCase().replace(/[^a-z0-9]/g, '');
    if (fileName.includes(normalizedTitle) || normalizedTitle.includes(fileName)) {
      image = imageFiles[path].default;
      break;
    }
  }

  // Direct mapping for PDFs
  for (const path in pdfFiles) {
    const fileName = path.split('/').pop().toLowerCase().replace(/[^a-z0-9]/g, '');
    if (fileName.includes(normalizedTitle) || normalizedTitle.includes(fileName)) {
      pdf = pdfFiles[path].default;
      break;
    }
  }

  // Special handling for Simon Sinek which has a shorter PDF name
  if (title.toUpperCase().includes("SIMON SINEK")) {
      const simonPdf = Object.entries(pdfFiles).find(([p]) => p.toLowerCase().includes('start with why'))?.[1]?.default;
      if (simonPdf) pdf = simonPdf;
  }

  // Store in cache before returning
  const result = { image, pdf };
  assetCache[title] = result;
  
  return result;
};

export const AMAZON_KINDLE_URL = "https://read.amazon.in/kp/embed?preview=inline&linkCode=kpe&ref_=cm_sw_p_kb_dp&asin=B0BD51SKQ9&tag=kp041-21&amazonDeviceType=A2CLFWBIMVSE9N&from=Bookcard&reshareId=3PZ0S55T";
