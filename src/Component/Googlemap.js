import React from 'react';

function Googlemap() {
  return (
    <div className='flex justify-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108913.96728556401!2d74.17844056101458!3d31.453737400000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190145ae97af17%3A0x6d1f02b5cd2ab9f7!2sUniversity%20of%20Education!5e0!3m2!1sen!2s!4v1713409954073!5m2!1sen!2s"
        width="90%"
        height="440"
        style={{ border: '0' }} // Correct style prop format
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Googlemap;
