export function pokemonType(celsius){
    
    let type

    if(celsius < 5 ){
        return type = "ice"
    }
    if(celsius >= 5 && celsius < 10){
        return type = "water"
    }
    if(celsius >= 12 && celsius < 15){
        return type = "grass"
    }
    if(celsius >=  15 && celsius < 21){
        return type = "ground"
    }
    if(celsius >= 23 && celsius < 27){
        return type = "bug"
    }
    if(celsius >= 27 && celsius <= 33){
        return type = "rock"
    }
    if(celsius > 33){
        return type = "fire"
    }
    else{
        return type = "normal"
    }
}