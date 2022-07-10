var cookies = new OmegaNum('0')
var cookies_click = new OmegaNum('1')
var tau = 0;
var cps = new OmegaNum("0");
var TerraLevel = new OmegaNum("0");
Cursor = new CursorVars();
CursorPower = new CursorPowerVars();
Cursor.getCursor = Cursor.level.mul(7)
Gradma = new GradmaVars();
Gradma.getGradma = Gradma.level.mul(542)
Farm = new FarmVars();
Farm.getFarm = Farm.level.mul(44209)
Mine = new MineVars();
Mine.getMine = Mine.level.mul(3.36e7)
Factory = new FactoryVars();
Factory.getFactory = Factory.level.mul(1.17e10)
Bank = new BankVars();
Bank.getBank = Bank.level.mul(3.09e13)
Temple = new TempleVars();
Temple.getTemple = Temple.level.mul(5.56e18)
WizardTower = new WizardTowerVars();
WizardTower.getWizardTower = WizardTower.level.mul(4.25e33)
Shipment = new ShipmentVars();
Shipment.getShipment = Shipment.level.mul(5.22e60)
AlchemyLab = new AlchemyLabVars();
AlchemyLab.getAlchemyLab = AlchemyLab.level.mul(2.29e74)
Portal = new PortalVars();
Portal.getPortal = Portal.level.mul(7.1e90)
TimeMachine = new TimeMachineVars();
TimeMachine.getTimeMachine = TimeMachine.level.mul(5.56e109)
AntimatterCondenser = new AntimatterCondenserVars();
AntimatterCondenser.getAntimatterCondenser = AntimatterCondenser.level.mul(9.29e123)
var currently = new OmegaNum("1");
var currently_formula = new OmegaNum("1")
var number_pub = 0;

// Infinite Vars

const infinity = new OmegaNum("1.8e308");
const infinity2 = new OmegaNum("1e30000008");
const infinity3 = new OmegaNum("ee308");
const infinity4 = new OmegaNum("ee3000008");

// Endgame Vars

const endgame = new OmegaNum("1e750");
const endgame2 = new OmegaNum("1e7500000000");
const endgame3 = new OmegaNum("ee7500")

// Updates

function CursorVars() {
    this.level = new OmegaNum("0");
    this.price = new OmegaNum("75");
}

function CursorPowerVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("5000")
}

function GradmaVars() {
    this.level = new OmegaNum("0");
    this.price = new OmegaNum("20000")
}

function FarmVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("5e6")
}

function MineVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("7.2e8")
}

function FactoryVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("7.2e11")
}

function BankVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("1.15e15")
}

function TempleVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("9e21")
}

function WizardTowerVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("2e57")
}

function ShipmentVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("1e80")
}

function AlchemyLabVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("1e107")
}

function PortalVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("1e133")
}

function TimeMachineVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("1e164")
}

function AntimatterCondenserVars() {
    this.level = new OmegaNum("0")
    this.price = new OmegaNum("1e192")
}

document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
document.getElementById('tau').innerHTML = tau + "\u03C4";

document.getElementById("click").onclick = () => {
    cookies = cookies.add(cookies_click)
    document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
}

document.getElementById("cost1").onclick = () => {
    if (cookies.gte(Cursor.price) == true) {
        cookies = cookies.sub(Cursor.price);
        cps = cps.add(7);
        Cursor.price = Cursor.price.mul(1.5)
        Cursor.level = Cursor.level.add(1)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost1').innerHTML = "Cost:" + Cursor.price;
    }
}

document.getElementById("cost2").onclick = () => {
    if (cookies.gte(CursorPower.price) == true) {
        cookies = cookies.sub(CursorPower.price);
        cps = cps.mul(2);
        CursorPower.price = CursorPower.price.mul(10)
        CursorPower.level = CursorPower.level.add(1)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost2').innerHTML = "Cost:" + CursorPower.price;
    }
}

document.getElementById("cost3").onclick = () => {
    if (cookies.gte(Gradma.price) == true) {
        cookies = cookies.sub(Gradma.price);
        cps = cps.add(542);
        Gradma.price = Gradma.price.mul(1.5)
        Gradma.level = Gradma.level.add(1)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost3').innerHTML = "Cost:" + Gradma.price;
    }
}

document.getElementById("cost4").onclick = () => {
    if (cookies.gte(Farm.price) == true) {
        cookies = cookies.sub(Farm.price);
        cps = cps.add(44209);
        Farm.price = Farm.price.mul(1.5)
        Farm.level = Farm.level.add(1)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost4').innerHTML = "Cost:" + Farm.price;
    }
}

document.getElementById("cost5").onclick = () => {
    if (cookies.gte(Mine.price) == true) {
        cookies = cookies.sub(Mine.price);
        cps = cps.add(3.36e7);
        Mine.price = Mine.price.mul(1.5)
        Mine.level = Mine.level.add(1);
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost5').innerHTML = "Cost:" + Mine.price;
    }
}

document.getElementById("cost6").onclick = () => {
    if (cookies.gte(Factory.price) == true) {
        cookies = cookies.sub(Factory.price);
        cps = cps.add(1.17e10);
        Factory.price = Factory.price.mul(1.5)
        Factory.level = Factory.level.add(1)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost6').innerHTML = "Cost:" + Factory.price;
    }
}

document.getElementById("cost7").onclick = () => {
    if (cookies.gte(Bank.price) == true) {
        cookies = cookies.sub(Bank.price);
        cps = cps.add(3.09e13);
        Bank.price = Bank.price.mul(1.5)
        Bank.level = Bank.level.add(1)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost7').innerHTML = "Cost:" + Bank.price;
    }
}

document.getElementById("cost8").onclick = () => {
    if (cookies.gte(Temple.price) == true) {
        cookies = cookies.sub(Temple.price);
        cps = cps.add(5.56e18);
        Temple.price = Temple.price.mul(1.5)
        Temple.level = Temple.level.add(1)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost8').innerHTML = "Cost:" + Temple.price;
    }
}

document.getElementById("cost9").onclick = () => {
    if (cookies.gte(WizardTower.price) == true) {
        cookies = cookies.sub(WizardTower.price);
        cps = cps.add(4.25e33);
        WizardTower.price = WizardTower.price.mul(1.5)
        WizardTower.level = WizardTower.level.add(1)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost9').innerHTML = "Cost:" + WizardTower.price;
    }
}

document.getElementById("cost10").onclick = () => {
    if (cookies.gte(Shipment.price) == true) {
        cookies = cookies.sub(Shipment.price);
        cps = cps.add(5.22e60);
        Shipment.price = Shipment.price.mul(1.5)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost10').innerHTML = "Cost:" + Shipment.price;
    }
}

document.getElementById("cost11").onclick = () => {
    if (cookies.gte(AlchemyLab.price) == true) {
        cookies = cookies.sub(AlchemyLab.price);
        cps = cps.add(2.29e74);
        AlchemyLab.price = AlchemyLab.price.mul(1.5)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost10').innerHTML = "Cost:" + AlchemyLab.price;
    }
}

document.getElementById("cost12").onclick = () => {
    if (cookies.gte(Portal.price) == true) {
        cookies = cookies.sub(Portal.price);
        cps = cps.add(7.1e90);
        Portal.price = Portal.price.mul(1.5)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost11').innerHTML = "Cost:" + Portal.price;
    }
}

document.getElementById("cost13").onclick = () => {
    if (cookies.gte(TimeMachine.price) == true) {
        cookies = cookies.sub(TimeMachine.price);
        cps = cps.add(5.56e109);
        Portal.price = Portal.price.mul(1.5)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost12').innerHTML = "Cost:" + TimeMachine.price;
    }
}

document.getElementById("cost14").onclick = () => {
    if (cookies.gte(AntimatterCondenser.price) == true) {
        cookies = cookies.sub(AntimatterCondenser.price);
        cps = cps.add(9.29e123);
        AntimatterCondenser.price = AntimatterCondenser.price.mul(1.5)
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost12').innerHTML = "Cost:" + AntimatterCondenser.price;
    }
}

document.getElementById("publicBtn").onclick = () => {
    if (cookies.gte(1e12) == true) {
        cookies = new OmegaNum("0");
        cps = new OmegaNum("0");
        TimeMachine.level = new OmegaNum(0)
        TimeMachine.price = new OmegaNum("1e164")
        Portal.level = new OmegaNum(0)
        Portal.price = new OmegaNum("1e133")
        AlchemyLab.level = new OmegaNum(0)
        AlchemyLab.price = new OmegaNum("1e107")
        Shipment.price = new OmegaNum("1e80")
        Shipment.level = new OmegaNum(0)
        WizardTower.level = new OmegaNum(0)
        WizardTower.price = new OmegaNum("2e57")
        Temple.level = new OmegaNum(0)
        Temple.price = new OmegaNum("9e21")
        Bank.level = new OmegaNum(0)
        Bank.price = new OmegaNum("1.15e15")
        Factory.level = new OmegaNum(0)
        Factory.price = new OmegaNum("7.2e11")
        Mine.level = new OmegaNum(0)
        Mine.price = new OmegaNum("7.2e8")
        Farm.level = new OmegaNum(0)
        Farm.price = new OmegaNum("5e6")
        Gradma.level = new OmegaNum(0)
        Gradma.price = new OmegaNum(20000)
        CursorPower.level = new OmegaNum(0)
        CursorPower.price = new OmegaNum(5000)
        Cursor.level = new OmegaNum(0)
        Cursor.price = new OmegaNum(75)
        currently = currently.times(currently_formula)
        number_pub += 1;
        document.getElementById('cps').innerHTML = cps + " cookies per sec";
        document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
        document.getElementById('cost10').innerHTML = "Cost:" + Shipment.price;
    }
}

setInterval(() => {
    tau = cookies.pow(0.2)
    currently_formula = tau.pow(1.095).div(3)
    document.getElementById('tau').innerHTML = tau + "\u03C4";
    document.getElementById('public').innerHTML = number_pub + " publication times.";
    document.getElementById('current').innerHTML = "Currently:" + currently;
    document.getElementById('current2').innerHTML = "I mulitipler got x" + currently_formula;
    if (TerraLevel.gte(1) == true) {
        document.getElementById("terra").innerHTML = "Terraform Buff";
    } else {
        document.getElementById("terra").innerHTML = "Locked"
    }
    if (cookies.gte(10) == true) {
        document.getElementById("achievement1").innerHTML = "<achievement class=\"locked\">Wake and Bake</achievement>"
    } else {
        document.getElementById("achievement1").innerHTML = "<achievement class=\"unlocked\">Wake and Bake</achievement>"
    }
    if (cookies.gte(1000) == true) {
        document.getElementById("achievement2").innerHTML = "<achievement class=\"locked\">Fledging Bakery</achievement>"
    } else {
        document.getElementById("achievement2").innerHTML = "<achievement class=\"unlocked\">Fledging Bakery</achievement>"
    }
    if (cookies.gte("1e6") == true) {
        document.getElementById("achievement3").innerHTML = "<achievement class=\"locked\">Affluent Bakery</achievement>"
    } else {
        document.getElementById("achievement3").innerHTML = "<achievement class=\"unlocked\">Affluent Bakery</achievement>"
    }
    if (cookies.gte("1e12") == true) {
        document.getElementById("achievement4").innerHTML = "<achievement class=\"locked\">World-Famous Bakery</achievement>"
    } else {
        document.getElementById("achievement4").innerHTML = "<achievement class=\"unlocked\">World-Famous Bakery</achievement>"
    }
    if (cookies.gte("1e25") == true) {
        document.getElementById("achievement5").innerHTML = "<achievement class=\"locked\">Cosmic Bakery</achievement>"
    } else {
        document.getElementById("achievement5").innerHTML = "<achievement class=\"unlocked\">Cosmic Bakery</achievement>"
    }
    if (cookies.gte("1e50") == true) {
        document.getElementById("achievement6").innerHTML = "<achievement class=\"locked\">Universal Bakery</achievement>"
    } else {
        document.getElementById("achievement6").innerHTML = "<achievement class=\"unlocked\">Universal Bakery</achievement>"
    }
    if (cookies.gte("1e75") == true) {
        document.getElementById("achievement7").innerHTML = "<achievement class=\"locked\">Eternity Bakery</achievement>"
    } else {
        document.getElementById("achievement7").innerHTML = "<achievement class=\"unlocked\">Eternity Bakery</achievement>"
    }
    if (cookies.gte("1e100") == true) {
        document.getElementById("achievement8").innerHTML = "<achievement class=\"locked\">You can't stop me from all those cookies</achievement>"
    } else {
        document.getElementById("achievement8").innerHTML = "<achievement class=\"unlocked\">You can't stop me from all those cookies</achievement>"
    }
    if (cookies.gte("1e125") == true) {
        document.getElementById("achievement9").innerHTML = "<achievement class=\"locked\">Overdose</achievement>"
    } else {
        document.getElementById("achievement9").innerHTML = "<achievement class=\"unlocked\">Overdose</achievement>"
    }
    if (cookies.gte("1e150") == true) {
        document.getElementById("achievement10").innerHTML = "<achievement class=\"locked\">The land of milk and cookies</achievement>"
    } else {
        document.getElementById("achievement10").innerHTML = "<achievement class=\"unlocked\">The land of milk and cookies</achievement>"
    }
    if (cookies.gte("1e175") == true) {
        document.getElementById("achievement11").innerHTML = "<achievement class=\"locked\">He who controls the cookie, controls the universe</achievement>"
    } else {
        document.getElementById("achievement11").innerHTML = "<achievement class=\"unlocked\">He who controls the cookie, controls the universe</achievement>"
    }
    if (cookies.gte("1e200") == true) {
        document.getElementById("achievement12").innerHTML = "<achievement class=\"locked\">In the halls of Idlers</achievement>"
    } else {
        document.getElementById("achievement12").innerHTML = "<achievement class=\"unlocked\">In the halls of Idlers</achievement>"
    }
    if (cookies.gte("1e250") == true) {
        document.getElementById("achievement13").innerHTML = "<achievement class=\"locked\">The dreams in which I'm baking are the best I've ever had</achievement>"
    } else {
        document.getElementById("achievement13").innerHTML = "<achievement class=\"unlocked\">The dreams in which I'm baking are the best I've ever had</achievement>"
    }
    if (cookies.gte("1e300") == true) {
        document.getElementById("achievement14").innerHTML = "<achievement class=\"locked\">Bursting at the seams</achievement>"
    } else {
        document.getElementById("achievement14").innerHTML = "<achievement class=\"unlocked\">Bursting at the seams</achievement>"
    }
    if (cookies.gte("1e350") == true) {
        document.getElementById("achievement15").innerHTML = "<achievement class=\"locked\">O lord who is the creator, grace my existence with cookies</achievement>"
    } else {
        document.getElementById("achievement15").innerHTML = "<achievement class=\"unlocked\">O lord who is the creator, grace my existence with cookies</achievement>"
    }
    if (cookies.gte("1e400") == true) {
        document.getElementById("achievement16").innerHTML = "<achievement class=\"locked\">I think it's safe to say you've got it made</achievement>"
    } else {
        document.getElementById("achievement16").innerHTML = "<achievement class=\"unlocked\">I think it's safe to say you've got it made</achievement>"
    }
    if (cookies.gte("1e450") == true) {
        document.getElementById("achievement17").innerHTML = "<achievement class=\"locked\">Horn O' Plenty</achievement>"
    } else {
        document.getElementById("achievement17").innerHTML = "<achievement class=\"unlocked\">Horn O' Plenty</achievement>"
    }
}, 90);

// GET PER SECOND:

setInterval(() => {
    cookies = cookies.add(cps)
    document.getElementById('cookies').innerHTML = "You Have " + cookies + " Cookies";
}, 60);

function getNaN(whos) {
    if (cookies.gte("ee1024") == true) {
        cookies = NaN
        console.error("Range error: cookies nots defined fasting.")
    }
}

setInterval(() => {
    getNaN("huh")
}, 90);

// You Dont have changelog:
// v1.0.1: More bug upgrades
// v1.0.0: Release.