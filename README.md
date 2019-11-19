# thai-wrong
สำหรับใช้การแก้คำผิด หรือคำที่สลับตำแหน่ง ให้ออกมาถูกต้อง

## Usage

``nodejs
const thaiWrong = require('../index')

console.log(thaiWrong.cut('ดัสวสีจา้ สดทอบบะรบดตัำค')) # returns [ 'สวัสดี', 'จ้า', 'ทดสอบ', 'ระบบ', 'ตัด', 'คำ' ]
```

## Usage addon

``nodejs
const thaiWrong = require('../index')

thaiWrong.addon(['test', 'english'])

thaiWrong.cut('estt lngeihs') # returns [ 'test', 'english' ]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)