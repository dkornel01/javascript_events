import Megjelenit from "./Megjelenit.js";
import { TODOLIST, TODOLIST2 } from "./adatok.js";

$(function(){
    const TAROLO=$(".tarolo")
    //new Megjelenit(TODOLIST,TAROLO)
    new Megjelenit(TODOLIST2,TAROLO)
    $(window).on("kesz", (event)=>{
        console.log(event.detail)
    })
    $(window).on("megse", (event)=>{
        console.log(event.detail)
    })
    $(window).on("torles", (event)=>{
        console.log(event.detail)
    })
})