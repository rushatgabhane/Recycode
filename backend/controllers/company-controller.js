const Company = require("../schemas/company")
const bcrypt = require("bcryptjs")
const ServerError = require("../ServerError")
const jwt = require("jsonwebtoken")

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let hashedPassword;
    // 12 is the strength of the hash
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        return next(new ServerError("Error hashing password"))
    }
    const newCompany = new Company({
        name,
        email,
        password: hashedPassword,
        qrCodesScanned: 0,
        usersRecycled: 0
    })

    try {
        await newCompany.save();
    } catch (err) {
        return next(new ServerError("Error saving data"))
    }
    res.status(201).json({ signedIn: true });

}

const login = async (req, res, next) => {
    const { name, password } = req.body
    let existingCompany
    let isValidPassword
    let validCredentials = true

    try {
        existingCompany = await Company.findOne({ name })
    } catch (err) {
        return next(new ServerError(err.msg))
    }
    if (!existingCompany) {
        console.log("no company")
        validCredentials = false;
    } else {
        isValidPassword = await bcrypt.compare(password, existingCompany.password)
        if (!isValidPassword) {
            console.log(password)
            console.log(existingCompany.password)
            console.log("invalid password")
            validCredentials = false
        }
    }
    res.json({ validCredentials })
}

exports.signup = signup
exports.login = login