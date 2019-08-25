const LINES_DATA = [
  {
    id: "roca",
    name: "Roca",
    branches: [
      {
        id: "11",
        name: "Constitucion - La Plata",
        slug: "laplata",
        directions: [
          {
            id: "11",
            name: "La Plata",
            color: "info"
          },
          {
            id: "12",
            name: "Constitucion",
            color: "success"
          }
        ],
        stations: [
          {
            index: 0,
            id: "constitucion",
            name: "Constitucion",
            position: { lat: -34.6283673, lng: -58.3806149 }
          },
          {
            index: 1,
            id: "avellaneda",
            name: "Avellaneda",
            position: { lat: -34.6613896, lng: -58.3768325 }
          },
          {
            index: 2,
            id: "sarandi",
            name: "Sarandi",
            position: { lat: -34.6787475, lng: -58.3449626 }
          },
          {
            index: 3,
            id: "villadominico",
            name: "Villa Dominico",
            position: { lat: -34.6915355, lng: -58.3253499 }
          },
          {
            index: 4,
            id: "wilde",
            name: "Wilde",
            position: { lat: -34.6975894, lng: -58.3111938 }
          },
          {
            index: 5,
            id: "donbosco",
            name: "Don Bosco",
            position: { lat: -34.7033242, lng: -58.2961718 }
          },
          {
            index: 6,
            id: "bernal",
            name: "Bernal",
            position: { lat: -34.7092611, lng: -58.280569 }
          },
          {
            index: 7,
            id: "quilmes",
            name: "Quilmes",
            position: { lat: -34.7246461, lng: -58.2606591 }
          },
          {
            index: 8,
            id: "ezpeleta",
            name: "Ezpeleta",
            position: { lat: -34.7518509, lng: -58.2341863 }
          },
          {
            index: 9,
            id: "berazategui",
            name: "Berazategui",
            position: { lat: -34.7640977, lng: -58.2084433 }
          },
          {
            index: 10,
            id: "platanos",
            name: "Platanos",
            position: { lat: -34.7823359, lng: -58.1707596 }
          },
          {
            index: 11,
            id: "hudson",
            name: "Hudson",
            position: { lat: -34.7911192, lng: -58.1552692 }
          },
          {
            index: 12,
            id: "pereyra",
            name: "Pereyra",
            position: { lat: -34.8366304, lng: -58.0945403 }
          },
          {
            index: 13,
            id: "villaelisa",
            name: "Villa Elisa",
            position: { lat: -34.8495861, lng: -58.0751851 }
          },
          {
            index: 14,
            id: "citybell",
            name: "City Bell",
            position: { lat: -34.8657239, lng: -58.0420495 }
          },
          {
            index: 15,
            id: "gonnet",
            name: "Gonnet",
            position: { lat: -34.879841, lng: -58.0107856 }
          },
          {
            index: 16,
            id: "ringuelet",
            name: "Ringuelet",
            position: { lat: -34.8813876, lng: -57.9960622 }
          },
          {
            index: 17,
            id: "tolosa",
            name: "Tolosa",
            position: { lat: -34.8909547, lng: -57.9680983 }
          },
          {
            index: 18,
            id: "laplata",
            name: "La Plata",
            position: { lat: -34.9038945, lng: -57.950174 }
          }
        ],
        path: 'hjjrExmicJb@?b@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@@b@?b@?d@?b@?b@?b@?b@?b@?b@?b@?b@@b@?b@?b@?b@?b@?b@?b@?b@?d@?%60@?b@@b@?b@?b@?b@Ab@Ad@Ab@?b@Ab@Ab@?b@?b@?b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@?d@?%60@Ab@Ad@C%60@Eb@Eb@E%60@Gb@Eb@Gb@G%60@Gb@Gb@Gb@E%60@Gb@Gb@Gb@G%60@Gb@Ib@G%60@Gb@Ib@G%60@Ib@Gb@G%60@Gb@Ib@G%60@Gb@Gb@I%60@Gb@Gb@Gb@I%60@Gb@Gb@G%60@Gb@Ib@G%60@Gb@Gb@Gb@I%60@Gb@Ib@G%60@Gb@I%60@Ib@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@Gb@Ib@G%60@Ib@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@G%60@Ib@Gb@I%60@Ib@Gb@I%60@Gb@I%60@Gb@Ib@I%60@Gb@Ib@G%60@Ib@G%60@Ib@Ib@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@Gb@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@I%60@Ib@Gb@I%60@Ib@Gb@I%60@Ib@G%60@Ib@Ib@I%60@Gb@I%60@Gb@I%60@Ib@I%60@K%60@O%60@O%60@O%5CS%5EU%5EUZW%5CY%5CWX%5DX%5DZ%5DX%5BTc@Ta@Tc@Rc@Rc@Rc@Rc@Ji@Lg@Jg@Li@Jg@Dk@Di@Dk@Bi@?k@?k@Ak@?i@?k@Ak@?k@Ak@Ck@Ai@Ck@Ek@Ck@Ai@Ak@Ek@Ck@Ai@?k@?k@@i@@k@@k@Di@Dk@Di@Fk@Di@Ji@Jg@Ng@Ne@Ng@Ne@Ng@Ne@Pe@Pe@Re@Pe@Pc@Rc@Re@Rc@Rc@Pc@Re@Rc@Rc@Re@Pc@Rc@Re@Rc@Pe@Pg@Pe@Pe@Ne@Pe@Le@Ng@Lg@Li@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Li@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Ng@Lg@Lg@Li@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Li@Lg@Ng@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Ng@Lg@Lg@Lg@Lg@Lg@Lg@Hi@Hi@Fi@Fk@Fi@Fk@Bi@Bk@Bi@Bk@Bk@Bi@Bk@Bk@Bk@Bi@Di@Hk@Fi@Hi@Ji@Jg@Ji@Pe@Ng@Pe@Rc@Rc@Rc@Ta@V_@Va@T_@Va@V_@Va@V_@Ta@V_@V_@Va@V_@V_@X_@V_@V_@X_@V_@X_@V_@V%5DX_@V_@V_@X_@V_@V_@V_@X_@V_@V_@V_@X_@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@Ta@V_@V_@Va@V_@Va@V_@V_@Va@V_@Ta@V_@Va@V_@V_@Va@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@V_@Va@V_@V_@V_@Va@V_@V_@V_@Va@V_@V_@V_@Va@V_@Va@V_@V_@Ta@V_@Va@V_@Va@V_@Va@V_@V_@Va@V_@Va@V_@V_@V_@Va@T_@V_@Ta@Ta@Tc@Ta@Pe@Pe@Pe@Ne@Ng@Lg@Lg@Lg@Lg@Li@Lg@Jg@Li@Jg@Lg@Lg@Ji@Jg@Li@Jg@Ji@Jg@Ji@Jg@Ji@Li@Jg@Ji@Jg@Ji@Jg@Li@Jg@Ji@Jg@Ji@Jg@Ji@Lg@Ji@Jg@Ji@Jg@Ji@Li@Jg@Jg@Li@Jg@Lg@Ji@Jg@Lg@Lg@Ng@Lg@Pg@Ne@Ne@Pe@Ng@Pe@Pc@Pe@Re@Pe@Pc@Re@Pe@Pc@Re@Pe@Pc@Re@Pe@Pc@Re@Pe@Pc@Pg@Ne@Pe@Ne@Pg@Lg@Lg@Lg@Lg@Ng@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Li@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Li@Ng@Lg@Lg@Lg@Jg@Li@Jg@Li@Jg@Lg@Ji@Jg@Hi@Ji@Ji@Hi@Jg@Hi@Ji@Hi@Ji@Jg@Ji@Hi@Jg@Ji@Jg@Hi@Ji@Jg@Hi@Ji@Jg@Hi@Ji@Jg@Hi@Ji@Jg@Hi@Ji@Ji@Jg@Ji@Lg@Lg@Ng@Ne@Ng@Pc@Pe@Re@Pe@Pc@Re@Pe@Rc@Pe@Pe@Rc@Pe@Pe@Rc@Pe@Re@Pc@Pe@Pe@Pe@Pe@Ne@Ng@Ng@Le@Ng@Ng@Lg@Ng@Lg@Ng@Ne@Lg@Ng@Lg@Ng@Ne@Lg@Ng@Ne@Lg@Ng@Le@Ng@Ng@Ng@Ne@Lg@Ne@Ng@Ng@Ne@Ng@Lg@Ne@Ng@Pg@Ne@Ng@Ne@Pe@Pe@Pe@Pe@Pc@Re@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Ng@Ne@Pg@Ne@Ng@Ne@Ng@Pe@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Pe@Pe@Pe@Pe@Re@Pe@Pc@Ta@Ta@Va@V_@X_@V_@V%5DX_@Z%5BZ%5BZ%5BZ%5B%5CU%5CW%5EW%5CW%5CW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CW%5EU%5CW%5CU%5EW%5CU%5CU%5EW%5CU%5CW%5EW%5CW%5CU%5CW%5EW%5CU%5CW%5CW%5EW%5CUZY%5CYZYX%5DX%5DX%5DX_@V_@X%5DV_@X_@V_@X_@V%5DX_@V_@X_@X%5DV_@X_@V%5DX_@X%5DV_@X%5DX%5DX%5DZ%5DX%5DZYZ%5BZ%5B%5CW%5CYZY%5CWZY%5CY%5CW%5CYZW%5CY%5CW%5CYZY%5CW%5CY%5CWZY%5CW%5CY%5CYZW%5CY%5CW%5CYZW%5CY%5CY%5CWZY%5CW%5CYZY%5CW%5CY%5CYZW%5CY%5CWZY%5CY%5CW%5CYZW%5CY%5CY%5CWZY%5CW%5CY%5CWZY%5CW%5CY%5CWZ%5BZYZ%5B%5CYZYZ%5BZ%5BZYZ%5BZYZ%5B%5CYZ%5BZ%5BZYZ%5BZYZ%5BZ%5BZY%5C%5BZYZ%5BZYZ%5BZYZ%5B%5C%5BZYZ%5BZYZ%5BZYZ%5B%5CYZ%5BZ%5BZYZ%5BZYZ%5BZY%5C%5BZ%5BZYZ%5BZYZ%5BZ%5BX%5DX%5DX%5DX%5DVa@Ta@Ta@Ta@Re@Rc@Rc@Re@Pc@Re@Pc@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Ne@Re@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Rc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Re@Pe@Pe@Pe@Pe@Pe@Ne@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Re@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pe@Pe@Ne@Pe@Pg@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Re@Pe@Pe@Pc@Pe@Re@Pe@Pe@Pe@Pc@Pe@Re@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Re@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Rc@Pe@Pe@Pe@Pe@Pe@Pc@Re@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Re@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Re@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Re@Pe@Pe@Pc@Pe@Pe@Pe@Re@Pe@Pe@Pc@Pe@Pe@Re@Pe@Pe@Pc@Pe@Rc@Rc@Tc@Re@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Rc@Rc@Rc@Tc@Rc@Re@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Ra@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Tc@Ra@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Tc@Rc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Re@Rc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Re@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Tc@Rc@Rc@Ra@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Ta@Re@Rc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Rc@Rc@Tc@Rc@Rc@Rc@Rc@Re@Ta@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Rc@Tc@Rc@Rc@Rc@Tc@Rc@Ta@Rc@Tc@Ta@Ta@V_@V_@Va@V_@V_@X_@V_@X_@V_@X_@V_@X%5DV_@X_@V%5DX_@V_@X%5DV_@X%5DV_@X_@V_@V_@X_@V%5DX_@V_@V_@X_@V_@V_@X_@V_@X_@V_@V_@X_@V%5DV_@X_@V_@X_@V_@X_@V%5DX_@V_@X_@V_@X%5DV_@V_@X_@V_@X%5DV_@X_@V_@X_@V%5DX_@V_@V_@X_@V_@X_@V%5DV_@X_@V_@V_@X_@V_@V_@X_@V%5DV_@X_@V_@X_@V_@V_@X%5DV_@X_@V_@X%5DV_@X_@V%5DX_@V_@X_@V%5DX_@V_@X_@V%5DX_@V_@X%5DV_@X_@V_@X_@V%5DX_@V_@V_@X_@V_@X_@V_@V%5DX_@V_@X_@V_@X_@V_@V_@X_@V%5DX_@V_@X_@V_@X%5DV_@V_@X_@V_@X_@V%5DX_@V_@X_@V_@V_@X%5DV_@X_@V_@X_@V_@V%5DX_@V_@X_@V_@V_@X%5DV_@X_@V_@V_@X_@V%5DV_@X_@V_@X_@V_@V_@X%5DV_@X_@V%5DX_@V_@X_@X%5DV_@X_@V_@X%5DV_@X_@V_@X%5DV_@X_@V_@X%5DV_@X_@V_@X%5DV_@X_@V_@X_@V%5DX_@V_@X_@V_@V%5DX_@V_@X_@V_@X%5DV_@X_@V_@X_@V%5DX_@V_@X_@V_@V_@X%5DV_@X_@V_@V_@X_@V_@X_@V_@V%5DX_@V_@V_@X_@V_@X_@V_@V_@X%5DV_@X_@V_@V_@X_@V_@X%5DV_@X_@V%5DX_@X_@V_@X%5DV_@X_@V%5DX_@V_@X%5DX_@V_@X_@V%5DX_@V_@X%5DV_@X_@V_@X%5DV_@X_@V_@V_@X%5DV_@X_@V_@V_@X_@V%5DX_@V_@V_@X_@V%5DX_@V_@X_@V_@X%5DV_@X_@V_@V%5DX_@V_@X_@V_@X%5DV_@X_@V_@X%5DV_@X_@V_@X_@V%5DX_@V_@X_@V%5DX_@V_@V_@X_@V_@X_@V_@V_@X_@V_@V_@X_@V_@X_@V_@V_@V_@Va@V_@V_@V_@V_@Va@V_@V_@X%5DX%5DZ_@X%5BZ%5BZ%5BX%5BZ%5BZY%5C%5BZYZY%5CYZ%5B%5CYZ%5BZYX%5BZ%5BZ%5BZ%5DX%5DX%5DX_@X%5DV_@X_@V_@V%5DX_@V_@V_@X_@V_@V_@X_@V_@V_@V_@X_@V_@V_@X_@Ta@Ta@Tc@Ta@Ta@Ta@Rc@Ta@Tc@Ta@Tc@Tc@Ra@Rc@Re@Pc@Rc@Pe@Re@Pe@Pc@Pe@Re@Pe@Pc@Re@Pe@Pe@Pe@Pc@Re@Pe@Pe@Pe@Pc@Pe@Re@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Re@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Re@Pe@Pe@Rc@Pe@Pe@Pe@Re@Pc@Pe@Re@Pe@Pc@Pe@Re@Pe@Pc@Pe@Re@Pe@Pc@Pe@Re@Pe@Pe@Pc@Re@Pe@Pe@Pc@Re@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Re@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Re@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Re@Pe@Pe@Pc@Pe@Pe@Pe@Re@Pc@Pe@Pe@Re@Pe@Pe@Rc@Pe@Pe@Pe@Re@Pc@Pe@Pe@Pe@Re@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Re@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Rc@Pe@Pe@Pe@Pe@Re@Pe@Pc@Pe@Pe@Pe@Re@Pe@Pe@Pc@Pe@Re@Pe@Pc@Pe@Re@Pe@Pc@Re@Pe@Pe@Pc@Re@Pe@Pe@Pc@Re@Pe@Pe@Pc@Re@Pe@Pe@Pc@Re@Pe@Pc@Pe@Re@Pe@Pc@Pe@Pe@Rc@Pe@Pe@Pc@Re@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Re@Pe@Pe@Pe@Pc@Re@Pe@Rc@Pe@Pe@Rc@Pe@Pe@Rc@Pe@Re@Pc@Pe@Pe@Pe@Re@Pe@Pe@Pc@Pe@Re@Pe@Pe@Pe@Pe@Pe@Re@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Rc@Pe@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Ne@Pg@Ne@Ne@Pg@Ne@Pe@Ne@Pg@Ne@Pe@Ng@Ne@Pg@Ne@Pe@Ng@Pe@Ne@Pg@Ne@Ne@Pg@Ne@Ng@Pe@Ng@Ne@Pe@Ng@Ne@Pe@Ng@Pe@Ne@Pe@Ng@Pe@Pe@Ne@Pg@Ne@Pe@Ng@Ne@Pg@Ne@Ne@Pg@Ne@Pg@Ne@Pe@Ng@Ne@Pe@Ne@Pg@Ne@Pe@Ne@Pg@Ne@Pe@Ne@Pg@Ne@Pe@Ng@Pe@Ng@Pe@Pe@Ng@Pe@Ne@Pg@Ne@Pe@Ne@Pg@Ne@Pe@Ne@Pe@Ng@Pe@Ne@Pe@Ng@Pe@Ne@Pe@Ng@Pe@Ne@Ng@Ne@Pg@Ne@Ne@Pg@Ne@Ng@Pe@Ne@Ng@Pe@Ng@Ne@Ng@Pe@Ne@Ng@Pe@Ng@Ne@Pg@Ne@Ng@Ne@Pe@Ng@Ne@Pg@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Lg@Lg@Li@Lg@Li@Hg@Hi@Fi@Hi@Fk@Di@Fk@Di@Fk@Di@Dk@Bk@Bi@Bk@Bk@Bk@Bi@Bk@?k@Ak@Ak@Ai@Ak@Ak@?k@Ak@Ei@Ek@Gi@Ek@Ei@Ek@Ek@Ei@Ek@Ki@Ii@Ig@Ki@Ii@Mg@Ki@Kg@Mi@Kg@Og@Oe@Og@Qg@Oe@Og@Og@Oe@Og@Oe@Og@Oe@Og@Mg@Og@Mg@Og@Kg@Ii@Kg@Ki@Gi@Ik@Gi@Gi@Ii@Gk@Ei@Ck@Ek@Ck@Ei@Ak@?k@Ak@Ai@Ak@@k@@k@Bk@@k@@k@@i@Fk@Fi@Fi@Fk@Fi@Hi@Ji@Hi@Hi@Hi@Ji@Hg@Ji@Lg@Ji@Lg@Jg@Li@Jg@Lg@Lg@Lg@Li@Lg@Ng@Lg@Ne@Pe@Pe@Pe@Pe@Re@Ra@Tc@Ta@Ta@Va@Va@V_@Va@V_@V_@V_@Va@V_@X_@V_@V_@Va@V_@V_@V_@V_@V_@X_@Va@V_@V_@V_@V_@V_@V_@Xa@V_@V_@V_@V_@V_@Xa@V_@V_@V_@V_@Xa@V_@V_@V_@V_@Va@V_@V_@Va@V_@V_@X_@Va@V_@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@T_@Va@V_@V_@V_@Va@V_@V_@Va@V_@V_@Xa@V_@V_@V_@V_@V_@Xa@V_@V_@V_@V_@V_@Xa@V_@V_@V_@V_@V_@Xa@V_@V_@V_@Va@V_@V_@V_@Va@V_@V_@Va@V_@V_@V_@Va@V_@V_@V_@Va@V_@V_@Va@X_@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@V_@Va@V_@V_@Va@V_@V_@X_@Va@V_@V_@V_@V_@V_@Va@V_@V_@X_@V_@V_@Va@V_@Ta@Va@Ta@Ta@Va@Ta@Rc@Re@Pc@Re@Rc@Pe@Ta@Va@Ta@Va@V_@Va@V_@T_@Va@', //eslint-disable-line
      },
      {
        id: "13",
        name: "Constitucion - Bosques (Via Quilmes)",
        slug: "bosques",
        directions: [
          {
            id: "13",
            name: "Bosques",
            color: "info"
          },
          {
            id: "14",
            name: "Constitucion",
            color: "success"
          }
        ],
        stations: [
          {
            index: 0,
            id: "constitucion",
            name: "Constitucion",
            position: { lat: -34.6283673, lng: -58.3806149 }
          },
          {
            index: 1,
            id: "avellaneda",
            name: "Avellaneda",
            position: { lat: -34.6613896, lng: -58.3768325 }
          },
          {
            index: 2,
            id: "sarandi",
            name: "Sarandi",
            position: { lat: -34.6787475, lng: -58.3449626 }
          },
          {
            index: 3,
            id: "villadominico",
            name: "Villa Dominico",
            position: { lat: -34.6915355, lng: -58.3253499 }
          },
          {
            index: 4,
            id: "wilde",
            name: "Wilde",
            position: { lat: -34.6975894, lng: -58.3111938 }
          },
          {
            index: 5,
            id: "donbosco",
            name: "Don Bosco",
            position: { lat: -34.7033242, lng: -58.2961718 }
          },
          {
            index: 6,
            id: "bernal",
            name: "Bernal",
            position: { lat: -34.7092611, lng: -58.280569 }
          },
          {
            index: 7,
            id: "quilmes",
            name: "Quilmes",
            position: { lat: -34.7246461, lng: -58.2606591 }
          },
          {
            index: 8,
            id: "ezpeleta",
            name: "Ezpeleta",
            position: { lat: -34.7518509, lng: -58.2341863 }
          },
          {
            index: 9,
            id: "berazategui",
            name: "Berazategui",
            position: { lat: -34.7640977, lng: -58.2084433 }
          },
          {
            index: 10,
            id: "villaespaña",
            name: "Villa España",
            position: { lat: -34.7744501, lng: -58.1949303 }
          },
          {
            index: 11,
            id: "ranelagh",
            name: "Ranelagh",
            position: { lat: -34.7893721, lng: -58.2031929 }
          },
          {
            index: 12,
            id: "sourigues",
            name: "Sourigues",
            position: { lat: -34.8065811, lng: -58.2127388 }
          },
          {
            index: 13,
            id: "bosques",
            name: "Bosques",
            position: { lat: -34.8195986, lng: -58.2300795 }
          }
        ],
        path: 'xmicJhjjrE?b@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@@b@?b@?b@?d@?b@?b@?b@?b@?b@?b@?b@@b@?b@?b@?b@?b@?b@?b@?b@?b@?d@?`@@b@?b@?b@?b@Ab@Ab@Ad@?b@Ab@Ab@?b@?b@?b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@?b@?d@A`@Ab@Cd@E`@Eb@Eb@G`@Eb@Gb@Gb@G`@Gb@Gb@Eb@G`@Gb@Gb@Gb@G`@Ib@Gb@G`@Ib@Gb@I`@Gb@Gb@G`@Ib@Gb@G`@Gb@Ib@G`@Gb@Gb@Ib@G`@Gb@Gb@G`@Ib@Gb@G`@Gb@Gb@Ib@G`@Ib@Gb@G`@Ib@I`@Ib@Ib@I`@Ib@Ib@I`@I`@Ib@I`@Ib@I`@Ib@I`@Gb@Ib@Gb@I`@Gb@I`@Gb@Ib@G`@Ib@Gb@I`@Gb@I`@Gb@Ib@I`@Gb@Ib@G`@Ib@G`@Ib@Ib@G`@Ib@Gb@I`@Gb@I`@Ib@Gb@I`@Gb@Ib@G`@Ib@Gb@I`@Gb@Gb@I`@Gb@Ib@G`@Ib@Gb@I`@Ib@G`@Ib@Ib@I`@Gb@Ib@I`@Gb@I`@Ib@Ib@G`@Ib@G`@Ib@I`@Ib@K`@O`@O`@O`@S\U^U^WZY\W\]X]X]Z[Xc@Ta@Tc@Tc@Rc@Rc@Rc@Ri@Jg@Lg@Ji@Lg@Jk@Di@Dk@Di@Bk@?k@?k@Ai@?k@?k@Ak@?k@Ak@Ci@Ak@Ck@Ek@Ci@Ak@Ak@Ek@Ci@Ak@?i@?k@@k@@k@@i@Dk@Di@Dk@Fi@Di@Jg@Jg@Ne@Ng@Ne@Ng@Ne@Ne@Pe@Pe@Re@Pc@Pc@Rc@Re@Rc@Rc@Pe@Rc@Rc@Re@Rc@Pc@Re@Rc@Re@Pg@Pe@Pe@Pe@Ne@Pe@Lg@Ng@Li@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Li@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Ng@Lg@Li@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Li@Lg@Lg@Ng@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Ng@Lg@Lg@Lg@Lg@Lg@Lg@Li@Hi@Hi@Fk@Fi@Fk@Fi@Bk@Bi@Bk@Bk@Bi@Bk@Bk@Bk@Bi@Bi@Dk@Hi@Fi@Hi@Jg@Ji@Je@Pg@Ne@Pc@Rc@Rc@Ra@T_@Va@V_@Ta@V_@Va@V_@Va@T_@V_@Va@V_@V_@V_@X_@V_@V_@X_@V_@X_@V]V_@X_@V_@V_@X_@V_@V_@V_@X_@V_@V_@V_@X_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@Va@T_@V_@Va@V_@Va@V_@V_@Va@V_@Va@T_@Va@V_@V_@Va@V_@Va@V_@V_@Va@V_@V_@Va@V_@V_@V_@Va@V_@V_@V_@Va@V_@V_@V_@Va@V_@V_@V_@Va@V_@Va@V_@V_@Va@T_@Va@V_@Va@V_@Va@V_@V_@Va@V_@Va@V_@V_@V_@Va@V_@T_@Va@Ta@Tc@Ta@Te@Pe@Pe@Pe@Pg@Lg@Lg@Lg@Lg@Li@Lg@Lg@Ji@Lg@Jg@Lg@Li@Jg@Ji@Lg@Ji@Jg@Ji@Jg@Ji@Ji@Lg@Ji@Jg@Ji@Jg@Ji@Lg@Ji@Jg@Ji@Jg@Ji@Jg@Li@Jg@Ji@Jg@Ji@Jg@Li@Jg@Ji@Lg@Jg@Li@Jg@Jg@Lg@Lg@Ng@Lg@Pe@Ne@Pe@Ng@Ne@Pc@Pe@Pe@Re@Pc@Pe@Re@Pc@Pe@Re@Pc@Pe@Re@Pc@Pe@Re@Pc@Pg@Pe@Ne@Pe@Ng@Pg@Lg@Lg@Lg@Ng@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Li@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Lg@Li@Lg@Ng@Lg@Lg@Lg@Ji@Lg@Ji@Lg@Jg@Li@Jg@Ji@Hi@Ji@Ji@Hg@Ji@Hi@Ji@Hi@Jg@Ji@Jg@Hi@Ji@Jg@Ji@Hi@Jg@Ji@Hi@Jg@Ji@Hi@Jg@Ji@Hi@Jg@Ji@Hi@Ji@Jg@Ji@Jg@Lg@Lg@Ne@Ng@Nc@Pe@Pe@Re@Pc@Pe@Re@Pc@Re@Pe@Pc@Re@Pe@Pc@Re@Pe@Rc@Pe@Pe@Pe@Pe@Pe@Ng@Ng@Ne@Lg@Ng@Ng@Lg@Ng@Lg@Ne@Ng@Lg@Ng@Lg@Ne@Ng@Lg@Ne@Ng@Lg@Ne@Lg@Ng@Ne@Ng@Ng@Le@Ng@Ng@Ne@Ng@Ng@Le@Ng@Ng@Pe@Ng@Ne@Ne@Pe@Pe@Pe@Pc@Pe@Re@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Ne@Pe@Pg@Ne@Ng@Pe@Ng@Ne@Ng@Ne@Pg@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ng@Ne@Ne@Pe@Pe@Pe@Pe@Re@Pc@Pa@Ta@Ta@V_@V_@X_@V]V_@X[Z[Z[Z[ZU\W\W^W\W\U\W\U^W\U\W^U\W\U^W\U\W^U\W\U^W\U\W^U\W\U^W\U\W^U\W\U^W\U\W^U\W\U^W\U\W^U\W\U\W^U\W\U^W\U\W^U\W\U\W^U\W\U^W\U\W^U\U\W^U\W\U^W\U\W^U\W\U^W\U\W^U\W\U^W\U\W^U\U\W^U\W\W^W\U\W\W^U\W\W\W^U\YZY\YZ]X]X]X_@X_@V]X_@V_@X_@V_@X]V_@X_@V_@X]X_@V]X_@V_@X]X_@V]X]X]X]Z]XYZ[Z[ZW\Y\YZW\YZY\W\Y\WZY\W\Y\YZW\Y\W\YZW\Y\Y\WZY\W\Y\WZY\Y\W\YZW\Y\YZW\Y\Y\WZY\W\YZY\W\Y\WZY\Y\W\YZW\Y\W\YZW\Y\W\[ZYZ[ZY\YZ[Z[ZYZ[ZYZ[ZY\[Z[ZYZ[ZYZ[ZYZ[Z[\YZ[ZYZ[ZYZ[Z[\YZ[ZYZ[ZYZ[ZY\[Z[ZYZ[ZYZ[ZYZ[\[ZYZ[ZYZ[Z[Z]X]X]X]Xa@Va@Ta@Ta@Te@Rc@Rc@Re@Rc@Pe@Rc@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Ne@Re@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Re@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Re@Pe@Pe@Pe@Pe@Pe@Pc@Ne@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Re@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pe@Pe@Ne@Pg@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Re@Pe@Pc@Pe@Pe@Re@Pe@Pe@Pc@Pe@Pe@Re@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Re@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pc@Pe@Pe@Pe@Pe@Pe@Ne@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Pe@Re@Pc@Pe@Re@Pe@Pe@Re@Pc@Pe@Pe@Re@P??e@Pe@Pe@Pe@Pe@Pe@P_@V[\]Z]\WZWZWZS^U^K`@M`@M`@Ib@G`@Ib@Cb@Eb@Cb@@b@?b@@b@Db@F`@Jb@J`@N`@L`@P`@P^N`@P^N^P`@N`@N`@P^P`@P^P^P`@P^P`@R^P^P`@P^P`@P^P^P`@P^R`@P^P`@P^P^P`@N^P`@P^P^P`@P^R`@P^P^P`@P^P`@P^P^P`@R^P`@P^P^P`@P^P^P`@R^P^P`@P^P`@P^P^P`@P^R^P`@P^P^R`@P^P^R`@P^P`@P^R^P`@P^P^R`@P^P^R`@P^P^P`@P^P^R`@P^P`@P^P^P`@R^P^P`@P^P^P`@R^P^P`@P^P`@P^P`@P^P^P`@P^P`@P^P`@P^P^P`@P^P`@P^P^P`@R^P^P`@P^R^P`@P^P`@R^P^P`@P^P^R`@P^P^P`@P^P`@P^P^P`@P^R`@P^P^P`@P^P`@P^P^P`@P^P`@P^P`@P^P^P`@P^P`@P^P^P`@P^P`@P^P`@P^P`@P^P`@P^N^P`@P^P`@P^P`@P^R^P`@P^P^R`@P^P^P`@P^R^P`@P^P^P^R`@P^P`@P^P^P`@P^P`@R^P^P`@P^P`@P^P^P`@P^P`@R^P^P`@P^P`@P^P^P`@P^P`@P^P^P`@P^P`@P^P`@P^P^P`@P^R`@P^P^P`@P^P`@P^P^P`@P^R`@P^P^P`@P^P`@P^P^P`@P^R`@P^P^P`@P^P`@P^P^P`@P^R^P`@R^P^R`@P^P^V^T\T^XZZZX\^V^X\V`@T`@V`@Td@Pb@Rd@Pf@Nf@Lf@Nh@Hf@Hh@Jj@Dh@Fj@Dj@@j@@h@?j@@j@Cj@Ch@Ej@Ch@Ih@Ih@Ih@Kf@Ih@Kh@Kf@Mf@Kf@Mh@Mf@Mf@Mf@Kh@Mf@Kh@Mf@Kf@Kh@Kf@Mh@Mf@Kf@Mh@Kf@Mf@Mh@K', //eslint-disable-line
      },
      {
        id: "15",
        name: "Constitucion - Gutierrez",
        slug: "gutierrez",
        directions: [
          {
            id: "15",
            name: "Gutierrez",
            color: "info"
          },
          {
            id: "16",
            name: "Constitucion",
            color: "success"
          }
        ],
        stations: [
          {
            index: 0,
            id: "constitucion",
            name: "Constitucion",
            position: { lat: -34.6283673, lng: -58.3806149 }
          },
          {
            index: 1,
            id: "hipolitoyrigoyen",
            name: "Hipolito Yrigoyen",
            position: { lat: -34.6536422, lng: -58.3788878 }
          },
          {
            index: 2,
            id: "santillanykosteki",
            name: "Santillan Y Kosteki",
            position: { lat: -34.6613896, lng: -58.3768325 }
          },
          {
            index: 3,
            id: "gerli",
            name: "Gerli",
            position: { lat: -34.6857287, lng: -58.3826371 }
          },
          {
            index: 4,
            id: "lanus",
            name: "Lanus",
            position: { lat: -34.7074543, lng: -58.390637 }
          },
          {
            index: 5,
            id: "remediosdeescalada",
            name: "Remedios De Escalada",
            position: { lat: -34.7270922, lng: -58.393661 }
          },
          {
            index: 6,
            id: "banfield",
            name: "Banfield",
            position: { lat: -34.7436106, lng: -58.3954246 }
          },
          {
            index: 7,
            id: "lomasdezamora",
            name: "Lomas De Zamora",
            position: { lat: -34.7610318, lng: -58.3973127 }
          },
          {
            index: 8,
            id: "temperley",
            name: "Temperley",
            position: { lat: -34.7759243, lng: -58.3963571 }
          },
          {
            index: 9,
            id: "josemarmol",
            name: "Jose Marmol",
            position: { lat: -34.791958, lng: -58.380941 }
          },
          {
            index: 10,
            id: "rafaelcalzada",
            name: "Rafael Calzada",
            position: { lat: -34.7966735, lng: -58.3591724 }
          },
          {
            index: 11,
            id: "claypole",
            name: "Claypole",
            position: { lat: -34.80118, lng: -58.3382367 }
          },
          {
            index: 12,
            id: "danteardigo",
            name: "Dante Ardigo",
            position: { lat: -34.8089358, lng: -58.3022925 }
          },
          {
            index: 13,
            id: "florenciovarela",
            name: "Florencio Varela",
            position: { lat: -34.8111153, lng: -58.2740495 }
          },
          {
            index: 14,
            id: "zeballos",
            name: "Zeballos",
            position: { lat: -34.810967, lng: -58.2568314 }
          },
          {
            index: 15,
            id: "bosques",
            name: "Bosques",
            position: { lat: -34.8195678, lng: -58.2301645 }
          },
          {
            index: 16,
            id: "santasofia",
            name: "Santa Sofia",
            position: { lat: -34.825094, lng: -58.2130617 }
          },
          {
            index: 17,
            id: "gutierrez",
            name: "Gutierrez",
            position: { lat: -34.8339983, lng: -58.1855852 }
          }
        ],
        path: 'hjjrExmicJb@?b@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@@b@?b@?d@?b@?b@?b@?b@?b@?b@?b@?b@@b@?b@?b@?b@?b@?b@?b@?b@?d@?%60@?b@@b@?b@?b@?b@Ab@Ad@Ab@?b@Ab@Ab@?b@?b@?b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@?d@?%60@Ab@Ad@C%60@Eb@Eb@E%60@Gb@Eb@Gb@G%60@Gb@Gb@Gb@E%60@Gb@Gb@Gb@G%60@Gb@Ib@G%60@Gb@Ib@G%60@Ib@Gb@G%60@Gb@Ib@G%60@Gb@Gb@I%60@Gb@Gb@Gb@I%60@Gb@Gb@G%60@Gb@Ib@G%60@Gb@Gb@Gb@I%60@Gb@Ib@G%60@Gb@I%60@Ib@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@Gb@Ib@G%60@Ib@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@G%60@Ib@Gb@I%60@Ib@Gb@I%60@Gb@I%60@Gb@Ib@I%60@Gb@Ib@G%60@Ib@G%60@Ib@Ib@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@Gb@G%60@Ib@G%5CMb@Eb@Eb@Eb@Eb@Ab@?b@Ab@@b@?b@@d@@%60@Bb@Db@D%60@Df@Hd@Jd@Hd@Jd@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@Jb@J%60@J%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@Jb@J%60@L%60@J%60@Jb@J%60@J%60@J%60@Lb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@J%60@Lb@J%60@L%60@J%60@Lb@J%60@L%60@J%60@J%60@Lb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@J%60@J%60@Jb@J%60@L%60@Jb@J%60@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@L%60@Jb@J%60@J%60@Jb@J%60@Jb@H%60@Jb@J%60@J%60@Jb@J%60@Hb@J%60@Hb@Hb@H%60@Hb@H%60@Fb@Fb@Fb@F%60@Hb@Db@Db@F%60@Db@Db@Fb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Db@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@B%60@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@@b@@b@@b@@b@@b@@b@?b@@b@@b@@b@?b@?b@Ab@?b@?d@?b@Ab@Ab@Cb@Ab@Cb@Cb@Ab@C%60@Ab@Cb@Cb@Ab@Cb@Ab@Cb@Cb@Ab@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@C%60@Gb@Ib@G%60@Ib@Gb@Ib@G%60@Gb@G%60@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Cd@Ab@?b@Ab@Ab@Ab@Ab@?b@Ab@Ab@Ab@Ab@?b@Ab@Ab@Cb@Ab@Cb@Ab@Cb@Ab@Ab@C%60@Ab@Cb@Ab@Ab@Cb@Ab@Cb@Ab@Ab@Cb@CT?b@Kb@I%60@Ib@Eb@E%60@Gb@Gb@Gb@G%60@Gb@Gb@I%60@Kb@K%60@M%60@K%60@O%5EO%60@Q%5EO%5EU%5CU%5EU%5CY%5CW%5CW%5CWZ%5BZYZ%5BX%5DX%5DX%5DZ%5DV_@Va@V_@Rc@Tc@Ra@Tc@Pe@Pe@Pe@Pe@Lg@Ng@Lg@Lg@Ng@Jg@Ji@Lg@Jg@Hk@Hi@Hi@Fi@Hi@Hi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Hi@Hi@Hi@Ji@Hi@Hi@Hi@Fi@Hi@Fk@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Hk@Fi@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Hi@Fi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Hi@Fi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Hi@Fk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Hi@Fi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Fi@Hk@Fi@Hi@Fi@Hi@Fi@Hk@Fi@Fi@Fk@Fi@Dk@Fi@Di@Dk@Di@Dk@Dk@Bi@Bk@Bk@Bk@Bk@@k@@i@Bk@@i@?k@@k@?k@@k@?k@?i@Ak@?k@Ak@Ak@?k@Ak@?k@Ai@Ak@Ak@?k@Ak@Ak@Ak@?i@Ak@Ak@Ak@?k@Ak@Ai@Ak@Ak@Ak@?k@Ak@Ai@Ak@Ak@Ak@Ak@?i@Ak@Ak@Ak@Ak@Ak@Ai@?k@Ak@Ak@Ak@Ak@Ai@Ak@?k@Ak@Ak@Ak@Ai@Ak@?k@Ak@Ak@Ak@?k@Ai@Ak@?k@Ak@Ak@Ak@?i@Ak@Ak@Ak@?k@Ak@Ai@Ak@?k@Ak@Ak@Ak@?i@Ak@Ak@Ak@?k@Ak@Ai@Ak@?k@Ak@Ak@Ak@?i@Ak@Ak@Ak@?k@Ak@Ai@Ak@?k@Ak@Ak@Ak@Ai@?k@Ak@Ak@Ak@Ak@?i@Ak@Ak@Ak@?k@Ak@Ai@Ak@Ak@?k@Ak@Ak@Ak@?i@Ak@?k@Ak@?k@Ak@?k@?k@?i@?k@@k@@k@Bi@Bk@Dk@Di@Dk@Fi@Fk@Hi@Hi@Hi@Hi@Jg@Ji@Jg@Ji@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Li@Jg@Lg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Jg@Li@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Ng@Jg@Li@Jg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Ji@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Ji@Lg@Jg@Li@Jg@Lg@Li@Jg@Li@Jg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Jg@Li@Jg@Lg@Ji@Lg@Jg@Li@Lg@Ji@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Li@Jg@Lg@Li@Jg@Lg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Lg@Ji@Lg@Lg@Ji@Lg@Lg@Ji@Lg@Lg@Ji@Lg@Lg@Ji@Lg@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Li@Jg@Lg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Ji@Lg@Jg@Li@Jg@Lg@Ji@Lg@Ji@Lg@Jg@Li@Jg@Li@Lg@Jg@Li@Jg@Li@Jg@Lg@Ji@Lg@Ji@Lg@Jg@Li@Jg@Lg@Ji@Lg@Li@Jg@Lg@Ji@Lg@Ji@Lg@Jg@Li@Jg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@Li@Jg@Lg@Ji@Lg@Li@Jg@Lg@Ji@Lg@Lg@Ji@Lg@Jg@Li@Lg@Jg@Li@Jg@Lg@', //eslint-disable-line
      },
      {
        id: "17",
        name: "Constitucion - Korn",
        slug: "korn",
        directions: [
          {
            id: "17",
            name: "Alejandro Korn",
            color: "info"
          },
          {
            id: "18",
            name: "Constitucion",
            color: "success"
          }
        ],
        stations: [
          {
            index: 0,
            id: "constitucion",
            name: "Constitucion",
            position: { lat: -34.6283673, lng: -58.3806149 }
          },
          {
            index: 1,
            id: "hipolitoyrigoyen",
            name: "Hipolito Yrigoyen",
            position: { lat: -34.6536422, lng: -58.3788878 }
          },
          {
            index: 2,
            id: "santillanykosteki",
            name: "Santillon y Kosteki",
            position: { lat: -34.6613896, lng: -58.3768325 }
          },
          {
            index: 3,
            id: "gerli",
            name: "Gerli",
            position: { lat: -34.6857287, lng: -58.3826371 }
          },
          {
            index: 4,
            id: "lanus",
            name: "Lanus",
            position: { lat: -34.7074543, lng: -58.390637 }
          },
          {
            index: 5,
            id: "remediosdeescalada",
            name: "Remedios de Escalada",
            position: { lat: -34.7270922, lng: -58.393661 }
          },
          {
            index: 6,
            id: "banfield",
            name: "Banfield",
            position: { lat: -34.7436106, lng: -58.3954246 }
          },
          {
            index: 7,
            id: "lomasdezamora",
            name: "Lomas de Zamora",
            position: { lat: -34.7610318, lng: -58.3973127 }
          },
          {
            index: 8,
            id: "temperley",
            name: "Temperley",
            position: { lat: -34.7759243, lng: -58.3963571 }
          },
          {
            index: 9,
            id: "adrogue",
            name: "Adrogue",
            position: { lat: -34.7978483, lng: -58.3942737 }
          },
          {
            index: 10,
            id: "burzaco",
            name: "Burzaco",
            position: { lat: -34.8251482, lng: -58.3913722 }
          },
          {
            index: 11,
            id: "longchamps",
            name: "Longchamps",
            position: { lat: -34.8595879, lng: -58.3871987 }
          },
          {
            index: 12,
            id: "glew",
            name: "Glew",
            position: { lat: -34.8886501, lng: -58.3837029 }
          },
          {
            index: 13,
            id: "guernica",
            name: "Guernica",
            position: { lat: -34.9179155, lng: -58.3805605 }
          },
          {
            index: 14,
            id: "alejandrokorn",
            name: "Alejandro Korn",
            position: { lat: -34.9804097, lng: -58.3738144 }
          }
        ],
        path: 'hjjrExmicJb@?b@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@@b@?b@?d@?b@?b@?b@?b@?b@?b@?b@?b@@b@?b@?b@?b@?b@?b@?b@?b@?d@?%60@?b@@b@?b@?b@?b@Ab@Ad@Ab@?b@Ab@Ab@?b@?b@?b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@?d@?%60@Ab@Ad@C%60@Eb@Eb@E%60@Gb@Eb@Gb@G%60@Gb@Gb@Gb@E%60@Gb@Gb@Gb@G%60@Gb@Ib@G%60@Gb@Ib@G%60@Ib@Gb@G%60@Gb@Ib@G%60@Gb@Gb@I%60@Gb@Gb@Gb@I%60@Gb@Gb@G%60@Gb@Ib@G%60@Gb@Gb@Gb@I%60@Gb@Ib@G%60@Gb@I%60@Ib@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@Gb@Ib@G%60@Ib@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@G%60@Ib@Gb@I%60@Ib@Gb@I%60@Gb@I%60@Gb@Ib@I%60@Gb@Ib@G%60@Ib@G%60@Ib@Ib@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@Gb@G%60@Ib@G%5CMb@Eb@Eb@Eb@Eb@Ab@?b@Ab@@b@?b@@d@@%60@Bb@Db@D%60@Df@Hd@Jd@Hd@Jd@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@Jb@J%60@J%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@Jb@J%60@L%60@J%60@Jb@J%60@J%60@J%60@Lb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@J%60@Lb@J%60@L%60@J%60@Lb@J%60@L%60@J%60@J%60@Lb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@J%60@J%60@Jb@J%60@L%60@Jb@J%60@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@L%60@Jb@J%60@J%60@Jb@J%60@Jb@H%60@Jb@J%60@J%60@Jb@J%60@Hb@J%60@Hb@Hb@H%60@Hb@H%60@Fb@Fb@Fb@F%60@Hb@Db@Db@F%60@Db@Db@Fb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Db@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@B%60@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@@b@@b@@b@@b@@b@@b@?b@@b@@b@@b@?b@?b@Ab@?b@?d@?b@Ab@Ab@Cb@Ab@Cb@Cb@Ab@C%60@Ab@Cb@Cb@Ab@Cb@Ab@Cb@Cb@Ab@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@C%60@Gb@Ib@G%60@Ib@Gb@Ib@G%60@Gb@G%60@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Cd@Ab@?b@Ab@Ab@Ab@Ab@?b@Ab@Ab@Ab@Ab@?b@Ab@Ab@Cb@Ab@Cb@Ab@Cb@Ab@Ab@C%60@Ab@Cb@Ab@Ab@Cb@Ab@Cb@Ab@Ab@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@C%60@Cb@Ab@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@C%60@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Ab@Cb@C%60@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@C%60@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Eb@C%60@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@C%60@Eb@Eb@Cb@Eb@Cb@Eb@Eb@Cb@Cb@Eb@C%60@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@C%60@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@C%60@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@C%60@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@C%60@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@C%60@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Cb@E%60@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@E%60@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@C%60@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@C%60@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@C%60@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@C%60@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@C%60@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@C%60@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@C%60@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@E%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Eb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@C%60@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@C%60@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Cb@Cb@Eb@C%60@Cb@Cb@Cb@Ab@Cb@Ab@Cb@Cb@Ab@Cb@Ab@Ab@Ad@Cb@Ab@Ab@Cb@Cb@C%60@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Ab@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Ab@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Ab@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Ab@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Ab@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Ab@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Ab@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@A%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Ab@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Ab@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Ab@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@C', //eslint-disable-line
      },
      {
        id: "19",
        name: "Constitucion - Ezeiza",
        slug: "ezeiza",
        directions: [
          {
            id: "19",
            name: "Ezeiza",
            color: "info"
          },
          {
            id: "20",
            name: "Constitucion",
            color: "success"
          }
        ],
        stations: [
          {
            index: 0,
            id: "constitucion",
            name: "Constitucion",
            position: { lat: -34.6283673, lng: -58.3806149 }
          },
          {
            index: 1,
            id: "hipolitoyrigoyen",
            name: "Hipolito Yrigoyen",
            position: { lat: -34.6536422, lng: -58.3788878 }
          },
          {
            index: 2,
            id: "santillanykosteki",
            name: "Santillan y Kosteki",
            position: { lat: -34.6613896, lng: -58.3768325 }
          },
          {
            index: 3,
            id: "gerli",
            name: "Gerli",
            position: { lat: -34.6857287, lng: -58.3826371 }
          },
          {
            index: 4,
            id: "lanus",
            name: "Lanus",
            position: { lat: -34.7074543, lng: -58.390637 }
          },
          {
            index: 5,
            id: "remediosdeescalada",
            name: "Remedios de Escalada",
            position: { lat: -34.7270922, lng: -58.393661 }
          },
          {
            index: 6,
            id: "banfield",
            name: "Banfield",
            position: { lat: -34.7436106, lng: -58.3954246 }
          },
          {
            index: 7,
            id: "lomasdezamora",
            name: "Lomas de Zamora",
            position: { lat: -34.7610318, lng: -58.3973127 }
          },
          {
            index: 8,
            id: "temperley",
            name: "Temperley",
            position: { lat: -34.7759243, lng: -58.3963571 }
          },
          {
            index: 9,
            id: "turdera",
            name: "Turdera",
            position: { lat: -34.7950533, lng: -58.4078781 }
          },
          {
            index: 10,
            id: "llavallol",
            name: "Llavallol",
            position: { lat: -34.7970708, lng: -58.4291553 }
          },
          {
            index: 11,
            id: "luisguillon",
            name: "Luis Guillon",
            position: { lat: -34.8032178, lng: -58.4485504 }
          },
          {
            index: 12,
            id: "montegrande",
            name: "Monte Grande",
            position: { lat: -34.8144339, lng: -58.4696989 }
          },
          {
            index: 13,
            id: "eljaguel",
            name: "El Jaguel",
            position: { lat: -34.8332274, lng: -58.4961652 }
          },
          {
            index: 14,
            id: "ezeiza",
            name: "Ezeiza",
            position: { lat: -34.8540842, lng: -58.5228154 }
          }
        ],
        path: 'hjjrExmicJb@?b@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@?b@?b@Ab@@b@?b@?d@?b@?b@?b@?b@?b@?b@?b@?b@@b@?b@?b@?b@?b@?b@?b@?b@?d@?%60@?b@@b@?b@?b@?b@Ab@Ad@Ab@?b@Ab@Ab@?b@?b@?b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@@b@?b@@b@@b@?b@@b@?b@@b@@b@?b@@b@?d@?%60@Ab@Ad@C%60@Eb@Eb@E%60@Gb@Eb@Gb@G%60@Gb@Gb@Gb@E%60@Gb@Gb@Gb@G%60@Gb@Ib@G%60@Gb@Ib@G%60@Ib@Gb@G%60@Gb@Ib@G%60@Gb@Gb@I%60@Gb@Gb@Gb@I%60@Gb@Gb@G%60@Gb@Ib@G%60@Gb@Gb@Gb@I%60@Gb@Ib@G%60@Gb@I%60@Ib@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@I%60@Ib@Gb@Ib@G%60@Ib@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@G%60@Ib@Gb@I%60@Ib@Gb@I%60@Gb@I%60@Gb@Ib@I%60@Gb@Ib@G%60@Ib@G%60@Ib@Ib@G%60@Ib@Gb@I%60@Gb@Ib@G%60@Ib@Gb@G%60@Ib@G%5CMb@Eb@Eb@Eb@Eb@Ab@?b@Ab@@b@?b@@d@@%60@Bb@Db@D%60@Df@Hd@Jd@Hd@Jd@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@J%60@Jb@J%60@J%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@Jb@J%60@L%60@J%60@Jb@J%60@J%60@J%60@Lb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@J%60@Lb@J%60@L%60@J%60@Lb@J%60@L%60@J%60@J%60@Lb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@L%60@Jb@L%60@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@Jb@J%60@L%60@J%60@Jb@L%60@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@L%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@J%60@J%60@Jb@J%60@L%60@Jb@J%60@J%60@J%60@Jb@L%60@J%60@J%60@Jb@J%60@J%60@L%60@Jb@J%60@J%60@Jb@J%60@Jb@H%60@Jb@J%60@J%60@Jb@J%60@Hb@J%60@Hb@Hb@H%60@Hb@H%60@Fb@Fb@Fb@F%60@Hb@Db@Db@F%60@Db@Db@Fb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Db@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@B%60@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@Bb@Bb@Bb@Bb@Bb@Bb@B%60@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@Bb@@b@@b@@b@@b@@b@@b@@b@?b@@b@@b@@b@?b@?b@Ab@?b@?d@?b@Ab@Ab@Cb@Ab@Cb@Cb@Ab@C%60@Ab@Cb@Cb@Ab@Cb@Ab@Cb@Cb@Ab@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@C%60@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Cb@Ab@C%60@Gb@Ib@G%60@Ib@Gb@Ib@G%60@Gb@G%60@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Cd@Ab@?b@Ab@Ab@Ab@Ab@?b@Ab@Ab@Ab@Ab@?b@Ab@Ab@Cb@Ab@Cb@Ab@Cb@Ab@Ab@C%60@Ab@Cb@Ab@Ab@Cb@Ab@Cb@Ab@Ab@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cb@Ab@Cb@Cb@C%60@Cb@Ab@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Ab@Cb@Cb@Cb@Cb@Cx@Eb@?b@Ab@?b@Ab@Bb@@b@Bb@Db@F%60@Db@J%60@J%60@J%60@P%5EP%60@P%5CT%5CV%5ET%5CXZXZZZZX%5CX%5EV%5EV%5CRb@Tb@Tb@Pd@Pd@Pd@Nd@Nd@Jh@Lf@Jf@Jh@Hh@Fj@Dh@Fj@Dh@Bj@Bh@Dj@Bj@Bh@Bj@Bj@Bj@Dh@Bj@Bj@Bh@Bj@Dj@Bh@Bj@Bj@Bh@Dj@Bj@Bj@Bh@Bj@Dj@Bh@Bj@Bj@Bh@Dj@Bj@Bh@Bj@Bj@Dj@Bh@Bj@Bj@Bh@Dj@Bj@Bh@Bj@Bj@Dh@Bj@Bj@Bj@Bh@Dj@Bj@Bh@Bj@Bj@Dh@Bj@Bj@Bh@Dj@Bj@Bj@Bh@Bj@Dj@Bh@Bj@Bj@Dh@Bj@Bj@Bh@Bj@Dj@Bh@Bj@Bj@Dj@Bh@Bj@Bj@Bh@Dj@Bj@Bh@Bj@Dj@Bh@Bj@Bj@Dh@Bj@Bj@Bj@Dh@Bj@Bj@Bh@Dj@Bj@Bh@Dj@Bj@Bj@Bh@Bj@Dj@Bj@Bh@@j@Bj@Bj@Bh@@j@Bj@@j@Bh@@j@Bj@@j@Bh@@j@Bj@@j@Bh@@j@Bj@@j@Bh@Bj@@j@Bj@@j@Bh@@j@Bj@@j@Bh@@j@Bj@@j@Bh@@j@Bj@@j@Bh@@j@Bj@@j@Bh@Bj@@j@Bj@@j@Bh@@j@Bj@Bj@Bj@Bh@Bj@Dj@Dh@Fj@Fh@Fh@Fh@Hh@Hh@Hh@Jh@Jf@Jh@Lf@Nf@Lf@Nf@Nd@Pd@Nd@Pf@Nd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pb@Pd@Pd@Pd@Pd@Nd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Rb@Pd@Rb@Rb@Rd@Pb@Rb@Rd@Rb@Rb@Pd@Rb@Rb@Rd@Rb@Pb@Rd@Rb@Rd@Rb@Pb@Rd@Rb@Rb@Rd@Pb@Rb@Rd@Rb@Rb@Pd@Rb@Rb@Rd@Rb@Pb@Rd@Rb@Rb@Rd@Rb@Pd@Rb@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Pd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rb@Pd@Rb@Rd@Pb@Rd@Rb@Rb@Pd@Rb@Rd@Pb@Rd@Rb@Rb@Pd@Rb@Rd@Pb@Rb@Rd@Pb@Rd@Rb@Rd@Pb@Rb@Rd@Rb@Pb@Rd@Rb@Rd@Pb@Rb@Rd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rb@Rd@Pb@Rd@Rb@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Rd@Rb@Pb@Rd@Rb@Rd@Pb@Rb@Rb@Rd@Rb@Rb@Pd@Rb@Rb@Rd@Rb@Rb@Pb@Rd@Rb@Rb@Rb@Tb@Rb@T%60@Rb@Tb@T%60@T%60@Tb@T%60@T%60@V%60@V%60@T%5EV%60@V%60@T%5EV%60@V%5ET%60@V%60@V%5ET%60@V%60@V%5ET%60@V%60@V%60@T%5EV%60@V%60@T%5EV%60@V%60@T%5EV%60@V%60@T%60@V%5EV%60@T%60@V%5ET%60@V%60@V%60@T%60@V%5ET%60@V%60@T%60@V%5ET%60@V%60@V%60@T%5EV%60@T%60@V%60@T%5EV%60@T%60@V%60@T%5EV%60@V%60@T%60@V%5EV%60@V%5EV%60@V%5EV%5EV%60@V%5EV%60@T%5EV%60@V%5EX%5EV%5EV%5EV%5EV%5EX%5EV%5EV%5EV%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5CX%5EV%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5CX%5EV%5EX%5EV%5CX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5CX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5CX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5CX%5EV%5EX%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5EX%5CV%60@V%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5E', //eslint-disable-line
      },
      {
        id: "27",
        name: "Temperley - Haedo",
        slug: "temperley",
        directions: [
          {
            id: "27",
            name: "Temperley",
            color: "info"
          },
          {
            id: "28",
            name: "Haedo",
            color: "success"
          }
        ],
        stations: [
          {
            index: 0,
            id: "temperley",
            name: "Temperley",
            position: { lat: -34.774504, lng: -58.3966439 }
          },
          {
            index: 1,
            id: "hospitalespañol",
            name: "Hospital Español",
            position: { lat: -34.7862792, lng: -58.4072878 }
          },
          {
            index: 2,
            id: "santacatalina",
            name: "Santa Catalina",
            position: { lat: -34.7804203, lng: -58.4373374 }
          },
          {
            index: 3,
            id: "juanxxiii",
            name: "Juan XXIII",
            position: { lat: -34.7713636, lng: -58.4441098 }
          },
          {
            index: 4,
            id: "km34",
            name: "KM 34",
            position: { lat: -34.7434594, lng: -58.465016 }
          },
          {
            index: 5,
            id: "pturner",
            name: "P. Turner",
            position: { lat: -34.7332318, lng: -58.4748755 }
          },
          {
            index: 6,
            id: "agustindeelia",
            name: "Agustin de Elia",
            position: { lat: -34.7099772, lng: -58.5059186 }
          },
          {
            index: 7,
            id: "tablada",
            name: "Tablada",
            position: { lat: -34.6930707, lng: -58.5280209 }
          },
          {
            index: 8,
            id: "sanjusto",
            name: "San Justo",
            position: { lat: -34.6741934, lng: -58.555356 }
          },
          {
            index: 9,
            id: "ingenierosbrian",
            name: "Ingeniero S. Brian",
            position: { lat: -34.6580457, lng: -58.5730377 }
          },
          {
            index: 10,
            id: "haedo",
            name: "Haedo",
            position: { lat: -34.6449656, lng: -58.5922159 }
          }
        ],
        path: 'r%7BfsE~qlcJb@Gb@Ib@G%60@Gb@G%60@Eb@Cb@Cb@Cb@Cb@Cb@Cb@Cd@Ab@?b@Ab@Ab@Ab@Ab@?b@Ab@Ab@Ab@Ab@?b@Ab@Ab@Cb@Ab@Cb@@b@@b@Bb@Bb@@b@Bb@@b@Bb@@b@Bb@@b@Bb@@b@B%60@Lb@L%60@J%5ER%5EP%60@P%5ER%5EP%5EP%5CX%5CX%5CVZX%5CX%5CXX%5CV%5EX%5CX%5ET%60@Tb@R%60@T%60@Rd@Pb@Pd@Rb@Lf@Nf@Nf@Nd@Lf@Jh@Jh@Jf@Hh@Dj@Bj@Dh@Bj@Bj@Dh@Bj@?j@@j@?j@Ch@Ej@Ch@Cj@Ej@Gh@Ih@Ih@Gh@Ih@Gh@Ih@Gh@Ij@Ih@Gh@Ih@Gh@Ih@Gh@Ij@Ih@Gh@Ih@Ih@Gh@Ij@Eh@Ej@Ch@Ej@Ej@Eh@Cj@Cj@Ch@Cj@Cj@Ch@Cj@Aj@Cj@Aj@Ah@Cj@Aj@Cj@Aj@Ah@Cj@Aj@Cj@Aj@Ah@Cj@Aj@Aj@Aj@Ch@Aj@Aj@Aj@Cj@Ah@Aj@Aj@Cj@Aj@Ah@Aj@Cj@Aj@Aj@Ah@Aj@Cj@Aj@Aj@Ah@Cj@Aj@Aj@Aj@Ch@Aj@Aj@Aj@Aj@Ch@Aj@Aj@Aj@Aj@Ch@Aj@Aj@Aj@Aj@Ah@Cj@Aj@Aj@Aj@Ah@Cj@Aj@Aj@Ah@Aj@Aj@Cj@Aj@Ah@Aj@Aj@Cj@Aj@Ah@Aj@Aj@Cj@Ah@Cj@Aj@Aj@Ch@Aj@Cj@Aj@Ch@Ej@Ej@Cj@Kh@If@Ih@Of@Od@Qd@Of@Qd@U%60@U%60@U%60@Ub@U%60@%5BX%5BZ%5BZ%5BZ%5BX%5BZ_@T%5DV_@T%5DV%5DT_@T%5DV%5DT_@V%5DT_@T%5DV%5DT_@V%5DT_@T%5DV%5DT_@T%5DV%5DT_@V%5DT_@T%5DV%5DT_@V%5DT_@T%5DV%5DT_@V%5DT%5DT_@V%5DT_@V%5DT%5DT_@V%5DT%5DV_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@V%5DT%5DV_@T%5DV%5DT%5DV_@T%5DV%5DT_@V%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV%5DT_@V%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV%5DT_@V%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT%5DV_@T%5DV_@T%5DV%5DT_@T%5DV%5DT_@V%5DT%5DT_@V%5DT_@V%5DT%5DV_@T%5DT%5DV_@T%5DV%5DT_@V%5DT%5DT_@V%5DT_@V%5DT%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV%5DT_@V%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV_@T%5DT%5DV%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT%5DV_@T%5DV%5DV_@T%5DV%5DT_@V%5DT%5DV_@T%5DV%5DT%5DV_@T%5DV%5DT_@V%5DV%5DT_@V%5DT%5DV%5DX%5DV%5DV%5DV%5DX%5DV%5DVYZ%5BZ%5BZ%5BZ%5BZ%5BZYZ%5BZ%5BZY%5CY%5CY%5EY%5CY%5CY%5CW%5CY%5EY%5CY%5CW%5EW%5EW%60@Y%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EW%60@W%5EW%5EY%5EW%5EW%60@W%5EW%5EY%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%5EY%5EW%60@W%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EY%5EW%5EW%60@W%5EW%5EW%5EW%5EW%5EW%60@W%5EW%5EY%5EW%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@Y%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%60@Y%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%60@Y%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@U%5EW%60@W%5EU%60@W%60@W%5EW%60@U%5EW%60@W%5EU%60@W%5EW%60@W%5EU%60@W%5EW%60@U%5E%5B%5CY%5CY%5C%5B%5CY%5CY%5CY%5C%5BZW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EY%60@W%5EW%5EW%5EY%5CW%5EW%5EY%5EW%5EY%5EW%5EW%5EY%5CW%5EW%5EY%5EW%5EY%5EW%5EW%5EY%5CW%60@W%5EW%5EW%5EW%5EY%5EW%5EW%5EW%60@W%5EW%5EY%5EW%5EW%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EW%5EW%5EW%5EY%60@W%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%60@W%5EW%5EW%5EY%5EW%5EW%5EW%60@W%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EW%5EW%5EW%5EY%5EW%60@W%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EW%5EW%5EW%5EY%60@W%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%60@W%5EW%5EW%5EY%5EW%5EW%5EW%5EW%5EW%5EY%60@W%5EW%5EW%5EW%5EW%5EW%5EY%5EW%5EW%60@W%5EW%5EW%5EW%5EY%5EW%5EW%60@W%5EW%5EW%5EW%5EY%5EW%60@W%5EW%5EW%5EW%5EW%5EW%5EY%60@W%5EW%5EW%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EY%5EW%5CW%5EW%5EY%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%60@W%5EW%5EU%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@Sb@Ub@S%60@Ub@Sb@Sb@Qd@Of@Qd@Qd@Mf@Mf@Mf@Mf@Mf@Mf@Mf@Mf@Mf@Mf@Qd@Qd@Qd@Of@Qd@Qd@U%60@W%60@U%60@U%60@U%60@Ub@U%60@W%60@U%60@W%5EW%5EW%5EY%5EW%5EW%5EW%60@W%5EW%5EY%5EW%5EW%5EW%5EW%5EW%5EY%5EW%60@W%5EW%5EW%5EW%5EW%5EW%60@W%5EW%5EY%5EW%5EW%60@W%5EW%5EW%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EY%5EW%5EW%60@W%5EW%5EW%5EW%5EW%5EW%5EW%60@Y%5EW%5CY%5CY%5CY%5EY%5C%5DX%5BX%5BZ%5DX%5BX%5BZ%5DV%5DV%5DV%5DV%5DX%5DV_@Pa@P_@P_@Pa@P_@Pa@P_@P_@Pa@P_@Pa@P_@P_@Pa@P%5DV%5DV%5DV%5DV_@T%5DV%5DV%5BZY%5C%5BZY%5C%5BZYZ%5B%5CW%5CY%5EW%5EY%5EW%5CY%5EW%5EY%5EW%5CY%5EW%5EY%5EW%5CW%5EY%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%60@Y%5EW%5EW%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EW%5EW%60@W%5EW%5EY%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EW%5EY%5EW%60@W%5EW%5EW%5EW%5EW%5EW%60@W%5EW%5EW%5EY%5EW%5EW%60@W%5EW%5EW%5EW%5EW%5EW%60@W%5EY%5EW%5EW%5EY%5EW%5EW%5EY%5EW%5EW%5CW%5EY%5EW%5EW%5EY%5EW%5EW%5EY%5EW%5EW%5EY%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@S%60@Ub@Ub@S%60@Ub@Qd@Od@Qf@Od@Qd@Ih@Kf@Kh@Ih@Kh@Kh@Eh@Eh@Ej@Gh@Eh@Ej@?h@?j@?j@?j@?j@@h@', //eslint-disable-line
      },
      {
        id: "37",
        name: "Ezeiza - Cañuelas",
        slug: "cañuelas",
        directions: [
          {
            id: "37",
            name: "Ezeiza",
            color: "info"
          },
          {
            id: "38",
            name: "Cañuelas",
            color: "success"
          }
        ],
        stations: [
          {
            index: 0,
            id: "ezeiza",
            name: "Ezeiza",
            position: { lat: -34.8540842, lng: -58.5228154 }
          },
          {
            index: 1,
            id: "unionferroviaria",
            name: "Union Ferroviaria",
            position: { lat: -34.8714807, lng: -58.5450132 }
          },
          {
            index: 2,
            id: "tristansuarez",
            name: "Tristan Suarez",
            position: { lat: -34.8905761, lng: -58.5694728 }
          },
          {
            index: 3,
            id: "carlosspegazzini",
            name: "Carlos Spegazzini",
            position: { lat: -34.9112666, lng: -58.5960173 }
          },
          {
            index: 4,
            id: "maximopaz",
            name: "Maximo Paz",
            position: { lat: -34.9378999, lng: -58.6219476 }
          },
          {
            index: 5,
            id: "vicentecasares",
            name: "Vicente Casares",
            position: { lat: -34.963326, lng: -58.6498149 }
          },
          {
            index: 6,
            id: "alejandropetion",
            name: "Alejandro Petion",
            position: { lat: -34.9792038, lng: -58.6772183 }
          },
          {
            index: 7,
            id: "tablada",
            name: "tablada",
            position: { lat: -34.9874934, lng: -58.6915555 }
          },
          {
            index: 8,
            id: "ricardolevene",
            name: "Ricardo Levene",
            position: { lat: -35.0229492, lng: -58.7252523 }
          },
          {
            index: 9,
            id: "cañuelas",
            name: "Cañuelas",
            position: { lat: -35.0592254, lng: -58.7541775 }
          }
        ],
        path: '~lvsErfedJX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5CV%5EX%5EV%5EX%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5CX%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EV%60@X%5EV%5EV%5EV%5EX%5EV%5EV%5EV%5EX%5EV%5EV%5EV%5EV%5EX%5EV%5EV%60@V%5EX%5EV%5EV%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5CX%5EV%5EX%5EV%5EX%5CV%5EX%5EV%5EX%5CV%5EX%5EV%5EV%5CX%5EV%5EX%5EV%5EX%5EV%5EV%5CX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5CX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5CX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5CX%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5CX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5CX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5CV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5CV%5EX%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5CV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5EX%5EV%5EX%5EV%5EV%5CX%5EV%5EV%5EX%5EV%5EX%5CX%5EX%5CV%5CX%5EX%5CX%5CX%5EX%5CV%5CZZZZZ%5CZZXZZZZZZZZZZ%5CZV%5CXZX%5CX%5CXZV%5CXZX%5CX%5CXZV%5CXZX%5CX%5CXZX%5CVZX%5CX%5CXZX%5CV%5CXZX%5CXZX%5CV%5CXZX%5CX%5CXZV%5CXZX%5CX%5CXZV%5CXZX%5CX%5CXZV%5CX%5CXZX%5CVZX%5CX%5CXZX%5CV%5CXZX%5CXZX%5CV%5CXZX%5CX%5CXZV%5CXZX%5CX%5CXZV%5CX%5CXZX%5CXZV%5CX%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CXZV%5CX%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CXZX%5CV%5CXZX%5CX%5CVZX%5CX%5CXZV%5CXZZZZZZXZZZZZZZZZZZX%5CX%5CZ%5CX%5CXZX%5CZ%5CV%5EV%5EX%5EV%5EV%5EX%5EV%5EV%5CX%5EV%5ET%60@Tb@V%60@T%60@T%60@T%60@V%60@T%60@T%60@Tb@Tb@Rb@R%60@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@T%60@Rb@Rb@Tb@Rb@Tb@Rb@Rb@Tb@R%60@Tb@Rb@Tb@Rb@Rb@Tb@Rb@Tb@R%60@Rb@Tb@Rb@Tb@Rb@Rb@Tb@Rb@T%60@Rb@Rb@Tb@Rb@Tb@Rb@Rb@Tb@Rb@T%60@Rb@Rb@Tb@Rb@Tb@Rb@Rb@T%60@Rb@Tb@Rb@Tb@Rb@Rb@Tb@Rb@Tb@R%60@Rb@Tb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@R%60@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Tb@Rb@R%60@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@R%60@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@T%60@Rb@Rb@Tb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@T%60@Rb@Tb@Rb@Rb@Tb@Rb@Tb@Rb@R%60@Tb@Rb@Tb@Rb@Rb@Tb@Rb@T%60@Rb@Tb@Rb@Rb@Tb@Rb@Tb@Rb@R%60@Tb@Rb@Tb@Rb@Rb@Tb@Rb@T%60@Rb@Rb@Tb@Rb@Tb@Rb@Tb@Rb@R%60@Tb@Rb@Tb@Rb@Rb@Tb@Rb@T%60@Rb@Rb@Tb@Rb@Tb@Rb@Rb@Tb@R%60@Tb@Rb@Rb@Tb@Rb@Tb@Rb@T%60@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@R%60@Tb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@R%60@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@T%60@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@T%60@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@Rb@Tb@T%60@Rb@T%60@Tb@T%60@Tb@Tb@V%5EV%5EV%5EV%5EX%5CX%5CX%5CZ%5CX%5CZZ%5CXZXZZ%5EV%5CV%5CT%5CV%5CV%5ER%5EP%60@R%5ER%5EP%5ER%60@L%60@L%60@L%60@L%60@L%60@L%60@L%60@Lb@J%60@L%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@Jb@J%60@J%60@L%60@Jb@J%60@J%60@Jb@J%60@L%60@J%60@Lb@J%60@L%60@L%60@J%60@L%60@L%60@Lb@J%60@L%60@L%60@J%60@L%60@N%60@P%5EN%60@P%5ET%5CT%5ET%5ER%5CT%5ET%5CXZX%5CV%5CXZX%5CVX%5CZ%5CXZZ%5CX%5CXZZ%5CXZZ%5CX%5CZZX%5CX%5CZ%5CXZX%5CZ%5CX%5CXZZ%5CX%5CX%5CZZX%5CX%5CZ%5CX%5CXZX%5CZ%5CX%5CXZZ%5CX%5CX%5CZ%5CXZX%5CZ%5CX%5CXZX%5CZ%5CX%5CX%5CZZX%5CX%5CZ%5CX%5CXZX%5CZ%5CX%5CX%5CZZX%5CX%5CZ%5CX%5CXZX%5CZ%5CX%5CXZZ%5CX%5CX%5CZ%5CXZX%5CX%5CZ%5CX%5CXZZ%5CX%5CX%5CZ%5CXZX%5CX%5CZ%5CX%5CXZZ%5CX%5CX%5CZ%5CXZX%5CX%5CZ%5CXZX%5CZ%5CX%5CX%5CZZX%5CX%5CX%5CZ%5CXZX%5CZ%5CX%5CX%5CZZX%5CX%5CX%5CZ%5CXZX%5CZ%5CX%5CX%5CZZX%5CX%5CX%5CZ%5CXZX%5CZ%5CX%5CXZZ%5CX%5CX%5CX%5CZZX%5CX%5CZ%5CX%5CXZZ%5CX%5CX%5CX%5CZZX%5CX%5CZ%5CX%5CXZZ%5CX%5CX%5CZZX%5CX%5CZ%5CX%5CXZZ%5CX%5CX%5CXZZ%5CX%5CX%5CZ%5CXZX%5CZ%5CX%5CXZZ%5CX%5CX%5CZ%5CXZX%5CZ%5CX%5CX%5CZZX%5CX%5CX%5CZZX%5CX%5CZ%5CX%5CXZZ%5CX%5CX%5CZZX%5CX%5CZ%5CX%5CXZZ%5CX%5CX%5CZXZZZZZXZZZX%5CV%5ET%5CV%5ET%60@N%60@N%60@N%60@H%60@Hb@Fb@Fb@Fb@?b@@%60@@d@Cb@Cb@Ab@I%60@Gb@Gb@G%60@Gb@Gb@I%60@Gb@I%60@Ib@Gb@I%60@Gb@I%60@Ib@Gb@I%60@Gb@I%60@Gb@Ib@I%60@Gb@Ib@G%60@Ib@Gb@G%60@Gb@Eb@Gb@?b@@b@?b@Db@Db@F%60@D%60@Lb@L%60@J%60@L%5EP%60@R%5EP%5CV%5CV%5EV%5CVX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CZ%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EZ%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CZ%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5CX%5CX%5EX%5CX%5CX%5CX%5C', //eslint-disable-line
      }
    ]
  },
  {
    id: "sarmiento",
    name: "Sarmiento",
    branches: [
      {
        id: "1",
        name: "Once - Moreno",
        slug: "moreno",
        directions: [
          {
            id: "1",
            name: "Moreno",
            color: "success"
          },
          {
            id: "2",
            name: "Once",
            color: "info"
          }
        ],
        stations: [
          {
            index: 0,
            id: "once",
            name: "Once",
            position: { lat: -34.6085914, lng: -58.407559 }
          },
          {
            index: 1,
            id: "caballito",
            name: "Caballito",
            position: { lat: -34.6192442, lng: -58.4436522 }
          },
          {
            index: 2,
            id: "flores",
            name: "Flores",
            position: { lat: -34.6278504, lng: -58.4661766 }
          },
          {
            index: 3,
            id: "floresta",
            name: "Floresta",
            position: { lat: -34.6323755, lng: -58.4808913 }
          },
          {
            index: 4,
            id: "villaluro",
            name: "Villa Luro",
            position: { lat: -34.6362494, lng: -58.5021311 }
          },
          {
            index: 5,
            id: "liniers",
            name: "Liniers",
            position: { lat: -34.6388728, lng: -58.5263409 }
          },
          {
            index: 6,
            id: "ciudadela",
            name: "Ciudadela",
            position: { lat: -34.6399227, lng: -58.5411225 }
          },
          {
            index: 7,
            id: "ramosmejia",
            name: "Ramos Mejia",
            position: { lat: -34.6403849, lng: -58.5639475 }
          },
          {
            index: 8,
            id: "haedo",
            name: "Haedo",
            position: { lat: -34.6445334, lng: -58.5918534 }
          },
          {
            index: 9,
            id: "moron",
            name: "Moron",
            position: { lat: -34.6482227, lng: -58.6198135 }
          },
          {
            index: 10,
            id: "castelar",
            name: "Castelar",
            position: { lat: -34.6520275, lng: -58.6421189 }
          },
          {
            index: 11,
            id: "ituzaingo",
            name: "Ituzaingo",
            position: { lat: -34.6596506, lng: -58.6663871 }
          },
          {
            index: 12,
            id: "sadepadua",
            name: "San Antonio De Padua",
            position: { lat: -34.6654259, lng: -58.6979972 }
          },
          {
            index: 13,
            id: "merlo",
            name: "Merlo",
            position: { lat: -34.6644693, lng: -58.727685 }
          },
          {
            index: 14,
            id: "pasodelrey",
            name: "Paso Del Rey",
            position: { lat: -34.6582665, lng: -58.7619414 }
          },
          {
            index: 15,
            id: "moreno",
            name: "Moreno",
            position: { lat: -34.6504439, lng: -58.7895979 }
          }
        ],
        path: 'tnfrEfvncJ@j@@j@@h@@j@@j@@j@@j@@h@@j@@j@@j@@j@@h@@j@@j@@j@@j@@h@Aj@Aj@Aj@Ah@?j@Aj@Aj@Ah@?j@Aj@Aj@Ah@?j@?j@?j@?j@?h@Bj@@j@Bj@@j@Bj@@h@Bj@@j@Bh@Bj@Dh@Dh@Fj@Fh@Fh@Fj@Jh@Hf@Hh@Hh@Hh@Jh@Jf@Jh@Jf@Jh@Jf@Lf@Jh@Lf@Lf@Nf@Lf@Nf@Lf@Nf@Nd@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Pd@Nd@Nf@Pd@Nd@Nf@Pd@Nf@Nd@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Pd@Nf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Pd@Nf@Nd@Nf@Pd@Nd@Nf@Nd@Pf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Pd@Nf@Nd@Nf@Pd@Nd@Nf@Pd@Nd@Nf@Pd@Nd@Nd@Pf@Nd@Nd@Nf@Pd@Nd@Nf@Pd@Nd@Nf@Pd@Nd@Nf@Pd@Nf@Nd@Nf@Pd@Nd@Nf@Pd@Nf@Nd@Pd@Nf@Nd@Pf@Nd@Nd@Nf@Nd@Pf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nd@Nf@Nd@Pf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Pd@Nf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Pd@Nd@Nf@Pd@Nd@Nf@Pd@Nf@Nd@Pd@Nf@Nd@Pd@Nf@Nd@Pf@Nd@Nd@Pf@Nd@Nd@Pf@Nd@Nf@Pd@Lf@Nf@Ld@Nf@Lf@Nf@Lf@Lf@Jf@Lf@Jf@Lh@Jf@Jf@Jh@Jh@Jf@Jh@Jf@Jh@Jh@Jf@Jh@Jf@Jh@Jh@Jf@Jh@Jf@Jh@Jf@Jh@Jf@Jh@Jh@Jf@Jh@Jf@Jh@Jf@Jh@Jh@Jf@Jh@Jf@Lh@Jf@Jh@Jf@Jh@Jf@Jh@Lf@Jh@Jf@Jh@Jf@Lh@Jf@Jf@Lf@Jh@Jf@Lf@Jh@Lf@Jh@Jf@Lh@Jf@Lh@Jf@Jh@Lf@Jf@Jh@Lf@Jh@Lf@Jh@Jf@Lh@Jf@Jf@Lh@Jf@Jh@Jf@Lh@Jf@Jh@Jf@Lh@Jf@Jf@Jh@Lf@Jh@Jf@Jf@Lh@Jf@Jh@Jf@Lf@Jh@Jf@Jf@Lh@Jf@Lh@Jf@Jh@Lf@Jh@Jf@Lf@Jh@Jf@Lh@Jf@Jh@Lf@Jh@Jf@Jf@Lh@Jf@Jh@Jf@Jh@Jf@Jh@Hh@Hh@Hh@Hh@Jh@Hh@Fh@Hh@Fh@Hh@Fh@Hh@Fj@Fh@Fh@Fh@Fj@Fh@Fh@Fj@Fh@Dh@Dj@Dh@Dj@Dh@Dj@Fh@Bj@Dh@Dj@Bj@Dh@Dj@Bh@Dj@Dh@Bj@Dh@Dj@Dj@Bh@Dj@Dh@Bj@Dh@Dj@Dh@Bj@Dj@Dh@Bj@Dj@Dj@Bl@Dj@Dj@Bj@Dj@Fh@Dh@Fh@Dh@Ff@Dh@Fh@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dh@Dj@Dh@Dj@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dj@Dh@Dj@Dh@Dj@Bh@Dj@Bh@Dj@Bj@Dh@Bj@Dh@Dj@Bh@Dj@Bh@Dj@Bh@Fj@Dh@Dj@Dh@Fj@Dh@Dj@Fh@Dh@Dj@Fh@Bj@Dj@Bh@Dj@Bj@Dj@Bh@Dj@Bj@Dh@Bj@Dj@Bh@Dj@Dj@Bj@Dh@Bj@Dj@Bh@Dj@Bj@Dh@Bj@Dh@Bj@Dh@Bj@Dh@Dj@Bh@Dj@Bj@Dh@Bj@Dh@Bj@Bj@Bj@Bj@Bl@Bj@Bj@Dj@Bj@@h@Bj@@h@@j@Bh@@j@Bj@@h@Bj@@h@@j@Bh@@j@Bh@@j@Bh@@h@Bj@@h@Bh@Bj@Bj@Bh@Bj@Bj@Bj@@h@Bj@@j@Bj@Bh@@j@Bj@Bj@@h@Bj@@j@Bh@Bj@@j@Bj@@h@Bj@Bj@@h@Bj@Bj@@j@Bh@@j@Bj@Bj@@h@Bj@@j@Bh@Bj@@j@Bj@Bh@@j@Bj@@h@Bj@Bj@@j@Bh@@j@Bj@Bh@@j@Bj@Bj@@h@Bj@@j@Bj@Bh@@j@Bj@Bh@@j@Bj@@j@Bh@Bj@@j@Bh@Bj@@j@Bj@Bh@@j@Bj@@j@@j@@h@?j@@j@?j@@j@?j@@j@@j@?j@?j@Aj@?j@Ah@?j@Aj@?j@Aj@?j@Ah@?j@Aj@?j@Ah@Aj@?j@Aj@?h@Aj@Aj@?j@Ah@?j@Aj@?j@Ah@Aj@?j@Aj@?h@Aj@?j@Aj@Ah@?j@Aj@?j@Ah@?j@Aj@?j@Aj@?j@Ah@Aj@?j@Aj@?j@Aj@?j@Ah@?j@Aj@?j@Aj@?j@Aj@?h@?j@?j@?h@?j@?j@?j@?h@Aj@@j@?h@?j@@j@?h@@j@@j@@j@@j@Bj@Bh@Bj@Bh@Bj@Bh@Bj@Bj@Dj@Bj@Bj@Dj@Bj@Dh@Fh@Dh@Fj@Dh@Fh@Dj@Fh@Dj@Fh@Dh@Dj@Fh@Dj@Fh@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Fh@Dj@Dh@Fj@Dh@Dh@Fj@Dh@Dj@Fh@Dj@Dh@Fj@Dh@Dj@Fh@Dh@Dj@Fh@Dj@Fh@Dj@Dh@Fh@Dj@Fh@Dj@Dh@Fh@Dj@Fh@Dj@Dh@Fh@Dj@Dh@Fj@Dh@Dj@Fh@Dj@Dh@Fh@Dj@Dh@Fj@Dh@Dj@Fh@Dj@Dh@Fh@Dj@Dh@Fj@Dh@Fj@Dh@Fh@Dj@Dh@Fj@Dh@Fh@Dj@Fh@Dj@Fh@Dh@Fj@Dh@Fj@Dh@Dh@Fj@Dh@Fj@Dh@Fh@Dj@Fh@Dj@Dh@Dj@Dh@Dh@Dj@Fh@Dj@Bj@Dh@Dj@Dh@Bj@Dh@Dj@Bj@Dh@Dj@Bh@Dj@Dj@Dh@Bj@Dh@Dj@Bh@Dj@Dj@Dh@Bj@Dh@Dj@Bj@Dh@Bj@Dh@Dj@Bh@Dj@Dh@Bj@Dj@Bh@Dj@Dh@Bj@Dh@Dj@Bj@Dh@Bj@Bh@Dj@Bh@Bj@Dj@Bh@Bj@Bh@Dj@Bj@Bh@Dj@Bh@Dj@Bh@Dj@Bj@Dh@Bj@Dh@Bj@Dh@Bj@Dj@Dh@Bj@Dh@Bj@Dj@Bh@Dj@Bj@Dh@Dj@Bj@Dh@Bj@Dj@Bj@Dh@Bj@Dj@Dh@Bj@Dj@Bh@Dj@Bh@Dj@Dj@Bh@Dj@Dh@Bj@Dh@Dj@Dh@Dh@Fj@Dh@Hn@Fl@Fl@Fl@Fl@Fl@Ff@Fh@Ff@Fh@Ff@Ff@Fh@Ff@Ff@Fh@Ff@Fh@Fh@Fh@Fh@Dj@Fh@Fh@Fh@Fj@Fh@Fh@Fj@Fh@Dh@Fh@Fj@Fh@Fh@Fh@Fj@Fh@Fh@Dj@Dh@Fj@Dh@Dh@Dj@Dh@Bj@@j@Bj@?j@?j@?h@?j@?j@?j@?h@Aj@?j@?j@Aj@?j@?j@Aj@?h@?j@?j@?j@@j@?h@@j@@j@Bh@@j@@j@Bh@@j@Bj@Bh@Bj@Bj@Dh@Bj@Dh@Dj@Dh@Dj@Bj@Fh@Dj@Fh@Dj@Dh@Fj@Dh@Fj@Dh@Fj@Dh@Fh@Fj@Dh@Fh@Fj@Fh@Dh@Fj@Fh@Fh@Dh@Fj@Fh@Fh@Dj@Fh@Fh@Fj@Fh@Dj@Fh@Fh@Fj@Fh@Fh@Dj@Fh@Fh@Fj@Hh@Fh@Hh@Fh@Fh@Hh@Hh@Hh@Fh@Hh@Hh@Hh@Hh@Jh@Hf@Jh@Hh@Jf@Jh@Hh@Lf@Jh@Lf@Jh@Lf@Lf@Jh@Lf@Jh@Lf@Jf@Jh@Lf@Jh@Lf@Jf@Lh@Jf@Jf@Lh@Jf@Lf@Jh@Lf@Jf@Lh@Jf@Lh@Jf@Lf@Jh@Lf@Jf@Lh@Jf@Lf@Jh@Lf@Jf@Jh@Lf@Jh@Lf@Jf@Lh@Jf@Lf@Jh@Lf@Jf@Lh@Jf@Lf@Jh@Lf@Jh@Lf@Jf@Lh@Jf@Jh@Lf@Jh@Lf@Jf@Lh@Jf@Lh@Jf@Lf@Jh@Jf@Lh@Jf@Lf@Jh@Lf@Jh@Lf@Jf@Lh@Jf@Lh@Jf@Jf@Lh@Jf@Lh@Jf@Lf@Jh@Jf@Jh@Lf@Jh@Jf@Lf@Jh@Jf@Jh@Lf@Jh@Jf@Jf@Lh@Jf@Jh@Lf@Jf@Jh@Jf@Lh@Jf@Jh@Lf@Jf@Jh@Jf@Lh@Jf@Jh@Lf@Jf@Jh@Jf@Lh@Jf@Jf@Lh@Jf@Lh@Jf@Lf@Jh@Jf@Lf@Jh@Lf@Jh@Lf@Jf@Jh@Lf@Jf@Lh@Jf@Lh@Jf@Jf@Lh@Jf@Lf@Jh@Lf@Jh@Jf@Lf@Jh@Jf@Lh@Jf@Jh@Lf@Jh@Jf@Lf@Jh@Jf@Lh@Hf@Jh@Jf@Hf@Jh@Jf@Hh@Hj@Hh@Hh@Hh@Hh@Fj@Fh@Fh@Fh@Fj@Fh@Fh@Fj@Dh@Dh@Fj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Fh@Dh@Dj@Bj@Dh@Dj@Dh@Bj@Dh@Dj@Dh@Dj@Bj@Dh@Dj@Dh@Dj@Bh@Dj@Dh@Dj@Bj@Dh@Dj@Dh@Dj@Bj@Dh@Dj@Dh@Bj@Dj@Dh@Dj@Bh@Dj@Dj@Dh@Bj@Dj@Dh@Dj@Bh@Dj@Dj@Dh@Bj@Dh@Bj@Dh@Bj@Dj@Dh@Bj@Dh@Bj@Dh@Bj@Dj@Dh@Bj@Dh@Bj@Dh@Bj@Dj@Dh@Bj@Bh@Dj@Bj@Dh@Bj@Dj@Bh@Dj@Bh@Bj@Dj@Dh@Dj@Dh@Dj@Dh@Bj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Dj@Dh@Fj@Dh@Dj@Dh@Dj@Dh@Bj@Dh@Dj@Dj@Dh@Dj@Dh@Dj@Bh@Dj@Dj@Dh@Bj@Dj@Dh@Bj@Dh@Dj@Bj@Dh@@j@Bj@Bh@@j@Bh@@j@?j@@j@?j@?h@?j@?j@Cj@Aj@Ch@Aj@Cj@Eh@Cj@Eh@Ej@Ch@Gj@Eh@Ej@Ej@Gh@Ej@Eh@Gj@Eh@Ej@Eh@Gj@Eh@Eh@Ej@Gh@Ej@Eh@Eh@Gj@Eh@Ej@Gh@Ej@Eh@Gh@Ej@Gh@Ej@Eh@Gj@Eh@Ej@Eh@Gj@Eh@Ej@Gh@Ej@Eh@Gj@Eh@Gj@Eh@Gh@Ej@Gh@Gh@Ej@Gh@Eh@Gj@Eh@Gh@Gj@Eh@Gh@Ej@Gh@Eh@Gj@Eh@Gj@Eh@Ej@Gh@Ej@Eh@Gh@Ej@Gh@Ej@Eh@Gj@Eh@Ej@Eh@Cj@Cj@Eh@Cj@Ej@Ch@Cj@Ej@Cj@Eh@Gh@Ej@Eh@Gj@Eh@Gh@Ej@Eh@Gh@Ej@Gh@Ej@Eh@Gh@Ej@Eh@Ej@Gh@Ej@Eh@Ej@Eh@Gh@Ej@Eh@Ej@Eh@Gj@Eh@Ej@Eh@Eh@Gj@Eh@Ej@Gh@Ej@Eh@Gj@Eh@Ej@Gh@Ej@Eh@Gj@Eh@Eh@Gj@Eh@Ej@Gh@Ej@Eh@Gj@Eh@Ej@Eh@Gj@Eh@Eh@Gj@Eh@Ej@Eh@Gj@Eh@Ej@Eh@Gj@Eh@Eh@Gj@Eh@Ej@Eh@Gj@Eh@Eh@Gj@Eh@Ej@Eh@Gj@Eh@Ej@Gh@Ej@Eh@Gj@Eh@Ej@Gh@Gj@Gh@Ih@Gh@Gh@Ih@Gh@Gh@Ih@Gh@Gh@Kh@Ih@Ih@Ih@Kh@Ih@Ih@Ih@If@Kh@Ih@Ih@Kh@Kf@Ih@Kh@Kh@If@Kh@Kh@Ih@Kf@Kh@Ih@Kh@Kf@Ih@Kh@Ih@Kf@Kh@Kf@Kh@Kh@Kf@Kh@Ih@Kf@Kh@Kf@Kh@Kh@Kf@Kh@If@Kh@Kh@Kf@Kh@Kf@Kh@Kh@If@Kh@Kh@Kf@Ih@Kh@Kf@Ih@Kh@Kh@If@Kh@Kh@If@Kh@Kh@Kf@Ih@Kh@Kh@If@Kh@Kh@If@Kh@Kh@Kf@Ih@Kh@Kh@If@Kh@Kh@If@Kh@Kh@If@Kh@Kh@Kh@If@Kh@Kh@If@Kh@Kh@Kh@If@Kh@Kh@If@Kh@Kh@Kh@If@Kh@Kh@If@Kh@Kh@Kh@If@Kh@Kh@Kf@Ih@Kh@Kh@If@Kh@Kh@Kf@Ih@Kh@Kf@Kh@Ih@Kf@Kh@Kh@If@Kh@Kh@Kf@Kh@Ih@Kh@Kf@Kh@Ih@Kf@Kh@Kh@If@Kh@Kh@Kf@Kh@Ih@Kf@Kh@Kf@Ih@Kh@Kf@Kh@Kh@Kf@Mf@Mf@Mf@Mf@Mf@Mf@Mf@Mf@Kh@Kh@Kf@Mh@Kf@Kh@Ih@Kf@Kh@Kf@Ih@Ih@Gh@', //eslint-disable-line
      }
    ]
  },
  {
    id: "sanmartin",
    name: "San Martin",
    branches: [
      {
        id: "31",
        name: "Retiro - Cabred",
        slug: "cabred",
        directions: [
          {
            id: "31",
            name: "Cabred",
            color: "success"
          },
          {
            id: "32",
            name: "Retiro",
            color: "info"
          }
        ],
        stations: [
          {
            index: 0,
            id: "retiro",
            name: "Retiro",
            position: { lat: -34.5891307, lng: -58.3736203 }
          },
          {
            index: 1,
            id: "palermo",
            name: "Palermo",
            position: { lat: -34.5790601, lng: -58.4269353 }
          },
          {
            index: 2,
            id: "villacrespo",
            name: "Villa Crespo",
            position: { lat: -34.5919613, lng: -58.4453294 }
          },
          {
            index: 3,
            id: "lapaternal",
            name: "La Paternal",
            position: { lat: -34.5968375, lng: -58.4667191 }
          },
          {
            index: 4,
            id: "villadelparque",
            name: "Villa Del Parque",
            position: { lat: -34.6013699, lng: -58.4935315 }
          },
          {
            index: 5,
            id: "devoto",
            name: "Devoto",
            position: { lat: -34.602661, lng: -58.5126488 }
          },
          {
            index: 6,
            id: "saenzpeña",
            name: "Saenz Peña",
            position: { lat: -34.6031708, lng: -58.5278989 }
          },
          {
            index: 7,
            id: "santoslugares",
            name: "Santos Lugares",
            position: { lat: -34.6036745, lng: -58.5407521 }
          },
          {
            index: 8,
            id: "caseros",
            name: "Caseros",
            position: { lat: -34.6045861, lng: -58.5644918 }
          },
          {
            index: 9,
            id: "elpalomar",
            name: "El Palomar",
            position: { lat: -34.604924, lng: -58.5958736 }
          },
          {
            index: 10,
            id: "hurlingham",
            name: "Hurlingham",
            position: { lat: -34.5910557, lng: -58.6324194 }
          },
          {
            index: 11,
            id: "williammorris",
            name: "William Morris",
            position: { lat: -34.5784645, lng: -58.6565796 }
          },
          {
            index: 12,
            id: "bellavista",
            name: "Bella Vista",
            position: { lat: -34.5637387, lng: -58.6847762 }
          },
          {
            index: 13,
            id: "muñiz",
            name: "Muñiz",
            position: { lat: -34.5513662, lng: -58.7033147 }
          },
          {
            index: 14,
            id: "sanmiguel",
            name: "San Miguel",
            position: { lat: -34.5444483, lng: -58.712733 }
          },
          {
            index: 15,
            id: "josecpaz",
            name: "Jose C Paz",
            position: { lat: -34.5191444, lng: -58.7500379 }
          },
          {
            index: 16,
            id: "solyverde",
            name: "Sol Y Verde",
            position: { lat: -34.5039897, lng: -58.7976033 }
          },
          {
            index: 17,
            id: "derqui",
            name: "Derqui",
            position: { lat: -34.4908888, lng: -58.8386488 }
          },
          {
            index: 18,
            id: "villaastolfi",
            name: "Villa Astolfi",
            position: { lat: -34.4786178, lng: -58.8770376 }
          },
          {
            index: 19,
            id: "pilar",
            name: "Pilar",
            position: { lat: -34.4687433, lng: -58.9079062 }
          },
          {
            index: 20,
            id: "manzanares",
            name: "Manzanares",
            position: { lat: -34.4522459, lng: -59.0067549 }
          },
          {
            index: 21,
            id: "cabred",
            name: "Cabred",
            position: { lat: -34.4878244, lng: -59.075658 }
          }
        ],
        path: '%60ubrEbbhcJQd@Qd@Qb@Qd@Qd@Sd@Qd@Qb@Qd@Qd@Qd@Qd@Qb@Qd@Qd@Qd@Sd@Qb@Sd@Qd@Qb@Sd@Qd@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qb@Sb@Sb@Sb@Sb@Ub@U%60@U%60@Ub@U%60@U%60@U%60@Ub@U%60@Ub@Sb@S%60@Sd@Qd@Qd@Od@Qd@Of@Od@Of@Od@Qd@Of@Qb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Qd@Qd@Sb@Sb@Sd@Qb@Sb@Sd@Sb@Qd@Qb@Qd@Sd@Qd@Od@Of@Of@Mf@Mf@Of@Kf@Kh@Kf@Mf@Ih@Kh@Kf@Kh@Kf@Kh@If@Kh@Mf@Mf@Od@Qf@Od@Ub@S%60@Ub@Ub@U%60@W%5EW%60@W%5EY%5CY%5CY%5CYZ%5BZ%5DX%5DV%5BX%5DX%5DV%5DV%5DV%5DV%5DT%5DV%5DV_@X%5DV%5DV%5DV%5DV%5DT%5DX%5BX%5DVY%5C%5B%5CYZ%5B%5CY%5C%5BZY%5CY%5EW%5CY%5EW%5CW%5EW%5EW%60@U%60@U%60@Sb@Qd@Sb@Sb@Sd@Od@Qd@Od@Qd@Qf@Od@Of@Mf@Of@Mf@Mf@Mf@If@Ih@Kh@Gh@Gh@Ij@Gh@Gh@Ej@Ch@Ej@Cj@Ch@Cj@Aj@Ah@Aj@@j@?h@?j@@j@@j@Bh@Bj@Bj@Bj@Dh@Fh@Fj@Dh@Fh@Fj@Jf@Jh@Hh@Jf@Jh@Jf@Lh@Jf@Nf@Ld@Nf@Nf@Pb@Rd@Rb@Rb@Pd@V%60@T%60@T%60@T%60@X%5CX%5EV%5CX%5CZZ%5CXZZZX%5CV%5CV%5CV%5CV%60@P%5ER%5ER%5EP%60@P%5EN%60@P%60@N%5EP%60@N%5EP%60@N%5EP%60@N%60@P%5EP%60@N%5EP%60@N%5EP%60@N%60@P%5EN%60@P%5EN%60@P%5EP%60@N%60@P%5EN%60@P%5EN%60@P%5EP%60@P%5EP%60@P%5EP%5ER%5ET%5CVZX%5CV%5CV%5CV%5CX%5CV%5CV%5CV%5CV%5CV%5CXZV%5CX%5CXZXZZZXX%5CZ%5CXZX%5CX%5EX%5CX%5CX%5CX%5CZ%5CX%5CXZX%5CX%5CZ%5CX%5CXZZ%5CX%5CX%5CX%5CX%5CX%5CX%5CX%5CV%5EX%5CZ%5CXZX%5CZ%5CXZX%5CX%5CX%5CX%5CX%5EX%5CZZX%5CX%5CX%5CX%5CX%5CX%5CX%5EV%5EX%5ET%60@T%60@T%60@T%60@Rb@Tb@Pb@Rb@Rb@Pd@Pd@Pd@Pd@Pd@Pd@Rd@Pd@Pb@Pd@Pd@Pd@Pd@Pb@Pd@Pd@Rd@Pd@Pb@Pd@Pd@Pd@Pd@Pd@Pb@Rd@Pd@Pd@Pd@Pb@Pd@Pd@Pd@Pd@Pb@Rd@Pd@Pd@Pd@Pb@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Nd@Pb@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Pd@Rd@Pd@Pd@Pd@Pb@Pd@Nd@Nf@Lf@Nf@Jf@Jh@Jf@Hh@Jh@Jf@Hh@Jh@Hh@Jf@Hh@Jh@Hf@Jh@Hh@Jh@Jf@Hh@Jh@Hh@Jf@Jh@Hh@Jf@Jh@Hh@Jh@Jf@Hh@Hh@Hh@Hh@Fh@Fh@Dj@Dh@Bh@Bj@@j@@j@@j@Aj@Aj@Ah@Cj@Aj@Ah@Aj@Aj@Aj@Cj@Ah@Aj@Aj@Cj@Aj@Aj@Ah@Aj@Ah@Aj@?j@@j@?j@Bh@Bj@Dh@Fh@Hh@Hh@Lh@Lf@Lf@Lf@Lf@Nf@Lf@Lf@Nf@Lf@Lf@Lf@Nf@Ld@Lf@Nf@Lf@Lf@Nf@Lf@Lf@Nf@Lf@Ld@Nf@Lf@Lf@Nf@Lf@Nf@Lf@Lf@Nf@Lf@Ld@Nf@Lf@Lf@Nf@Lf@Lf@Nf@Lf@Lf@Lh@Lf@Jf@Hf@Jh@Hh@Hh@Fj@Fh@Dh@Fj@Bh@Bj@Bj@Bh@Dj@@j@Bh@@j@Bj@Bh@@j@@j@Bh@@j@@j@Bj@@h@@j@Bj@@j@@h@Bj@@j@@j@Bh@@j@Bj@@h@Bj@Bj@@h@Bj@@j@Bh@@j@Bj@Bh@@j@Bj@@j@@h@Bj@@j@Bj@@j@@h@Bj@@j@Bj@@h@@j@Bj@@j@Bj@@h@Bj@@j@Bh@@j@Bj@@j@Bh@Bj@@j@Bj@@h@Bj@@j@Bj@Bh@@j@Bj@@h@Bj@@j@Bj@Bh@@j@@j@Bj@@h@@j@Bj@@j@Bh@@j@@j@Bh@@j@@j@Bj@@h@Bj@@j@Bj@@h@@j@Bj@@j@Bh@@j@Bj@@h@@j@Bj@@j@Bh@@j@Bj@@j@@h@Bj@@j@Bh@@j@Bj@@h@Bj@@j@Bj@@h@Bj@@j@Bh@@j@Bj@@h@Bj@@j@@j@Bh@@j@Bj@@j@Bh@@j@@j@Bj@@h@Bj@@j@@j@Bh@@j@@j@Bj@@h@Bj@@j@@j@Bh@@j@Bj@Bj@Bh@Dj@Bh@Dj@Bj@Bh@@j@@j@@j@@h@@j@@j@@j@@h@@j@?j@@j@?j@@h@?j@?j@@j@?j@?j@@h@?j@?j@@j@@j@?h@@j@@j@?j@@h@@j@@j@?j@@j@@h@@j@@j@@j@@h@?j@@j@@j@@h@@j@@j@@j@?j@@h@@j@@j@@j@@h@@j@@j@?j@@j@@h@@j@@j@@j@@j@@h@@j@?j@@j@@j@?h@@j@@j@?j@@h@?j@@j@@j@?h@@j@@j@@j@@j@@h@@j@@j@?j@@j@@h@@j@Bj@@j@@h@@j@@j@@j@@h@@j@@j@?j@@h@@j@@j@?j@@j@@h@?j@@j@@j@@j@?h@@j@@j@@j@@h@@j@?j@@j@@j@@h@@j@@j@?j@@j@@h@@j@@j@@j@?h@@j@@j@@j@@j@@j@?h@@j@@j@@j@@j@@h@?j@@j@@j@@j@@h@@j@?j@@j@@j@@h@@j@@j@@j@?h@@j@@j@@j@@j@@h@?j@@j@@j@@h@@j@@j@?j@@j@@h@@j@@j@@j@?h@@j@@j@@j@@j@@h@@j@?j@@j@@h@@j@@j@@j@?j@@h@@j@@j@@j@@h@?j@@j@@j@@j@@h@@j@@j@?j@@h@@j@@j@@j@@j@?h@@j@@j@@j@@h@@j@?j@@j@@j@@h@@j@@j@?j@@h@@j@@j@@j@@j@@h@?j@@j@@j@@h@@j@@j@?j@@j@@h@@j@@j@@j@?j@@h@@j@@j@@j@?h@@j@@j@@j@@j@@h@?j@@j@@j@@h@@j@?j@@j@@j@@h@@j@?j@@j@@h@@j@@j@@j@?j@@h@@j@@j@@j@?h@@j@@j@@j@@j@@h@?j@@j@@j@@h@?j@@j@@j@@j@?h@@j@@j@@j@?h@@j@@j@@j@?j@@h@@j@@j@?j@@h@@j@@j@@j@?j@@h@@j@@j@?j@@h@@j@@j@@j@@j@@h@?j@@j@@j@@j@?h@@j@?j@?j@?j@?h@Aj@?j@?j@?h@Aj@?j@?j@?j@?h@Aj@?j@?j@?j@?h@Aj@?j@?j@?j@Aj@?h@?j@?j@?j@Aj@?h@?j@?j@?j@Aj@?h@?j@?j@Aj@?j@?h@?j@?j@Aj@?j@?h@?j@?j@Aj@?j@?h@?j@?j@Aj@?j@?h@?j@Aj@?j@?j@?h@?j@Aj@?j@?j@?j@?h@Aj@?j@?j@?j@Ah@?j@?j@?j@?j@Ah@?j@?j@?j@?j@Ah@?j@?j@?j@?j@Ah@?j@?j@?j@?j@Ah@?j@?j@?j@?j@Ah@@j@?j@?h@?j@?j@?j@?j@Ah@?j@?j@?j@Aj@?j@?h@?j@Aj@?j@?j@Aj@?h@Aj@Ej@Cj@Eh@Cj@Gh@Gh@Gh@Gj@Ih@Ih@Gh@Kf@Kh@Kh@Mf@Mf@Mf@Mf@Mf@Sd@Qd@Qb@Qd@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qb@Sd@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Sd@Qb@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sb@Qd@Sb@Sd@Qb@Sd@Sb@Qd@Sb@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Sb@Qd@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Sd@Qb@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qb@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sd@Qb@Sd@Qd@Sb@Sd@Qb@Sb@Qd@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Sb@Qd@Sb@Sb@Qd@Sb@Sd@Qd@Sd@Sd@Sd@Sd@Sb@Sd@Sd@Sd@Qd@Sd@Sd@Sd@Sd@Sd@Sd@Sd@Qb@Sb@Qb@Qb@Sb@Qb@Sb@Q%60@Qb@Sb@Qb@Sb@Qb@Qb@Sb@Qb@Sb@Q%60@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Qd@Sb@Sb@Qd@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Qb@Sd@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sd@Qb@Sd@Sb@Qb@Sd@Sb@Qd@Sb@Sd@Qb@Sb@Sd@Qb@Sb@Sd@Sb@Sb@U%60@Sb@W%60@U%60@W%5EW%5EW%60@W%5EW%60@W%5EW%5EU%60@W%5EW%60@W%5EW%5EW%60@W%5EW%60@W%5EW%5EW%5EW%5EW%5EY%5EW%5EW%5EW%5EW%5EW%5EY%5EW%5EW%60@Y%5CW%5CY%5C%5BZY%5C%5BZY%5C%5BZ%5B%5CYZ%5B%5CYZ%5B%5CYZ%5B%5CYZY%5C%5BZY%5C%5BZY%5CY%5C%5BZY%5C%5BZY%5CYZ%5B%5CY%5C%5BZY%5CYZ%5B%5CY%5CYZ%5B%5CYZY%5C%5B%5CY%5CYZ%5B%5CY%5CY%5CY%5CW%5EY%5EU%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%5EW%60@Y%5EW%5EW%5EW%60@W%5EU%60@U%60@W%60@U%5EU%60@W%60@Sb@Ub@U%60@Sb@U%60@Sb@Ub@S%60@Ub@Sb@Sb@Ub@Sb@Sb@U%60@Sb@Ub@Sb@Sb@Ub@Sb@Sb@S%60@Ub@Sb@Sb@Ub@Sb@Sb@Ub@S%60@Sb@Ub@Sb@Sb@Sb@Ub@Sb@Sb@U%60@Sb@Sb@Ub@Sb@Sb@Ub@S%60@Sb@Sb@Ub@U%60@Ub@U%60@W%60@U%5EW%60@U%60@W%5EW%60@W%5EW%5EU%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EU%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EU%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EU%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@U%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EU%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EU%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@U%60@U%60@W%60@U%60@S%60@Ub@U%60@Sb@Sb@Sd@Sb@Qd@Qd@Qb@Od@Qf@Od@Of@Md@Of@Kf@Mh@Mf@Kf@Mf@Kh@Mf@Mf@Kf@Mh@Mf@Kf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Mf@Kh@Mf@Kf@Mh@Kf@aMnk@Kf@Kf@Mh@Kf@Kh@Mf@Kf@Kh@Kh@If@Ih@Kh@Gh@Ih@Ih@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gj@Eh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Eh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Eh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Eh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Ej@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Eh@Gh@Gh@Gj@Gh@Gh@Gj@Gh@Eh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Eh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Eh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Ej@Gh@Gh@Gh@Gj@Gh@Gh@Eh@Gj@Gh@Gh@Gh@Gj@Gh@Eh@Gh@Gj@Gh@Gh@Gh@Gj@Eh@Gh@Gh@Gj@Gh@Gh@Gh@Ej@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Ej@Gh@Gh@Gh@Gj@Gh@Gh@Gj@Eh@Gh@Ih@Gj@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Ej@Gh@Gh@Eh@Gj@Eh@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Gj@Gh@Gh@Gh@Ej@Gh@Gh@Gj@Gh@Gh@Eh@Gj@Gh@Gh@Gh@Gj@Eh@Gh@Gj@Gh@Gh@Gh@Ej@Gh@Gh@Gj@Gh@Eh@Gh@Gj@Gh@Gh@Gh@Gh@Gj@Ih@Gh@If@Kh@Kh@If@Kh@Kh@Kf@Kf@Mh@Mf@Mf@Kf@Mf@Mf@Mh@Kf@Mf@Mf@Mf@Mf@Kf@Mh@Mf@Mf@Kf@Mf@Mf@Mh@Kf@Mf@Mf@Mf@Kf@Mh@Mf@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Mf@Kh@Mf@Kf@Ih@Kh@Kf@Ih@Gh@Ih@Ih@Gj@Ih@Ih@Gh@Gh@Ih@Gh@Gh@Ih@Gh@Gj@Ih@Gh@Gh@Ih@Gh@Ih@Gh@Gh@Ih@Gj@Gh@Ih@Gh@Gh@Ih@Gh@Gh@Ih@Gj@Gh@Ih@Gh@Ih@Gh@Gh@Ih@Gh@Gj@Ih@Gh@Gh@Gh@Ih@Gh@Gh@Ij@Gh@Gh@Ih@Gh@Gh@Ih@Gh@Gj@Ih@Gh@Gh@Eh@Gj@Gh@Eh@Gh@Ej@Ch@Cj@Cj@Cj@Ch@?j@Aj@?j@?j@?h@Aj@?j@?j@Aj@?j@Bh@Bj@Bh@Bj@Bh@Dj@Bh@Dj@Dh@Dj@Dh@Dh@Dj@Fh@Hh@Fh@Hh@Fh@Fh@Lh@Jf@Jh@Jf@Jh@Lf@Lf@Nf@Lf@Lf@Lf@Lf@Pd@Nd@Pd@Pd@Nf@Rb@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Pd@Rb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@Pb@Rd@', //eslint-disable-line
      }
    ]
  },
  {
    id: "mitre",
    name: "Mitre",
    branches: [
      {
        id: "5",
        name: "Retiro - Tigre",
        slug: "tigre",
        directions: [
          {
            id: "5",
            name: "Tigre",
            color: "success"
          },
          {
            id: "6",
            name: "Retiro",
            color: "info"
          }
        ],
        stations: [
          {
            index: 0,
            id: "retiro",
            name: "Retiro",
            position: { lat: -34.5907031, lng: -58.3748806 }
          },
          {
            index: 1,
            id: "lisandrodelatorre",
            name: "Lisandro De La Torre",
            position: { lat: -34.5625299, lng: -58.4367116 }
          },
          {
            index: 2,
            id: "belgranoc",
            name: "Belgrano C",
            position: { lat: -34.5588016, lng: -58.4489445 }
          },
          {
            index: 3,
            id: "nuñez",
            name: "Nuñez",
            position: { lat: -34.5478335, lng: -58.4631492 }
          },
          {
            index: 4,
            id: "rivadavia",
            name: "Rivadavia",
            position: { lat: -34.5365204, lng: -58.4680326 }
          },
          {
            index: 5,
            id: "vicentelopez",
            name: "Vicente Lopez",
            position: { lat: -34.5247233, lng: -58.4728065 }
          },
          {
            index: 6,
            id: "olivos",
            name: "Olivos",
            position: { lat: -34.5077139, lng: -58.4806636 }
          },
          {
            index: 7,
            id: "lalucila",
            name: "La Lucila",
            position: { lat: -34.4975978, lng: -58.4884466 }
          },
          {
            index: 8,
            id: "martinez",
            name: "Martinez",
            position: { lat: -34.4885346, lng: -58.4965804 }
          },
          {
            index: 9,
            id: "acassuso",
            name: "Acassuso",
            position: { lat: -34.4800686, lng: -58.5038385 }
          },
          {
            index: 10,
            id: "sanisidroc",
            name: "San Isidro C",
            position: { lat: -34.4722074, lng: -58.5133831 }
          },
          {
            index: 11,
            id: "beccar",
            name: "Beccar",
            position: { lat: -34.4608043, lng: -58.5265437 }
          },
          {
            index: 12,
            id: "victoria",
            name: "Victoria",
            position: { lat: -34.4561533, lng: -58.5411284 }
          },
          {
            index: 13,
            id: "virreyes",
            name: "Virreyes",
            position: { lat: -34.4506827, lng: -58.5507001 }
          },
          {
            index: 14,
            id: "sanfernandoc",
            name: "San Fernando C",
            position: { lat: -34.4443381, lng: -58.5587407 }
          },
          {
            index: 15,
            id: "carupa",
            name: "Carupa",
            position: { lat: -34.4369176, lng: -58.5682318 }
          },
          {
            index: 16,
            id: "tigre",
            name: "Tigre",
            position: { lat: -34.423567, lng: -58.5817289 }
          }
        ],
        path: 'z~brE~ihcJSb@Sb@Ub@S%60@Ub@Sb@Sb@Ub@Sb@U%60@Sb@Sb@Ub@Sb@Ub@S%60@Sb@Ub@Sb@Ub@Sb@S%60@Ub@Sb@Sb@Ub@U%60@W%5EU%60@W%60@U%60@W%60@U%5EW%60@U%60@W%60@S%60@Ub@Sb@Ub@S%60@Ub@Ub@Sb@U%60@Sb@Ub@Sb@W%5EU%60@U%60@W%60@U%60@Y%5EW%5EW%5CY%5EW%5EY%5EW%5CY%5EW%5EW%5EY%5CW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EU%60@U%60@Ub@Qb@Sb@Sd@Sb@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Od@Qd@Qd@Od@Qd@Qf@Od@Qd@Od@Qd@Qd@Od@Of@Mf@Mf@Mf@Of@Mf@Mf@Of@Od@Of@Qd@Od@Od@Od@Sd@Sb@Sb@Sb@Sd@U%60@W%60@U%60@W%60@W%5EW%5CY%5EW%5EW%5EY%5EY%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CY%5CY%5CY%5CW%5EY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5EYZ%5B%5CY%5CY%5CYZ%5B%5CY%5CY%5C%5BZY%5CY%5CY%5C%5BZY%5CY%5CY%5C%5BZY%5EW%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CU%60@W%60@W%60@U%5ESd@Sb@Sb@Sb@Sb@Of@Od@Of@Od@Of@Of@Od@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Gh@Gh@Gh@Gh@Gh@Ih@Aj@Cj@Ch@Aj@Cj@Cj@Ah@Cj@Cj@?j@Aj@?j@Aj@?j@?j@Aj@Ah@Aj@?j@Aj@Ah@Ej@Ch@Eh@Gh@Ih@Ih@Mf@Kh@Mf@Od@Qd@Of@Qd@Od@Qd@Qd@Qd@Sb@Qd@Qd@Sb@Qd@Qd@Sb@Qd@Qb@Qd@Sd@Qb@Qd@Sd@Qb@Qd@Sd@Qb@Qd@Qb@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Qb@Oh@Mf@Mf@Mf@Ih@Gh@Ih@Gh@Gh@Gj@Gh@Gj@Gh@Gj@Gh@Gj@Ch@Eh@Cj@Eh@Ch@Eh@?j@Aj@?j@Ah@?j@Aj@?j@?j@Aj@?h@Aj@?j@Aj@?j@?h@Aj@?j@?j@Aj@?h@?j@Aj@?j@?h@?j@Aj@?j@?j@Ah@?j@?j@Aj@Ah@Aj@Aj@Cj@Aj@Ah@Aj@Ej@Ch@Ej@Ej@Ch@Ej@Ch@Ej@Ih@Gh@Ih@Gh@Ih@Ij@Gh@Ih@Gh@Ih@Kf@Kh@Kf@Kh@Kf@Kh@Kf@Qf@Od@Of@Od@Od@Of@Qd@Of@Od@Sb@Qd@Sb@Sb@Sb@Qd@Sb@Sb@Sd@S%60@Sb@Ub@Sb@Sb@Ub@Sb@Sb@U%60@Sb@Ub@Sb@Sb@Ub@Sb@Sb@U%60@Sb@Sb@Ub@Sb@Sb@Ub@Sb@S%60@Ub@Sb@Sb@Ub@Sb@Sb@U%60@Sb@Sb@Ub@Sb@Sb@U%60@Sb@Sb@Ub@Sb@Ub@S%60@Sb@Ub@Ub@U%60@S%60@Ub@U%60@W%60@U%60@W%60@U%5EW%60@U%60@U%60@Y%5EW%5EW%5EY%5EW%5EW%5EY%5EYZY%5CY%5CY%5CYZY%5C%5BZY%5CYZ%5B%5CYZ%5BZ%5DX%5BZ%5BZ%5BZ%5DX%5BX%5DX%5BV%5DX%5BX%5DV%5BT%5BT%5BTYT%5BT%5BR%5DR_@R%5DR%5DR%5DR_@R%5DR%5DR%5DR_@R%5DR%5DP%5DRa@P_@Ra@Pa@La@La@Na@La@La@La@La@La@La@Na@La@La@Ja@Lc@La@La@Ja@La@La@La@Jc@La@La@Ja@La@La@La@Jc@La@La@La@La@La@Ja@La@Lc@La@La@La@Ja@La@La@Lc@Ja@La@La@Ja@La@La@La@Lc@La@La@La@Ja@La@La@La@La@La@La@La@Lc@Ja@La@La@La@Ja@La@Jc@La@Ja@La@La@Lc@Ja@La@La@La@La@La@Jc@La@La@La@La@Ja@Lc@La@Ja@La@La@La@Lc@La@La@La@Ja@La@La@La@Ja@La@La@La@La@Lc@Ja@Na@La@La@La@La@La@La@La@La@La@La@La@Na@Na@Na@La@Na@Na@La@N_@La@Na@La@Na@La@Na@N_@Na@Na@Na@N_@Na@Na@Na@Na@N_@Na@Na@La@Na@Na@N_@La@Na@Na@La@Na@Na@N_@La@Na@Na@Na@N_@Na@Na@La@Na@Na@Na@La@N_@Na@La@Na@Na@Na@L_@Na@Na@Na@Na@N_@Na@Na@Na@Na@La@Na@N_@Na@Na@La@Na@Na@Na@La@N_@Na@Na@Na@Na@N_@Na@Na@Na@L_@Na@Na@Na@Na@N_@La@Na@Na@La@N_@Na@La@Na@Na@La@Na@Na@La@Na@La@Na@La@Na@Na@La@Ja@Jc@Ja@Ja@Jc@Ha@Fa@Hc@Fc@De@Da@Hc@Fa@Fc@Fc@Ha@Fa@Jc@Ja@La@Ja@Ja@P_@Pa@P_@P_@V%5DT%5DT_@V%5DT%5DX%5BX%5DV%5BX%5B%5CYZ%5BZY%5EY%5CY%5CU%60@W%5EW%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EW%5EW%60@W%5EU%60@W%60@W%5EU%60@W%60@W%5EU%60@W%5EW%60@U%60@W%5EW%60@U%5EW%5EW%60@W%5EY%5CYZ%5B%5C%5BZ%5BX%5DX%5BV%5DX_@T%5DT_@T%5DV%5DT_@T%5DT_@V%5DT%5DV%5DV_@T%5DV%5DT_@V%5DT_@T%5DV%5DT_@V%5DT_@T%5DV%5DT_@V%5DT%5DV_@T%5DT%5DV%5DT_@V%5BX%5BZ%5BX%5BZ%5BX%5BZ%5BZ%5BZYZ%5BZYZ%5B%5C%5BZY%5CY%5CY%5EY%5CY%5CY%5EY%5CY%5C%5BZ%5BX%5BZ%5BX%5BX%5DV%5DV%5DX%5DV%5DV%5DT_@V%5DT_@T_@R_@T_@R_@R_@T_@R%5DR_@T_@R_@T%5DR_@T_@R_@T%5DT_@R_@T%5DR_@T_@R_@T%5DR_@T%5DX%5DV%5BX%5BZ%5BZ%5BZ%5BZY%5CW%5CY%5CY%5EY%5CY%5CU%60@W%5EW%5EW%60@W%5EW%60@W%5EW%60@W%5EU%5EW%60@W%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EW%60@W%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EW%60@W%5EW%5EW%5EW%5EY%5EY%5CW%5EY%5EY%5CW%5EY%5CY%5EW%5C%5DZ%5BX%5BX%5DX%5BX%5BZ%5BX%5BZ%5DX%5BZ%5BX%5BZ%5BZ%5BX%5BZ%5BZ%5BX%5BZ%5BZ%5BX%5BZ%5BZ%5BZ%5BX%5BZ%5BZ%5BZ%5BX%5BZ%5BZ%5BZ%5BZ%5BXYZ%5BZ%5DX%5BX%5BZ%5BX%5BX%5DZ%5BX%5BX%5BZ%5BX%5BZ%5DZ%5BX%5BZ%5BZY%5CY%5C%5BZW%5EY%5EW%5EW%5CW%60@U%60@U%60@U%60@U%60@Sb@Sd@Sb@Sb@Ub@Sb@Sb@Sb@Sb@Ub@S%60@U%60@U%60@W%60@W%5EW%60@W%5EW%5EY%5CY%5EW%5CY%5E%5BZYZ%5B%5CYZ%5B%5CYZ%5BZYZ%5BZ%5BZYZ%5BZ%5BZY%5C%5BZ%5BZYZ%5B%5C%5BZ%5BZ%5BZY%5C%5BZ%5BZY%5CY%5EY%5CW%5CW%5EW%60@W%5EW%5EUb@U%60@U%60@Ub@U%60@Sb@Sb@Sd@Qb@Sd@Qb@Qd@Of@Od@Qd@Od@Of@Mf@Md@Of@Mf@Kh@Ih@Kh@If@Kh@Ih@Gh@Ih@Gh@Gh@Gh@Ej@Eh@Ej@Ch@Ch@Cj@Ch@Ch@Cj@Cj@Cj@Aj@Ch@Cj@Cj@Cj@Aj@Ch@Cj@Cj@Cj@Cj@Eh@Eh@Ej@Gh@Gh@Gh@Gj@Gh@Ih@Gh@Ih@Kf@Ih@Kh@Md@Mf@Mf@Od@Of@Of@Of@Qd@Qb@Qd@Qb@Qd@Qb@Ud@Sb@Sb@Ub@Sb@U%60@W%60@U%60@W%5EU%60@U%60@W%5EW%60@W%5EU%5EW%60@W%5EU%60@W%5EW%60@W%5EU%60@W%5EW%60@W%5EU%60@W%5EW%60@U%5EW%60@W%5EW%60@U%5EW%60@W%5EW%60@W%60@U%5EW%60@W%5EW%60@U%5EW%60@W%60@W%5EW%60@U%5EW%60@W%5EW%5EW%5EW%5EW%5EW%60@Y%5EW%5EW%5EW%5EY%5CY%5EW%5CY%5EY%5CW%5EY%5CY%5EW%5CY%5EY%5EW%5CY%5EY%5CY%5CY%5CY%5CY%5CYZY%5C%5B%5CY%5CY%5CY%5CY%5CY%5CY%5EW%5EW%5EW%5EY%5EW%5EW%5EY%5CW%5EW%5EY%5EW%5EW%5CY%5EW%5EW%5EY%5EW%5EW%5CY%5EW%5EW%5EY%5EW%5EW%5EY%5CW%5EW%5EW%5EY%5EW%5EW%5EY%5EW%5EW%5CY%5EW%5EW%5EY%5EW%5EY%5CW%5EY%5EW%5CY%5EW%5EY%5EW%5CY%5EW%5EY%5CW%5EY%5EW%5EW%5EY%5CW%5EW%5EY%5EW%5EY%5EW%5CW%5EY%5CY%5CY%5C%5BZ%5BZ_@T%5DVa@P_@Pa@P_@Na@La@Na@Na@La@Na@N_@La@Na@La@Na@N_@Na@Na@Na@N_@R%5DR%5DX%5DV%5B%5CYZY%5CY%5CY%5CY%5CY%5CY%5EW%5CY%5EW%5EW%5EY%5EW%5EY%5CW%5EY%5EW%5EY%5CW%5EY%5EW%5EY%5CW%5EW%5EY%5EW%5CY%5EW%5EY%5CW%5EY%5EW%5EY%5CW%5EY%5CW%5EY%5EY%5CW%5EY%5EW%5CY%5EW%5EY%5CW%5EY%5EW%5CY%5EW%5EY%5CY%5EW%5EY%5CW%5CY%5EY%5CW%5EY%5CY%5EY%5CW%5CY%5EY%5CW%5EY%5CY%5CW%5E', //eslint-disable-line
      },
      {
        id: "7",
        name: "Retiro - Mitre",
        slug: "mitre",
        directions: [
          {
            id: "7",
            name: "Mitre",
            color: "success"
          },
          {
            id: "8",
            name: "Retiro",
            color: "info"
          }
        ],
        stations: [
          {
            index: 0,
            id: "retiro",
            name: "Retiro",
            position: { lat: -34.5907031, lng: -58.3748806 }
          },
          {
            index: 1,
            id: "3defebrero",
            name: "3 de Febrero",
            position: { lat: -34.5717485, lng: -58.4249824 }
          },
          {
            index: 2,
            id: "ministrocarranza",
            name: "Ministro Carranza",
            position: { lat: -34.575273, lng: -58.4337443 }
          },
          {
            index: 3,
            id: "colegiales",
            name: "Colegiales",
            position: { lat: -34.5729746, lng: -58.448253 }
          },
          {
            index: 4,
            id: "belgranor",
            name: "Belgrano R",
            position: { lat: -34.5680506, lng: -58.4618081 }
          },
          {
            index: 5,
            id: "coghlan",
            name: "Coghlan",
            position: { lat: -34.5652607, lng: -58.4753485 }
          },
          {
            index: 6,
            id: "saavedra",
            name: "Saavedra",
            position: { lat: -34.5540735, lng: -58.4870632 }
          },
          {
            index: 7,
            id: "juanbjusto",
            name: "Juan B. Justo",
            position: { lat: -34.5425501, lng: -58.494657 }
          },
          {
            index: 8,
            id: "florida",
            name: "Florida",
            position: { lat: -34.5304745, lng: -58.4944563 }
          },
          {
            index: 9,
            id: "drcetrangolo",
            name: "Dr. Cetrangolo",
            position: { lat: -34.5230887, lng: -58.49413 }
          },
          {
            index: 10,
            id: "mitre",
            name: "Mitre",
            position: { lat: -34.5150276, lng: -58.4892365 }
          }
        ],
        path: 'z~brE~ihcJSb@Sb@Ub@S%60@Ub@Sb@Sb@Ub@Sb@U%60@Sb@Sb@Ub@Sb@Ub@S%60@Sb@Ub@Sb@Ub@Sb@S%60@Ub@Sb@Sb@Ub@U%60@W%5EU%60@W%60@U%60@W%60@U%5EW%60@U%60@W%60@S%60@Ub@Sb@Ub@S%60@Ub@Ub@Sb@U%60@Sb@Ub@Sb@W%5EU%60@U%60@W%60@U%60@Y%5EW%5EW%5CY%5EW%5EY%5EW%5CY%5EW%5EW%5EY%5CW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EU%60@U%60@Ub@Qb@Sb@Sd@Sb@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Od@Qd@Qd@Od@Qd@Qf@Od@Qd@Od@Qd@Qd@Od@Of@Mf@Mf@Mf@Of@Mf@Mf@Of@Od@Of@Qd@Od@Od@Od@Sd@Sb@Sb@Sb@Sd@U%60@W%60@U%60@W%60@W%5EW%5CY%5EW%5EW%5EY%5EY%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CY%5CY%5CY%5CW%5EY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5EYZ%5B%5CY%5CY%5CYZ%5B%5CY%5CY%5C%5BZY%5CY%5CY%5C%5BZY%5CY%5CY%5C%5BZY%5EW%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CU%60@W%60@W%60@U%5ESd@Sb@Sb@Sb@Sb@Of@Od@Of@Od@Of@Of@Od@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Gh@Gh@Gh@Gh@Gh@Ih@??Cj@Ch@Ej@Aj@Ah@Cj@Aj@?j@Aj@?j@?j@?j@@h@@j@@j@@h@Bj@Bj@Bh@Bj@Dh@Dj@Dh@Dj@Hh@Jh@Hf@Hh@Hh@Hh@Lf@Nf@Lf@Lf@Nf@Nd@Nf@Nd@Pd@Nd@Pd@Rb@Rd@Rd@R%60@Rb@Tb@Rb@T%60@Rb@Tb@R%60@Tb@Rb@T%60@Rb@Rb@Tb@R%60@Tb@Rb@T%60@Rb@Tb@Rb@R%60@Tb@Rb@Tb@Rb@T%60@Rb@Rb@Tb@R%60@Rd@Rb@Pd@Rb@Rd@Rb@Nd@Pd@Pd@Pd@Pd@Nd@Pd@Pd@Nd@Pd@Lf@Nh@Lf@Lf@Jh@Jf@Jh@Jf@Jh@Hf@Jh@Jf@Hh@Hh@Jh@Hh@Hh@Hh@Jh@Hh@Hf@Jh@Hh@Hh@Jh@Hf@Jh@Hh@Hf@Jh@Hh@Jf@Fj@Hh@Dh@Dj@Dj@Dh@Dj@@j@@h@@j@@j@Ah@Aj@Aj@Ah@Cj@Cj@Eh@Ej@Gh@Ih@Ih@Ih@Ih@Kh@Kf@Mf@Kf@Of@Of@Od@Mf@Of@Od@Mf@Of@Od@Of@Of@Od@Of@Od@Of@Od@Of@Od@Of@Od@Of@Od@Of@Of@Od@Od@Of@Od@Of@Od@Of@Qd@Of@Od@Of@Od@Of@Od@Of@Qd@Od@Of@Od@Qf@Od@Of@Qd@Od@Of@Of@Od@Mf@Mf@Mf@Of@Mf@Md@Kh@Kh@Kf@Mh@Kf@Kh@Kf@Kh@Mf@Kf@Kh@Kf@Mh@Kf@Kf@Kh@Kh@Kf@Mh@Kf@Mf@Mf@Mf@Of@Mf@Mf@Of@Md@Of@Mf@Mf@Of@Mf@Od@Mf@Mf@Of@Mf@Of@Md@Of@Mf@Of@Mf@Od@Of@Mf@Of@Mf@Mf@Mf@Of@Mf@Mf@Mf@Of@Kf@Mf@Mf@Kh@Kh@Ih@If@Kh@Ih@Gh@Ih@Gh@Gj@Gh@Ej@Eh@Eh@Ej@Cj@Ch@Cj@Aj@Aj@Ah@Aj@@j@?h@?j@?j@@j@@h@@j@@j@@j@?j@@j@Ah@Cj@Eh@Gj@Gh@Kh@If@Mf@Mf@Of@Of@Od@Mf@Of@Od@Of@Od@Of@Mf@Od@Of@Of@Od@Of@Mf@Od@Of@Of@Mf@Od@Of@Of@Od@Of@Md@Of@Qf@Od@Qd@Qb@U%60@Ub@W%5EW%5E%5B%5CY%5CY%5C%5DV%5DV_@V%5DT_@T%5DT%5DT_@T%5DT_@T%5DT_@T_@R%5DT_@T%5DT_@T_@R%5DT_@T_@T%5DT_@T_@R%5DT_@T_@T%5DT_@T%5DR_@T_@T%5DT_@T_@T%5DR_@T_@T%5DT_@T%5DT_@T_@T%5DT_@T_@R%5DT_@T_@T%5DT_@T%5DT_@R_@T%5DT_@T_@T%5DT_@T%5DR_@T_@T%5DT_@T_@T%5DT_@T%5DR_@T_@T%5DT_@T%5DT_@T_@R%5DT_@T_@T%5DT_@T%5DT_@R_@T%5DT_@T%5DT_@T_@T%5DR_@T_@T%5DT_@T%5DT_@T_@T%5DR_@T_@T%5DT_@T_@T%5DT_@T_@T%5DR_@T_@T%5DT_@T%5DT_@T_@T%5DT_@R_@T_@R%5DTa@R_@R_@Na@Na@Na@J_@Lc@Fc@Fc@Fc@Bc@Dc@Bc@@c@?c@Ac@?c@Ac@?c@Ac@?c@Ac@Ac@?c@Ac@?c@Ac@?c@Ac@Ac@?c@Ac@?c@Ac@?e@Ac@?c@Ac@?c@Ac@Ac@?c@Ac@?c@Ac@?c@Ac@?c@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ac@?c@Ae@Ac@?c@Ac@Ac@?c@Ac@Ac@Ac@?c@Ac@Ac@?c@Ac@Ac@?c@Ac@Ac@?c@Ac@Ac@?c@Ac@Ac@?c@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ac@?c@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ac@Ec@Ea@Gc@Ic@Ic@Ia@Ka@Ic@K_@Oa@Oa@O_@Oa@Q_@O_@U_@U%5DU%5DY%5DW%5DY%5DW%5BY%5DW%5DY%5DW%5BY%5DW%5DY%5DW%5BW%5DY%5DW%5DY%5DW%5BY%5DW%5DY%5DW%5DW%5BY%5DW%5DY%5DW%5DY%5BW%5DW%5DY%5DW%5DY%5BW%5DW%5DY%5DW%5DY%5DW%5BY%5DW%5DW%5DY%5DW%5BY%5DW', //eslint-disable-line
      },
      {
        id: "9",
        name: "Retiro - J. L. Suarez",
        slug: "jlsuarez",
        directions: [
          {
            id: "9",
            name: "J. L. Suarez",
            color: "success"
          },
          {
            id: "10",
            name: "Retiro",
            color: "info"
          }
        ],
        stations: [
          {
            index: 0,
            id: "retiro",
            name: "Retiro",
            position: { lat: -34.5907031, lng: -58.3748806 }
          },
          {
            index: 1,
            id: "3defebrero",
            name: "3 de Febrero",
            position: { lat: -34.5717485, lng: -58.4249824 }
          },
          {
            index: 2,
            id: "ministrocarranza",
            name: "Ministro Carranza",
            position: { lat: -34.575273, lng: -58.4337443 }
          },
          {
            index: 3,
            id: "colegiales",
            name: "Colegiales",
            position: { lat: -34.5729746, lng: -58.448253 }
          },
          {
            index: 4,
            id: "belgranor",
            name: "Belgrano R",
            position: { lat: -34.5680506, lng: -58.4618081 }
          },
          {
            index: 5,
            id: "lmdrago",
            name: "L.M.Drago",
            position: { lat: -34.5684173, lng: -58.4789912 }
          },
          {
            index: 6,
            id: "generalurquiza",
            name: "General Urquiza",
            position: { lat: -34.574712, lng: -58.4878391 }
          },
          {
            index: 7,
            id: "pueyrredon",
            name: "Pueyrredon",
            position: { lat: -34.5804962, lng: -58.501898 }
          },
          {
            index: 8,
            id: "miguelete",
            name: "Miguelete",
            position: { lat: -34.5810718, lng: -58.5170793 }
          },
          {
            index: 9,
            id: "sanmartin",
            name: "San Martin",
            position: { lat: -34.5734195, lng: -58.5319579 }
          },
          {
            index: 10,
            id: "sanandres",
            name: "San Andres",
            position: { lat: -34.5635642, lng: -58.5406609 }
          },
          {
            index: 11,
            id: "malaver",
            name: "Malaver",
            position: { lat: -34.5573725, lng: -58.5479328 }
          },
          {
            index: 12,
            id: "villaballester",
            name: "Villa Ballester",
            position: { lat: -34.5511617, lng: -58.5558262 }
          },
          {
            index: 13,
            id: "chilavert",
            name: "Chilavert",
            position: { lat: -34.542232, lng: -58.566917 }
          },
          {
            index: 14,
            id: "jlsuarez",
            name: "J.L. Suarez",
            position: { lat: -34.5348489, lng: -58.5758471 }
          }
        ],
        path: 'z~brE~ihcJSb@Sb@Ub@S%60@Ub@Sb@Sb@Ub@Sb@U%60@Sb@Sb@Ub@Sb@Ub@S%60@Sb@Ub@Sb@Ub@Sb@S%60@Ub@Sb@Sb@Ub@U%60@W%5EU%60@W%60@U%60@W%60@U%5EW%60@U%60@W%60@S%60@Ub@Sb@Ub@S%60@Ub@Ub@Sb@U%60@Sb@Ub@Sb@W%5EU%60@U%60@W%60@U%60@Y%5EW%5EW%5CY%5EW%5EY%5EW%5CY%5EW%5EW%5EY%5CW%5EY%5EW%5EW%5EW%5EY%5EW%5EW%5EU%60@U%60@Ub@Qb@Sb@Sd@Sb@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Qd@Od@Qd@Qd@Od@Qd@Qf@Od@Qd@Od@Qd@Qd@Od@Of@Mf@Mf@Mf@Of@Mf@Mf@Of@Od@Of@Qd@Od@Od@Od@Sd@Sb@Sb@Sb@Sd@U%60@W%60@U%60@W%60@W%5EW%5CY%5EW%5EW%5EY%5EY%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CY%5CY%5CY%5CW%5EY%5CY%5CY%5CY%5CY%5CY%5CY%5CY%5EYZ%5B%5CY%5CY%5CYZ%5B%5CY%5CY%5C%5BZY%5CY%5CY%5C%5BZY%5CY%5CY%5C%5BZY%5EW%5CY%5CY%5CY%5CY%5EY%5CY%5CY%5CU%60@W%60@W%60@U%5ESd@Sb@Sb@Sb@Sb@Of@Od@Of@Od@Of@Of@Od@Kh@Mf@Kf@Kh@Mf@Kf@Mh@Gh@Gh@Gh@Gh@Gh@Ih@??Cj@Ch@Ej@Aj@Ah@Cj@Aj@?j@Aj@?j@?j@?j@@h@@j@@j@@h@Bj@Bj@Bh@Bj@Dh@Dj@Dh@Dj@Hh@Jh@Hf@Hh@Hh@Hh@Lf@Nf@Lf@Lf@Nf@Nd@Nf@Nd@Pd@Nd@Pd@Rb@Rd@Rd@R%60@Rb@Tb@Rb@T%60@Rb@Tb@R%60@Tb@Rb@T%60@Rb@Rb@Tb@R%60@Tb@Rb@T%60@Rb@Tb@Rb@R%60@Tb@Rb@Tb@Rb@T%60@Rb@Rb@Tb@R%60@Rd@Rb@Pd@Rb@Rd@Rb@Nd@Pd@Pd@Pd@Pd@Nd@Pd@Pd@Nd@Pd@Lf@Nh@Lf@Lf@Jh@Jf@Jh@Jf@Jh@Hf@Jh@Jf@Hh@Hh@Jh@Hh@Hh@Hh@Jh@Hh@Hf@Jh@Hh@Hh@Jh@Hf@Jh@Hh@Hf@Jh@Hh@Jf@Fj@Hh@Dh@Dj@Dj@Dh@Dj@@j@@h@@j@@j@Ah@Aj@Aj@Ah@Cj@Cj@Eh@Ej@Gh@Ih@Ih@Ih@Ih@Kh@Kf@Mf@Kf@Of@Of@Od@Mf@Of@Od@Mf@Of@Od@Of@Of@Od@Of@Od@Of@Od@Of@Od@Of@Od@Of@Od@Of@Of@Od@Od@Of@Od@Of@Od@Of@Qd@Of@Od@Of@Od@Of@Od@Of@Qd@Od@Of@Od@Qf@Od@Of@Qd@Od@Of@Of@Od@Mf@Mf@Mf@Of@Mf@Md@Kh@Kh@Kf@Mh@Kf@Kh@Kf@Kh@Mf@Kf@Kh@Kf@Mh@Kf@Kf@Kh@Kh@Kf@Mh@Kf@Mf@Mf@Mf@Of@Mf@Mf@Of@Md@Of@Mf@Mf@Of@Mf@Od@Mf@Mf@Of@Mf@Of@Md@Of@Mf@Of@Mf@Od@Of@Mf@Of@Mf@Mf@Mf@Of@Mf@Mf@Mf@Of@Kf@Mf@Mf@Kh@Kh@Ih@If@Kh@Ih@Gh@Ih@Gh@Gj@Gh@Ej@Eh@Eh@Ej@Cj@Ch@Cj@Aj@Aj@Ah@Aj@@j@?h@?j@?j@@j@@h@@j@@j@Fh@Dj@Dh@Dj@Fh@Dh@Fj@Fh@Hh@Fh@Hh@Fh@Jh@Hh@Hh@Lf@Nf@Lf@Lh@Lf@Lf@Nd@Lf@Nf@Ld@Nf@Lf@Lf@Nf@Lf@Lf@Lf@Nf@Lf@Lf@Nd@Nf@Lf@Nf@Nf@Ld@Nf@Rd@Pb@Rb@Pd@Tb@R%60@Rb@T%60@V%60@T%60@V%5EX%5EV%5EX%5EX%5CX%5CX%5CXZZ%5CXZZZX%5CZZZZXZZ%5CXZZ%5CX%5CX%5CX%5EX%5CX%5CV%5CX%5EX%5CV%5CX%5EV%5CX%5EV%5EV%5ETb@Tb@R%60@Rb@Tb@Rb@Rb@Rb@Tb@Rb@Rb@Tb@Rb@R%60@Rb@Tb@Rb@Rb@Rb@Tb@Rb@Rb@Rb@T%60@Rb@Rb@Tb@Rb@Rb@Rb@Tb@Rb@Rb@Rb@T%60@Rb@Rb@Rb@Tb@Rb@Rb@Rb@Rd@Tb@Pb@Pd@Pb@Lh@Nf@Nf@Lf@Lf@Jf@Lf@Lh@Lf@Jf@Lf@Jh@Hh@Jf@Hh@Jf@Jh@Fh@Hh@Hh@Hh@Fh@Hh@Hh@Fj@Dh@Fj@Dh@Fj@Dh@Bj@Bh@Dj@Bh@Bj@Bj@Bh@Bj@Bh@Dj@Bh@@j@Bj@Bj@Bh@@j@Bj@Bh@Bj@@j@Bh@Bj@Bj@@h@Bj@Bj@Bj@@h@Bj@Bj@Bh@@j@Bj@Bh@Bj@Bj@@j@Bh@Bj@Bj@Bh@@j@Bj@Bh@Bj@Bj@Bj@@h@@j@@j@@j@?h@@j@@j@Aj@?h@Aj@?j@Aj@?h@Aj@Cj@Ch@Cj@Cj@Ah@Cj@Cj@Ch@Cj@Ej@Eh@Ej@Ej@Eh@Ej@Gf@Gh@Ih@Gh@Ih@Ih@Ih@Ih@Ih@Ih@Kj@Ih@Ih@Mf@Kf@Mh@Kf@Mf@Kh@Mf@Kf@Od@Of@Qd@Of@Od@Of@Od@Od@Sd@Qd@Qd@Qb@Qd@Qd@Sd@Sb@Sb@Sb@Sb@Sb@Sb@Sb@U%60@U%60@Ub@W%60@U%60@U%60@U%60@U%60@Y%5EW%5EW%5EY%5EW%5EW%5EY%5CW%5EW%5EY%5EW%5CY%5EY%5CY%5EW%5CY%5EY%5CW%5CY%5EY%5CY%5EW%5CY%5EY%5CW%5EY%5EW%5CY%5EY%5CW%5EY%5EY%5CW%5EY%5CW%5EY%5EY%5CW%5EY%5CY%5EW%5CY%5EW%5C%5B%5CY%5CYZYTYTYTYVYR%5BT%5BTYT%5BR%5DV%5DV%5DV%5DT_@V%5DV%5DV%5DV%5DT%5DV_@V%5DV%5DT%5DV%5DV%5DV_@V%5DT%5DV%5DV%5DV%5DT_@V%5DV%5DV%5DT%5DV%5DV_@V%5DT%5DV%5DV%5DV%5DT_@V%5DV%5DV%5DT%5DV%5DV%5DV_@V%5DV%5DV%5DV%5DV%5DV%5BZ%5BX%5BZY%5CY%5CY%5EY%5CY%5CY%5CW%5EY%5EW%5CY%5EW%5EY%5CW%5EY%5EW%5CY%5EW%5EY%5EW%5CY%5EW%5EY%5CW%5EY%5EW%5EW%5CY%5EW%5EY%5EW%5EY%5CW%5EY%5EW%5EY%5CW%5EW%5EY%5EW%5EY%5CW%5EY%5EW%5EW%5EY%5EW%5CW%5EY%5EW%5EW%5EY%5EW%5EY%5EW%5CW%5EY%5EW%5EW%5EY%5EW%5EW%5EY%5CW%5EW%5EY%5EW%5EY%5CW%5EY%5EW%5EY%5CW%5EW%5EY%5EW%5CY%5EW%5EY%5EW%5CW%5EY%5EY%5CW%5EY%5EW%5CY%5EW%5EY%5CW%5EY%5EW%5CY%5EW%5EY%5CY%5EW%5EY%5CW%5EY%5CW%5EY%5EW%5CY%5EW%5EY%5CY%5EW%5CY%5EW%5EY%5CY%5EW%5CY%5EY%5CW%5EY%5EW%5CY%5EY%5CW%5EY%5CW%5EY%5EY%5CW%5EY%5CW%5EY%5CY%5EW%5EY%5CW%5EY%5EY%5CW%5EY%5EW%5CY%5EW%5EY%5CY%5EW%5EY%5CW%5EY%5EW%5CY%5EY%5EW%5CY%5EW%5EY%5CW%5EY%5CW%5EY%5EY%5CW%5EY%5CW%5EY%5EW%5CY%5EW%5CY%5EY%5EW%5CY%5EW%5EY%5CW%5EY%5CY%5EW%5EY%5CW%5EY%5CW%5EY%5EW%5CY%5EY%5CW%5EY%5EW%5CY%5EW%5CY%5EW%5EY%5CY%5EW%5CY%5EW%5EY%5CW%5EY%5CW%5EY%5EY%5CW%5EY%5CW%5EY%5EY%5EW%5CY%5EY%5EW%5CY%5EY%5EW%5C%5B%5CYZYZ%5BZ%5DX%5BX%5BZ%5BX%5DX%5BZY%5CY%5CY%5CY%5C', //eslint-disable-line
      }
    ]
  },
  {
    id: "belgranosur",
    name: "Belgrano Sur",
    branches: [
      {
        id: "21",
        name: "M.C.G Belgrano - Buenos Aires",
        slug: "mcgbelgrano",
        directions: [
          {
            id: "21",
            name: "M.C.G Belgrano",
            color: "success"
          },
          {
            id: "22",
            name: "Buenos Aires",
            color: "info"
          }
        ],
        stations: [
          {
            index: 0,
            id: "buenosaires",
            name: "Buenos Aires",
            position: { lat: -34.6455629, lng: -58.3939958 }
          },
          {
            index: 1,
            id: "drsaenz",
            name: "Dr Saenz",
            position: { lat: -34.6490653, lng: -58.415402 }
          },
          {
            index: 2,
            id: "villasoldati",
            name: "Villa Soldati",
            position: { lat: -34.6622014, lng: -58.4408973 }
          },
          {
            index: 3,
            id: "presidenteillia",
            name: "Presidente Illia",
            position: { lat: -34.6660552, lng: -58.4500286 }
          },
          {
            index: 4,
            id: "villalugano",
            name: "Villa Lugano",
            position: { lat: -34.67713, lng: -58.4769699 }
          },
          {
            index: 5,
            id: "villamadero",
            name: "Villa Madero",
            position: { lat: -34.6840978, lng: -58.4925366 }
          },
          {
            index: 6,
            id: "marinosdelfournier",
            name: "Marinos del Fournier",
            position: { lat: -34.6901777, lng: -58.5076299 }
          },
          {
            index: 7,
            id: "tapiales",
            name: "Tapiales",
            position: { lat: -34.7025293, lng: -58.5115373 }
          },
          {
            index: 8,
            id: "aldobonzi",
            name: "Aldo Bonzi",
            position: { lat: -34.7107066, lng: -58.5143488 }
          },
          {
            index: 9,
            id: "sanchezdemendeville",
            name: "Sanchez de Mendeville",
            position: { lat: -34.7124465, lng: -58.5238732 }
          },
          {
            index: 10,
            id: "joseingenieros",
            name: "Jose Ingenieros",
            position: { lat: -34.710762, lng: -58.537256 }
          },
          {
            index: 11,
            id: "justovillegas",
            name: "Justo Villegas",
            position: { lat: -34.708965, lng: -58.5519393 }
          },
          {
            index: 12,
            id: "isidrocasanova",
            name: "Isidro Casanova",
            position: { lat: -34.7045467, lng: -58.5873422 }
          },
          {
            index: 13,
            id: "rafaelcastillo",
            name: "Rafael Castillo",
            position: { lat: -34.6996965, lng: -58.6261936 }
          },
          {
            index: 14,
            id: "merlogomez",
            name: "Merlo Gomez",
            position: { lat: -34.6969888, lng: -58.6477766 }
          },
          {
            index: 15,
            id: "libertad",
            name: "Libertad",
            position: { lat: -34.692147, lng: -58.686403 }
          },
          {
            index: 16,
            id: "marinoscgbelgrano",
            name: "Marinos C. G Belgrano",
            position: { lat: -34.7087611, lng: -58.7309016 }
          }
        ],
        path: 'vsmrEr%7CkcJNd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Jh@Jf@Jh@Lf@Lh@Lf@Nj@Lj@Lj@Lj@Hb@Fd@Hd@Bh@Dj@?h@Aj@?j@Ej@Ch@Cj@Cj@Ch@Ej@Ch@Aj@Cj@@j@@h@Bj@Dj@Fh@Dh@Fj@Fh@Dh@Fj@Fh@Fh@Dj@Fh@Fh@Dj@Fh@Dj@Dh@Fj@Dh@Fj@Dh@Fh@Dj@Dh@Fj@Dh@Fj@Dh@Fh@Dj@Fh@Dj@Fh@Dh@Dj@Fh@Dj@Fh@Dj@Fh@Dh@Fj@Dh@Fj@Dh@Fh@Dj@Fh@Fj@Dh@Fh@Dj@Fh@Dj@Fh@Dh@Fj@Dh@Fh@Dj@Dh@Dh@@j@Bj@@j@?j@@j@@h@?j@@j@Aj@?h@Ih@Gh@Of@Mf@Mf@Mf@Of@Mf@Of@Of@Mf@Of@Mf@Mf@Of@Mf@Of@Md@Mf@Kh@Kf@Kh@Kf@Kh@Kf@Kh@Kh@Kf@Ih@Kh@Kf@Ih@Gh@Gj@Aj@Ah@Aj@?j@Bh@Bj@Dh@Fj@Jf@Jh@Jf@Pd@Pd@Nd@Vb@T%60@V%60@V%5CX%5CX%5C%5CV%5CX%5CV%5EP%60@P%60@L%60@L%60@J%60@L%60@Lb@J%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@J%60@Jb@J%60@J%60@Lb@J%60@J%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@J%60@P%5EP%60@P%5EP%5EP%5ER%60@R%5ER%5ER%5ER%5ER%5ER%5ER%5ER%5ER%5EP%5ER%5ER%60@R%5ER%5ER%5ER%5ERZV%5CXZZX%5CXZV%60@V%5EV%60@Rb@Pb@Pf@Nd@Nf@Nd@Nd@Nf@Pd@Nf@Nd@Pf@Nd@Nf@Nd@Nd@Nf@Pd@Nd@Nf@Nd@Nf@Nd@Nf@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Nf@Nd@Pf@Nd@Nd@Nf@Nd@Pf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nd@Pf@Nd@Lb@Lb@Nb@Lb@Lb@Rj@Pj@Pj@Lh@Lf@Jh@Jf@Hh@Hh@Fj@Hh@Fh@Fh@Fh@Fh@Fj@Hh@Fh@Fh@Fh@Fj@Fh@Fh@Fh@Fj@Fh@Fh@Fh@Hj@Fh@Fh@Fh@Fj@Fh@Fh@Hj@Hf@Jh@Lf@Lf@Nf@Nd@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Pf@Nd@Pd@Nd@Pd@Nf@Pd@Nd@Nd@Pf@Nd@Pd@Nf@Rb@Rb@Rd@V%5CX%5EV%5EXZZ%5CZZXZZ%5CXZ%5CZZXZZZZZXZX%5CX%5CXZX%5CVZX%5CX%5CT%5EV%5CT%5CV%5ET%5CV%5CT%5EV%5CV%5CT%5EV%5CT%5CV%5CV%5CXZX%5CXX%5CX%5CTb@T%60@Pd@Pd@Nd@Lf@Jh@Jf@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Hh@Hh@Hh@Hh@Jh@Hh@Hf@Hh@Hh@Hh@Jh@Hh@Hh@Hh@Hf@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Jh@Hh@Hf@Hh@Hh@Hh@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Hh@Hf@Jh@Hh@Hh@Hh@Hh@Jh@Hh@Jf@Hh@Jh@Jh@Jf@Lf@Lf@Lf@Lf@Nf@Lf@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Pf@Nd@Nd@Nf@Pd@Nf@Nd@Nf@Pd@Nf@Nd@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Pd@Nf@Nd@Pd@Nd@Pf@Nd@Pd@Pb@Pd@Rb@Tb@Rb@T%60@Tb@Rb@V%5EV%5EV%60@X%5CX%5CX%5CX%5CX%5CZ%5CXZX%5CZ%5CXZZ%5CXZX%5CZ%5CXZX%5CZ%5CXZZ%5CX%5CZZZX%5CV%5ER%5ER%60@L%60@Nb@J%60@Fb@Fb@?b@?b@Cb@E%60@K%60@K%60@Q%5EO%5EW%5CWX%5DZ%5BV_@X_@V_@X_@V%5DV_@X_@V_@V_@X_@V_@V_@X_@V%5DV_@V_@X_@V_@V_@X_@V_@V_@V_@Va@V_@X_@V_@V_@V_@Va@V_@X_@V_@V_@V_@Va@V_@V_@V_@X_@V_@V_@V_@Va@V_@V_@V_@V_@Tc@Ta@T%5DT%5DR%5BR%5BVa@V_@%5C%5BZW%5ES%60@Ob@Ib@Gb@Ab@@%60@Db@J%60@N%5ERZX%5CXXZX%5CZ%5CX%5CX%5CV%5ETb@Pb@Pd@Jh@Lf@Hh@Hh@Hh@Jf@Hh@Hh@Jh@Hh@Hh@Jh@Hh@Hf@Jh@Hh@Hh@Jh@Hh@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Hf@Hh@Jh@Hh@Hh@Hh@Hf@Hh@Hh@Hh@Hh@Hh@Jh@Hh@Hf@Hh@Hh@Hh@Fh@Hh@Hj@Hh@Hh@Hh@Hh@Fh@Fh@Fj@Bh@Dj@Dh@@j@Bj@@j@@h@?j@Aj@?j@Aj@?h@Cj@Cj@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Eh@Ej@Ch@Ej@Eh@Ej@Ej@Ch@Ej@Eh@Ej@Eh@Ej@Eh@Ej@Eh@Ej@Eh@Cj@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Cj@Ej@Ch@Ej@Cj@Ch@Ej@Cj@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Ch@Ej@Ej@Eh@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Ej@Eh@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Cj@Ej@Eh@Cj@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Ej@Ch@Ej@Eh@Ej@Ch@Ej@Ej@Eh@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Ej@Eh@Cj@Eh@Ej@Ch@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Eh@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Ch@Ej@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Ch@Ej@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Ej@Eh@Cj@Eh@Ej@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Eh@Ej@Eh@Cj@Eh@Ej@Eh@Ej@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Ej@Ch@Ej@Eh@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Ch@Ej@Ej@Eh@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Eh@Ej@Ch@Ej@Ej@Eh@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Ej@Ch@Ej@Ch@Ej@Ej@Ch@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Ch@Ej@Eh@Cj@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Ej@Eh@Cj@Ej@Eh@Ej@Eh@Cj@Eh@Ej@Ej@Ch@Ej@Eh@Ej@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Eh@Ej@Eh@Gj@Eh@Ej@Cj@Ch@Cj@?j@?j@?j@Bh@@j@Bj@Fh@Fh@Hj@Lf@Nf@Lf@Ld@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Pf@Nd@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Pf@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@??Pd@Rb@Rd@Pd@Nd@', //eslint-disable-line
      },
      {
        id: "23",
        name: "Puente Alsina - Aldo Bonzi",
        slug: "aldobonzi",
        directions: [
          {
            id: "23",
            name: "Puente Alsina",
            color: "success"
          },
          {
            id: "24",
            name: "Aldo Bonzi",
            color: "info"
          }
        ],
        stations: [
          {
            index: 0,
            id: "puentealsina",
            name: "Puente Alsina",
            position: { lat: -34.6614611, lng: -58.414587 }
          },
          {
            index: 1,
            id: "villadiamante",
            name: "Villa Diamante",
            position: { lat: -34.6817442, lng: -58.4283297 }
          },
          {
            index: 2,
            id: "villacaraza",
            name: "Villa Caraza",
            position: { lat: -34.6980032, lng: -58.4290641 }
          },
          {
            index: 3,
            id: "villafiorito",
            name: "Villa Fiorito",
            position: { lat: -34.7053789, lng: -58.4409217 }
          },
          {
            index: 4,
            id: "ingbudge",
            name: "Ing. Budge",
            position: { lat: -34.7186633, lng: -58.4621518 }
          },
          {
            index: 5,
            id: "lasalada",
            name: "La Salada",
            position: { lat: -34.7188075, lng: -58.4727139 }
          },
          {
            index: 6,
            id: "apeaderokm12",
            name: "Apeadero Km 12",
            position: { lat: -34.7100582, lng: -58.5059269 }
          },
          {
            index: 7,
            id: "aldobonzi",
            name: "Aldo Bonzi",
            position: { lat: -34.7111965, lng: -58.5160229 }
          }
        ],
        path: 'byprEdbpcJSb@Sd@Gh@If@Cj@Aj@Cj@Ah@?j@?j@Aj@Dh@Pf@Nd@V%60@V%5E%5CV%5CVXJVJ%5CD%5CB%5CDb@@b@@b@Bb@@b@@b@@b@Bb@@b@@b@@b@Bb@@b@@b@Bb@@b@@b@Bb@@b@@b@Bb@@b@@b@Bb@@b@@b@Bb@@b@@b@Bb@@b@@b@Bb@@b@@b@Bb@@b@@b@Bb@B%60@Db@H%60@J%60@P%5EN%5EV%5CV%5CTZ%5CZZXZZZZZXZZ%5CZZZZXZZZZZZZXZZZZ%5CZZXZZZZZZZXZZZZ%5CZZXZZZZZZZXZZZZZZ%5CXZZZZZZZZZXZZZZZZZZZXZZZZZZZZZXZZZZZZZZZXZZZZZ%5CXZZZXZZ%5CT%5ET%5CTb@N%60@Lb@H%60@Fb@@b@?b@Cb@Cb@Cb@C%60@Eb@Cb@Cb@Eb@Cb@Cb@Eb@Cb@Cb@Eb@Cb@Cb@Cb@E%60@Cb@Cb@Eb@Cb@Cb@Eb@Cb@Cb@Eb@Cb@Cb@Eb@C%60@Cb@Eb@Cb@Cb@Eb@Cb@Cb@Eb@Cb@Cb@Eb@Cb@C%60@Eb@Cb@Cb@Eb@Cb@Cb@Eb@Cb@Cb@Eb@Cb@Cb@E%60@Cb@Cb@Eb@Cb@Cb@Cb@Eb@Cb@Cb@Cb@Eb@Cb@Ab@?b@Fb@H%60@H%60@J%60@J%60@L%60@Jb@J%60@L%60@Jb@L%60@J%60@Jb@J%60@L%60@Jb@J%60@J%60@Jb@J%60@L%5EP%5EP%5EVZZV%5CT%60@T%60@Tb@Tb@R%60@Tb@T%60@Rb@T%60@Tb@Tb@T%60@R%60@Tb@T%60@Tb@T%60@T%60@Tb@T%60@Rb@T%60@Tb@T%60@T%60@Tb@T%60@T%60@Tb@T%60@Rb@T%60@T%60@Tb@T%60@T%60@Tb@T%60@Tb@T%60@T%60@Tb@T%60@R%60@Tb@T%60@Tb@T%60@Rb@T%60@Tb@T%60@Tb@T%60@R%60@Tb@T%60@Tb@T%60@Tb@R%60@Tb@T%60@T%60@Tb@T%60@Rb@T%60@Tb@T%60@Tb@T%60@T%60@Rb@T%60@Tb@T%60@T%60@Tb@T%60@Tb@T%60@R%60@Tb@T%60@Tb@T%60@T%60@Tb@T%60@Tb@T%60@T%60@Rb@T%60@T%60@Tb@T%60@T%60@Tb@T%60@T%60@Tb@T%60@T%60@Tb@T%60@T%60@Tb@R%60@Tb@T%60@Tb@T%60@T%60@Tb@T%60@Tb@R%60@Tb@T%60@T%60@Tb@T%60@Rb@T%60@Tb@T%60@T%60@Tb@R%60@Tb@T%60@Tb@T%60@T%60@Rb@T%60@Tb@T%60@Tb@T%60@T%60@Tb@T%60@T%60@Rb@T%60@Tb@T%60@T%60@Tb@T%60@T%60@Tb@T%60@T%60@Tb@T%60@Rb@T%60@T%60@Tb@T%60@Tb@T%60@Tb@R%60@T%60@Tb@T%60@Tb@T%60@Tb@R%60@T%60@Tb@T%60@Tb@T%60@T%60@Tb@R%60@Tb@T%60@Tb@T%60@T%60@Tb@T%60@Rb@T%60@Tb@T%60@Rb@Pd@Pd@Lf@Nf@Lf@Hh@Hh@Hh@Fh@Dj@Fh@?j@@j@@h@Aj@Aj@Cj@Ch@Ej@Ch@Ej@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Eh@Ej@Cj@Eh@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Eh@Ej@Ej@Eh@Ej@Eh@Ej@Ch@Ej@Eh@Cj@Eh@Ej@Ch@Ej@Cj@Ch@Cj@Cj@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Ej@Cj@Eh@Ej@Ch@Ej@Ej@Ch@Ej@Eh@Cj@Ej@Eh@Cj@Eh@Cj@Ej@Ch@Cj@?j@Aj@?j@?j@?j@@h@Bj@Fh@Hh@Hh@Jh@Hf@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Hh@Fh@Dj@Bh@@j@@j@?j@?j@Ej@Ch@Ej@Ch@Ej@Eh@Ej@Ej@Ch@Gh@Ej@Ih@Kf@Of@Qd@Sb@U%60@W%60@Y%5C%5DX%5BX_@T%5DT_@T_@R_@T_@R%5DT%5DX%5BX%5BZY%5CY%5CW%5EW%5EY%5EW%5EY%5EW%5CW%5EY%5EW%5EY%5EW%5EW%5EY%5EW%5EW%5CY%5EW%5EW%5EY%5EW%5EW%5EY%5EW%5EY%5CW%5EW%5EY%5EW%5EW%5EY%5EW%5EW%60@W%5EW%5EW%60@U%5EW%60@W%5EW%60@Ub@S%60@Of@Od@Kh@Ih@Eh@Cj@Aj@Bj@Bh@Fh@Hh@Hh@Fh@Jh@Hh@Hh@Hh@Jh@Hh@Hh@Jh@Hh@Hf@Hh@Jh@Hh@Hh@Hh@Jh@Hh@Jf@Hh@Hh@Jh@Hh@Hh@Hf@Jh@Hh@Hh@Jh@Hh@Hh@Hf@Jh@Hh@', //eslint-disable-line
      },
      {
        id: "25",
        name: "Buenos Aires - Gonzalez Catan",
        slug: "gonzalezcatan",
        directions: [
          {
            id: "25",
            name: "Gonzalez Catan",
            color: "success"
          },
          {
            id: "26",
            name: "Buenos Aires",
            color: "info"
          }
        ],
        stations: [
          {
            index: 0,
            id: "buenosaires",
            name: "Buenos Aires",
            position: { lat: -34.6455629, lng: -58.3939958 }
          },
          {
            index: 1,
            id: "drsaenz",
            name: "Dr Saenz",
            position: { lat: -34.6490653, lng: -58.415402 }
          },
          {
            index: 2,
            id: "villasoldati",
            name: "Villa Soldati",
            position: { lat: -34.6622014, lng: -58.4408973 }
          },
          {
            index: 3,
            id: "presidenteillia",
            name: "Presidente Illia",
            position: { lat: -34.6660552, lng: -58.4500286 }
          },
          {
            index: 4,
            id: "villalugano",
            name: "Villa Lugano",
            position: { lat: -34.67713, lng: -58.4769699 }
          },
          {
            index: 5,
            id: "villamadero",
            name: "Villa Madero",
            position: { lat: -34.6840978, lng: -58.4925366 }
          },
          {
            index: 6,
            id: "marinosdefournier",
            name: "Marinos del Fournier",
            position: { lat: -34.6901777, lng: -58.5076299 }
          },
          {
            index: 7,
            id: "tapiales",
            name: "Tapiales",
            position: { lat: -34.7025293, lng: -58.5115373 }
          },
          {
            index: 8,
            id: "ingenierocastello",
            name: "Ingeniero Castello",
            position: { lat: -34.7105416, lng: -58.5063521 }
          },
          {
            index: 9,
            id: "querandi",
            name: "Querandi",
            position: { lat: -34.7223687, lng: -58.5307279 }
          },
          {
            index: 10,
            id: "laferrere",
            name: "Laferrere",
            position: { lat: -34.7507523, lng: -58.5844338 }
          },
          {
            index: 11,
            id: "mariaevaduarte",
            name: "Maria Eva Duarte",
            position: { lat: -34.7559594, lng: -58.6001849 }
          },
          {
            index: 12,
            id: "independencia",
            name: "Independencia",
            position: { lat: -34.7607983, lng: -58.6173412 }
          },
          {
            index: 13,
            id: "gonzalezcatan",
            name: "Gonzalez Catan",
            position: { lat: -34.7702708, lng: -58.6449081 }
          }
        ],
        path: 'vsmrEr%7CkcJNd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Jh@Jf@Jh@Lf@Lh@Lf@Nj@Lj@Lj@Lj@Hb@Fd@Hd@Bh@Dj@?h@Aj@?j@Ej@Ch@Cj@Cj@Ch@Ej@Ch@Aj@Cj@@j@@h@Bj@Dj@Fh@Dh@Fj@Fh@Dh@Fj@Fh@Fh@Dj@Fh@Fh@Dj@Fh@Dj@Dh@Fj@Dh@Fj@Dh@Fh@Dj@Dh@Fj@Dh@Fj@Dh@Fh@Dj@Fh@Dj@Fh@Dh@Dj@Fh@Dj@Fh@Dj@Fh@Dh@Fj@Dh@Fj@Dh@Fh@Dj@Fh@Fj@Dh@Fh@Dj@Fh@Dj@Fh@Dh@Fj@Dh@Fh@Dj@Dh@Dh@@j@Bj@@j@?j@@j@@h@?j@@j@Aj@?h@Ih@Gh@Of@Mf@Mf@Mf@Of@Mf@Of@Of@Mf@Of@Mf@Mf@Of@Mf@Of@Md@Mf@Kh@Kf@Kh@Kf@Kh@Kf@Kh@Kh@Kf@Ih@Kh@Kf@Ih@Gh@Gj@Aj@Ah@Aj@?j@Bh@Bj@Dh@Fj@Jf@Jh@Jf@Pd@Pd@Nd@Vb@T%60@V%60@V%5CX%5CX%5C%5CV%5CX%5CV%5EP%60@P%60@L%60@L%60@J%60@L%60@Lb@J%60@J%60@Jb@L%60@J%60@J%60@Lb@J%60@J%60@L%60@Jb@J%60@J%60@Jb@J%60@J%60@Lb@J%60@J%60@J%60@Jb@J%60@J%60@Jb@L%60@J%60@J%60@P%5EP%60@P%5EP%5EP%5ER%60@R%5ER%5ER%5ER%5ER%5ER%5ER%5ER%5ER%5EP%5ER%5ER%60@R%5ER%5ER%5ER%5ERZV%5CXZZX%5CXZV%60@V%5EV%60@Rb@Pb@Pf@Nd@Nf@Nd@Nd@Nf@Pd@Nf@Nd@Pf@Nd@Nf@Nd@Nd@Nf@Pd@Nd@Nf@Nd@Nf@Nd@Nf@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nd@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Nf@Nd@Pf@Nd@Nd@Nf@Nd@Pf@Nd@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nd@Nf@Nd@Pf@Nd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nd@Pf@Nd@Lb@Lb@Nb@Lb@Lb@Rj@Pj@Pj@Lh@Lf@Jh@Jf@Hh@Hh@Fj@Hh@Fh@Fh@Fh@Fh@Fj@Hh@Fh@Fh@Fh@Fj@Fh@Fh@Fh@Fj@Fh@Fh@Fh@Hj@Fh@Fh@Fh@Fj@Fh@Fh@Hj@Hf@Jh@Lf@Lf@Nf@Nd@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Pf@Nd@Pd@Nd@Pd@Nf@Pd@Nd@Nd@Pf@Nd@Pd@Nf@Rb@Rb@Rd@V%5CX%5EV%5EXZZ%5CZZXZZ%5CXZ%5CZZXZZZZZXZX%5CX%5CXZX%5CVZX%5CX%5CT%5EV%5CT%5CV%5ET%5CV%5CT%5EV%5CV%5CT%5EV%5CT%5CV%5CV%5CXZX%5CXX%5CX%5CTb@T%60@Pd@Pd@Nd@Lf@Jh@Jf@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Hh@Hh@Hh@Hh@Jh@Hh@Hf@Hh@Hh@Hh@Jh@Hh@Hh@Hh@Hf@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Jh@Hh@Hf@Hh@Hh@Hh@Hh@Hh@Jh@Hh@Hh@Hh@Hh@Hh@Hh@Hf@Jh@Hh@Hh@Hh@Hh@Jh@Hh@Jf@Hh@Jh@Jh@Jf@Lf@Lf@Lf@Lf@Nf@Lf@Nf@Nd@Nf@Nd@Nf@Nf@Nd@Nf@Nd@Pd@Nf@Nd@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nd@Pf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Nd@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Pf@Nd@Nd@Nf@Pd@Nf@Nd@Nf@Pd@Nf@Nd@Nd@Nf@Nd@Nf@Nd@Nf@Nd@Nf@Pd@Nf@Nd@Nf@Pd@Nf@Nd@Pd@Nd@Pf@Nd@Pd@Pb@Pd@Rb@Tb@Rb@T%60@Tb@Rb@V%5EV%5EV%60@X%5CX%5CX%5CX%5CX%5CZ%5CXZX%5CZ%5CXZZ%5CXZX%5CZ%5CXZX%5CZ%5CXZZ%5CX%5CZZZX%5CV%5ER%5ER%60@L%60@Nb@J%60@Fb@Fb@?b@?b@Cb@E%60@K%60@K%60@Q%5EO%5EW%5CWX%5DZ%5BV_@X_@V_@X_@V%5DV_@X_@V_@V_@X_@V_@V_@X_@V%5DV_@V_@X_@V_@V_@X_@V_@V_@V_@Va@V_@X_@V_@V_@V_@Va@V_@X_@V_@V_@V_@Va@V_@V_@V_@X_@V_@V_@V_@Va@V_@V_@V_@V_@Tc@Ta@T%5DT%5DTg@Ve@Ta@Ta@Ta@Ta@Va@Ta@Va@X%5BZ%5DZY%5CW%5EU%5ES%5EO%60@Ob@Gb@Ib@Ab@Cb@D%60@Bb@D%60@Jb@L%60@J%5ET%5ER%5ERZXZXZ%5CX%5CV%5EV%5ETd@Rb@Pb@Nf@Lf@Lf@Jh@Jh@Jf@Jh@Jf@Jh@Hh@Jf@Jh@Jf@Jh@Jf@Jh@Jh@Jf@Hh@Jf@Jh@Jh@Lf@Lf@Pd@Pd@Rb@Rb@Rd@Pb@Rb@Rd@Rb@Rd@Pb@Rb@Rd@Rb@Rb@Rd@Pb@Rb@Rb@Rd@Rb@Pb@Rb@Rd@Rb@Pd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rd@Pb@Rb@Rd@Rb@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Rb@Pd@Rb@Rb@Rd@Rb@Pb@Rd@Rb@Rb@Pd@Rb@Pd@Rb@Rb@Rd@Rb@Pd@Rb@Rb@Rd@Rb@Pb@Rd@Rb@Pb@Rd@Rb@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pb@Rd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rb@Rd@Pb@Rd@Rb@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rb@Rd@Rb@Pb@Rd@Rb@Pd@Rb@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Pb@Rd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Rb@Pd@Rb@Rb@Pb@Rd@Rb@Rb@Pd@Rb@Rd@Pb@Rd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Pb@Rd@Rb@Rb@Pd@Rb@Rb@Rb@Pd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rb@Rd@Pb@Rd@Rb@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Pd@Rb@Rb@Pd@Rb@Rb@Rd@Pb@Rd@Rb@Pb@Rd@Rb@Pd@Rb@Rb@Rd@Pb@Rd@Rb@Pb@Rd@Rb@Rd@Pb@Rd@Rb@Pb@Rd@Rb@Rd@Pb@Rb@Rd@Rb@Pb@Rd@Rb@Rd@Rb@Pb@Rd@Rb@Rb@Rd@Pb@Rb@Rd@Rb@Rd@Pb@Rb@Rd@Pb@Rb@Rd@Pb@Rb@Rd@Pb@Rd@Rb@Rb@Pd@Rb@Rd@Pb@Rb@Rd@Pb@Rd@Rb@Pd@Rb@Rd@Pb@Rd@Rb@Pb@Rd@Rb@Rd@Pb@Rd@Rb@Rb@Pd@Rb@Rd@Pb@Rb@Pd@Rb@Rd@Pb@Rb@Pd@Rb@Rb@Rd@Rb@Pb@Rd@Rb@Rd@Rb@Pb@Rd@Rb@Rb@Rd@Pb@Rb@Rd@Pb@Rd@Rb@Rd@Pb@Rb@Rd@Pb@Rd@Rb@Pd@Rb@Rb@Rd@Pb@Rd@Rb@Pd@Rb@Rb@Pd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Pd@Rb@Rb@Pd@Rb@Rd@Rb@Pb@Rd@Rb@Pd@Rb@Rb@Pd@Rb@Rd@Pb@Rd@Rb@Pd@Rb@Rd@Pb@Rd@Rb@Pb@Rd@Rb@Rd@Pb@Rb@Rb@Rd@Pb@Rb@Rd@Rb@Rb@Pd@Rb@Rb@Pd@Rb@Rd@Pb@Rb@Rd@Rb@Pd@Rb@Rb@Rd@Rb@Rd@Rb@Pb@Rd@Pb@Rd@Pb@Rd@Rb@Pd@Rb@Pd@Nd@Nf@Nf@Nf@Nd@Jh@Lf@Hh@Jf@Jh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Hh@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Jh@Jh@Jf@Jh@Jh@Hf@Jh@Jf@Jh@Jh@Jf@Jh@Hf@Jh@Jh@Jf@Jh@Jh@Hf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Hh@Jh@Jf@Jh@Jh@Hf@Jh@Jf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Jh@Jh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Jh@Hf@Jh@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Hh@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Jf@Jh@Jh@Jf@Jh@Jh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Hf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Jh@Jh@Hf@Jh@Jh@Jf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Jh@Jh@Hf@Jh@Jh@Jf@Jh@Jh@Hf@Jh@Jh@Jf@Jh@Hh@Jf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Jh@Hf@Jh@Jh@Jf@Jh@Jh@Hf@Jh@Jh@Jf@Jh@Jh@Jf@Hh@Jh@Jf@Jh@Jh@Jf@Jh@Jh@Jf@Jh@Jh@Nd@Nd@Nf@T%60@Tb@T%60@V%60@V%5EV%5ET%60@V%5EV%5EV%60@V%5EV%60@V%60@T%5EV%60@V%60@T%5EV%60@T%60@V%60@V%5ET%60@V%60@V%5EV%60@V%5EV%5EV%60@V%5EV%5EV%60@T%5EV%60@V%5EV%5EV%60@V%5EV%5EV%60@', //eslint-disable-line
      }
    ]
  }
]

module.exports = {
  LINES_DATA
}
