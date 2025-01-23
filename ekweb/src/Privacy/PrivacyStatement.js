import React from 'react';
import data from './Privacy.json';
const PrivacyStatement = () => {
  const { introduction, informationCollection, dataUsage, dataSharingAndDisclosure, securityMeasures, dataRetention, cookiesAndTracking } = data.privacyPolicy;

  return (
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
  );
};

export default PrivacyStatement;