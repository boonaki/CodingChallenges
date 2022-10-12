function day5(str){
    str = str.split(',').filter((cat) => {
        if(cat.trim() !== cat){
            return false
        }else if(cat.toLowerCase().indexOf('dog') !== -1 || cat.toLowerCase().indexOf('bark') !== -1 || cat.toLowerCase().indexOf('bone') !== -1){
            return false
        }else if(cat.length % 5 === 0){
            return false
        }else if( (cat.charCodeAt(0) + cat.charCodeAt(cat.length-1)) % 2 === 0){            
            return false
        }else if(cat.charAt( (Math.round(cat.length/2)) + 1 ) === 'e'){
            return false
        }else if(lowerCaseCount(cat) % 2 !== 0){
            return false
        }else if(capLet(cat) < 2){
            return false
        }else if(capitalS(cat)){
            return false
        }else{
            return true
        }
    })
    return str
}

function lowerCaseCount(str){
    let count = 0
    str.split('').forEach((c) => {
        if(c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123){
            count++
        }
    })
    return count
}

function capLet(str){
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91){
            count++
        }
    }
    return count
}

function capitalS(str){
    let bool = false
    str.split('').forEach((letter) => {
        if(letter === 'S'){
            bool = true
        }
    })
    return bool
}

console.log(day5("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"))