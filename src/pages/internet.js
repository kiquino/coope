import React from "react";
import TitleGeneric from "../componets/titulogen";
import Banner from "../componets/banner";
import imgBanner from "../images/banner2.png";
import BloqueTexto from "../componets/textBlock";
const Internet =()=>{
    return(
        <div>
             <Banner textoVisible="none" img={imgBanner} />
            <TitleGeneric text="internet" />
            <BloqueTexto alineacion="left" titulo="" texto="CREA SERVICIOS TECNOLÓGICOS SAPEM es el resultado de la unión de los esfuerzos de la 
Municipalidad de Rivadavia y la Cooperativa Eléctrica y Anexos Popular Rivadavia Ltda. que 
mediante un acuerdo de cooperación, relanzaron un proceso de fortalecimiento institucional 
y de colaboración técnica, que implicó un replanteo del Servicio de Internet de Rivadavia y la 
unificación en la prestación de dicho servicio de ambas instituciones, naciendo de esta 
manera la primer unidad de negocio conjunto ONE internet.
 Finalmente, a partir del 17 de mayo 2019 nace CREA una empresa de servicios 
tecnológicos cuyo fin es responder eficientemente a las necesidades funcionales del mundo 
de hoy y del futuro próximo, en base a un modelo de integración y búsqueda del bien común, 
que garantice al vecino de Rivadavia - Mendoza un amplio acceso a la información y una 
adecuada prestación de los servicios digitales, en condiciones de calidad, continuidad, y 
precios justos.
 Somos un equipo de apasionados, con amplia experiencia en redes de datos, con un 
objetivo común: contribuir para mejorar la calidad de vida de todos los ciudadanos de 
Rivadavia.
 Para más información, contactanos por WhatsApp al 263 4217506 o por correo 
electrónico: info@oneinternet.com.a" />
        </div>
    )
}
export default Internet;