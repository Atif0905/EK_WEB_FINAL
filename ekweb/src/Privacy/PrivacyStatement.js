import React from 'react';
import data from './Privacy.json';
import { Helmet } from 'react-helmet';
const PrivacyStatement = () => {
  const { introduction, informationCollection, dataUsage, dataSharingAndDisclosure, securityMeasures, dataRetention, cookiesAndTracking } = data.privacyPolicy;

  return (
    <div>
      <Helmet>
        <title>Ekakshar Buildtech Real Estate Consultancy - Noida Sector 136</title>
      <meta name="description" content="Read the privacy policy of Ekakshar BuildTech to understand how we collect, use, and protect your personal information. Your privacy and data security are our top priorities."/>
      <meta name="name:title" content="Ekakshar Buildtech Real Estate Consultancy - Noida Sector 136" />
      <link rel="canonical" href="https://ekaksharbuildtech.com/privacystatement" />
      <meta name="author" content="Ekakshar Buildtech" />
        <meta name="owner" content="Ekakshar Buildtech" />
        <meta name="language" content="en-us" />
        <meta name="coverage" content="Global" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="GOOGLEBOT" content="INDEX, FOLLOW" />
        <meta name="doc-type" content="Webpage" />
        <meta name="revisit-after" content="7 days" />
        <meta property="og:image" content="https://ekaksharbuildtech.com/bluelogo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
      </Helmet>
    <div className='container'>
        <div className='privacymaindiv'>
      <h1 className='privacy_head'>Privacy Policy</h1>
    
      <section className='mt-4'>
        <h2 className='privacy_heading1'>Welcome to Ekakshar Real Estate Developers!</h2>
        <p className='privacy_content'>{introduction.welcomeMessage}</p>
        <p className='privacy_content'>{introduction.overview}</p>
      </section>

      <section>
        <h2 className='privacy_heading1'>Information We Collect at Ekakshar Real Estate</h2>
        <p className='privacy_content'>{informationCollection.description}</p>
        <ul>
          {informationCollection.dataTypes.map((item, index) => (
            <li key={index}>
             <p className='privacy_content'><strong>{item.type}:</strong>{item.details}</p>
            </li>
          ))}
        </ul>
      </section>

     
      <section>
        <h2 className='privacy_heading1'>How We Use Your Data</h2>
        <p className='privacy_content'>{dataUsage.purpose}</p>
        <ul>
          {dataUsage.uses.map((item, index) => (
            <li key={index}>
            <p className='privacy_content'> <strong>{item.usage}:</strong> {item.details}</p> 
            </li>
          ))}
        </ul>
      </section>

     
      <section>
        <h2 className='privacy_heading1'>Data Sharing and Disclosure</h2>
        <p className='privacy_content'>{dataSharingAndDisclosure.commitment}</p>
        <ul>
          {dataSharingAndDisclosure.sharedWith.map((item, index) => (
            <li key={index}>
             <p className='privacy_content' > <strong>{item.entity}:</strong> {item.details}</p>
            </li>
          ))}
        </ul>
      </section>

   
      <section>
        <h2 className='privacy_heading1'>Security Measures to Protect Your Information</h2>
        <p className='privacy_content'>{securityMeasures.commitment}</p>
        <ul>
          {securityMeasures.measures.map((item, index) => (
            <li key={index}>
             <p className='privacy_content'><strong>{item.type}:</strong> {item.details}</p> 
            </li>
          ))}
        </ul>
      </section>

   
      <section>
        <h2 className='privacy_heading1'>Retention of Personal Information</h2>
        <p className='privacy_content'>{dataRetention.policy}</p>
        <p className='privacy_content'>{dataRetention.dataDeletion}</p>
      </section>

    
      <section>
        <h2 className='privacy_heading1'>Use of Cookies and Tracking Technologies</h2>
        <p className='privacy_content'>{cookiesAndTracking.description}</p>
        <p className='privacy_content'>{cookiesAndTracking.management}</p>
        <ul>
          {cookiesAndTracking.cookieTypes.map((item, index) => (
            <li key={index}>
             <p className='privacy_content'><strong>{item.type}:</strong> {item.details}</p> 
            </li>
          ))}
        </ul>
      </section>
    </div>
    </div>
    </div>
  );
};

export default PrivacyStatement;