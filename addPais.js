import { countries } from "./countries.js";

const name = process.argv[2]
const code = process.argv[3]

if(!name || !code){
    console.log("Digite o nome e/ou código do País")
}else{
    
        const newCountry={
        name,
        code
        }
    
    countries.unshift(newCountry)
    console.table(countries)


}