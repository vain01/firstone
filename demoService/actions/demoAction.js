const res = require('./../utils/responseUtils')
const log = require('../server/serverLogger')
const querystring = require("querystring")
const url = require("url")

module.exports = {
    getFactorial: function (ctx) {
        currrentUrl = ctx.request.url
        qs = querystring.parse(url.parse(currrentUrl).query)
        num = qs['param']

        let result = 0
        if (isNaN(num) || num < 0) {
            result = 'Not a valid number'
        }
        else {
            result = factorial(num)
        }

        let map = {
            status: "OK",
            data: {
                "result": result
            }
        }
        res.sendObject(ctx, map, 200)
        return
    },
    getSortedList: function (ctx) {
        let nums = [3, 6, 8, 0, 7, -9, 10]
        let result = quickSort(nums)
        let map = {
            status: "OK",
            data: {
                "origin": nums.join(),
                "sorted": result.join()
            }
        }
        res.sendObject(ctx, map, 200)
        return
    },
    postMultiplicationTable: function (ctx) {
        let num = ctx.request.body['num']
        let result = multiplicationTable(8)
        log.warn(result)
        res.send(ctx, result, 200)
        return
    }
}

function quickSort(nums) {
    if (!nums || nums.length < 1) {
        return nums
    }
    let leftHand = []
    let rightHand = []
    let pivot = []
    pivot.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > pivot[0]) {
            rightHand.push(nums[i])
        } else {
            leftHand.push(nums[i])
        }
    }
    return quickSort(leftHand).concat(pivot).concat(quickSort(rightHand))
}

function factorial(num) {
    if (num <= 1) {
        return 1
    }
    else {
        return num * factorial(num - 1)
    }
}

function multiplicationTable(num) {
    if (!num || num < 1) {
        return num
    }
    let htmlMultiple = '*'
    let htmlEqual = '='
    let htmlTab = '\t'
    let result = ''
    let multiplier = 1  //乘数
    while (multiplier <= num) {
        for (let multiplicand = 1; multiplicand <= multiplier; multiplicand += 1) {
            result += multiplicand + htmlMultiple + multiplier + htmlEqual + multiplicand * multiplier + htmlTab
        }
        result += '\n'
        multiplier = multiplier + 1
    }
    return result
}