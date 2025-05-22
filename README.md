# EyeRest App 
![image](https://github.com/user-attachments/assets/c3a8709e-261f-4a31-9738-0589c62cbe1c)

### [https://erdincdegirmenci.github.io/eyerest-app-react/]

[🇹🇷 Türkçe](#turkce) | [🇬🇧 English](#english)

---

## <a id="turkce"></a>🇹🇷 Türkçe

Göz sağlığınız için düzenli mola vermenizi hatırlatan, çok dilli (Türkçe/İngilizce) ve modern bir masaüstü uygulaması.

[GitHub Repo](https://github.com/erdincdegirmenci/eyerest-app-react.git)

### Özellikler

-  **Zamanlayıcı:** Belirli aralıklarla gözlerinizi dinlendirmek için mola hatırlatıcı.
-  **Tema Seçimi:** Farklı renk temaları.
-  **Dil Desteği:** Türkçe ve İngilizce arası anında geçiş.
-  **Electron ile Masaüstü:** Windows sistem tepsisi (tray) ve özel simge desteği.
-  **Simge Durumunda Çalışma:** Uygulama simge durumuna küçültüldüğünde tray'da çalışmaya devam eder.

### Kurulum

1. **Projeyi klonla:**
   ```bash
   git clone https://github.com/erdincdegirmenci/eyerest-app-react.git
   cd eyerest-app-react
   ```

2. **Bağımlılıkları yükle:**
   ```bash
   npm install
   ```

3. **Geliştirme modunda başlat:**
   ```bash
   npm run electron
   ```

### Kullanım

- **Molayı Başlat:** Ana ekrandan zamanlayıcıyı başlat.
- **Atla:** Molayı atla ve uygulamayı simge durumuna küçült.
- **Dinlendim:** Mola bitiminde tekrar ana ekrana dön ve sayaç otomatik başlasın.
- **Tema ve Zaman Ayarları:** Sağ üstteki 3 nokta menüsünden eriş.
- **Dil Değiştir:** Menüden Türkçe/English arasında anında geçiş yapabilirsin.

### Geliştirici Notları

- **Teknolojiler:** React, Electron, JavaScript
- **Çoklu Dil:** `src/i18n.js` dosyasından metinleri güncelleyebilirsin.
- **Simge:** `public/mainicon.png` hem uygulama hem tray simgesi olarak kullanılır.

---

## <a id="english"></a>🇬🇧 English

A modern desktop application that reminds you to take regular breaks for your eye health, featuring multilingual support (Turkish/English).

[GitHub Repo](https://github.com/erdincdegirmenci/eyerest-app-react.git)

### Features

-  **Timer:** Break reminder at regular intervals to rest your eyes.
-  **Theme Selection:** Various color themes.
-  **Language Support:** Instant switching between Turkish and English.
-  **Desktop with Electron:** Windows system tray and custom icon support.
-  **Tray Mode:** Continues running in the system tray when minimized.

### Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/erdincdegirmenci/eyerest-app-react.git
   cd eyerest-app-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start in development mode:**
   ```bash
   npm run electron
   ```

### Usage

- **Start Break:** Launch the timer from the main screen.
- **Skip:** Skip the break and minimize to tray.
- **I'm Rested:** Return to the main screen after break and automatically start the counter.
- **Theme and Time Settings:** Access from the 3-dot menu in the top right.
- **Change Language:** Instantly switch between Turkish/English from the menu.

### Developer Notes

- **Technologies:** React, Electron, JavaScript
- **Multilingual:** Update texts from the `src/i18n.js` file.
- **Icon:** `public/mainicon.png` is used for both application and tray icons.

---

## License / Lisans MIT
