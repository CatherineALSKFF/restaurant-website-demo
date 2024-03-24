import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    // Check if the Tawk.to script is already added to avoid duplicates
    if (document.getElementById('tawkToScript')) return;

    const script = document.createElement('script');
    script.id = 'tawkToScript';
    script.async = true;
    script.src = 'https://embed.tawk.to/66009f161ec1082f04dab576/1hpp6qsoa';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Insert the script at the end of the body
    document.body.appendChild(script);
  }, []);

  return null; // This component does not render anything
};

export default TawkToWidget;
