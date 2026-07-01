import React from 'react';
import Hero from './Hero';
import ServiciosDestacados from './ServiciosDestacados';
import Testimonios from './Testimonios';
import Contacto from './Contacto';

/**
 * Landing Page Component displaying marketing sections: Hero, Services, Testimonials, and Contact.
 */
export default function Landing() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiciosDestacados />
      <Testimonios />
      <Contacto />
    </div>
  );
}
