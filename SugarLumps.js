var sugar_lumps = new OmegaNum("0")

// Upgrades

// when do this game not confrim?

// Tickgame (setInvertal)

setInterval(() => {
    sugar_lumps = sugar_lumps.add(1)
    document.getElementById("sugar").innerHTML = sugar_lumps + " <span class=\"sugarlump\">S</span>"
}, 20000);