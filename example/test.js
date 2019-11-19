// Project: thai-wrong
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2019/11/17
// Facebook: http://www.fb.com/comdevx
// Fanpage: https://www.facebook.com/devpairueai

const thaiWrong = require('../')

thaiWrong.addon(['test', 'english'])
console.log(thaiWrong.cut('estt lngeihs'))

thaiWrong.addon(['ภาษาไทย']) //ต้องใส้เพื่อให้มันตัดได้ถูกต้อง เพราะใน data/dict.txt มีคำ ภาษา และ ไทย แต่ไม่มีคำว่า ภาษาไทย ถ้าไม่ใส่ มันจะตัดเป็น ภาษ ไทย
console.log(thaiWrong.cut('ดัสวสีจา้ สดทอบบะรบดตัำค'))