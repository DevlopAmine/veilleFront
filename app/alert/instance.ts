export class Instance
{
id:number;
descI:string;
customer_id:string;

constructor(private dI:string,private cosId:string)
{
    this.descI=dI;
    this.customer_id=cosId;
}

}