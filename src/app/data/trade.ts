export class InitTrade{

    load(){


        if(localStorage.getItem('trade')===null || localStorage.getItem('trade')===undefined)
        {

            var trade={
                            "id":"XA12891231",
                            "buy":{
                                "amount":12000,
                                "currency":"EUR"
                            },
                            "sell":{
                                "amount":10000,
                                "currency":"GBP"
                            },
                            "margin":15,
                            "dealer":"Tony Stark"
                            }
                        localStorage.setItem('trade',JSON.stringify(trade));
                    return;
        }
        else{

                    console.log("Found trade");

        }
    }

}