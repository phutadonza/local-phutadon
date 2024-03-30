# ขั้นตอนการตั้งค่าและการใช้เว็บ Shorturl (Frontend)

ตั้งค่าและใช้งานเซิร์ฟเวอร์สำหรับเว็บไซต์ย่อ URL ที่โฮสต์บน Netlify โดยใช้ตัวอย่างจาก https://phutadon.netlify.app/

## สิ่งที่จำเป็นต้องมี

- โปรแกรม Git [ https://git-scm.com/downloads ]
- Node.js [ https://nodejs.org/en/download ]
- Visual Studio Code [ https://code.visualstudio.com/ ]

## ทำการ clone repository 
## โดยใช้คำสั่งใน cmd ดังนี้ 
``` 
git clone https://github.com/phutadonza/local-phutadon.git
```
## ทำการติดตั้งตัว packages โดยใช้คำสั่งดังนี้ 
```
cd local-phutadon
npm install
```
## ใช้คำสั่ง `npm start` เพื่อ runserver
```
npm start 
```
# ถ้าอยาก run บน localhost ให้เข้า Visual Studio Code ไปแก้ไขไฟล์ Body.js เพื่อลบโค้ดในบรรทัดต่อไปนี้
## บรรทัด 6
```
const baseUrl = "localhost ที่ต้องการใช้"
```

# จากนั้นทำการรันเว็บเซิร์ฟเวอร์
``` npm start ```
# repository ของ Backend
# [https://github.com/phutadonza/urlserver.git]
