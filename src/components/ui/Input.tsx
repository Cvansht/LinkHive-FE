interface InputProps{
    placeholder : string ;
    reference? :any,
 
   
  
}


export function InputUsername( { placeholder ,reference }:InputProps) {

    return <div className="w-80">
        <input  ref ={reference} placeholder= {placeholder}   className="px-2 py-2 border rounded-md m-1.5 w-56 bg-slate-100" ></input>
    </div>

}
export function InputPassword( { placeholder ,reference }:InputProps) {

    return <div className="w-80">
        <input  ref ={reference} placeholder= {placeholder}  type="password" className="px-2 py-2 border rounded-md m-1.5 w-56 bg-slate-100" ></input>
    </div>

}
export function Input( { placeholder ,reference }:InputProps) {

    return <div className="w-80">
        <input  ref ={reference} placeholder= {placeholder}  type="password" className="px-2 py-2 border rounded-md m-1.5 w-56 bg-slate-100" ></input>
    </div>

}

export function Discription({ placeholder ,reference}:InputProps){
    return <div className="w-90">
    <textarea
        ref={reference}
        placeholder={placeholder}
        className="px-2 py-2 border rounded-md m-1.5 h-20 w-56 bg-slate-100 placeholder:top-0 placeholder:left-0 placeholder:text-gray-400 resize-none focus:border-black"
      ></textarea>
</div>
}