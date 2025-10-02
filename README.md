# 📌 Social Media Automation

Bu proje, kullanıcıların sosyal medya hesaplarını ekleyip, düzenleyip, silebildiği bir **React (Vite) + Express.js + PostgreSQL/Knex** tabanlı uygulamadır.  

---

## 🚀 Özellikler
- Kullanıcılar sosyal medya adı ve linki ekleyebilir.  
- Sosyal medya bilgileri güncellenebilir ve silinebilir.  
- Backend tarafında **Express.js** ve **Knex** kullanılarak güvenli sorgular yapılır.  
- Frontend kısmında **React + Vite** ve **Redux Toolkit** kullanılmıştır.  
- URL validasyonu yapılır.  

---

# Kurulum

## 1️⃣ Projeyi Klonla
git clone https://github.com/Nurkurtoglu/SocialMediaAutomation

## 2️⃣ Backend Kurulumu
cd server
npm install
npm run server 

## 2️⃣ Backend için Gerekli Paketleri Yükle 
npm install cors dotenv express express-validator knex pg sanitize-html
- Geliştirme sırasında kullanmak için (opsiyonel)
npm install --save-dev nodemon


Server http://localhost:5000 adresinde çalışacaktır.

## 3️⃣ Frontend Kurulumu
cd socialMediaAutomation
npm install
npm run dev

## 2️⃣ Frontend için Gerekli Paketleri Yükle 
### Dependencies (Projeyi çalıştırmak için gerekli)
npm install @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid @reduxjs/toolkit axios cors dotenv formik react react-dom react-redux yup
### DevDependencies (Geliştirme sırasında gerekli)
npm install --save-dev @eslint/js @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite


Frontend http://localhost:5173 adresinde çalışacaktır.


# 🗄️ Veritabanı Yapısı

Tablo: table_name

Alan	        Tipi	                Açıklama
id	            SERIAL PK(integer)	    Benzersiz kimlik
name	        VARCHAR	                Sosyal medya adı (zorunlu)
link	        VARCHAR	                Sosyal medya linki (zorunlu)
description	    VARCHAR	                Açıklama (opsiyonel)
created_at      TIME_STAMP              Otomatik oluşur
updated_at      TIME_STAMP              Otomatik oluşur


# 📌 API Endpointleri

GET /media
- Tüm sosyal medya hesaplarını döner.

GET /media/:id
- Belirli bir sosyal medya kaydını döner.

POST /media
-Yeni sosyal medya ekler.
Body:

{
  "name": "Instagram",
  "link": "https://instagram.com/example",
  "description": "Kişisel hesap"
}

PATCH /media/:id
- Mevcut bir kaydı günceller.

DELETE /media/:id
- Belirli bir kaydı siler.

# 🛡️ Validasyon ve Güvenlik

express-validator ile name ve link alanları doğrulanır.

SQL Injection için Knex query builder kullanılmıştır.