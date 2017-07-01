export class Init{

    load(){


        if(localStorage.getItem('client')===null || localStorage.getItem('client')===undefined)
        {

            var client={
                        "id":"007",
                        "name":"Super Client Company Ltd.",
                        "type":"Corporate",
                        "phone":"01721234567",
                        "net_position":12121.2,
                        "main_contact":{
                            "name":"John Show",
                            "position":"Head of Marketing of The Wall"
                        },
                        "dealer":"Jane Doe",
                        "last_login":"2016-11-19 10:04:48",
                        "last_call":{
                            "date":"2016-11-10 09:50:39",
                            "contact":"Marry Poppins"
                        }
                    }

                    localStorage.setItem('client',JSON.stringify(client));
                    return;
        }
        else{

                    console.log("Found Client");

        }
    }

}