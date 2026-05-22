export type HeadingProps={
    brand:string,
    color:string,
}

export function Heading({brand,color}:HeadingProps){
  return(
<p className=" font-serif text-3xl text-center"> This is a {brand} {color} calculator
</p>
  );
 

}


  
