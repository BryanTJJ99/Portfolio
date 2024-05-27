import React from 'react';
import ContactForm from '@/components/ContactForm';


function ContactPage() {
  return (
    <div>

        {/* Place image to the left and the contact form on the right in fullscreen */}
        {/* if is mobile screen then the image on the left will not exist */}


        <div className="grid min-h-full grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 items-center min-w-[600px]">
          <div className='hidden lg:block pl-12 pr-12 pb-12'>
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1716117273853-75a1989029f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact"
            />
          </div>

          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">

            <h1 className="text-3xl text-left ">Contact Me</h1>
            <ContactForm/>
            
          </div>
        </div>

    </div>
  );
}

export default ContactPage;
