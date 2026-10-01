// 🛒 Cart Storage (SAFE ADD)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 💾 Save cart function
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = document.getElementById("floating-cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}

// FIXED COURSES WITH WORKING THUMBNAILS
const courses = [

    /* ================= AI ================= */
    {id:1,title:"Generative AI Masterclass",cat:"AI",desc:"Master ChatGPT, LLMs and Prompt Engineering.",enrolled:"120k",likes:"15k",price:"₹1,499",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:65},
    {id:2,title:"AI for Beginners",cat:"AI",desc:"Start your journey in Artificial Intelligence.",enrolled:"80k",likes:"8k",price:"₹999",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:20},
    {id:3,title:"Machine Learning A-Z",cat:"AI",desc:"Supervised & unsupervised learning.",enrolled:"95k",likes:"10k",price:"₹1,999",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:35},
    {id:4,title:"Deep Learning with TensorFlow",cat:"AI",desc:"Build neural networks.",enrolled:"70k",likes:"7k",price:"₹2,499",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:40},
    {id:5,title:"Computer Vision Essentials",cat:"AI",desc:"Image processing & detection.",enrolled:"60k",likes:"6k",price:"₹2,199",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:25},
    {id:6,title:"Natural Language Processing",cat:"AI",desc:"Text analysis and chatbots.",enrolled:"85k",likes:"9k",price:"₹2,299",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:50},
    {id:7,title:"AI in Healthcare",cat:"AI",desc:"Medical AI applications.",enrolled:"50k",likes:"5k",price:"₹2,799",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:15},
    {id:8,title:"Reinforcement Learning Basics",cat:"AI",desc:"AI decision-making models.",enrolled:"40k",likes:"4k",price:"₹1,899",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:30},
    {id:9,title:"AI Model Deployment",cat:"AI",desc:"Deploy ML models to production.",enrolled:"55k",likes:"6k",price:"₹2,999",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",progress:45},
    
    /* ================= WEB DEV ================= */
    {id:10,title:"Full-Stack Web Dev 2026",cat:"Web Dev",desc:"React, Node.js and Next.js.",enrolled:"95k",likes:"12k",price:"₹2,499",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:30},
    {id:11,title:"HTML CSS Bootcamp",cat:"Web Dev",desc:"Build websites from scratch.",enrolled:"110k",likes:"13k",price:"₹999",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:50},
    {id:12,title:"JavaScript Essentials",cat:"Web Dev",desc:"Core JS concepts and ES6.",enrolled:"130k",likes:"14k",price:"₹1,299",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:60},
    {id:13,title:"React Mastery",cat:"Web Dev",desc:"Build dynamic UIs with React.",enrolled:"85k",likes:"9k",price:"₹1,999",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:45},
    {id:14,title:"Node.js API Development",cat:"Web Dev",desc:"Create backend services.",enrolled:"70k",likes:"7k",price:"₹1,799",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:35},
    {id:15,title:"Next.js Advanced",cat:"Web Dev",desc:"SSR and full-stack apps.",enrolled:"60k",likes:"6k",price:"₹2,299",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:40},
    {id:16,title:"Web Performance Optimization",cat:"Web Dev",desc:"Speed up your websites.",enrolled:"55k",likes:"5k",price:"₹1,499",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:25},
    {id:17,title:"TypeScript Complete Guide",cat:"Web Dev",desc:"Typed JS for scalability.",enrolled:"65k",likes:"6k",price:"₹1,799",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:30},
    {id:18,title:"Frontend System Design",cat:"Web Dev",desc:"Design scalable frontends.",enrolled:"50k",likes:"5k",price:"₹2,499",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",progress:20},
    
    /* ================= DATA SCIENCE ================= */
    {id:19,title:"Advanced Data Science",cat:"Data Science",desc:"Predictive modeling.",enrolled:"210k",likes:"20k",price:"₹3,499",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:45},
    {id:20,title:"Python for Data Analysis",cat:"Data Science",desc:"Pandas & NumPy.",enrolled:"150k",likes:"14k",price:"₹1,799",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:60},
    {id:21,title:"Statistics for Data Science",cat:"Data Science",desc:"Probability & stats.",enrolled:"120k",likes:"11k",price:"₹1,599",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:50},
    {id:22,title:"Data Visualization Pro",cat:"Data Science",desc:"Charts & dashboards.",enrolled:"90k",likes:"9k",price:"₹1,499",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:40},
    {id:23,title:"Big Data Analytics",cat:"Data Science",desc:"Hadoop & Spark.",enrolled:"70k",likes:"7k",price:"₹2,499",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:30},
    {id:24,title:"Time Series Forecasting",cat:"Data Science",desc:"Predict trends.",enrolled:"60k",likes:"6k",price:"₹2,199",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:35},
    {id:25,title:"SQL for Data Science",cat:"Data Science",desc:"Query large datasets.",enrolled:"140k",likes:"13k",price:"₹1,299",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:70},
    {id:26,title:"Data Engineering Basics",cat:"Data Science",desc:"Pipelines & ETL.",enrolled:"80k",likes:"8k",price:"₹1,899",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:45},
    {id:27,title:"AI + Data Science Projects",cat:"Data Science",desc:"Hands-on portfolio.",enrolled:"75k",likes:"7k",price:"₹2,799",img:"https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800",progress:50},
    
    /* ================= CYBERSECURITY ================= */
    {id:100,title:"Ethical Hacking Basics",cat:"Cybersecurity",desc:"Intro to ethical hacking.",enrolled:"75k",likes:"7k",price:"₹1,199",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:25},
    {id:101,title:"Network Security Fundamentals",cat:"Cybersecurity",desc:"Secure networks and systems.",enrolled:"60k",likes:"6k",price:"₹1,499",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:30},
    {id:102,title:"Penetration Testing Pro",cat:"Cybersecurity",desc:"Advanced pentesting skills.",enrolled:"50k",likes:"5k",price:"₹2,499",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:40},
    {id:103,title:"Cyber Defense Strategies",cat:"Cybersecurity",desc:"Defend against attacks.",enrolled:"55k",likes:"5k",price:"₹1,799",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:35},
    {id:104,title:"Zero Trust Security",cat:"Cybersecurity",desc:"Modern security models.",enrolled:"45k",likes:"4k",price:"₹2,199",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:20},
    {id:105,title:"Cloud Security Basics",cat:"Cybersecurity",desc:"Secure cloud systems.",enrolled:"65k",likes:"6k",price:"₹1,699",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:30},
    {id:106,title:"Malware Analysis",cat:"Cybersecurity",desc:"Analyze malicious software.",enrolled:"35k",likes:"3k",price:"₹2,299",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:25},
    {id:107,title:"Security Auditing",cat:"Cybersecurity",desc:"Audit IT systems securely.",enrolled:"40k",likes:"4k",price:"₹1,599",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:28},
    {id:108,title:"Advanced Threat Detection",cat:"Cybersecurity",desc:"Detect cyber threats.",enrolled:"38k",likes:"3k",price:"₹2,799",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",progress:32},

    /* ================= CLOUD ================= */
    {id:109,title:"AWS Basics",cat:"Cloud",desc:"Intro to AWS cloud.",enrolled:"90k",likes:"9k",price:"₹1,499",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:30},
    {id:110,title:"Azure Fundamentals",cat:"Cloud",desc:"Microsoft cloud services.",enrolled:"70k",likes:"7k",price:"₹1,499",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:25},
    {id:111,title:"Google Cloud Core",cat:"Cloud",desc:"GCP basics.",enrolled:"65k",likes:"6k",price:"₹1,499",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:20},
    {id:112,title:"Cloud Architecture",cat:"Cloud",desc:"Design scalable systems.",enrolled:"50k",likes:"5k",price:"₹2,499",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:40},
    {id:113,title:"DevOps on Cloud",cat:"Cloud",desc:"CI/CD pipelines.",enrolled:"60k",likes:"6k",price:"₹2,199",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:35},
    {id:114,title:"Kubernetes Essentials",cat:"Cloud",desc:"Container orchestration.",enrolled:"55k",likes:"5k",price:"₹2,299",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:30},
    {id:115,title:"Serverless Computing",cat:"Cloud",desc:"Lambda & functions.",enrolled:"45k",likes:"4k",price:"₹1,999",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:28},
    {id:116,title:"Cloud Security",cat:"Cloud",desc:"Secure cloud apps.",enrolled:"48k",likes:"4k",price:"₹2,099",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:30},
    {id:117,title:"Multi-Cloud Strategy",cat:"Cloud",desc:"Manage multiple clouds.",enrolled:"38k",likes:"3k",price:"₹2,799",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",progress:25},

    /* ================= DESIGN ================= */
    {id:118,title:"Graphic Design Basics",cat:"Design",desc:"Intro to design.",enrolled:"85k",likes:"8k",price:"₹1,199",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:30},
    {id:119,title:"UI Design Mastery",cat:"Design",desc:"Modern UI design.",enrolled:"70k",likes:"7k",price:"₹1,599",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:35},
    {id:120,title:"UX Research",cat:"Design",desc:"User research methods.",enrolled:"60k",likes:"6k",price:"₹1,799",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:40},
    {id:121,title:"Figma Advanced",cat:"Design",desc:"Advanced prototyping.",enrolled:"65k",likes:"6k",price:"₹1,999",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:30},
    {id:122,title:"Brand Identity Design",cat:"Design",desc:"Create strong brands.",enrolled:"55k",likes:"5k",price:"₹1,699",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:25},
    {id:123,title:"Design Systems",cat:"Design",desc:"Scalable design systems.",enrolled:"50k",likes:"5k",price:"₹2,199",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:28},
    {id:124,title:"Interaction Design",cat:"Design",desc:"Design interactions.",enrolled:"48k",likes:"4k",price:"₹1,899",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:32},
    {id:125,title:"Mobile UI Design",cat:"Design",desc:"Design mobile apps.",enrolled:"52k",likes:"5k",price:"₹1,499",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:35},
    {id:126,title:"Creative Thinking",cat:"Design",desc:"Boost creativity.",enrolled:"40k",likes:"4k",price:"₹999",img:"https://images.unsplash.com/photo-1551615593-fc36268c362f?auto=format&fit=crop&w=800",progress:20},

    /* ================= MARKETING ================= */
    {id:127,title:"SEO Mastery",cat:"Marketing",desc:"Rank websites.",enrolled:"95k",likes:"9k",price:"₹1,199",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:50},
    {id:128,title:"Content Marketing",cat:"Marketing",desc:"Content strategy.",enrolled:"80k",likes:"8k",price:"₹1,299",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:40},
    {id:129,title:"Social Media Ads",cat:"Marketing",desc:"Run ad campaigns.",enrolled:"85k",likes:"8k",price:"₹1,499",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:45},
    {id:130,title:"Growth Hacking",cat:"Marketing",desc:"Scale fast.",enrolled:"70k",likes:"7k",price:"₹1,799",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:35},
    {id:131,title:"Email Marketing",cat:"Marketing",desc:"Build campaigns.",enrolled:"65k",likes:"6k",price:"₹1,299",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:30},
    {id:132,title:"Brand Strategy",cat:"Marketing",desc:"Build strong brands.",enrolled:"60k",likes:"6k",price:"₹1,999",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:25},
    {id:133,title:"Google Ads",cat:"Marketing",desc:"Paid advertising.",enrolled:"75k",likes:"7k",price:"₹1,499",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:40},
    {id:134,title:"Marketing Analytics",cat:"Marketing",desc:"Data-driven marketing.",enrolled:"55k",likes:"5k",price:"₹1,799",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:35},
    {id:135,title:"Influencer Marketing",cat:"Marketing",desc:"Collaborate with creators.",enrolled:"50k",likes:"5k",price:"₹1,399",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",progress:30},

    /* ================= LAW ================= */
    {id:136,title:"Corporate Law Basics",cat:"Law",desc:"Company law fundamentals.",enrolled:"40k",likes:"4k",price:"₹1,499",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:20},
    {id:137,title:"International Law",cat:"Law",desc:"Global legal systems.",enrolled:"35k",likes:"3k",price:"₹1,799",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:25},
    {id:138,title:"Intellectual Property Rights",cat:"Law",desc:"Patents & trademarks.",enrolled:"45k",likes:"4k",price:"₹1,999",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:30},
    {id:139,title:"Cyber Law",cat:"Law",desc:"Digital legal systems.",enrolled:"50k",likes:"5k",price:"₹1,699",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:35},
    {id:140,title:"Contract Law",cat:"Law",desc:"Legal agreements.",enrolled:"55k",likes:"5k",price:"₹1,599",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:28},
    {id:141,title:"Legal Writing",cat:"Law",desc:"Draft legal docs.",enrolled:"30k",likes:"3k",price:"₹999",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:20},
    {id:142,title:"Business Law",cat:"Law",desc:"Corporate regulations.",enrolled:"60k",likes:"6k",price:"₹1,799",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:40},
    {id:143,title:"Human Rights Law",cat:"Law",desc:"Global rights systems.",enrolled:"38k",likes:"3k",price:"₹1,499",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:22},
    {id:144,title:"Legal Ethics",cat:"Law",desc:"Professional conduct.",enrolled:"28k",likes:"2k",price:"₹1,299",img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800",progress:18},

    /* ================= MOBILE DEV ================= */
    {id:345,title:"Android Development",cat:"Mobile Dev",desc:"Build Android apps.",enrolled:"110k",likes:"11k",price:"₹1,499",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:40},
    {id:346,title:"iOS Development",cat:"Mobile Dev",desc:"Swift apps.",enrolled:"85k",likes:"8k",price:"₹1,699",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:35},
    {id:347,title:"Flutter Development",cat:"Mobile Dev",desc:"Cross-platform apps.",enrolled:"95k",likes:"9k",price:"₹1,599",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:50},
    {id:348,title:"React Native",cat:"Mobile Dev",desc:"JS mobile apps.",enrolled:"90k",likes:"9k",price:"₹1,499",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:45},
    {id:349,title:"Kotlin Basics",cat:"Mobile Dev",desc:"Android language.",enrolled:"70k",likes:"7k",price:"₹1,299",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:25},
    {id:350,title:"Swift Programming",cat:"Mobile Dev",desc:"iOS language.",enrolled:"65k",likes:"6k",price:"₹1,399",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:30},
    {id:351,title:"App UI Design",cat:"Mobile Dev",desc:"Design mobile UI.",enrolled:"60k",likes:"6k",price:"₹1,299",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:20},
    {id:352,title:"Mobile Testing",cat:"Mobile Dev",desc:"Test apps.",enrolled:"50k",likes:"5k",price:"₹1,199",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:15},
    {id:353,title:"App Deployment",cat:"Mobile Dev",desc:"Publish apps.",enrolled:"55k",likes:"5k",price:"₹1,399",img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",progress:25},

    /* ================= MEDICAL ================= */
    {id:219,title:"Human Anatomy",cat:"Medical",desc:"Body structure.",enrolled:"120k",likes:"12k",price:"₹1,299",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:40},
    {id:220,title:"Physiology Basics",cat:"Medical",desc:"Body functions.",enrolled:"110k",likes:"11k",price:"₹1,399",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:35},
    {id:221,title:"Pathology",cat:"Medical",desc:"Study of diseases.",enrolled:"95k",likes:"9k",price:"₹1,599",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:45},
    {id:222,title:"Pharmacology",cat:"Medical",desc:"Drugs & effects.",enrolled:"90k",likes:"9k",price:"₹1,699",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:30},
    {id:223,title:"Microbiology",cat:"Medical",desc:"Microbes study.",enrolled:"85k",likes:"8k",price:"₹1,499",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:25},
    {id:224,title:"Medical Imaging",cat:"Medical",desc:"X-ray & MRI.",enrolled:"70k",likes:"7k",price:"₹1,799",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:50},
    {id:225,title:"First Aid",cat:"Medical",desc:"Emergency care.",enrolled:"100k",likes:"10k",price:"₹999",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:20},
    {id:226,title:"Public Health",cat:"Medical",desc:"Community health.",enrolled:"65k",likes:"6k",price:"₹1,199",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:30},
    {id:227,title:"Biomedical Engineering",cat:"Medical",desc:"Medical tech.",enrolled:"75k",likes:"7k",price:"₹1,599",img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df3f?auto=format&fit=crop&w=800",progress:40},

    /* ================= ENGINEERING ================= */
    {id:228,title:"Mechanical Engineering Basics",cat:"Engineering",desc:"Core concepts.",enrolled:"80k",likes:"8k",price:"₹1,299",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:35},
    {id:229,title:"Electrical Engineering",cat:"Engineering",desc:"Circuits.",enrolled:"90k",likes:"9k",price:"₹1,399",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:40},
    {id:230,title:"Civil Engineering",cat:"Engineering",desc:"Structures.",enrolled:"70k",likes:"7k",price:"₹1,299",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:30},
    {id:231,title:"Electronics Engineering",cat:"Engineering",desc:"Devices.",enrolled:"85k",likes:"8k",price:"₹1,499",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:25},
    {id:232,title:"Robotics",cat:"Engineering",desc:"Automation.",enrolled:"95k",likes:"9k",price:"₹1,699",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:45},
    {id:233,title:"IoT Systems",cat:"Engineering",desc:"Connected devices.",enrolled:"75k",likes:"7k",price:"₹1,599",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:40},
    {id:234,title:"Control Systems",cat:"Engineering",desc:"Automation control.",enrolled:"60k",likes:"6k",price:"₹1,399",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:20},
    {id:235,title:"Thermodynamics",cat:"Engineering",desc:"Heat & energy.",enrolled:"65k",likes:"6k",price:"₹1,299",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:30},
    {id:236,title:"Embedded Systems",cat:"Engineering",desc:"Hardware programming.",enrolled:"70k",likes:"7k",price:"₹1,599",img:"https://images.unsplash.com/photo-1581091870627-3c7a3d9e5a5b?auto=format&fit=crop&w=800",progress:35},

    /* ================= FINANCE ================= */
    {id:182,title:"Stock Market Basics",cat:"Finance",desc:"Investing 101.",enrolled:"80k",likes:"8k",price:"₹1,299",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:25},
    {id:183,title:"Financial Modeling",cat:"Finance",desc:"Excel & valuation.",enrolled:"65k",likes:"6k",price:"₹1,499",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:30},
    {id:184,title:"Investment Banking",cat:"Finance",desc:"Corporate finance.",enrolled:"55k",likes:"5k",price:"₹1,699",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:35},
    {id:185,title:"Risk Analysis",cat:"Finance",desc:"Identify risks.",enrolled:"50k",likes:"5k",price:"₹1,599",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:30},
    {id:186,title:"Crypto Finance",cat:"Finance",desc:"Blockchain finance.",enrolled:"45k",likes:"4k",price:"₹1,399",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:28},
    {id:187,title:"Portfolio Management",cat:"Finance",desc:"Invest smartly.",enrolled:"60k",likes:"6k",price:"₹1,499",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:40},
    {id:188,title:"Derivatives Trading",cat:"Finance",desc:"Futures & options.",enrolled:"40k",likes:"4k",price:"₹1,299",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:30},
    {id:189,title:"Financial Analytics",cat:"Finance",desc:"Data-driven decisions.",enrolled:"35k",likes:"3k",price:"₹1,599",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:35},
    {id:190,title:"FinTech Fundamentals",cat:"Finance",desc:"Tech in finance.",enrolled:"30k",likes:"3k",price:"₹1,299",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",progress:20},

    /* ================= BUSINESS ================= */
    {id:146,title:"Startup Basics",cat:"Business",desc:"Learn how to start a business.",enrolled:"90k",likes:"9k",price:"₹1,299",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:35},
    {id:147,title:"Entrepreneurship Essentials",cat:"Business",desc:"Founding and running startups.",enrolled:"75k",likes:"7k",price:"₹1,499",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:40},
    {id:148,title:"Operations Management",cat:"Business",desc:"Streamline business processes.",enrolled:"60k",likes:"6k",price:"₹1,199",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:30},
    {id:149,title:"Leadership & Teamwork",cat:"Business",desc:"Manage and lead teams.",enrolled:"65k",likes:"6k",price:"₹1,399",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:35},
    {id:150,title:"Business Strategy",cat:"Business",desc:"Plan for growth and scale.",enrolled:"70k",likes:"7k",price:"₹1,599",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:45},
    {id:151,title:"Business Analytics",cat:"Business",desc:"Use data to make decisions.",enrolled:"55k",likes:"5k",price:"₹1,499",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:25},
    {id:152,title:"Negotiation Skills",cat:"Business",desc:"Close deals effectively.",enrolled:"50k",likes:"5k",price:"₹1,299",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:20},
    {id:153,title:"Scaling a Startup",cat:"Business",desc:"Grow your business efficiently.",enrolled:"45k",likes:"4k",price:"₹1,399",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:30},
    {id:154,title:"Financial Planning for Business",cat:"Business",desc:"Manage finances smartly.",enrolled:"40k",likes:"4k",price:"₹1,199",img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",progress:25},

    /* ================= EXCEL ================= */
    {id:155,title:"Excel Basics",cat:"Excel",desc:"Learn Excel from scratch.",enrolled:"100k",likes:"10k",price:"₹999",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:20},
    {id:156,title:"Advanced Excel",cat:"Excel",desc:"Formulas, pivot tables.",enrolled:"90k",likes:"9k",price:"₹1,199",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:40},
    {id:157,title:"Excel Dashboards",cat:"Excel",desc:"Create interactive dashboards.",enrolled:"80k",likes:"8k",price:"₹1,299",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:35},
    {id:158,title:"Power Query",cat:"Excel",desc:"Automate data tasks.",enrolled:"70k",likes:"7k",price:"₹1,499",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:45},
    {id:159,title:"Macros & VBA",cat:"Excel",desc:"Automate repetitive work.",enrolled:"60k",likes:"6k",price:"₹1,399",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:40},
    {id:160,title:"Excel Charts",cat:"Excel",desc:"Data visualization.",enrolled:"65k",likes:"6k",price:"₹1,199",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:35},
    {id:161,title:"Power BI Basics",cat:"Excel",desc:"Data analysis with Power BI.",enrolled:"55k",likes:"5k",price:"₹1,499",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:30},
    {id:162,title:"Data Cleaning with Excel",cat:"Excel",desc:"Prepare data for analysis.",enrolled:"50k",likes:"5k",price:"₹1,299",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:25},
    {id:163,title:"Excel Automation Projects",cat:"Excel",desc:"Hands-on Excel projects.",enrolled:"45k",likes:"4k",price:"₹1,399",img:"https://images.unsplash.com/photo-1714385756626-3e8246e1f455?auto=format&fit=crop&w=800",progress:30}
    
];


// Auth State Management
let enrolled = JSON.parse(localStorage.getItem('enrolled')) || [];
let current = null;
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let userData = JSON.parse(localStorage.getItem('userData')) || { name: 'Student User', email: 'student@coursehub.com' };

document.addEventListener('DOMContentLoaded', function() {
    renderHome();
    setupNav();
    setupSearch();
    populateCats();
    setupLogin();
    updateAuthUI();
    if(isLoggedIn) {
        renderProfileCourses();
        updateProfileStats();
    }
});

// NAVIGATION (Dashboard link REMOVED)
function setupNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
        const pageId = link.getAttribute('data-page');

        if (!pageId) return; // leave custom links like About alone

        link.onclick = function(e) {
            e.preventDefault();
            showPage(pageId);
        };
    });
}

function scrollToFooter() {
    showPage('home');

    const footer = document.getElementById('footer');
    if (footer) {
        footer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showPage(id) {
    const restricted = ['profile'];
    if (restricted.includes(id) && !isLoggedIn) {
        id = 'login';
    }

    if ((id === 'checkout-page' || id === 'payment-page') && !isLoggedIn) {
        alert("Please signup or login first before checkout or payment.");
        id = 'signup';
    }
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const selectedPage = document.getElementById(id);
    if(selectedPage) selectedPage.classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll(`[data-page="${id}"]`).forEach(l => l.classList.add('active'));
    
    if(id === 'profile') {
        renderProfileCourses();
        updateProfileStats();
        renderRecommendedCourses();
    }
    
    if (id === "home") {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
} else {
    window.scrollTo(0, 0);
}
    if (id === "checkout-page") {
        renderCart();
    }
    
    if (id === "payment-page") {

    let total = 0;

    cart.forEach(item => {
        let price = item.price;

        // If price is missing → skip
        if (price === undefined || price === null) return;

        // Convert everything to number safely
        price = String(price).replace(/[^0-9]/g, "");
        price = Number(price);

        if (!isNaN(price)) {
            total += price;
        }
    });

    document.getElementById("payment-total").innerText = total;
}
}

// AUTH SYSTEM
function setupLogin() {
    const loginForm = document.getElementById('login-form');
    if(loginForm) {
loginForm.onsubmit = function(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-pass').value.trim();

    let storedUser = localStorage.getItem('userData');

if (storedUser) {
    storedUser = JSON.parse(storedUser);
}

    console.log("Entered:", email, pass);
    console.log("Stored:", storedUser);

    if (
        storedUser &&
        email === storedUser.email &&
        pass === storedUser.password
    ) {
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');

        userData = storedUser;

        updateAuthUI();
showPage('home');
showWelcomePopup("Welcome Back 👋", "Glad to see you again. Let’s continue your learning journey!");
    } else {
        alert("Incorrect email or password!");
    }
}
    }
    
    const signupForm = document.getElementById('signup-form');
    if(signupForm) {
        signupForm.onsubmit = function(e) {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value.trim();
            const pass = document.getElementById('signup-pass').value.trim();
            const confirmPass = document.getElementById('signup-confirm-pass').value;
            
            if(pass !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }
            
            if(name && email && pass) {
                isLoggedIn = true;
                localStorage.setItem('isLoggedIn', 'true');
                userData = { name: name, email: email, password: pass};
                localStorage.setItem('userData', JSON.stringify(userData));
                console.log("Saved user:", userData); 
                updateAuthUI();
showPage('home');
showWelcomePopup("Welcome to CourseHub 🎉", "We’re so happy to have you here. Start exploring and enjoy your learning journey!");
            }
        }
    }
}

function handleLogout(redirectPage = 'home') {
    isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    function handleLogout(redirectPage = 'home') {
        isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
        // ❌ removed userData deletion
    
        updateAuthUI();
        showPage(redirectPage);
        
        if(redirectPage === 'home') {
            alert("Logged out successfully!");
        }
    }
    updateAuthUI();
    showPage(redirectPage);
    
    if(redirectPage === 'home') {
        alert("Logged out successfully!");
    }
}

function updateAuthUI() {
    const loginNav = document.getElementById('login-nav-li');
    const signupNav = document.getElementById('signup-nav-li');
    const profileNav = document.getElementById('profile-nav-li');
    const logoutNav = document.getElementById('logout-nav-li');

    if (isLoggedIn) {
        if(loginNav) loginNav.style.display = 'none';
        if(signupNav) signupNav.style.display = 'none';
        if(profileNav) profileNav.style.display = 'block';
        if(logoutNav) logoutNav.style.display = 'block';
        
        if (userData) {
    const userNames = document.querySelectorAll('#user-name, #side-name, #welcome-name');
    userNames.forEach(el => el.textContent = userData.name);
    
    const userEmails = document.querySelectorAll('#side-email');
    userEmails.forEach(el => el.textContent = userData.email);
    
    const editName = document.getElementById('edit-name');
    if (editName) editName.value = userData.name;
    
    const editEmail = document.getElementById('edit-email');
    if (editEmail) editEmail.value = userData.email;
}
    } else {
        if(loginNav) loginNav.style.display = 'block';
        if(signupNav) signupNav.style.display = 'block';
        if(profileNav) profileNav.style.display = 'none';
        if(logoutNav) logoutNav.style.display = 'none';
    }
}

// COURSE CARD
function createCard(c, isProfile = false) {
    return `
        <div class="course-card" onclick="viewCourse(${c.id})">
            <div class="thumb-wrap">
                <img src="${c.img}" class="course-thumb" alt="${c.title}" onerror="this.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800'">
            </div>
            <div class="card-body">
                <span style="font-size:0.75rem; color:#3182ce; font-weight:800">${c.cat}</span>
                <h3 style="margin:5px 0">${c.title}</h3>
                ${isProfile ? `
                    <div class="progress-container">
                        <div class="progress-fill" style="width:${c.progress}%"></div>
                    </div>
                    <p style="font-size:0.8rem; font-weight:700; color:#4a5568">${c.progress}% Completed</p>
                ` : ''}
                <p style="color:#718096; font-size:0.9rem">${c.desc}</p>
                <div style="display:flex; justify-content:space-between; margin-top:15px">
                    <span class="card-price">${c.price}</span>
                    <span style="color:#fbbf24; font-weight:700">4.9</span>
                </div>
            </div>
        </div>
    `;
}

// HOME PAGE
function renderHome() {
    document.getElementById('top15-grid').innerHTML = courses.slice(0, 15).map(c => createCard(c)).join('');
}

// DYNAMIC SEARCH (Never empty!)
function populateCats() {
    const cats = ['All', ...new Set(courses.map(c => c.cat))];
    document.getElementById('category-select').innerHTML = cats.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

function setupSearch() {
    const input = document.getElementById('search-input');
    const select = document.getElementById('category-select');
    const suggestionsBox = document.getElementById('search-suggestions');
    const SEARCH_HISTORY_KEY = 'courseSearchHistory';

    const getHistory = () => JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY)) || [];

    const saveHistory = (term) => {
        if (!term) return;
        let history = getHistory().filter(item => item.toLowerCase() !== term.toLowerCase());
        history.unshift(term);
        history = history.slice(0, 8);
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
    };
    const removeHistoryItem = (term) => {
    let history = getHistory().filter(item => item.toLowerCase() !== term.toLowerCase());
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
};

    const clearHistory = () => {
    localStorage.removeItem(SEARCH_HISTORY_KEY);
};

    const getRecommendedTerms = () => {
        const titles = courses.map(c => c.title);
        const cats = [...new Set(courses.map(c => c.cat))];
        return [...cats, ...titles.slice(0, 12)];
    };

    const renderSuggestions = (term = '') => {
        const history = getHistory();
        const recommendations = getRecommendedTerms();

        const filteredRecommendations = recommendations
            .filter(item => item.toLowerCase().includes(term.toLowerCase()))
            .slice(0, 6);

        const filteredHistory = history
            .filter(item => item.toLowerCase().includes(term.toLowerCase()))
            .slice(0, 5);

        let html = '';

        if (filteredHistory.length) {
    html += `
    <div class="suggestion-group-title recent-search-header">
        <span>Recent Searches</span>
        <button type="button" class="clear-recent-btn">Clear all</button>
    </div>
`;
    html += filteredHistory.map(item => `
        <div class="suggestion-item" data-value="${item}">
            <div class="suggestion-left">
                <i class="fas fa-history"></i>
                <span class="suggestion-text">${item}</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <span class="suggestion-badge">Recent</span>
                <button class="recent-remove-btn" data-remove="${item}" type="button">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `).join('');
}

        if (filteredRecommendations.length) {
            html += `<div class="suggestion-group-title">Recommended</div>`;
            html += filteredRecommendations.map(item => `
                <div class="suggestion-item" data-value="${item}">
                    <div class="suggestion-left">
                        <i class="fas fa-wand-magic-sparkles"></i>
                        <span class="suggestion-text">${item}</span>
                    </div>
                    <span class="suggestion-badge">Suggested</span>
                </div>
            `).join('');
        }

        if (!html) {
            html = `
                <div class="suggestion-item">
                    <div class="suggestion-left">
                        <i class="fas fa-search"></i>
                        <span class="suggestion-text">No suggestions found</span>
                    </div>
                </div>
            `;
        }

        suggestionsBox.innerHTML = html;
        suggestionsBox.classList.add('show');

        suggestionsBox.querySelectorAll('.suggestion-item[data-value]').forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.dataset.value;
                suggestionsBox.classList.remove('show');
                filter();
            });
        });
        suggestionsBox.querySelectorAll('.recent-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeHistoryItem(btn.dataset.remove);
        renderSuggestions(input.value.trim());
    });
});
const clearRecentBtn = suggestionsBox.querySelector('.clear-recent-btn');
if (clearRecentBtn) {
    clearRecentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        clearHistory();
        renderSuggestions(input.value.trim());
    });
}
    };

    const filter = () => {
        const term = input.value.toLowerCase().trim();
        const cat = select.value;

        let filtered = courses.filter(c =>
            (cat === 'All' || c.cat === cat) &&
            (c.title.toLowerCase().includes(term) ||
             c.desc.toLowerCase().includes(term) ||
             c.cat.toLowerCase().includes(term))
        );

        if (filtered.length === 0 && term) {
            document.getElementById('courses-grid').innerHTML = `
                <p style="grid-column:1/-1; text-align:center; padding:40px; color:#718096;">
                    No courses found for "${input.value}"
                </p>
            `;
            return;
        }

        document.getElementById('courses-grid').innerHTML = filtered.map(c => createCard(c)).join('');
    };

    input.addEventListener('focus', () => renderSuggestions(input.value.trim()));

    input.addEventListener('input', () => {
        filter();
        renderSuggestions(input.value.trim());
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const value = input.value.trim();
            saveHistory(value);
            suggestionsBox.classList.remove('show');
            filter();
        }
    });

    select.addEventListener('change', filter);

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box-wrap')) {
            suggestionsBox.classList.remove('show');
        }
    });

    document.getElementById('clear-btn').onclick = () => {
        input.value = '';
        select.value = 'All';
        suggestionsBox.classList.remove('show');
        filter();
    };

    filter();
}

// GENERATE RELEVANT COURSES FOR ANY SEARCH TERM
function generateDynamicCourses(term, count = 6) {
    const keywords = {
        'nursing': {title: `Advanced ${term.charAt(0).toUpperCase() + term.slice(1)} Care`, cat: term.toUpperCase(), desc: `Professional ${term} training with clinical practice.`, price: '₹2,999', progress: 20, img: 'https://images.unsplash.com/photo-1546118803-47fd1bb3f1a3?auto=format&fit=crop&w=800'},
        'marketing': {title: `Digital ${term} Mastery`, cat: 'Marketing', desc: `Advanced ${term} strategies for 2026.`, price: '₹1,799', progress: 35, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800'},
        'data': {title: `${term.charAt(0).toUpperCase() + term.slice(1)} Analytics Pro`, cat: 'Data Science', desc: `Cutting-edge ${term} analysis techniques.`, price: '₹3,499', progress: 45, img: 'https://images.unsplash.com/photo-1741390436362-13a15a5e2977?auto=format&fit=crop&w=800'},
        'nurse': {title: 'Nursing Excellence Program', cat: 'Healthcare', desc: `Comprehensive nursing certification course.`, price: '₹2,499', progress: 15, img: 'https://images.unsplash.com/photo-1546118803-47fd1bb3f1a3?auto=format&fit=crop&w=800'}
    };
    
    const baseCourse = keywords[term.toLowerCase()] || {
        title: `${term.charAt(0).toUpperCase() + term.slice(1)} Professional Certification`,
        cat: term.toUpperCase(),
        desc: `Master ${term} with industry expert instructors.`,
        price: '₹2,499',
        progress: Math.floor(Math.random() * 50) + 10,
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800'
    };
    
    return Array(count).fill().map((_, i) => ({
    ...baseCourse,
    id: `dynamic-${term}-${i}`,
    enrolled: `${Math.floor(Math.random() * 100) + 20}k`,
    likes: `${Math.floor(Math.random() * 15) + 5}k`
}));
}

// COURSE DETAIL
function viewCourse(id) {
    current = courses.find(c => c.id == id) || enrolled.find(c => c.id == id);
    const content = document.getElementById('course-detail-content');
    content.innerHTML = `
        <img src="${current.img}" class="detail-img" onerror="this.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800'">
        <h1 style="font-size:3rem">${current.title}</h1>
        <div class="detail-stats">
            <span><i class="fas fa-users"></i> ${current.enrolled} Enrolled</span>
            <span><i class="fas fa-heart"></i> ${current.likes} Likes</span>
            <span class="card-price">Price: ${current.price}</span>
        </div>
        <p style="font-size:1.2rem; line-height:1.8; color:#4a5568; margin: 20px 0">
            Become an expert in ${current.cat}. This comprehensive course includes industry projects, 1-on-1 mentorship, and lifetime access.
        </p>
        <h2>What you will learn</h2>
        <ul class="learn-grid">
            <li><i class="fas fa-check-circle"></i> Advanced Tools & Tech</li>
            <li><i class="fas fa-check-circle"></i> Portfolio Projects</li>
            <li><i class="fas fa-check-circle"></i> Professional Certificate</li>
            <li><i class="fas fa-check-circle"></i> Job Placement Support</li>
        </ul>
        <div style="text-align:center; padding:50px">
            <button class="hero-cta" style="background:#3182ce; color:white" onclick="openModal()">Register for Course</button>
        </div>
    `;
    showPage('course-detail');
}

// MODAL + REGISTRATION
function openModal() {
    if (!isLoggedIn) {
        showPage('login');
        return;
    }

    document.getElementById('modal-course-title').innerText = current.title;
    document.getElementById("reg-modal").style.display = 'flex';

    // AUTO FILL (NEW PART)
    const user = JSON.parse(localStorage.getItem("userData"));
    const form = document.getElementById("enroll-form");

    if (user && form) {
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');

        if (nameInput) nameInput.value = user.name;
        if (emailInput) emailInput.value = user.email;
        const msg = document.getElementById("autofill-msg");
        if (msg) msg.style.display = "block";
    }
}

function closeModal() {
    document.getElementById("reg-modal").style.display = "none";
}

// PROFILE FUNCTIONS
function renderProfileCourses() {
    const grid = document.getElementById('profile-enrolled-grid');

    if(enrolled.length) {

        // ✅ FIX old data (important)
        enrolled = enrolled.map(c => ({
            ...c,
            progress: c.progress ?? 0,
            cat: c.cat ?? "Course"
        }));

        grid.innerHTML = enrolled.map(c => `
            <div class="profile-course-card">
                <div class="profile-course-title">${c.title}</div>
                <p style="font-size:0.85rem; color:#64748b;">${c.cat}</p>

                <div class="profile-progress">
                    <div class="profile-progress-fill" style="width:${c.progress}%"></div>
                </div>

                <p style="font-size:0.8rem; margin-top:6px; color:#475569;">
                    ${c.progress}% completed
                </p>

                ${
                    c.progress === 100
                    ? `<span style="margin-top:12px; display:block; text-align:center; padding:8px; background:#16a34a; color:white; border-radius:8px; font-weight:700;">Completed ✓</span>`
                    : `<button onclick="completeCourse(${c.id})" style="margin-top:12px; width:100%;">Mark as Complete</button>`
                }
            </div>
        `).join('');
    } else {
        grid.innerHTML = '<p style="grid-column:1/-1; text-align:center; padding:50px; color:#718096">No courses enrolled yet. Register for courses to see them here.</p>';
    }
}

function completeCourse(courseId) {
    enrolled = enrolled.map(course =>
        course.id === courseId ? { ...course, progress: 100 } : course
    );

    localStorage.setItem("enrolled", JSON.stringify(enrolled));

    renderProfileCourses();
    updateProfileStats();

    alert("Course marked as completed successfully!");
}

function updateProfileStats() {
    const applied = enrolled.length;

    const completed = enrolled.filter(c => c.progress === 100).length;

    const pending = enrolled.filter(c => c.progress > 0 && c.progress < 100).length;

    document.getElementById('applied-count').textContent = applied;
    document.getElementById('completed-count').textContent = completed;
    document.getElementById('pending-count').textContent = pending;
}

function updateProfile() {
    userData.name = document.getElementById('edit-name').value;
    userData.email = document.getElementById('edit-email').value;
    localStorage.setItem('userData', JSON.stringify(userData));
    document.getElementById('side-name').textContent = userData.name;
    document.getElementById('side-email').textContent = userData.email;
    alert('Profile Updated!');
}

function goToPayment() {

    const container = document.getElementById("cart-items");
    const checkoutBtn = document.getElementById("checkout-btn");

    // If cart is empty
    if (cart.length === 0) {

        if (checkoutBtn) checkoutBtn.style.display = "none";

        if (container) {
            container.innerHTML = `
                <div class="empty-cart-box">
                    <div class="empty-cart-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <h3>A lot of courses are waiting for you</h3>
                    <p>Add them to your cart and we’ll see you here.</p>
                    <button type="button" onclick="showPage('courses')">Explore Courses</button>
                </div>
            `;
        }

        return;
    }

    // If cart has items
    if (checkoutBtn && cart.length > 0) checkoutBtn.style.display = "block";

    showPage("payment-page");

    const paymentContent = document.getElementById("payment-content");

    if (paymentContent) {
        paymentContent.innerHTML = `
            <div class="payment-container">
                <h2>Complete Your Payment</h2>

                <p>Total Amount: ₹${cart.reduce((sum, item) => sum + parseInt(item.price), 0)}</p>

                <div class="payment-options">
                    <button type="button" onclick="selectPayment('upi')">Pay with UPI</button>
                    <button type="button" onclick="selectPayment('card')">Pay with Card</button>
                    <button type="button" onclick="selectPayment('netbanking')">Net Banking</button>
                </div>

                <div id="payment-content" style="margin-top:20px;"></div>

                <button type="button" onclick="showPage('home')">
                    Back to Home
                </button>
            </div>
        `;
    }
}

function renderCart() {
    const container = document.getElementById("cart-items");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (!container) return;

    container.innerHTML = "";

    // ✅ If cart is empty
    if (cart.length === 0) {

        if (checkoutBtn) checkoutBtn.style.display = "none";

        container.innerHTML = `
            <div class="empty-cart-box">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-bag"></i>
                </div>
                <h3>A lot of courses are waiting for you</h3>
                <p>Add them to your cart and we’ll see you here.</p>
                <button type="button" onclick="showPage('courses')">Explore Courses</button>
            </div>
        `;

        return;
    }

    // ✅ If cart has items
    if (checkoutBtn) checkoutBtn.style.display = "block";

    cart.forEach((item, index) => {
        const div = document.createElement("div");

        let price = item.price;

        if (!price) price = "❌ MISSING";

div.classList.add("cart-item");

div.innerHTML = `
    <div class="cart-top-row">
        <img 
    src="${item.img || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800'}" 
    alt="${item.title || 'Course'}" 
    class="cart-thumb"
    onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800';"
>

        <div class="cart-course-info">
            <p style="font-size:0.85rem; color:#94a3b8;">Item ${index + 1}</p>
            <h3 class="cart-title">${item.name || item.title || 'Course Title'}</h3>
            <p class="cart-price">Price: ₹${price}</p>
        </div>
    </div>

    <button type="button" class="remove-btn" onclick="removeFromCart(${index})">
        Remove
    </button>
`;

        container.appendChild(div);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function selectPayment(method) {
    const content = document.getElementById("payment-content");

    if (!content) return;

    if (method === "upi") {
        content.innerHTML = `
            <div class="payment-box">
                <h4>Pay with UPI</h4>
                <p>Scan the QR code or use the UPI ID below.</p>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`upi://pay?pa=coursehub@upi&pn=CourseHub&am=${document.getElementById('payment-total')?.textContent || 0}`)}" alt="UPI QR Code" style="display:block; margin:15px auto; border-radius:10px;">
                <p><strong>UPI ID:</strong> coursehub@upi</p>
                <input type="text" class="modal-input" placeholder="Enter UPI Transaction ID">
                <button type="button" onclick="completePayment()">I Have Paid</button>
            </div>
        `;
    }

    if (method === "card") {
        content.innerHTML = `
            <div class="payment-box">
                <h4>Pay with Card</h4>
                <input type="text" class="modal-input" placeholder="Card Number">
                <input type="text" class="modal-input" placeholder="Card Holder Name">
                <input type="text" class="modal-input" placeholder="Expiry Date (MM/YY)">
                <input type="text" class="modal-input" placeholder="CVV">
                <button type="button" onclick="completePayment()">Pay Now</button>
            </div>
        `;
    }

    if (method === "netbanking") {
        content.innerHTML = `
            <div class="payment-box">
                <h4>Pay with Net Banking</h4>
                <select class="modal-input">
                    <option value="">Select Your Bank</option>
                    <option>HDFC Bank</option>
                    <option>SBI</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>Bank of Baroda</option>
                </select>
                <input type="text" class="modal-input" placeholder="Customer ID / Username">
                <button type="button" onclick="completePayment()">Continue to Pay</button>
            </div>
        `;
    }
}

function completePayment() {
    if (!isLoggedIn) {
        alert("Please login first to complete payment.");
        showPage("signup");
        return;
    }

    // Disable button (prevent multiple clicks)
    const btn = document.querySelector("#payment-content button");
    if (btn) {
        btn.innerText = "Processing...";
        btn.disabled = true;
    }

    setTimeout(() => {

        // Save purchased courses to enrolled
        cart.forEach(item => {
            if (!enrolled.find(c => c.id === item.id)) {
                enrolled.push({
                    ...item,
                    progress: 0,
                    cat: item.cat || "Course",
                    enrolledDate: new Date().toISOString()
                });
            }
        });

        localStorage.setItem('enrolled', JSON.stringify(enrolled));

        // Clear cart
        cart = [];
        saveCart();

        // Clear payment UI
        const content = document.getElementById("payment-content");
        if (content) content.innerHTML = "";

        // Success message
        showToast("Payment successful 🎉");

        // Go to profile
        showPage("profile");
        window.scrollTo(0, 0);

    }, 1500); // delay for realism
}

function requireLogin(message = "Please login or signup first to continue.") {
    if (!isLoggedIn) {
        alert(message);
        showPage('signup');
        return false;
    }
    return true;
}

function handleEnroll(event) {
    event.preventDefault(); // Prevent form reload

    if (!isLoggedIn) {
        alert("Please signup or login before enrolling in a course.");
        showPage("signup");
        return;
    }

    const form = document.getElementById("enroll-form");
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;

    if (!name || !email) {
        alert("Please fill in all required fields.");
        return;
    }

    cart.push({
        id: current.id,
        title: current.title,
        price: Number(String(current.price || 499).replace(/[^0-9]/g, "")),
        cat: current.cat || "Course",
        img: current.img
    });

    saveCart();

    alert(`Thank you ${name}! Your course has been added to checkout.`);

    closeModal();
    showPage("checkout-page");
    renderCart();
}

function renderCartItems() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>Price: ${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        container.appendChild(div);
    });
}

function closeModal() {
    document.getElementById("enroll-modal").style.display = "none";
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        // Remove the ₹ symbol and commas to parse as number
        let price = parseInt(item.price.replace(/₹|,/g, ''));
        total += price;
    });
    return total;
}

function registerUser() {

    alert("Registration Successful ✅");

    document.getElementById("reg-modal").style.display = "none";

}

function registerUser() {

    alert("Registration Successful ✅");

    // CLOSE MODAL AUTOMATICALLY
    closeModal();

}

updateCartCount();

document.addEventListener("DOMContentLoaded", () => {
    if (cart.length === 0) {
        const btn = document.getElementById("checkout-btn");
        if (btn) btn.style.display = "none";
    }
});

function showWelcomePopup(title, message) {
    const popup = document.getElementById("welcome-popup");
    const popupTitle = document.getElementById("welcome-popup-title");
    const popupMessage = document.getElementById("welcome-popup-message");

    if (popup && popupTitle && popupMessage) {
        popupTitle.innerText = title;
        popupMessage.innerText = message;
        popup.style.display = "flex";
    }
}

function closeWelcomePopup() {
    const popup = document.getElementById("welcome-popup");
    if (popup) popup.style.display = "none";
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.background = "linear-gradient(135deg, #16a34a, #22c55e)";
    toast.style.color = "white";
    toast.style.padding = "14px 20px";
    toast.style.borderRadius = "10px";
    toast.style.fontWeight = "700";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}

function renderRecommendedCourses() {
    const container = document.getElementById("recommended-courses");

    if (!container) return;

    if (!enrolled.length) {
        container.innerHTML = '<p style="color:#718096;">Start learning to get recommendations.</p>';
        return;
    }

    // get user's interested categories
    const userCategories = [...new Set(enrolled.map(c => c.cat))];

    // filter courses based on same category but not already enrolled
    const recommended = courses.filter(c =>
        userCategories.includes(c.cat) &&
        !enrolled.some(e => e.id === c.id)
    ).slice(0, 6);

    if (!recommended.length) {
        container.innerHTML = '<p style="color:#718096;">No recommendations available.</p>';
        return;
    }

    container.innerHTML = recommended.map(c => createCard(c)).join('');
}


// ================= FORGOT PASSWORD =================
let generatedOTP = null;

function openForgotPasswordModal() {
    const modal = document.getElementById("forgot-modal");
    if (!modal) return;

    modal.style.display = "flex";

    document.getElementById("forgot-step1").style.display = "block";
    document.getElementById("forgot-step2").style.display = "none";

    document.getElementById("forgot-email").value = "";
    document.getElementById("otp-input").value = "";
    document.getElementById("new-pass").value = "";
    document.getElementById("confirm-pass").value = "";
    document.getElementById("otp-display").innerText = "";

    generatedOTP = null;
}

function closeForgotModal() {
    const modal = document.getElementById("forgot-modal");
    if (!modal) return;
    modal.style.display = "none";
}

function sendOTP() {
    const email = document.getElementById("forgot-email").value.trim();
    const mobile = document.getElementById("forgot-mobile").value.trim();

    if (!email || !mobile) {
        alert("Please enter both email and mobile number.");
        return;
    }

    const user = JSON.parse(localStorage.getItem("userData"));

    if (!user || user.email !== email) {
        alert("Email not found. Please signup first.");
        return;
    }

    // OPTIONAL: check mobile (if you stored it during signup)
    if (user.mobile && user.mobile !== mobile) {
        alert("Mobile number does not match.");
        return;
    }

    // Generate OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000);

    document.getElementById("otp-display").innerText = generatedOTP;

    document.getElementById("forgot-step1").style.display = "none";
    document.getElementById("forgot-step2").style.display = "block";
}

function resetPassword() {
    const enteredOTP = document.getElementById("otp-input").value.trim();
    const newPass = document.getElementById("new-pass").value.trim();
    const confirmPass = document.getElementById("confirm-pass").value.trim();

    if (!enteredOTP || !newPass || !confirmPass) {
        alert("Please fill all fields.");
        return;
    }

    if (parseInt(enteredOTP) !== generatedOTP) {
        alert("Invalid OTP.");
        return;
    }

    if (newPass.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (newPass !== confirmPass) {
        alert("Passwords do not match.");
        return;
    }

    const user = JSON.parse(localStorage.getItem("userData"));
    user.password = newPass;
    localStorage.setItem("userData", JSON.stringify(user));

    alert("Password reset successful! Please login.");
    closeForgotModal();
    showPage("login");
}

window.addEventListener("click", function(e) {
    const modal = document.getElementById("forgot-modal");
    if (e.target === modal) {
        closeForgotModal();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeForgotModal();
    }
});

function fillUserDetails() {
    if (!isLoggedIn) {
        alert("Please login first.");
        showPage("login");
        return;
    }

    const user = JSON.parse(localStorage.getItem("userData"));

    if (!user) {
        alert("No user data found.");
        return;
    }

    const form = document.getElementById("enroll-form");

    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');

    if (nameInput) nameInput.value = user.name;
    if (emailInput) emailInput.value = user.email;
}