export class InitNotes{

    load(){


        if(localStorage.getItem('notes')===null || localStorage.getItem('notes')===undefined)
        {

            var notes=[
                            {
                                "date":"2016-11-10 09:20:00",
                                "author":"Bruce Wayne",
                                "text":"Well done!"
                            },
                            {
                                "date":"2016-11-10 09:00:00",
                                "author":"Marry Poppins",
                                "text":"Good to go"
                            }
                        ]

                    localStorage.setItem('notes',JSON.stringify(notes));
                    return;
        }
        else{

                    console.log("Found notes");

        }
    }

}