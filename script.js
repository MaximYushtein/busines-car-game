let button = document.getElementById("button")
let level = 1
let menu = document.getElementById("menu")
let database = {
    1: {
        "ferrari": "ferrari.png",
        "mazda": "mazda.png",
        "bmw": "bmw.png",
        "toyota": "supra.png",
        "landrover": "landRover.png",
        "lamborghini": "lamborghini.png",
    },
    2: {
        "lada8": "147.png",
        "opel": "Opel-Astra-Background-PNG-Image.png",
        "lada priora": "QeUYukr.png",
        "logan": "renault2.png",
        "toyota": "zC9jtSx.png",
        "chevrolet": "xj3ZPtX.png",


    },
    3: {
        "landrover": "pngimg.com - land_rover_PNG33.png",
        "mazda": "cx-80-large-suv-soul-red-1080-x-438.webp",
        "chevrolet": "image (26).png",
        "toyota": "fortuner-thumb.png",
        "bmw": "8mud3ve.png",
        "jeep": "AW1Zzy8.png",

    },
    4: {
        "porche": "custom-banner-911.png",
        "mazda": "mx-5_soft-top_range_1080x438.webp",
        "chevrolet": "corvettec8-main.png",
        "toyota": "white-sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.webp",
        "bmw": "chernaya_aad670c8bb.png",
        "lamborgini": "lamborghini-png-ydpsm36sg1gae2uf.png",

    },
    5: {
        "porche": "image (27).png",
        "renault": "image (28).png",
        "chevrolet": "l1WUANPWFz3IEHOetgEhUpXBoPj1o2_L1Xvi33GiqczOr8byo3FeJkFJtgLpJmhg3-5rUeqTxP12rj8ZODn07g.webp",
        "toyota": "toyota.webp",
        "ferrari": "F1-Ferrari-Transparent-Background.png",
        "mercedes": "mercedes.avif",

    }

}
let bank = document.getElementById("bank")
let bet = 0
let carsMenu = document.getElementById("cars").children
let counter = 3
let money = 1000
let carNumber = 0
let betInput = document.getElementById("carsInput")
let carNames = ["Lamborghini", "landrover", "mazda", "bmw", "ferrari"]
let cars = document.getElementsByClassName("cars")[0].children

console.log(cars);
let speeds = [0, 0, 0, 0, 0, 0]
let countdown = document.getElementById("countdown")
for (let carindex = 0; carindex < carsMenu.length; carindex++) {
    carsMenu[carindex].src = database[level][Object.keys(database[level])[carindex]]
    cars[carindex].src = database[level][Object.keys(database[level])[carindex]]
    carsMenu[carindex].onclick = function (event) {
        carNumber = carindex
        console.log(carNumber);
        document.getElementsByClassName("active")[0].classList.remove("active")
        carsMenu[carindex].classList.add("active")
    }
}

betInput.oninput = function (event) {
    console.log(9);

    if (betInput.value > money) {
        betInput.value = money
    }
    if (betInput.value == "") {
        button.disabled = true
    }
    else {
        button.disabled = false
    }
}


button.onclick = function (event) {

    bet = betInput.value
    if (betInput.value == "") {
        button.disabled = true
        console.log(button);
    }
    else {
        button.disabled = false
    }
    counter = 3
    countdown.innerHTML = counter
    menu.style.opacity = 0
    speeds = [0, 0, 0, 0, 0, 0]
    for (let index = 0; index < 6; index++) {
        cars[index].style.left = speeds[index] + "px"

        if (level > 1) {
            cars[index].classList.add("turbo")
        }
    }
    //  стрелочная функция
    let timer = setInterval(() => {
        counter = counter - 1
        countdown.innerHTML = counter
        if (counter == 0) {
            clearInterval(timer)
            countdown.innerHTML = "go!!!"
            countdown.style.opacity = 0

            // menu.style.opacity=1

            let race = setInterval(() => {

                for (let index = 0; index < 6; index++) {
                    cars[index].style.left = speeds[index] + "px"

                    speeds[index] = speeds[index] + Math.floor(Math.random() * 5)
                    if (window.innerWidth < speeds[index]) {
                        countdown.style.opacity = 1
                        countdown.innerHTML = "winner is: " + Object.keys(database[level])[index]
                        clearInterval(race)
                        setTimeout(() => {
                            menu.style.opacity = 1
                            betInput.value = ""
                            if (carNumber == index) {
                                if (betInput.value == "") {
                                    button.disabled = true
                                    console.log(button);
                                }
                                else {
                                    button.disabled = false
                                }
                                money = money + parseInt(bet)
                                bank.innerHTML = "your bank: " + money
                            }
                            else {

                                money = money - parseInt(bet)
                                bank.innerHTML = "your bank: " + money
                                if(money<=0){
                                    bank.innerHTML="you lose!!!"
                                }
                            }

                            if (money >= 2000) {
                                if (level == 1) {

                                    bank.innerHTML = "you up to level 2"
                                    level = 2
                                }
                                setTimeout(() => {
                                    bank.innerHTML = "your bank: " + money
                                }, 5000);

                               
                                for (let carindex = 0; carindex < carsMenu.length; carindex++) {
                                    carsMenu[carindex].src = database[level][Object.keys(database[level])[carindex]]
                                    cars[carindex].src = database[level][Object.keys(database[level])[carindex]]


                                }
                            }

                            if (money >= 4000) {
                                console.log(level);
                                if (level == 2) {

                                    bank.innerHTML = "you up to level 3"
                                    level = 3
                                }

                                setTimeout(() => {
                                    bank.innerHTML = "your bank: " + money
                                }, 5000);

                            
                                for (let carindex = 0; carindex < carsMenu.length; carindex++) {
                                    carsMenu[carindex].src = database[level][Object.keys(database[level])[carindex]]
                                    cars[carindex].src = database[level][Object.keys(database[level])[carindex]]


                                }
                            }
                            if (money >= 32000) {
                                if (level == 3) {
                                 
                                    bank.innerHTML = "you up to level 4"
                                    level = 4
                                }
                                setTimeout(() => {
                                    bank.innerHTML = "your bank: " + money
                                }, 5000);

                          
                                for (let carindex = 0; carindex < carsMenu.length; carindex++) {
                                    carsMenu[carindex].src = database[level][Object.keys(database[level])[carindex]]
                                    cars[carindex].src = database[level][Object.keys(database[level])[carindex]]


                                }
                            }
                            if (money >= 128000) {
                                if (level == 4) {
                                 
                                    bank.innerHTML = "you up to level 5"
                                    level = 5
                                }
                                setTimeout(() => {
                                    bank.innerHTML = "your bank: " + money
                                }, 5000);

                          
                                for (let carindex = 0; carindex < carsMenu.length; carindex++) {
                                    carsMenu[carindex].src = database[level][Object.keys(database[level])[carindex]]
                                    cars[carindex].src = database[level][Object.keys(database[level])[carindex]]


                                }

                            }
                        }, 3000);

                    }

                    console.log(speeds)
                }

            }, 10);
        }

    }, 1000);

}
                            // 1. Обрезать картинки
// 2. Сюрприз