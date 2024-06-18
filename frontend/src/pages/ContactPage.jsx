import React from 'react';
import ContactForm from '@/components/ContactForm';

function ContactPage() {
  return (
    <div className="container mx-auto px-4">
      {/* Place image to the left and the contact form on the right in fullscreen */}
      {/* if it is a mobile screen then the image on the left will not exist */}
      <div className="grid min-h-full grid-cols-1 md:grid-cols-2 items-center">
        <div className="hidden md:block p-4">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1716117273853-75a1989029f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
          />
        </div>

        <div className="w-full max-w-7xl px-4 sm:px-6 pb-12">
          <h1 className="text-3xl text-left mb-3">Let's Connect</h1>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
