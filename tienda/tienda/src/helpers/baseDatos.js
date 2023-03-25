//quemar una base de datos 

/*let nombre="producto1"
let descripcion="ponga la descripción del producto aquí"
let foto="no tengo"
let precio=70000
let popularidad=4.*/

export let productos=Array(
    {
        nombre:"Reloj Citizen Bi5070-57h",
        descripcion:"Reloj japonés elegante, color plateado, dial negro, resistente al agua, inoxidable, perfecto para el día a día",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Citizen%20Bi5070-57h%20foto%201.jpg?alt=media&token=10072179-2fc5-419b-8600-188bdc6ffdfa","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Citizen%20Bi5070-57h%20foto%202.jpg?alt=media&token=d9b79d18-851b-4933-aba4-969fa49c4afe","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Citizen%20Bi5070-57h%20foto%202.jpg?alt=media&token=d9b79d18-851b-4933-aba4-969fa49c4afe"],
        precio:789000,
        popularidad:4.2
    },
    {
        nombre:"Huawei SmartWatch GT Sport 2",
        descripcion:"Reloj chino inteligente, color negro, esfera del reloj cambiable según el gusto del portador, resistente al agua, ideal para salir a correr o hacer ejercicio",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/H%20SmartWatch%20GT%20Sport%202%20foto%201.jpg?alt=media&token=b837e364-677b-4b38-b94d-865ab974b0a5","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/H%20SmartWatch%20GT%20Sport%202%20foto%202.jpg?alt=media&token=1ac6efdf-a979-4d80-ba62-e2ed5cf30cc8","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/H%20SmartWatch%20GT%20Sport%202%20foto%202.jpg?alt=media&token=1ac6efdf-a979-4d80-ba62-e2ed5cf30cc8"],
        precio:1050000,
        popularidad:4.2
    },
    {
        nombre:"Q&Q Deportivo",
        descripcion:"Reloj japonés deportivo, color negro o blanco, resistente al agua, ideal para salir a correr o hacer ejercicio",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Q%26Q%20Deportivo%20foto%201.jpg?alt=media&token=f688f649-ff10-405a-987b-5df89bf6fc0b","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Q%26Q%20Deportivo%20foto%202.jpg?alt=media&token=c9ea92a5-c401-48bb-87b9-d156b35cb449","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Q%26Q%20Deportivo%20foto%202.jpg?alt=media&token=c9ea92a5-c401-48bb-87b9-d156b35cb449"],
        precio:100000,
        popularidad:4.2
    },
    {
        nombre:"Reloj KOSMO K612B",
        descripcion:"Reloj colombiano elegante, color azul acero, dial de mecanismo dorado, resistente al agua, perfecto para ocasiones especiales o reuniones",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Rolex%20Gold%20foto%201.jpg?alt=media&token=e71330f7-bb29-4f7c-9fcc-79d685677542","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Rolex%20Gold%20foto%202.jpg?alt=media&token=c83f8e00-c306-44c6-9a50-bfde27970bc1","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Rolex%20Gold%20foto%202.jpg?alt=media&token=c83f8e00-c306-44c6-9a50-bfde27970bc1"],
        precio:299000,
        popularidad:4.2
    },
    {
        nombre:"Tissot T137.407.16.051.00",
        descripcion:"Reloj suizo elegante, color plateado, manilla de cuero negra, dial negra con toques plateados, perfecto para el día a día",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Tissot%20T137.407.16.051.00%20foto%201.jpg?alt=media&token=c96ab1ea-08a3-413a-b594-c00db5900fd6","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Tissot%20T137.407.16.051.00%20foto%202.jpg?alt=media&token=edfaad7e-e126-443e-90cb-d690292bbbd7","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Tissot%20T137.407.16.051.00%20foto%202.jpg?alt=media&token=edfaad7e-e126-443e-90cb-d690292bbbd7"],
        precio:4400000,
        popularidad:4.2
    },
    {
        nombre:"Casio Data Bank DBC-32",
        descripcion:"Reloj japonés tipo calculadora, color negro, display digital, manilla negra, perfecto para realizar operaciones matemáticas",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Cassio%20Data%20Bank%20DBC-32%20foto%201.jpg?alt=media&token=255e0995-9327-490d-b054-8135004693d4","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Cassio%20Data%20Bank%20DBC-32%20foto%202.jpg?alt=media&token=3bfc49cf-4dd1-45e8-8554-93356473368d"],
        precio:218000,
        popularidad:4.2
    },
    {
        nombre:"Cartier Santos",
        descripcion:"Reloj francés elegante, color plateado con toques de dorado, dial de mecanismo, resistente al agua, perfecto para ocasiones especiales o reuniones",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Cartier%20Santos%20foto%201.jpg?alt=media&token=4e656acc-a59b-4084-aa11-55473afd2944","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Cartier%20Santos%20foto%202.jpg?alt=media&token=17c9c01a-2631-424c-952e-a63f16373b8d"],
        precio:33000000,
        popularidad:4.2
    },
    {
        nombre:"Curren 8363",
        descripcion:"Reloj chino elegante, color azul acero con pequeños detalles en color bronce, resistente al agua, inoxidable, perfecto para ocasiones especiales o reuniones",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Curren%208363%20foto%201.jpg?alt=media&token=0aaf142f-3dc4-4ed1-a1f9-ebfe86fd48e7","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Curren%208363%20%20foto%202.jpg?alt=media&token=f089e224-5a5e-4cf2-bcf4-bed9423947d0"],
        precio:210000,
        popularidad:4.2
    },
    {
        nombre:"Xiaomi Mi Smart Band 7",
        descripcion:"Reloj chino inteligente, color negro, esfera del reloj cambiable según el gusto del portador, resistente al agua, ideal para salir a correr o hacer ejercicio",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Xiaomi%20Mi%20band%20foto%201.jpg?alt=media&token=6f575dd3-76e2-456d-943d-e33bb149ed52","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Xiaomi%20Mi%20band%20foto%202.jpg?alt=media&token=ce416f99-fd08-41e5-ba68-3039db779895"],
        precio:228000,
        popularidad:4.2
    },
    {
        nombre:"Tommy Hilfiger 1791908",
        descripcion:"Reloj estadounidense informal, color plateado, manilla de cuero cafe, resistente al agua, inoxidable, perfecto para el día a día",
        fotos:["https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Tommy%20Hilfinger%201791908%20foto%201.jpg?alt=media&token=0382d9a0-640a-46aa-9ac0-7b238d9287f7","https://firebasestorage.googleapis.com/v0/b/jdeatienda.appspot.com/o/Tommy%20Hilfiger%201791908%20foto%202.jpg?alt=media&token=fe0498cf-925f-498b-98be-7f385f67cbe2"],
        precio:350000,
        popularidad:4.2
    }
)