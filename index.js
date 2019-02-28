const selenium = require("selenium-webdriver");

//local class
const Base = require("./pages/base");

var chrome = require('selenium-webdriver/chrome');
var o = new chrome.Options();
o.addArguments("user-data-dir=/Users/luisramos/Library/ApplicationSupport/Google/Chrome/Default");
o.addArguments("--profile-directory=Profile 1");

const By = selenium.By;
//const driver = new selenium.Builder().forBrowser("chrome").setChromeOptions().build(); no profile
const driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).setChromeOptions(o).build(); 
//pass URL at run-time
const base = new Base(driver);
base.open();

//select the given item on  page by css selectors
function selectItem() {
    driver.findElement(By.css('#container > article:nth-child(24)'))
    .click();
}

//call add to cart on the given product
function addToCart() {
    //driver.findElement(By.css('#add-remove-buttons > input')).sendKeys('L');
    driver.findElement(By.xpath('//*[@id="add-remove-buttons"]/input'))
        .click();
        
}
//call checkoutBtn on the given Bogo
function checkoutNowBtn() {
    driver.findElement(By.css('#cart > a.button.checkout'))
        .click();
}

function argreeBtn() {
    driver.findElement(By.css('#cart-cc > fieldset > p:nth-child(4) > label > div > ins'))
        .click();
}

function checkoutButton() {
    driver.findElement(By.css('#pay > input')).click();
}

function formFillOut() {
    driver.findElement(By.xpath('//*[@id="order_billing_name"]')).sendKeys('Name');
    driver.findElement(By.xpath('//*[@id="order_email"]')).sendKeys('email@gmail.com');
    driver.findElement(By.xpath('//*[@id="order_tel"]')).sendKeys('7777777777');
    driver.findElement(By.xpath('//*[@id="bo"]')).sendKeys('123 yellow St');
    driver.findElement(By.xpath('//*[@id="order_billing_zip"]')).sendKeys('90003');
    //payment method
    driver.findElement(By.xpath('//*[@id="nnaerb"]')).sendKeys('77777');
    driver.findElement(By.xpath('//*[@id="credit_card_month"]')).sendKeys('01');
    driver.findElement(By.xpath('//*[@id="credit_card_year"]')).sendKeys('2018');
    //cvv number
    driver.findElement(By.xpath('//*[@id="orcer"]')).sendKeys('123');
    //click argree btn
    argreeBtn();

}

selectItem();
driver.sleep(1000);
addToCart();
//add a timer to wait then call checkout button
driver.sleep(1000);

checkoutNowBtn();
formFillOut();
checkoutButton();