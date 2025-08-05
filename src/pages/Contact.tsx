import React from 'react';
function Contact() {
  return (
    <div>
      <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
        <div className="flex flex-col items-center justify-center bg-gray-200 border rounded p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>
          <ul className="text-center mt-4">
            <li>Name:Abdul Rehman</li>
            <li>Phone:03225455658</li>
            <li>Gmail:abdul.rehman@tintash.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
