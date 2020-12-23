import React from 'react';

export default {
  Resume: {
    type: 'window',
    data: {
      size: {
        height: '80vh',
        width: '62vh',
      },
      content: <embed src="Mark_Go_Resume_1218.pdf" type="application/pdf" width="100%" height="100%" />,
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
