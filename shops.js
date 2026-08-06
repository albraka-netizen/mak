const shops = [
  {
    id: 1,
    name: "كافيه مَلاذ",
    category: "كافيهات",
    description: "مَلاذك الصح - قهوة مختصة وأجواء مريحة.",
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1287&auto=format&fit=crop",
    url: "",
    isVIP: true,
    rating: "4.9",
    status: "مفتوح الآن"
  },
 {
    id: 3,
    name: "عكاظ للقهوة",
    branchId: "al-laqiya", // <--- مهم جداً ليظهر المحل في فرع اللقية (أو غيره حسب الفرع)
    category: "كافيهات",
    description: "للقهوة ذات جودة عالية وخاصة لاصحاب المزاج",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop", // <--- ضع هنا رابط صورة عام وصحيح
    url: "https://albraka-netizen.github.io/coffeokad/", // <--- تمت إزالة الفراغ الزائد من البداية
    isVIP: true,
    rating: "4.9",
    status: "مفتوح الآن"
  },
  {
    id: 2,
    name: "دكانة طنقر",
    category: "سوبرماركت",
    description: "منتجاتنا لكل يوم - جميع مستلزماتك اليومية متوفرة.",
    image: "=",
    url: "https://albraka-netizen.github.io/super26/",
    isVIP: false,
    rating: "4.8",
    status: "مفتوح الآن"
  }
];

// تفاصيل صاحب المنصة لتسهيل التواصل والربح مستقبلاً
const ownerConfig = {
  whatsappNumber: "0504681288", // اكتب رقم واتسابك الخاص هنا
  platformName: "منصة المحلات",
  subscriptionPrice: "199 ريال / شهرياً"
};