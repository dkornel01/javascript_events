import megjelenitesSor from "./megjelenitSor.js";

class Megjelenit {
    
constructor(list,hely){
    this.list = list;
    this.hely = hely;
    this.hely.append("<table>");
    this.tablazat = hely.children("table");
    this.megjelenites();
}
    megjelenites() {
        let txt="";
        this.list.forEach((elem) => {
            new megjelenitesSor(elem,this.tablazat)
            /*txt +="<tr>";
                for (const key in elem){
                    txt +=`<td>${elem[key]}</td>`
                }
                txt += `<td><span class="kesz">✔️</span><span class="megse">❌</span><span class="torol">🗑️</span></td> `
            txt +="</tr>";
        });
        this.tablazat.html(txt)*/
    })

}

  /*constructor(lista, hely) {
    this.lista = lista;
    this.hely = hely;
    this.hely.append("<table>");
    this.tablazat = this.hely.children;
    this.megjelenites();
  }
  megjelenites() {
    this.lista.forEach((element, index) => {
      this.hely.append(`<td>${index + 1}. ${element}</td>`);
    });
    }
}*/
}
export default Megjelenit;
