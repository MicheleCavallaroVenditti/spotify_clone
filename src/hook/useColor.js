import { useState, useEffect } from 'react'


const useColor =(number)=>{
    const [color,setColor] = useState([])
    let array = []
    useEffect(()=>{
        for(var i = 0; i <number; i++){
            array.push(new Color(Math.random()*255,Math.random()*255,Math.random()*255))
        }
        setColor(array)
    },[])

    return color
}

class Color {
    constructor(red,green,blue){
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}
export default useColor