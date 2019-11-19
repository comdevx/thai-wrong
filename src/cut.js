// Project: thai-wrong
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2019/11/17
// Facebook: http://www.fb.com/comdevx
// Fanpage: https://www.facebook.com/devpairueai

const fs = require('fs')
const compare = require('../src/compare')

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8')
}

let d = require("../data/dict.txt")
d = d.split('\n')

exports.addon = (l) => {
    d = d.concat(l)
}

exports.cut = (w) => {

    const arr = []
    let text = ''

    for (let i = 0; i < w.length;) {

        let sub = []
        text += w[i]

        d.forEach(v2 => {

            const reg = new RegExp(`[${text}]`)
            if (v2.match(reg))
                sub.push([v2, v2.length])

        })

        sub.sort((a, b) => b[1] - a[1])

        for (let ii = 0; ii < sub.length; ii++) {

            const l = sub[ii][1] + i
            const s = w.substring(i, l)
            const pare = compare(sub[ii][0], s)

            if (pare === 100) {

                i = l - 1
                arr.push(sub[ii][0])
                ii = sub.length
                text = ''

            }

        }

        i++

    }

    return arr

}