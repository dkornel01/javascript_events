class megjelenitesSor{
    #adat={};
    constructor(adat,hely){
        this.#adat=adat
        this.tablaElem=hely;
        this.#megjelenites();
        this.sorElem=this.tablaElem.children("tr:last-child")
        this.pipaElem=this.sorElem.children("td").children(".kesz")
        this.pipaElem.on("click",()=>{
            this.sorElem.css("background-color","lightgreen")
            this.#esemenyTrigger("kesz")
            //this.sorElem.children("td").children(".kesz").html(`<span class="megse">❌</span>`)
        })
        this.sorElem=this.tablaElem.children("tr:last-child")
        this.XElem=this.sorElem.children("td").children(".megse")
        this.XElem.on("click",()=>{
            this.sorElem.css("background-color","white")
            this.#esemenyTrigger("megse")
            //this.sorElem.children("td").children(".kesz").html(`<span class="kesz">✔️</span>`)
        })
        this.sorElem=this.tablaElem.children("tr:last-child")
        this.torlesElem=this.sorElem.children("td").children(".torol")
        this.torlesElem.on("click",()=>{
            this.sorElem.remove()
            this.#esemenyTrigger("torles")
        })
        
        }
        #megjelenites() {
            let txt="";
            txt +="<tr>";
                for (const key in this.#adat){
                    const element=this.#adat[key];
                    txt +=`<td>${element}</td>`
                }
            txt += `<td><span class="kesz">✔️</span><span class="megse">❌</span><span class="torol">🗑️</span></td> `
            txt +="</tr>";
            this.tablaElem.append(txt)
        }
        #esemenyTrigger(esemenynev){
            const EV=new CustomEvent(esemenynev,{detail:this})
            window.dispatchEvent(EV)
        }
        
    }

    

export default megjelenitesSor