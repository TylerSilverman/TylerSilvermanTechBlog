module.exports={
    format_date:date=>{
        return date.toLocaleDateString();
    },
    formatScore:IQ=>{
        //format large amounts with commas
        return parseInt(IQ).toLocaleString();
    }    
}