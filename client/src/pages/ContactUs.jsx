import React from 'react';

const ContactUs = () => {
  const googleMapsURL =
    "https://www.google.com/maps/embed?pb=!4v1699925929000!6m8!1m7!1sQJq1FQt541S4RuiHIleYpQ!2m2!1d-4.587241!2d-81.265733!3f291.14!4f0!5f0.7820865974627469";

  return (
    <div className="bg-orange-900 min-h-screen flex items-center justify-center px-4 py-8 md:px-16 mt-16">
      <div className="bg-amber-700 rounded-lg shadow-lg p-8 w-full md:w-3/4 lg:w-2/3 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Contáctanos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='text-white'>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Detalles de Contacto:
            </h2>
            <p className="mb-2">
              <strong>WhatsApp:</strong> +51 987 654 321
            </p>
            <p className="mb-2">
              <strong>Teléfono:</strong> +51 073 123 456
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contacto@dpeñas.com"

              >
                contacto@dpeñas.com
              </a>
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4 text-white">
              Dirección:
            </h2>
            <p>Salón de Usos Múltiples</p>
            <p>A.A.H.H. Maruja Cabredo de Castillo</p>
            <p>Pariñas, Talara, Piura</p>

            <h2 className="text-xl font-semibold mt-6 mb-4 text-white">
              Horarios de Atención:
            </h2>
            <p>
              <strong>Lunes a Viernes:</strong> 9:00 AM - 10:00 PM
            </p>
            <p>
              <strong>Sábado y Domingo:</strong> 10:00 AM - 11:00 PM
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Encuéntranos aquí:
            </h2>
            <iframe
              src={googleMapsURL}
              title="Google Maps D'Peñas"
              width="100%"
              height="250"
              className="border-0 rounded-md shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/place/Salon+de+Usos+Multiples+A.A.H.H+Maruja+cabredo+de+Castillo/@-4.587241,-81.2657334,3a,75y,291.14h,75.16t/data=!3m7!1e1!3m5!1sQJq1FQt541S4RuiHIleYpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.842471823921372%26panoid%3DQJq1FQt541S4RuiHIleYpQ%26yaw%3D291.13849867922096!7i16384!8i8192!4m7!3m6!1s0x90364507f4454843:0xfe0e0ff448f4259a!8m2!3d-4.5872137!4d-81.2656948!10e5!16s%2Fg%2F11fgfs5c31?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 bg-white text-black font-bold py-2 px-4 rounded-md"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
