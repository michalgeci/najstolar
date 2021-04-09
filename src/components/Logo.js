import React from 'react';

export default function Logo() {
  return(
    <div style={{display: 'flex', flexDirection: 'column', fontFamily: "'Roboto', 'sans-serif'", letterSpacing: 2, width: 'fit-content', padding: 15, lineHeight: 1}}>
      <div style={{fontSize: 24, fontWeight: 300}}>
        <strong style={{fontWeight: 600}}>naj</strong>stolar.sk
      </div>
      <div style={{fontSize: 9, paddingTop: 6, textAlign: 'center'}}>
      GMG - nábytok s.r.o.
      </div>
    </div>
  );
}
