'use client';

import { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'मतदाता पंजीकरण | Voter Registration',
    description: 'चुनाव कार्यालय में जाकर या ऑनलाइन पोर्टल के माध्यम से अपने आप को मतदाता के रूप में पंजीकृत करें।',
    details: 'आपकी आयु 18+ होनी चाहिए और आप भारतीय नागरिक हों। आवश्यक दस्तावेज़: पता प्रमाण, पहचान प्रमाण (आधार, पासपोर्ट, आदि)',
  },
  {
    id: 2,
    title: 'वोटर ID प्राप्त करें | Get Voter ID',
    description: 'एक बार पंजीकृत होने के बाद, आपको वोटर ID (EPIC - निर्वाचन फोटो पहचान पत्र) मिलता है।',
    details: 'आपकी वोटर ID में आपका नाम, पता और मतदान केंद्र विवरण होता है। आप इसे ऑनलाइन डाउनलोड कर सकते हैं।',
  },
  {
    id: 3,
    title: 'प्रचार अवधि | Campaign Period',
    description: 'राजनीतिक दल मतदाताओं के साथ अपनी विजन और घोषणापत्र साझा करने के लिए प्रचार करते हैं।',
    details: 'इस अवधि के दौरान, उम्मीदवार रैलियां, बहसें और बैठकें करते हैं। आप सुन सकते हैं और निर्णय ले सकते हैं।',
  },
  {
    id: 4,
    title: 'मतदान दिन | Voting Day',
    description: 'अपने मतदान केंद्र पर जाएं और इलेक्ट्रॉनिक मतदान मशीन (EVM) का उपयोग करके अपना वोट डालें।',
    details: 'अपनी वोटर ID लाएं, EVM पर अपनी पसंद चिन्हित करें, और पुष्टि के रूप में VVPAT पर्ची प्राप्त करें। मतदान गुप्त है।',
  },
  {
    id: 5,
    title: 'मतगणना | Vote Counting',
    description: 'सभी वोटों की गिनती की जाती है और चुनाव परिणाम निर्धारित करने के लिए मिलाई जाती है।',
    details: 'गिनती आमतौर पर अगले दिन होती है। सभी दलों के पर्यवेक्षक पारदर्शिता सुनिश्चित करने के लिए मौजूद होते हैं।',
  },
  {
    id: 6,
    title: 'परिणाम और जीत | Results & Victory',
    description: 'सबसे ज़्यादा वोट वाला उम्मीदवार जीतता है और सरकार बनाता है।',
    details: 'परिणाम चुनाव आयोग द्वारा आधिकारिक रूप से घोषित किए जाते हैं। विजयी उम्मीदवार कार्यभार ग्रहण करता है।',
  },
];

export default function Timeline() {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-saffron via-gray-100 to-bharat_green bg-clip-text text-transparent mb-3">🗳️ चुनाव प्रक्रिया की सीढ़ियां</h2>
        <p className="text-gray-400 text-lg">किसी भी कदम पर क्लिक करके विवरण जानें | Click any step to explore details</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-12 top-0 bottom-0 w-1.5 bg-gradient-to-b from-saffron via-gray-200 to-bharat_green rounded-full shadow-lg shadow-saffron/50"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
              className="cursor-pointer relative group"
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 top-2 w-24 h-24 bg-primary rounded-full border-4 flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 z-10 ${
                idx < 2 ? 'border-saffron text-saffron group-hover:shadow-saffron/50' :
                idx < 4 ? 'border-bharat_blue text-bharat_blue group-hover:shadow-bharat_blue/50' :
                'border-bharat_green text-bharat_green group-hover:shadow-bharat_green/50'
              }`}>
                {step.id}
              </div>

              {/* Content card */}
              <div
                className={`ml-40 card rounded-2xl transition-all duration-300 transform group-hover:scale-102 group-hover:shadow-2xl ${
                  selectedStep === step.id ? `ring-2 bg-gradient-to-r from-secondary to-primary ${
                    idx < 2 ? 'ring-saffron' :
                    idx < 4 ? 'ring-bharat_blue' :
                    'ring-bharat_green'
                  }` : 'bg-secondary hover:bg-opacity-80'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{['📋', '🎫', '📢', '🗳️', '📊', '🏆'][idx]}</div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 group-hover:transition-colors ${
                      idx < 2 ? 'text-saffron group-hover:text-orange-400' :
                      idx < 4 ? 'text-bharat_blue group-hover:text-blue-400' :
                      'text-bharat_green group-hover:text-green-400'
                    }`}>{step.title}</h3>
                    <p className="text-gray-300 mb-3">{step.description}</p>

                    {/* Expanded details */}
                    {selectedStep === step.id && (
                      <div className="mt-5 pt-5 border-t-2 border-gray-600 animate-slideDown">
                        <p className="text-base text-gray-400 leading-relaxed">{step.details}</p>
                        <div className={`mt-4 inline-block px-4 py-2 border rounded-lg text-sm font-semibold ${
                          idx < 2 ? 'bg-saffron/20 border-saffron text-saffron' :
                          idx < 4 ? 'bg-bharat_blue/20 border-bharat_blue text-bharat_blue' :
                          'bg-bharat_green/20 border-bharat_green text-bharat_green'
                        }`}>
                          ✅ Step {step.id} of {steps.length}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-12 bg-gradient-to-r from-saffron/20 via-secondary to-bharat_green/20 rounded-2xl p-6 border border-saffron/30">
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-300 font-semibold">🎯 सीखने की प्रगति (Learning Progress)</p>
          <p className="bg-gradient-to-r from-saffron to-bharat_green bg-clip-text text-transparent font-bold">{selectedStep ? '1/6 Steps Explored' : '0/6 Steps Explored'}</p>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-saffron via-gray-200 to-bharat_green h-3 rounded-full transition-all duration-500"
            style={{ width: selectedStep ? '16.67%' : '0%' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
