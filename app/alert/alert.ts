export class Alert
{
id:number;
descA:string;
optKeywords:string;
//obligatkeyword:string;
forbidenKeywords:string;
srcAutorises:string;
srcBloques:string;
langue:string;
descI:string;


constructor(private nomA:string, private optkw:string,private frbKw:string,private srcAuth:string,private srcBl:string,private lang:string
,private dI:string)
{
    this.descA=nomA;
    this.optKeywords=optkw;
    this.forbidenKeywords=frbKw;
    this.srcAutorises=srcAuth;
    this.srcBloques=srcBl;
    this.langue= lang;
    this.descI = dI;
}

get getNom()
{
    return this.descA;
}
get getOptKey()
{
    return this.optKeywords;
}

}