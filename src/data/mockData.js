export const lessons = [
    // --- BASIC LEVEL ---
    {
        id: 1,
        title: "Basics: What is a Stock?",
        category: "Basics",
        difficulty: "Beginner",
        content: {
            en: "A stock (or share) represents ownership in a company. When you buy a stock, you become a part-owner of that business. Companies issue stocks to raise money for growth. If the company profits, its stock price rises, and you may also receive dividends.",
            hi: "एक स्टॉक (या शेयर) किसी कंपनी में स्वामित्व का प्रतिनिधित्व करता है। जब आप कोई स्टॉक खरीदते हैं, तो आप उस व्यवसाय के आंशिक मालिक बन जाते हैं। कंपनियां विकास के लिए पैसा जुटाने के लिए शेयर जारी करती हैं।",
            ta: "பங்கு (அல்லது பங்கு) என்பது ஒரு நிறுவனத்தின் உரிமையைக் குறிக்கிறது. நீங்கள் ஒரு பங்கினை வாங்கும்போது, அந்த வணிகத்தின் ஒரு பகுதி உரிமையாளராகிறீர்கள். நிறுவனங்கள் வளர்ச்சிக்காக பணம் திரட்ட பங்குகளை வெளியிடுகின்றன."
        }
    },
    {
        id: 2,
        title: "Basics: NSE vs BSE",
        category: "Basics",
        difficulty: "Beginner",
        content: {
            en: "India has two major stock exchanges: BSE (Bombay Stock Exchange), established in 1875 (Asia's oldest), and NSE (National Stock Exchange), established in 1992 (India's largest). The Sensex tracks BSE's top 30 companies, while Nifty 50 tracks NSE's top 50.",
            hi: "भारत में दो प्रमुख स्टॉक एक्सचेंज हैं: बीएसई (बॉम्बे स्टॉक एक्सचेंज) और एनएसई (नेशनल स्टॉक एक्सचेंज)। सेंसेक्स बीएसई की शीर्ष 30 कंपनियों को ट्रैक करता है, जबकि निफ्टी 50 एनएसई की शीर्ष 50 को ट्रैक करता है।",
            ta: "இந்தியாவில் இரண்டு முக்கிய பங்குச் சந்தைகள் உள்ளன: பிஎஸ்இ (பம்பாய் பங்குச் சந்தை) மற்றும் என்எஸ்இ (தேசிய பங்குச் சந்தை). சென்செக்ஸ் பிஎஸ்இ-யின் சிறந்த 30 நிறுவனங்களையும், நிஃப்டி 50 என்எஸ்இ-யின் சிறந்த 50 நிறுவனங்களையும் கண்காணிக்கிறது."
        }
    },
    // --- INTERMEDIATE LEVEL ---
    {
        id: 3,
        title: "Theory: P/E Ratio Explained",
        category: "Analysis",
        difficulty: "Intermediate",
        content: {
            en: "The Price-to-Earnings (P/E) Ratio helps valuation. Formula: Stock Price / Earnings Per Share (EPS). A high P/E suggests the stock is expensive (or high growth), while a low P/E might indicate it's undervalued. Historical P/E for Nifty is around 20-25.",
            hi: "मूल्य-से-आय (पी/ई) अनुपात मूल्यांकन में मदद करता है। फॉर्मूला: स्टॉक मूल्य / प्रति शेयर आय (ईपीएस)। उच्च पी/ई बताता है कि स्टॉक महंगा है, जबकि कम पी/ई यह संकेत दे सकता है कि इसका मूल्यांकन कम है।",
            ta: "விலை-வருவாய் (பி/இ) விகிதம் மதிப்பீட்டிற்கு உதவுகிறது. சூத்திரம்: பங்கு விலை / ஒரு பங்குக்கான வருவாய். அதிக பி/இ பங்கு விலை உயர்ந்தது என்பதைக் குறிக்கிறது."
        }
    },
    {
        id: 4,
        title: "Theory: Market Capitalization",
        category: "Basics",
        difficulty: "Intermediate",
        content: {
            en: "Market Cap = Share Price × Total Number of Shares. It classifies companies into Large Cap (Stable, Safe), Mid Cap (Growth, Moderate Risk), and Small Cap (Volatile, High Reward/Risk).",
            hi: "मार्केट कैप = शेयर की कीमत × शेयरों की कुल संख्या। यह कंपनियों को लार्ज कैप (स्थिर), मिड कैप (विकास) और स्मॉल कैप (अस्थिर) में वर्गीकृत करता है।",
            ta: "சந்தை மூலதனம் = பங்கு விலை × மொத்த பங்குகளின் எண்ணிக்கை. இது நிறுவனங்களை பெரிய தொப்பி, நடுத்தர தொப்பி மற்றும் சிறிய தொப்பி என வகைப்படுத்துகிறது."
        }
    },
    // --- ADVANCED LEVEL ---
    {
        id: 5,
        title: "Advanced: Introduction to Derivatives (F&O)",
        category: "Trading",
        difficulty: "Advanced",
        content: {
            en: "Futures and Options (F&O) are contracts that derive value from an underlying asset. FUTURES involve an obligation to buy/sell at a specific date. OPTIONS give the right (but not obligation) to buy (Call) or sell (Put). High risk, high reward.",
            hi: "फ्यूचर्स और ऑप्शंस (एफ एंड ओ) अनुबंध हैं जो किसी अंतर्निहित संपत्ति से मूल्य प्राप्त करते हैं। ये उच्च जोखिम और उच्च इनाम वाले वित्तीय उपकरण हैं।",
            ta: "ஃபியூச்சர்ஸ் மற்றும் ஆப்ஷன்ஸ் (F&O) என்பது அடிப்படைச் சொத்திலிருந்து மதிலைப் பெறும் ஒப்பந்தங்களாகும். இவை அதிக ஆபத்து மற்றும் அதிக வெகுமதி கொண்டவை."
        }
    },
    {
        id: 6,
        title: "Advanced: Intraday Strategies",
        category: "Trading",
        difficulty: "Advanced",
        content: {
            en: "Intraday trading means buying and selling on the same day. Strategies include 'Momentum Trading' (riding trend), 'Breakout Trading' (entering when price breaks resistance), and 'Scalping' (small profits from small moves). Requires strict Stop-Loss.",
            hi: "इंट्राडे ट्रेडिंग का अर्थ है उसी दिन खरीदना और बेचना। रणनीतियों में 'मोमेंटम ट्रेडिंग', 'ब्रेकआउट ट्रेडिंग' और 'स्कैल्पिंग' शामिल हैं। सख्त स्टॉप-लॉस की आवश्यकता है।",
            ta: "இன்ட்ராடே டிரேடிங் என்பது ஒரே நாளில் வாங்கி விற்பதாகும். உத்திகள் 'மொமெண்டம் டிரேடிங்' மற்றும் 'பிரேக்அவுட் டிரேடிங்' ஆகியவை அடங்கும்."
        }
    },
    {
        id: 7,
        title: "Advanced: Candlestick Patterns",
        category: "Analysis",
        difficulty: "Advanced",
        content: {
            en: "Candlesticks show price movement (Open, High, Low, Close). Bullish patterns: Hammer, Morning Star. Bearish patterns: Shooting Star, Evening Star. Doji indicates indecision in the market.",
            hi: "कैंडलस्टिक्स मूल्य की गति (खुला, उच्च, निम्न, बंद) दिखाते हैं। बुलिश पैटर्न: हैमर, मॉर्निंग स्टार। बेयरिश पैटर्न: शूटिंग स्टार, इवनिंग स्टार।",
            ta: "மெழுகுவர்த்திகள் விலை நகர்வைக் காட்டுகின்றன. புல்லிஷ் வடிவங்கள்: சுத்தியல். பேரிஷ் வடிவங்கள்: ஷூட்டிங் ஸ்டார்."
        }
    }
];

export const leaderboardData = [
    { id: 1, username: "Rahul Sharma", totalScore: 2500, rank: 1 },
    { id: 2, username: "Priya Patel", totalScore: 2350, rank: 2 },
    { id: 3, username: "Amit Kumar", totalScore: 2100, rank: 3 },
    { id: 4, username: "Sneha Gupta", totalScore: 1950, rank: 4 },
    { id: 5, username: "Vikram Singh", totalScore: 1800, rank: 5 },
];

export const facts = [
    "The Bombay Stock Exchange (BSE) was established in 1875 under a Banyan tree.",
    "Sensex stands for 'Sensitive Index' and tracks top 30 companies on BSE.",
    "Nifty 50 tracks the top 50 companies listed on the National Stock Exchange (NSE).",
    "SEBI (Securities and Exchange Board of India) is the regulator of the securities market in India.",
    "Rakesh Jhunjhunwala was often called the 'Big Bull' of the Indian Stock Market.",
    "The most expensive share in India is MRF, trading above ₹1 Lakh per share.",
    "Trading hours in India are generally 9:15 AM to 3:30 PM IST.",
    "Upper Circuit is the maximum percentage a stock price can rise in a single day.",
    "Lower Circuit is the maximum percentage a stock price can fall in a single day.",
    "A 'Bear Market' means prices are falling, while a 'Bull Market' means prices are rising.",
    "Warren Buffett made 99% of his wealth after his 50th birthday.",
    "The 'Bull' strikes up with its horns, symbolizing rising prices. The 'Bear' swipes down, symbolizing falling prices.",
    "Only about 3-4% of India's population invests in the stock market actively.",
    "Muhurat Trading is a special one-hour trading session held on Diwali for good luck."
];

export const quizzes = [
    {
        id: 1,
        category: "Basics",
        question: {
            en: "What does a share represent?",
            hi: "शेयर किसका प्रतिनिधित्व करता है?",
            ta: "பங்கு எதைக் குறிக்கிறது?"
        },
        options: [
            { text: "Ownership in a company", isCorrect: true },
            { text: "A loan to the company", isCorrect: false },
            { text: "A government bond", isCorrect: false },
            { text: "None of the above", isCorrect: false }
        ]
    },
    {
        id: 2,
        category: "Indian Market",
        question: {
            en: "Which is the oldest stock exchange in Asia?",
            hi: "एशिया का सबसे पुराना स्टॉक एक्सचेंज कौन सा है?",
            ta: "ஆசியாவின் பழமையான பங்குச் சந்தை எது?"
        },
        options: [
            { text: "NSE", isCorrect: false },
            { text: "BSE", isCorrect: true },
            { text: "NYSE", isCorrect: false },
            { text: "Tokyo Stock Exchange", isCorrect: false }
        ]
    },
    {
        id: 3,
        category: "Regulation",
        question: {
            en: "Who regulates the Indian Stock Market?",
            hi: "भारतीय शेयर बाजार को कौन नियंत्रित करता है?",
            ta: "இந்திய பங்குச் சந்தையை யார் ஒழுங்குபடுத்துகிறார்கள்?"
        },
        options: [
            { text: "RBI", isCorrect: false },
            { text: "SEBI", isCorrect: true },
            { text: "SBI", isCorrect: false },
            { text: "Government of India", isCorrect: false }
        ]
    },
    {
        id: 4,
        category: "Indices",
        question: {
            en: "How many companies are in Nifty 50?",
            hi: "निफ्टी 50 में कितनी कंपनियां हैं?",
            ta: "நிஃப்டி 50 இல் எத்தனை நிறுவனங்கள் உள்ளன?"
        },
        options: [
            { text: "30", isCorrect: false },
            { text: "100", isCorrect: false },
            { text: "50", isCorrect: true },
            { text: "500", isCorrect: false }
        ]
    },
    {
        id: 5,
        category: "Trading",
        question: {
            en: "What is the full form of IPO?",
            hi: "IPO का पूर्ण रूप क्या है?",
            ta: "IPO இன் முழு வடிவம் என்ன?"
        },
        options: [
            { text: "Initial Public Offering", isCorrect: true },
            { text: "Indian Public Office", isCorrect: false },
            { text: "Internal Private Offer", isCorrect: false },
            { text: "Initial Private Owner", isCorrect: false }
        ]
    },
    // --- NEW ADVANCED QUIZZES ---
    {
        id: 6,
        category: "Analysis",
        question: {
            en: "A high P/E ratio usually indicates that the stock is:",
            hi: "उच्च पी/ई अनुपात आमतौर पर इंगित करता है कि स्टॉक:",
            ta: "அதிக P/E விகிதம் பொதுவாக பங்குகள்:"
        },
        options: [
            { text: "Undervalued", isCorrect: false },
            { text: "Overvalued or High Growth", isCorrect: true },
            { text: "Bankrupt", isCorrect: false },
            { text: "Delisted", isCorrect: false }
        ]
    },
    {
        id: 7,
        category: "Trading",
        question: {
            en: "What does 'Short Selling' mean?",
            hi: "'शॉर्ट सेलिंग' का क्या अर्थ है?",
            ta: "'ஷார்ட் செல்லிங்' என்றால் என்ன?"
        },
        options: [
            { text: "Buying for long term", isCorrect: false },
            { text: "Selling shares you own", isCorrect: false },
            { text: "Selling shares you don't own (expecting price drop)", isCorrect: true },
            { text: "Buying small companies", isCorrect: false }
        ]
    },
    {
        id: 8,
        category: "Derivatives",
        question: {
            en: "A 'Call Option' gives the buyer the right to:",
            hi: "'कॉल ऑप्शन' खरीदार को क्या अधिकार देता है?",
            ta: "'கால் ஆப்ஷன்' வாங்குபவருக்கு என்ன உரிமையை அளிக்கிறது?"
        },
        options: [
            { text: "Sell", isCorrect: false },
            { text: "Buy", isCorrect: true },
            { text: "Hold", isCorrect: false },
            { text: "None", isCorrect: false }
        ]
    },
    {
        id: 9,
        category: "Analysis",
        question: {
            en: "Which candlestick pattern is bullish?",
            hi: "कौन सा कैंडलस्टिक पैटर्न तेजी का है?",
            ta: "எந்த மெழுகுவர்த்தி முறை புல்லிஷ்?"
        },
        options: [
            { text: "Morning Star", isCorrect: true },
            { text: "Evening Star", isCorrect: false },
            { text: "Shooting Star", isCorrect: false },
            { text: "Hanging Man", isCorrect: false }
        ]
    },
    {
        id: 10,
        category: "Trading",
        question: {
            en: "The cut-off time for intraday trading in India is approx:",
            hi: "भारत में इंट्राडे ट्रेडिंग का समय लगभग क्या है:",
            ta: "இந்தியாவில் இன்ட்ராடே வர்த்தகத்திற்கான நேரம் தோராயமாக:"
        },
        options: [
            { text: "3:30 PM", isCorrect: false },
            { text: "3:15 PM - 3:20 PM", isCorrect: true },
            { text: "9:15 AM", isCorrect: false },
            { text: "12:00 PM", isCorrect: false }
        ]
    }
];
