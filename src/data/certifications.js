// Add new certifications to this array and they will render on the
// certifications page automatically. The image is the real certificate,
// rendered from the PDF in src/assets; verifyUrl is Coursera's public
// verification page for that credential.

import googleDataAnalytics from '@/assets/certs/google-data-analytics.webp'
import googleAdvancedDataAnalytics from '@/assets/certs/google-advanced-data-analytics.webp'

export const certifications = [
  {
    name: 'Google Advanced Data Analytics Certificate',
    issuer: 'Google',
    year: '2026',
    status: 'Completed',
    image: googleAdvancedDataAnalytics,
    imageAlt:
      'Google Advanced Data Analytics professional certificate issued to Raymond Gamiao on June 15, 2026',
    verifyUrl: 'https://coursera.org/verify/professional-cert/23PU3QU1VJ5U',
  },
  {
    name: 'Google Data Analytics Certificate',
    issuer: 'Google',
    year: '2023',
    status: 'Completed',
    image: googleDataAnalytics,
    imageAlt:
      'Google Data Analytics professional certificate issued to Raymond Gamiao on August 21, 2023',
    verifyUrl: 'https://coursera.org/verify/professional-cert/4XRH2MX8UPS2',
  },
]
