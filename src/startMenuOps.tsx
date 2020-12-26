import React from 'react';

export default {
  Resume: {
    type: 'window',
    data: {
      size: {
        height: '80vh',
        width: '62vh',
      },
      content: (
        <>
          <div style={{
            height: 'calc(100% - 42px)', width: 'calc(100% - 16px)', backgroundColor: 'white', position: 'absolute', opacity: 0,
          }}
          />
          <iframe src="Mark_Go_Resume_1218.pdf" width="100%" height="100%" frameBorder="0" title="Resume" />
        </>
      ),
    },
  },
  Projects: {
    type: 'subMenu',
    data: {
      subMenus: [],
    },
  },
  'About This Page': {
    type: 'window',
    data: {
      size: {
        height: 400,
        width: 400,
      },
    },
  },
  'Contact Me': {
    type: 'window',
    data: {
      size: {
        height: 300,
        width: 500,
      },
    },
  },
  SwitchToMac: {
    type: 'window',
    data: {
      size: {
        height: 550,
        width: 425,
      },
    },
  },
};
