export const testimonialsData = {
  students: {
    videos: [
      {
        id: 1,
        type: "video",
        name: "Shrushati Palkar",
        role: "TCS, Java Developer, Mumbai",
        image: "https://picsum.photos/400/250?random=1",
        videoId: "hAl-SSYQ8b4"
      },
      {
        id: 2,
        type: "video",
        name: "Abhay Motwani",
        role: "Analyst, Nandurbar",
        image: "https://picsum.photos/400/250?random=2",
        videoId: "ajHPZghPSNs"
      },
      {
        id: 3,
        type: "video",
        name: "Manali Killekar",
        role: "Software Developer, Belgaum",
        image: "https://picsum.photos/400/250?random=3",
        videoId: "a-6U94sp2RQ"
      },
      {
        id: 4,
        type: "video",
        name: "Rishab Khare",
        role: "Software Engineer, Banda",
        image: "https://picsum.photos/400/250?random=4",
        videoId: "4Z1XEf4Wa3w"
      },
      {
        id: 5,
        type: "video",
        name: "Belagapu Uma Sankar",
        role:
          "Engineer, FS Application Software (Financial Services), Srikakulam",
        image: "https://picsum.photos/400/250?random=5",
        videoId: "8VIdDpoQlpc"
      },
      {
        id: 6,
        type: "video",
        name: "Ayushi Parheta",
        role: "TCS, Developer, Salem",
        image: "https://picsum.photos/400/250?random=6",
        videoId: "1IfYmp6Dm2A"
      },
      {
        id: 7,
        type: "video",
        name: "Koushik S.",
        role: "TCS, Assistant System Engineer, Jabalpur",
        image: "https://picsum.photos/400/250?random=7",
        videoId: "YEo5vj7bxTY"
      },
      {
        id: 8,
        type: "video",
        name: "Mohan Vinnakota",
        role:
          "TCS, Full Stack Modern Web Application Developer, Visakhapatnam",
        image: "https://picsum.photos/400/250?random=8",
        videoId: "He64UNry5mI"
      },
      {
        id: 9,
        type: "video",
        name: "Praharshitha K. Venkata",
        role: "TCS, Graduate Trainee, Vijayawada",
        image: "https://picsum.photos/400/250?random=9",
        videoId: "CVK6Vk8NLiU"
      },
      {
        id: 10,
        type: "video",
        name: "Marie Gabriella Irudayaraj",
        role: "TCS Digital, Systems Engineer, Puducherry",
        image: "https://picsum.photos/400/250?random=10",
        videoId: "jpy8sNuNfiI"
      }
    ],

    texts: [
      {
        id: 11,
        type: "text",
        name: "Monish Jaiswal",
        role: "Mphasis, Software Engineer, Dausa",
        image: "https://picsum.photos/400/250?random=11",
        truncated:
          "I graduated in 2021 from NIT Hamirpur. The pandemic brought a lot of stress because there were hardly any good opportunities available ...",
        fullText:
          "I graduated in 2021 from NIT Hamirpur. The pandemic brought a lot of stress because there were hardly any good opportunities available for freshers..."
      },
      {
        id: 12,
        type: "text",
        name: "Abhinay Hinge",
        role:
          "Star Union Dai-ichi Life Insurance Company Limited, Associate Technical Trainee",
        image: "https://picsum.photos/400/250?random=12",
        truncated:
          "Hi, I am Abhinay Hinge. I did my M.Sc. Data Science from B. K. Birla College...",
        fullText:
          "Hi, I am Abhinay Hinge. I did my M.Sc. Data Science from B. K. Birla College, Kalyan (W)..."
      }
    ]
  },

  corporates: {
    testimonials: [
      {
        id: 21,
        type: "video",
        name: "Swati Patil",
        role: "Director - Talent Development, iOPEX",
        image: "https://picsum.photos/400/250?random=21",
        videoId: "lr7kBXFOJy8"
      },
      {
        id: 22,
        type: "text",
        name: "Subash Joseph",
        role: "Lead Recruitment - NeST Digital",
        image: "https://picsum.photos/400/250?random=22",
        truncated:
          "We thank TCS iON for the exceptional support provided to NeST Digital...",
        fullText:
          "We thank TCS iON for the exceptional support provided to NeST Digital..."
      }
    ]
  }
};

/* ================= HELPERS ================= */

export const getStudentVideos = () =>
  testimonialsData.students.videos;

export const getStudentTexts = () =>
  testimonialsData.students.texts;

export const getCorporateTestimonials = () =>
  testimonialsData.corporates.testimonials;

export const getAllTestimonials = () => {
  const allStudents = [
    ...testimonialsData.students.videos,
    ...testimonialsData.students.texts
  ];
  const allCorporates = testimonialsData.corporates.testimonials;

  return { allStudents, allCorporates };
};

export const getTestimonialById = (id) => {
  const { allStudents, allCorporates } = getAllTestimonials();
  return [...allStudents, ...allCorporates].find(
    (item) => item.id === id
  );
};

export const getTestimonialsByType = (type) => {
  const { allStudents, allCorporates } = getAllTestimonials();
  return [...allStudents, ...allCorporates].filter(
    (item) => item.type === type
  );
};

export default testimonialsData;
