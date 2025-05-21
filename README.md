# EyeRest App

Göz sağlığınız için düzenli mola vermenizi hatırlatan, çok dilli (Türkçe/İngilizce) ve modern bir masaüstü uygulaması.

[GitHub Repo](https://github.com/erdincdegirmenci/eyerest-app-react.git)

---

## Özellikler / Features

-  **Zamanlayıcı:** Belirli aralıklarla gözlerinizi dinlendirmek için mola hatırlatıcı.
-  **Tema Seçimi:** Farklı renk temaları.
-  **Dil Desteği:** Türkçe ve İngilizce arası anında geçiş.
-  **Electron ile Masaüstü:** Windows sistem tepsisi (tray) ve özel simge desteği.
-  **Simge Durumunda Çalışma:** Uygulama simge durumuna küçültüldüğünde tray'da çalışmaya devam eder.

---

## Kurulum / Installation

1. **Projeyi klonla / Clone the repo:**
   ```bash
   git clone https://github.com/erdincdegirmenci/eyerest-app-react.git
   cd eyerest-app-react
   ```

2. **Bağımlılıkları yükle / Install dependencies:**
   ```bash
   npm install
   ```

3. **Geliştirme modunda başlat / Start in development:**
   ```bash
   npm run electron
   ```

---

## Kullanım / Usage

- **Molayı Başlat:** Ana ekrandan zamanlayıcıyı başlat.
- **Atla:** Molayı atla ve uygulamayı simge durumuna küçült.
- **Dinlendim:** Mola bitiminde tekrar ana ekrana dön ve sayaç otomatik başlasın.
- **Tema ve Zaman Ayarları:** Sağ üstteki 3 nokta menüsünden eriş.
- **Dil Değiştir:** Menüden Türkçe/English arasında anında geçiş yapabilirsin.

---

## Geliştirici Notları / Developer Notes

- **Teknolojiler:** React, Electron, JavaScript
- **Çoklu Dil:** `src/i18n.js` dosyasından metinleri güncelleyebilirsin.
- **Simge:** `public/mainicon.png` hem uygulama hem tray simgesi olarak kullanılır.

---


## Lisans / License

MIT

---