const printHello = function (req, res) {
    res.send({
        msg: "hello",
        result: true
    })
}

export {
    printHello,
}