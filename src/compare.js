// Project: thai-wrong
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2019/11/17
// Facebook: http://www.fb.com/comdevx
// Fanpage: https://www.facebook.com/devpairueai

module.exports = (val, refer) => {

    let per = 0
    refer = refer.split('')

    val.split('').forEach(v => {

        refer.forEach((r, i) => {

            if (v === r) {

                refer.splice(i, 1)
                per++

            }

        })

    })

    return per / val.length * 100

}