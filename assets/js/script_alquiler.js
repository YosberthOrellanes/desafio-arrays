const propiedadesAlquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Cómodas cabañas de madera a los pies de la montaña',
      ubicacion: '456 Ocean Avenue,Seaside Town, CA 56789',
      habitaciones: 3,
      baños: 3,
      costo: 2500,
      smoke: true,
      pets: true
      },   
      {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Cómodas cabañas de madera a los pies de la montaña',
        ubicacion: '123 Main Street,Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
        },   
        {
          nombre: 'Condominio moderno en zona residencial',
          src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
          descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
          ubicacion: '123 Main Street,Anytown, CA 91234',
          habitaciones: 2,
          baños: 2,
          costo: 2200,
          smoke: false,
          pets: false
          },   
    {
    nombre: 'Cabaña en las montañas',
    src: 'https://i.pinimg.com/originals/4c/2f/09/4c2f090d7c3c237a238c8c200c53fa2c.jpg',
    descripcion: 'Cómodas cabañas de madera a los pies de la montaña',
    ubicacion: '345 Neustatt Alm en Estiria,Austria',
    habitaciones: 3,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: true
    },    
    {  /*Segundo objeto*/
        nombre: 'Hotel Burbuja',
        src: 'https://mymodernmet.com/wp/wp-content/uploads/2020/09/Buubble-hotel-northern-lights2.jpg',
        descripcion: 'Duerme bajo la aurora boreal en este encantador hotel burbuja',
        ubicacion: '562 Escandinavia, Polo Norte ',
        habitaciones: 1,
        baños: 1,
        costo: 3500,
        smoke: false,
        pets: false
    },
    {/*Tercer objeto*/
        nombre: 'Casa de playa',
        src: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/10/20/16347583190744.jpg',
        descripcion: 'Tres versiones del edén mas deseado del mundo',
        ubicacion: '861, Asia las Maldivas',
        habitaciones: 5,
        baños: 4,
        costo: 4350,
        smoke: true,
        pets: false
    },
    {/*Cuarto objeto*/
        nombre: 'Casas antiguas',
        src: 'https://grecaimages.s3.sa-east-1.amazonaws.com/blog/5e1cc05a654bd-capadocia-globos.jpg',
        descripcion: 'Casas en Capadoocia para mirar el festival de los globos',
        ubicacion: '5634 Capadoccia,Turquia',
        habitaciones: 4,
        baños: 3,
        costo: 3000,
        smoke: true,
        pets: true
    },
  ]
  
  
  const alquilerContainer =document.querySelector("#alquiler")
  let allAlquiler = "";
  
  
  for (const propiedad of propiedadesAlquiler) {
  allAlquiler += `
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
  
  alquilerContainer.innerHTML = allAlquiler;