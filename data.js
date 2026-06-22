/* ===== DATA ===== */
const data = {
  categories: [
    { id: 'dev', name: 'Web Development', count: 248, ico: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>', color: 'text-primary', bg: 'bg-blue' },
    { id: 'design', name: 'UI/UX Design', count: 132, ico: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>', color: 'text-accent', bg: 'bg-orange' },
    { id: 'data', name: 'Data Science', count: 96, ico: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>', color: 'text-emerald', bg: 'bg-emerald' },
    { id: 'photo', name: 'Photography', count: 74, ico: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>', color: 'text-rose', bg: 'bg-rose' },
    { id: 'business', name: 'Business', count: 189, ico: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>', color: 'text-indigo', bg: 'bg-indigo' },
    { id: 'music', name: 'Music & Audio', count: 58, ico: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>', color: 'text-amber', bg: 'bg-amber' },
    { id: 'health', name: 'Health & Fitness', count: 83, ico: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>', color: 'text-pink', bg: 'bg-pink' },
    { id: 'lang', name: 'Languages', count: 47, ico: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-8-5 8"/><path d="M14 18h6"/></svg>', color: 'text-teal', bg: 'bg-teal' },
  ],
  catColors: {
    'bg-blue': '#d9f0ff', 'text-primary': '#1567e1',
    'bg-orange': '#ffefd4', 'text-accent': '#f05f06',
    'bg-emerald': '#d1fae5', 'text-emerald': '#047857',
    'bg-rose': '#ffe4e6', 'text-rose': '#be123c',
    'bg-indigo': '#e0e7ff', 'text-indigo': '#4338ca',
    'bg-amber': '#fef3c7', 'text-amber': '#b45309',
    'bg-pink': '#fce7f3', 'text-pink': '#be185d',
    'bg-teal': '#ccfbf1', 'text-teal': '#0f766e',
  },

  courses: [
    { id:'c1', title:'The Complete Web Developer Bootcamp 2026', category:'Web Development', level:'Beginner', price:64.99, oldPrice:199.99, rating:4.9, reviews:'38,420', students:'214', lessons:412, hours:62, image:'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=900', instructor:'Daniel Cooper', instructorAvatar:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120', tag:'Bestseller' },
    { id:'c2', title:'UI/UX Design Masterclass: From Wireframe to Prototype', category:'UI/UX Design', level:'Intermediate', price:48.99, oldPrice:149.99, rating:4.8, reviews:'12,840', students:'86', lessons:186, hours:28, image:'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=900', instructor:'Amelia Rivera', instructorAvatar:'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120', tag:'Hot' },
    { id:'c3', title:'Data Science & Machine Learning with Python', category:'Data Science', level:'Advanced', price:79.99, oldPrice:219.99, rating:4.9, reviews:'21,500', students:'102', lessons:320, hours:48, image:'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=900', instructor:'Marcus Bennett', instructorAvatar:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120', tag:'Bestseller' },
    { id:'c4', title:'Digital Photography Fundamentals for Creators', category:'Photography', level:'Beginner', price:39.99, rating:4.7, reviews:'6,420', students:'38', lessons:84, hours:14, image:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=900', instructor:'Sofia Martinez', instructorAvatar:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120', tag:'New' },
    { id:'c5', title:'Business Strategy & Leadership in Modern Enterprises', category:'Business', level:'Intermediate', price:54.99, oldPrice:169.99, rating:4.8, reviews:'9,870', students:'54', lessons:142, hours:22, image:'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900', instructor:'James Carter', instructorAvatar:'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { id:'c6', title:'Music Production & Sound Engineering Essentials', category:'Music & Audio', level:'Beginner', price:44.99, rating:4.6, reviews:'4,120', students:'18', lessons:96, hours:16, image:'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=900', instructor:'Liam Walker', instructorAvatar:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120', tag:'New' },
  ],
  courseFilters: ['All','Web Development','UI/UX Design','Data Science','Business'],
  tagStyles: { Bestseller:'#ff7c10', New:'#1c7ff5', Hot:'#f43f5e' },
  levelStyles: { Beginner:['#d1fae5','#047857'], Intermediate:['#fef3c7','#b45309'], Advanced:['#ffe4e6','#be123c'] },

  features: [
    { ico:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>', title:'1,280+ courses', desc:'Curated libraries across 24 disciplines, refreshed weekly.' },
    { ico:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title:'Expert instructors', desc:'Learn from practitioners shipping at top companies.' },
    { ico:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>', title:'Verified certificates', desc:'Industry-recognized credentials you can share on LinkedIn.' },
    { ico:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.75Z"/><path d="m9 12 2 2 4-4"/></svg>', title:'Lifetime access', desc:'Buy once, learn forever — including every future update.' },
  ],

  instructors: [
    { id:'i1', name:'Daniel Cooper', role:'Senior Full-Stack Engineer', avatar:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400', courses:14, students:'214', rating:4.9, socials:['x','linkedin'] },
    { id:'i2', name:'Amelia Rivera', role:'Lead Product Designer', avatar:'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400', courses:9, students:'86', rating:4.8, socials:['x','linkedin','dribbble'] },
    { id:'i3', name:'Marcus Bennett', role:'AI & Data Science Lead', avatar:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400', courses:11, students:'102', rating:4.9, socials:['x','linkedin'] },
    { id:'i4', name:'Sofia Martinez', role:'Visual Storyteller & Photographer', avatar:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400', courses:6, students:'38', rating:4.7, socials:['x','linkedin','dribbble'] },
  ],
  socialIcons: {
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.68-1.68-1.68a1.68 1.68 0 0 0-1.68 1.68c0 .93.75 1.68 1.68 1.68zm1.39 9.94v-8.37H5.5v8.37z"/></svg>',
    dribbble: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path fill="#fff" d="M12 2a10 10 0 0 0-8.4 4.6 21 21 0 0 0 6.3 1.3A35 35 0 0 0 9 4.1c1.4-.7 2.9-1 4.4-1.1zM3 7.6A10 10 0 0 0 2 12c2.2 0 4.3-.3 6.3-.8a40 40 0 0 0-2-3.6A21 21 0 0 0 3 7.6zM11 6.2A40 40 0 0 0 12 12a21 21 0 0 0 6.4 2A10 10 0 0 0 11 6.2zM13 14a40 40 0 0 1-1-5.8 10 10 0 0 1 7.5 6.4A10 10 0 0 1 12 22a10 10 0 0 1-8.5-4.7A23 23 0 0 1 7 16.4a40 40 0 0 0 6.5 3.6z"/></svg>',
  },

  testimonials: [
    { id:'t1', name:'Olivia Hayes', role:'Frontend Developer @ Nimbus', avatar:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120', rating:5, text:'EduMove completely changed how I learn. The structured paths got me from beginner to a real dev job in under a year. The instructors actually care.' },
    { id:'t2', name:'Ethan Reed', role:'UX Designer @ Pixelhouse', avatar:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120', rating:5, text:'The design courses are world-class. I built my entire portfolio using skills I picked up here. Worth every penny ten times over.' },
    { id:'t3', name:'Priya Nair', role:'Data Analyst @ Northwind', avatar:'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120', rating:5, text:'Flexible scheduling and lifetime access meant I could learn around my full-time job. The data science track is rigorous and practical.' },
    { id:'t4', name:'Marcus Lee', role:'Entrepreneur', avatar:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120', rating:4, text:'Great platform for professionals. The business strategy courses helped me restructure my startup and triple revenue in two quarters.' },
  ],

  stats: [
    { value:1280, suffix:'+', label:'Online Courses' },
    { value:312, suffix:'K', label:'Active Students' },
    { value:450, suffix:'+', label:'Expert Instructors' },
    { value:99, suffix:'%', label:'Satisfaction Rate' },
  ],
  brands: ['Acme University','Northwind College','Stellar Academy','Lumen Institute','Vertex School','Brightpath'],

  footerCols: [
    { title:'Platform', links:['Browse Courses','Learning Paths','Mobile App','Pricing','Become an Instructor'] },
    { title:'Company', links:['About Us','Careers','Blog','Press Kit','Contact'] },
    { title:'Resources', links:['Help Center','Community','Webinars','Certificates','Affiliate Program'] },
    { title:'Legal', links:['Terms of Service','Privacy Policy','Cookie Policy','Accessibility','Refund Policy'] },
  ],
  footerSocials: [
    { key:'facebook', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>' },
    { key:'twitter', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
    { key:'linkedin', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.68-1.68-1.68a1.68 1.68 0 0 0-1.68 1.68c0 .93.75 1.68 1.68 1.68zm1.39 9.94v-8.37H5.5v8.37z"/></svg>' },
    { key:'instagram', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' },
    { key:'youtube', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4a2.5 2.5 0 0 0-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4a2.5 2.5 0 0 0 1.7-1.7c.4-1.5.4-4.7.4-4.7zM9.8 15.3V8.7l5.7 3.3z"/></svg>' },
  ],
};
