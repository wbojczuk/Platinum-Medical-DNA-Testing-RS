interface sendEmailParams{
    receiverEmail: string,
    data: any 
}

export default async function sendEmail(evt:any,setStatus:any, props: sendEmailParams, formElem: HTMLFormElement){
    evt.preventDefault();
    setStatus("loading")
    try{
        await fetch("https://wbojczukblog.alwaysdata.net/api/sendformemail",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                receiverEmail: props.receiverEmail,
                websiteURL: encodeURIComponent(location.origin),
                data: props.data
            })
        })
    }catch(err){
        console.error(err)
        setStatus("error")
        return false
    }finally{
        setStatus("success")
        formElem.reset()
        return true
    }
}