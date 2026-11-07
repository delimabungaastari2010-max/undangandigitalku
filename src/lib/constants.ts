export const WEDDING_DATE_ISO = "2025-08-24T08:00:00+07:00";
export const WEDDING_DATE_LABEL = "Ahad, 24 Agustus 2025";
export const HIJRI_LABEL = "29 Safar 1447 H";

export const GROOM = {
  short: "Fadhil",
  full: "Muhammad Fadhil Al-Ghifari, S.T.",
  order: "Putra pertama",
  father: "Bpk. Ir. H. Ahmad Rasyid",
  mother: "Ibu Hj. Siti Maryam",
  ig: "@fadhil.alghifari",
};

export const BRIDE = {
  short: "Rania",
  full: "Rania Dania Khairunnisa, M.Arch",
  order: "Putri kedua",
  father: "Bpk. Dr. H. Fahmi Baswedan",
  mother: "Ibu Hj. Nur Aini",
  ig: "@rania.khairunnisa",
};

export const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  `&text=${encodeURIComponent("Walimatul 'Ursy Fadhil & Rania")}` +
  "&dates=20250824T010000Z/20250824T080000Z" +
  `&details=${encodeURIComponent(
    "Akad Nikah & Resepsi Pernikahan Muhammad Fadhil Al-Ghifari & Rania Dania Khairunnisa. Bertempat di Masjid Raya Al-Ukhuwah & Grand Emerald Sanctuary Garden Bandung."
  )}` +
  `&location=${encodeURIComponent("Grand Emerald Sanctuary Garden, Bandung")}`;

export const MAP_AKAD_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Masjid Raya Al-Ukhuwah, Jl. Diponegoro No. 45, Kota Bandung");

export const MAP_RESEPSI_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Jl. Juanda No. 88, Kota Bandung");

export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("Jl. Diponegoro, Kota Bandung, Jawa Barat") +
  "&t=&z=14&ie=UTF8&iwloc=&output=embed";

export const GIFT_ADDRESS =
  "Jl. Rancabentang No. 12B, Ciumbuleuit, Cidadap, Kota Bandung, Jawa Barat 40142 (Penerima: Fadhil & Rania / 0812-3456-7890)";

export const BANK_ACCOUNTS = [
  {
    bank: "Bank Mandiri",
    short: "Mandiri",
    number: "1320019882341",
    holder: "Muhammad Fadhil Al-Ghifari",
  },
  {
    bank: "Bank Syariah Indonesia",
    short: "BSI",
    number: "7192048831",
    holder: "Rania Dania Khairunnisa",
  },
];
