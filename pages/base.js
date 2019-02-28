const By = require("selenium-webdriver").By;

class Base {
    constructor(driver) {
        this.driver = driver;
    }

    open() {
        this.driver.get(process.env.URL);
    }

}

module.exports = Base;