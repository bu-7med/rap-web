// مصفوفة الصور اللي هيتبدلوا
const images = [
  "images/choose.jpg",
  "images/travis.jpg",
  "images/ghabi.jpg"
];

// جلب العناصر من الصفحة
const imgElement = document.querySelector(".choose-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const bullets = document.querySelectorAll(".service-bullets li");

let currentIndex = 0; // الصورة الحالية

// دالة لتحديث الصورة والبولتس
function updateImage() {
  // نضيف كلاس fade-out عشان تبدأ الصورة تختفي
  imgElement.classList.add("fade-out");

  // بعد نص ثانية نغيّر الصورة ونرجع الشفافية
  setTimeout(() => {
    imgElement.src = images[currentIndex];
    imgElement.classList.remove("fade-out");
  }, 400);

  // تحديث لون الـ bullets
  bullets.forEach((b, i) => {
    b.classList.toggle("active", i === currentIndex);
  });
}


// دالة للانتقال للصورة التالية
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  updateImage();
}

// دالة للانتقال للصورة السابقة
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;
  updateImage();
}

// أحداث الضغط على الأزرار
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// لما تدوس على أي bullet يروح للصورة المقابلة
bullets.forEach((b, i) => {
  b.addEventListener("click", () => {
    currentIndex = i;
    updateImage();
  });
});

// تبديل تلقائي كل 3 ثواني
setInterval(nextImage, 3000);

// تشغيل أول مرة
updateImage();
