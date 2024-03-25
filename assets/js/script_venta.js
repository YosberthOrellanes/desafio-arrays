const propiedadesVenta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane,Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },   
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road,Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },   
    {
nombre: 'Penthouse de lujo con terraza panorámica',
src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },   
    
    {
    nombre: 'Casa en parcela',
    src: 'https://www.puconpropiedades.com/fotos/prop_1223_foto_24020.jpg',
    descripcion: 'Hermosa casa en parcela cerca de Villarica, cerca del lago',
    ubicacion: '2119 Los Riscos Villarica',
    habitaciones: 3,
    baños: 2,
    costo: 3200,
    smoke: true,
    pets: true
    },    
    {  /*Segundo objeto*/
    nombre: 'Casa de dos pisos',
    src: 'https://http2.mlstatic.com/D_NQ_NP_850097-MLC72293983604_102023-O.webp',
    descripcion: 'Comoda casa en Punta Arenas,cerca de centros turisticos',
    ubicacion: '456 Punta Arenas avenida',
    habitaciones: 2,
    baños: 2,
    costo: 2500,
    smoke: true,
    pets: true
    },
    {/*Tercer objeto*/
    nombre: 'Lujoso departamento',
        src: 'https://imgclasificados3.emol.com/Proyectos/imagenes//PR_FOTO_4504_1.jpg',
        descripcion: 'Departamento con vista al mall',
        ubicacion: '267 Los Pablos,Temuco',
        habitaciones: 2,
        baños: 2,
        costo: 4350,
        smoke: false,
        pets: false
    },
    {/*Cuarto objeto*/
        nombre: 'Departamento con parques y piscina',
        src: 'https://imganuncios.mitula.net/departamento_en_venta_en_calama_1410026670008023208.jpg',
        descripcion: 'Hermoso departamento cerca del centro',
        ubicacion: '583 Calama',
        habitaciones: 3,
baños: 2,
costo: 3100,
smoke: true,
pets: false
},
]


const ventaContainer =document.querySelector("#venta")
let allVenta = "";





for (const propiedad of propiedadesVenta) {
allVenta += `
<div class="col-md-4 mb-4">
<div class="card">
<img src="${propiedad.src}" class="card-img-top" alt="Cabaña en las montañas"/>
<div class="card-body">
<h5 class="card-title">${propiedad.nombre}</h5>
<p class="card-text">${propiedad.descripcion} </p>
<p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
<p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones 
<i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>


<p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
</div>
</div>
</div>
`;
}

ventaContainer.innerHTML = allVenta;