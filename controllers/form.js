var Models=require('../models');

module.exports={
  home: function(req, res) {
    
      res.render('forms');
  },



store: function (req, res){
    // var districts=[
    //     {
    //         name: "Taplejung",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Panchthar",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Ilam",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Jhapa",
    //         no_of_Hor: 5,
    //         no_of_prov:10
    //     },
    //     {
    //         name: "Sankhuwasabha",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Terhathum",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Bhojpur",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Dhankuta",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },{
    //         name: "Morang",
    //         no_of_Hor: 6,
    //         no_of_prov:12
    //     },{
    //         name: "Sunsari",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },{
    //         name: "Solukhumbu",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Khotang",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Okhaldhunga",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Udayapaur",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Saptari",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },
    //     {
    //         name: "Siraha",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },
    //     {
    //         name: "Dolakha",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Ramechhap",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Sindhuli",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Dhanusha",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },
    //     {
    //         name: "Mahottari",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },
    //     {
    //         name: "Sarlahi",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },
    //     {
    //         name: "Rasuwa",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Dhading",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Nuwakot",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Kathmandu",
    //         no_of_Hor: 10,
    //         no_of_prov:20
    //     },
    //     {
    //         name: "Bhaktapur",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Lalitpur",
    //         no_of_Hor: 3,
    //         no_of_prov:6
    //     },
    //     {
    //         name: "Kabhrepalanchowk",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Sindhupalchowk",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Makwanpur",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Rautahat",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },
    //     {
    //         name: "Bara",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },
    //     {
    //         name: "Parsa",
    //         no_of_Hor: 4,
    //         no_of_prov:8
    //     },
    //     {
    //         name: "Chitawan",
    //         no_of_Hor: 3,
    //         no_of_prov:6
    //     },
    //     {
    //         name: "Gorkha",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Manang",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Lamjung",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Kaski",
    //         no_of_Hor: 3,
    //         no_of_prov:6
    //     },
    //     {
    //         name: "Tanahaun",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Syangja",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Gulmi",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Palpa",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Arghakhanchi",
    //         no_of_Hor: 1,
    //         no_of_prov:2
    //     },
    //     {
    //         name: "Nawalparasi (Bardaghat East)",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Nawalparasi (Bardaghat West)",
    //         no_of_Hor: 2,
    //         no_of_prov:4
    //     },
    //     {
    //         name: "Rupandehi",
    //         no_of_Hor: 5,
    //         no_of_prov:10
    //     }
    // ];
    // for(i=0; i<districts.length; i++){
        var newDist=new Models.Dist({
            district: "ktm",
            no_of_Hor: 3,
            no_of_prov:3
        });
        
        newDist.save(function(err, dist){
            if(err) throw err;
            else    res.redirect('http://www.google.com');

        });
    // }
}
};