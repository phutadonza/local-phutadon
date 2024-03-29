# ขั้นตอนการตั้งค่าและการใช้เว็บ Shorturl (Frontend)

ตั้งค่าและใช้งานเซิร์ฟเวอร์สำหรับเว็บไซต์ย่อ URL ที่โฮสต์บน Netlify โดยใช้ตัวอย่างจาก https://phutadon.netlify.app/

## สิ่งที่จำเป็นต้องมี

- โปรแกรม Git [ https://git-scm.com/downloads ]
- Node.js [ https://nodejs.org/en/download ]
- Visual Studio Code [ https://code.visualstudio.com/ ]

## ทำการ clone repository 
## โดยใช้คำสั่งใน cmd ดังนี้ 
``` 
https://github.com/phutadonza/shorturl-ptd.git
```
## ทำการติดตั้งตัว packages โดยใช้คำสั่งดังนี้ 
```
cd shorturl-ptd
npm install
```
## ใช้คำสั่ง `npm start` เพื่อ runserver
```
npm start 
```
# ถ้าอยากรันบน localhost  (ในไฟล์ package.json ได้กำหนด proxy เป็น http://localhost:5000)
ให้เข้า Visual Studio Code ลบโค้ดในบรรทัดต่อไปนี้
## บรรทัด 23
### จาก await fetch(baseUrl + "/api/url/create", {
### เป็น 
```bash
await fetch("/api/url/create",{ 
```
## บรรทัด 41
### จาก await fetch(baseUrl + "/api/url/data")
### เป็น 
```bash
await fetch("/api/url/data")
```
## บรรทัด 59
### จาก await fetch(baseUrl + "/api/url/delete", {
### เป็น
```bash
await fetch("/api/url/delete", {
```
## บรรทัด 152
### จาก <a href={`${baseUrl}/${item.Short_url}`} target="_blank">
### เป็น
```bash
<a href={`http://localhost:5000/${item.Short_url}`} target="_blank">
```
## บรรทัด 153
### จาก {`${baseUrl}/${item.Short_url}`}
### เป็น 
```bash
{`http://localhost:5000/${item.Short_url}`}
```
## บรรทัด 168
### จาก onClick={() => onOpen(`${baseUrl}/${item.Short_url}`)}
### เป็น
```bash
onClick={() => onOpen(`http://localhost:5000/${item.Short_url}`)}
```
# จากนั้นทำการรันเว็บเซิร์ฟเวอร์
``` npm start ```
# repository ของ Backend
# [https://github.com/phutadonza/urlserver.git]
