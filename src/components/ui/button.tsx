
type Variants = "primary" | "secondary" |"type2"
interface ButtonProps {
    variant : Variants
    sizes? : "sm"| "md" | "lg";
    text : string;
    startIcon ?: any ; //to make it optional property we have to use ? otherwise it becomes a compulsory prorperty to be used
    endIcon? : any ;
    onClick ?: () => void ;
}

const variantStyles = {
    "primary" : "bg-purple-500 text-white font-semibold" ,
    "secondary" : "bg-purple-600 text-white font-semibold",
    "type2" :"bg-purple-600 text-white font-semibold flex w-56 px-2"
   
}

// const sizeStyles = {
//     "sm" : "py-2 px-2",
//     "md" : "py-2 px-4",
//     "lg" : "py-4 px-4"
// }
const defaultStyles = "rounded-lg flex"

///way to concatinate strings is let fullname =${firstname} ${lastname } now we will use it to concaatinate different styles ..
//or we can use firstname + "" + lastname

export function Button ({variant, text,startIcon,onClick ,endIcon} : ButtonProps){



    return <button onClick={onClick} className= {variantStyles[variant] + " " + defaultStyles } >
        <div className="pr-4 pl-4 flex mt-3 mb-3 items-center gap-2">
            {startIcon}
            {text}
            {endIcon}

        </div>
       
    </button>
}

// className= {`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.sizes]}`}> {props.startIcon ? <div className="pr-2">
//     {props.startIcon}</div> : null} {props.text} {props.endIcon} {props.onClick}



export function NewButton({ onClick }: { onClick: () => void }){
    return (<div className="justify-center py-2 border m-1.5 w-56 bg-purple-600 rounded-md mt-2">
        <button className="font-semibold text-white text-xl rounded-md flex w-56 px-20"  onClick={onClick} >
            POST 
        </button>

    </div>)
}