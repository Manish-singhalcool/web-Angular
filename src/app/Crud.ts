export class Crud{
    sno: number
    title:string
    desc:string
    active:true | false

    constructor() {
        // Initialize sno later in the code
        this.sno = 0; // or any other appropriate value
        this.title = '';
        this.desc = '';
        this.active = true;
      }
}