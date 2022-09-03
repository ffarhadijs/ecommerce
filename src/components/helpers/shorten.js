export const shorten=(name)=>{
    const text=name.split(" ")
    const newText=`${text[0]} ${text[1]}`
    return newText
}


export const textShorten=(text,n)=>{
    return text.length>n?`${text.slice(0,n)} ...`:text
}

export const titleShorten=(name)=>{
    const text=name.split(" ")
    if (text.length>6) {
        const newText =`${text[0]} ${text[1]} ${text[2]} ${text[3]} ${text[4]} ${text[5]} ...`
        return newText
    }
    return name
}
