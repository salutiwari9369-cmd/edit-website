
/* ====== SETTINGS: apna number aur images yahan badlein ====== */
const PHONES=["919560369410","918882664742","918800159410"];
const PHONE=PHONES[0];
const fmt=n=>"+91 "+n.slice(2,7)+" "+n.slice(7);
const ADDRESSES=[
{label:"B-117, Sector 69, Noida (Uttar Pradesh) 201301",mapUrl:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("B-117, Sector 69, Noida (Uttar Pradesh) 201301"),mapEmbed:"https://www.google.com/maps?q="+encodeURIComponent("B-117, Sector 69, Noida (Uttar Pradesh) 201301")+"&output=embed"},
{label:"Old Furniture Market, Opp. Okhla Bird Sanctuary Metro Station, Sector 94, Noida (U.P.)",mapUrl:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Old Furniture Market, Opp. Okhla Bird Sanctuary Metro Station, Sector 94, Noida (U.P.)"),mapEmbed:"https://www.google.com/maps?q="+encodeURIComponent("Old Furniture Market, Opp. Okhla Bird Sanctuary Metro Station, Sector 94, Noida (U.P.)")+"&output=embed"}
];
const EMAIL="Oldfurnitureks@gmail.com";
const SERVICE_ITEMS=[["Business Support","images/generated/service-icons/business.png"],["Pan India Delivery","images/generated/india-map-pan-india.png"],["Express Delivery","images/generated/service-icons/express-delivery.png"],["Affordable Rates","images/generated/service-icons/affordable.png"]];
const TICKER_ITEMS=SERVICE_ITEMS;
/* Image add karne ke liye: IMG.sofa="data:image/jpeg;base64,..." ya koi bhi image data URI */
const IMG={hero:"hero-banner-1.webp",productBanner:"images/product-banner-2000x400.png",sofa:"design-corner-sofa-or-hero-sofa-or-lago.jpg",dining:"Gemini_Generated_Image_xa6witxa6witxa6w.webp",bed:"11.jpg",chair:"images%20%2814%29.jpg",wardrobe:"1%20%281%29.jpg",fridge:"images%20%2815%29.jpg",study:"images/generated/home-furniture/study-space.png",bunk:"images/generated/bunk.svg",v1:"images/generated/restoration.svg",v2:"images/generated/before-after.svg",v3:"images/generated/delivery.svg",quality:"images/generated/quality-check.svg",journey:"images/generated/buying-steps.svg",customer:"images/generated/customer-service.svg","cHome Furniture":"design-corner-sofa-or-hero-sofa-or-lago.jpg","cOffice Furniture":"images%20%2814%29.jpg","cKitchen Appliances":"images%20%2815%29.jpg","cElectronic Gadgets":"images/generated/electronic-gadgets/category-electronics.jpg","cRestaurant Furniture":"Gemini_Generated_Image_xa6witxa6witxa6w.webp","cPG Furniture":"images/generated/bunk.svg","cFlat Furniture":"hero-banner-image.png"};
const P=[
["p1","3 Seater Sofa","Home Furniture",12000,1,"sofa","🛋️","Comfortable and stylish sofa for your living room."],
["p2","Dining Table Set","Home Furniture",18000,0,"dining","🍽️","Solid wood dining table with 6 chairs."],
["p3","Queen Size Bed","Home Furniture",18000,1,"bed","🛏️","Spacious and comfortable queen size bed."],
["p4","Ergonomic Office Chair","Office Furniture",6500,1,"chair","🪑","Comfortable office chair with adjustable height."],
["p5","Wooden Wardrobe","Home Furniture",9800,0,"wardrobe","🚪","Spacious wardrobe for organized storage."],
["p6","Double Door Refrigerator","Home Furniture",14000,1,"fridge","🧊","Energy efficient refrigerator for your home."],
["p7","Study Table","Home Furniture",4800,1,"study","📚","Compact study table with drawers."],
["p8","Bunk Bed","Home Furniture",8800,1,"bunk","🛏️","Strong metal bunk bed, ideal for PG and hostels."]];
const C=[["Home Furniture","🛋️"],["Office Furniture","🪑"],["Restaurant Furniture","🍽️"]];
const HOME_CATEGORY_IMAGE="images/home-furniture-category.png";
const OFFICE_CATEGORY_IMAGE="images/office-furniture-category.png";
const RESTAURANT_CATEGORY_IMAGE="images/restaurant-furniture-category.png";
const HOME_SUBCATEGORIES=[
["Beds","🛏️"],["Sofas","🛋️"],["Dining Tables","🍽️"],["Dressing Tables","🪞"],["TV Unit Cabinets","📺"],["Almirah","🚪"],["Showcase","🗄️"],["Center Tables","🪵"],["Wardrobes","👕"],["Study Tables","📚"],["Accent Chairs","🪑"],["Coffee Tables","☕"]
];
const OFFICE_SUBCATEGORIES=[
["Office Desk","🖥️"],["Revolving Chair","🪑"],["Boss Chair","💺"],["Fixed Chair","🪑"],["Conference Table","🪑"],["Workstations","💻"]
];
const HOME_CATEGORIES=[["Home Furniture","🛋️"],["Office Furniture","🪑"],["Electronic Gadgets","💻"],["Kitchen Appliances","🧊"],["Restaurant Furniture","🍽️"],["Flat Furniture","🏠"]];
const CATEGORY_SAMPLES={
"Home Furniture":[["Accent Chair","🪑"],["Coffee Table","🪵"]],
"Office Furniture":[["Executive Office Chair","🪑"],["Office Desk","🖥️"],["Visitor Chair","💺"],["Conference Table","🪑"],["Office Storage Cabinet","🗄️"]],
"Electronic Gadgets":[["LED Television","📺"],["Laptop","💻"],["Desktop Monitor","🖥️"],["Bluetooth Speaker","🔊"],["Printer","🖨️"],["Wi-Fi Router","📡"]]
};
const CATEGORY_SAMPLE_IMAGES={
"Accent Chair":"images/generated/home-furniture/accent-chair.jpg",
"Coffee Table":"images/generated/home-furniture/coffee-table.jpg",
"Executive Office Chair":"images/generated/office-furniture/executive-chair.jpg",
"Office Desk":"images/generated/office-furniture/office-desk.jpg",
"Visitor Chair":"images/generated/office-furniture/visitor-chair.jpg",
"Conference Table":"images/generated/office-furniture/conference-table.jpg",
"Office Storage Cabinet":"images/generated/office-furniture/storage-cabinet.jpg",
"LED Television":"images/generated/electronic-gadgets/television.jpg",
"Laptop":"images/generated/electronic-gadgets/laptop.jpg",
"Desktop Monitor":"images/generated/electronic-gadgets/desktop-computer.jpg",
"Bluetooth Speaker":"images/generated/electronic-gadgets/speakers.jpg",
"Printer":"images/generated/electronic-gadgets/printer.jpg",
"Wi-Fi Router":"images/generated/electronic-gadgets/wifi-router.jpg"
};
const GOOGLE_REVIEWS=[
{name:"Syead Maaz",initial:"S",avatar:"images/generated/review-avatars/syead-maaz.jpg",meta:"Local Guide · 116 reviews · 281 photos",date:"1 year ago",url:"https://www.google.com/maps/contrib/106741748461180816264/reviews?hl=en-IN",text:"1. Recommend to come this place by two wheeler or by cab as no parking available\n2. Best bargain time couple of hours before closing…",photos:["https://lh3.googleusercontent.com/grass-cs/AABkmLf9YgB64e6RapBaepfuV4KjdwCPcS2XLTP020AosBMIunk2PY-_zJ-B0CrKWLfmtAm-IcaMhSrNfqqIivaiShYNcTFdcAOtX-Kcxy_goJ6oWC4Z9KGVqHLg5iwq07mQ486YgMRPfAY3a28=s188-p-k-rw","https://lh3.googleusercontent.com/grass-cs/AABkmLdutXSkZJAauwQdaL2pE_ZE-olIxr9bG-MwxgdfADRoJpEtqdTr_dP-3ziWNv8DgHK_ntJQWAlFAfLhYR0xAFRc4xbypUou2TxJj4q8QFdUfc1tqukkok3sL3ZtsYYlMOHmMSt39U726z0=s188-p-k-rw","https://lh3.googleusercontent.com/grass-cs/AABkmLefUMZJk_u08b5DlmpivFhFjFLlDWiOLN5RpDs2hQi70bKK8andhANyUlpBMF-Sp71WjwyLSvcCVs80xvbDsZgOS6frJ5MHPNG58bRebbJo7horB06JVp3eegtIlxbEGEhznLfxYr-IrqcT=s188-p-k-rw"]},
{name:"Kishlay Sahay",initial:"K",avatar:"images/generated/review-avatars/kishlay-sahay.jpg",meta:"2 reviews",date:"4 months ago",url:"https://www.google.com/maps/contrib/106313490731703164826/reviews?hl=en-IN",text:"Good collection with decent price. Karan ji provided great assistance at reasonable price. Would visit again for some antique and quality product."},
{name:"Tahseen Rajput",initial:"T",avatar:"images/generated/review-avatars/tahseen-rajput.jpg",meta:"3 reviews",date:"4 years ago",url:"https://www.google.com/maps/contrib/105775460890558650494/reviews?hl=en-IN",text:"Brilliant and hassle free experience in dealing with Global Furniture. They picked up our old house stuff for a very good deal. We are glad to have chosen them. Thank you for your services."}
];
const ph=(k,e,extraClass="")=>`<div class="ph${extraClass?` ${extraClass}`:""}" style="${IMG[k]?`background-image:url(${IMG[k]})`:""}">${IMG[k]?"":e}</div>`;
const inr=n=>"₹"+n.toLocaleString("en-IN");
const wa=(t,number=PHONE)=>`https://wa.me/${number}?text=${encodeURIComponent(t)}`;
const productShareUrl=path=>/^https?:$/.test(location.protocol)?new URL(path,location.href).href:path;
const productEnquiryMessage=(p,question="")=>`Hello, I would like to enquire about this product.
Product: ${p[1]}
Category: ${p[2]}
Price: ${inr(p[3])}
Availability: ${p[4]?"Available":"Sold Out"}
Condition: Refurbished
Details: ${p[7]}
Delivery: Pan India delivery on request
Product image: ${productShareUrl(IMG[p[5]])}
Product page: ${productShareUrl(`product.html?id=${encodeURIComponent(p[0])}`)}
${question?`Question: ${question}\n`:""}Please confirm the latest availability, price and delivery details.`;
const callIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.56 3.58.56.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.16 21 3 13.84 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.19 2.46.56 3.58a1 1 0 0 1-.25 1.01z"/></svg>`;
const whatsappIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.9 9.9 0 0 0-8.55 14.89L2 22l5.25-1.38A9.9 9.9 0 1 0 12 2zm0 2a7.9 7.9 0 0 1 0 15.8 7.8 7.8 0 0 1-4-1.1l-.5-.3-3.1.82.83-3.02-.33-.52A7.9 7.9 0 0 1 12 4z"/><path d="M8.2 7.1c-.25-.55-.5-.56-.73-.57h-.62c-.22 0-.58.08-.88.4-.3.32-1.15 1.12-1.15 2.72s1.17 3.15 1.33 3.37c.16.22 2.28 3.65 5.63 4.97 2.79 1.1 3.35.88 3.95.82.6-.06 1.94-.79 2.21-1.55.28-.76.28-1.41.2-1.55-.08-.14-.3-.22-.63-.39-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.14-.68.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.03-2.43z"/></svg>`;
const mapIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`;
const card=p=>`<div class="pc rev"><div class="im"><span class="bd ${p[4]?"":"so"}">${p[4]?"Available":"Sold Out"}</span>${ph(p[5],p[6])}</div><div class="b"><h4>${p[1]}</h4><small>${p[2]}</small><div class="pr">${inr(p[3])}</div><div class="a"><a class="btn s" href="product.html?id=${p[0]}">View Details</a><a class="btn s g" data-product-whatsapp="${p[0]}" target="_blank" rel="noopener" href="${wa(productEnquiryMessage(p))}">WhatsApp</a></div></div></div>`;
const sampleCard=([name,icon],category)=>`<article class="pc rev${category==="Office Furniture"?" office-sample":""}"><div class="im"><span class="bd sample">Sample</span>${CATEGORY_SAMPLE_IMAGES[name]?`<div class="ph${["Electronic Gadgets","Office Furniture"].includes(category)?" fitted-sample-image":""}" style="background-image:url('${CATEGORY_SAMPLE_IMAGES[name]}')" role="img" aria-label="${name}"></div>`:ph("sample-"+name,icon)}</div><div class="b"><h4>${name}</h4><small>${category}</small><div class="pr">Price on enquiry</div><div class="a"><a class="btn s" href="contact.html">Enquire</a></div></div></article>`;
const categoryProductSection=category=>{const products=P.filter(product=>product[2]===category).slice(0,6),samples=(CATEGORY_SAMPLES[category]||[]).slice(0,Math.max(0,6-products.length));return `<section class="category-products"><div class="w"><h2 class="rev">${category}</h2><p class="sub">Browse current items and sample ideas. Contact us to confirm availability and price.</p><div class="grid">${products.map(card).join("")}${samples.map(sample=>sampleCard(sample,category)).join("")}</div></div></section>`};
const head=(t,s)=>`<div class="ph-head"><div class="w"><h1>${t}</h1><p>${s}</p></div></div>`;
const productExploreHero=()=>`<section class="product-explore-head" aria-label="Explore our products"><img src="${IMG.productBanner}" alt="Timeless old furniture made for your home" loading="eager"></section>`;
const cta=(t)=>`<div class="w" style="padding-top:50px"><div class="cta rev"><div><h2>${t}</h2><p>Explore our collection or contact our team.</p></div><div style="display:flex;gap:10px"><a class="btn" href="products.html">Explore Products</a><a class="btn" style="background:#16181d" href="contact.html">Contact Us</a></div></div></div>`;
const HOW_STEPS=[
{label:"EXPLORE",title:"Explore",description:"Browse our collection.",icon:'<rect x="13" y="23" width="70" height="52" rx="8" fill="#c77b4a"/><path d="M13 34h70" stroke="#f1c49b" stroke-width="8"/><circle cx="32" cy="53" r="4" fill="#fff"/><circle cx="48" cy="53" r="4" fill="#fff"/><circle cx="64" cy="53" r="4" fill="#fff"/>'},
{label:"ENQUIRE",title:"Enquire",description:"Contact our team.",icon:'<path d="M16 24h64a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8H51L34 87V72H16a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8Z" fill="#6c8f7e"/><circle cx="31" cy="48" r="5" fill="#fff"/><circle cx="48" cy="48" r="5" fill="#fff"/><circle cx="65" cy="48" r="5" fill="#fff"/>'},
{label:"CONFIRM",title:"Confirm",description:"Check availability and pricing.",icon:'<rect x="20" y="10" width="56" height="76" rx="12" fill="#e1a447"/><path d="m31 49 12 12 28-31" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'},
{label:"DELIVER",title:"Get Your Furniture",description:"Complete purchase and delivery.",icon:'<path d="M10 24h48v43H10z" fill="#e9853c"/><path d="M58 37h17l17 19v11H58z" fill="#ca6735"/><circle cx="29" cy="72" r="10" fill="#35464a"/><circle cx="74" cy="72" r="10" fill="#35464a"/>'}
];
const howItWorks=()=>`<section class="buying-process"><div class="w"><div class="buying-process__heading rev"><span class="buying-process__eyebrow">HOW IT WORKS</span><h2>Buying Furniture <em>Made Simple</em></h2><p class="sub">Four easy steps.</p></div><div class="buying-process__visual rev"><img class="buying-process__reference" src="images/generated/how-it-works-compass-enquire-confirm-deliver.png" alt="Explore furniture, enquire with our team, confirm your order and get it delivered"></div><div class="buying-process__cards">${HOW_STEPS.map((step,i)=>`<article class="buying-card rev"><span class="buying-card__number">${i+1}</span><h3>${step.title}</h3><p>${step.description}</p></article>`).join("")}</div></div></section>`;
const R={
home:()=>`<div class="pg">${hero()}
<section><div class="w"><h2 class="rev">Featured <em>Products</em></h2><p class="sub">Handpicked and quality checked.</p><div class="grid">${P.slice(0,6).map(card).join("")}</div></div></section>
<section><div class="w"><h2 class="rev">Shop by <em>Category</em></h2><p class="sub">Find the right furniture for every space.</p><div class="cats">${HOME_CATEGORIES.map(c=>`<a href="products.html" class="cat rev"><div class="c">${ph("c"+c[0],c[1],c[0]==="Electronic Gadgets"?"gadget-category-image":"")}</div><p>${c[0]}</p></a>`).join("")}</div></div></section>
${["Home Furniture","Office Furniture","Electronic Gadgets"].map(categoryProductSection).join("")}
<section class="why-s"><div class="w"><div class="hd rev"><span class="pill">WHY US</span><h2>Why Choose <em>Old Furniture KS?</em></h2><p class="sub">Quality, affordability and trust, all in one place.</p></div><div class="wg"><div class="wc rev"><span class="n">01</span><div class="ic"><img src="images/generated/india-map-pan-india.png" alt="" aria-hidden="true"></div><h4>Pan India Delivery</h4><p>Safe and reliable furniture delivery across India, right to your doorstep.</p></div><div class="wc rev"><span class="n">02</span><div class="ic"><img src="images/generated/why-choose-icons/affordable-prices.png" alt="" aria-hidden="true"></div><h4>Affordable Prices</h4><p>Budget-friendly furniture options with no compromise on quality.</p></div><div class="wc rev"><span class="n">03</span><div class="ic"><img src="images/generated/why-choose-icons/quality-checked.png" alt="" aria-hidden="true"></div><h4>Quality Checked</h4><p>Every piece is carefully inspected before it reaches you.</p></div><div class="wc rev"><span class="n">04</span><div class="ic"><img src="images/generated/why-choose-icons/refurbished-furniture.png" alt="" aria-hidden="true"></div><h4>Refurbished Furniture</h4><p>Restored, polished and ready for everyday use.</p></div><div class="wc rev"><span class="n">05</span><div class="ic"><img src="images/generated/why-choose-icons/easy-enquiry.png" alt="" aria-hidden="true"></div><h4>Easy Enquiry</h4><p>Simple process: enquire on WhatsApp or call us in seconds.</p></div><div class="wc rev"><span class="n">06</span><div class="ic"><img src="images/generated/why-choose-icons/expert-support.png" alt="" aria-hidden="true"></div><h4>Expert Support</h4><p>Our team helps you choose, confirm and receive with ease.</p></div></div><div class="stats rev"><div><b class="cn" data-n="500">0</b><span>Happy Customers</span></div><div><b class="cn" data-n="800">0</b><span>Products Sold</span></div><div><b class="cn" data-n="120">0</b><span>Cities Delivered</span></div><div><b class="cn" data-n="100">0</b><span>% Quality Checked</span></div></div></div></section>
<section class="furniture-process" aria-labelledby="furniture-process-title"><div class="w"><div class="furniture-process__heading rev"><span class="buying-process__eyebrow">OUR FURNITURE JOURNEY</span><h2 id="furniture-process-title">From Pre-Loved to <em>Ready for You</em></h2><p class="sub">We source used furniture, refurbish it with care and make it ready for a new home.</p></div><div class="furniture-process__steps"><article class="furniture-process__step rev"><div class="furniture-process__image"><img src="images/generated/furniture-journey/pre-loved-to-refreshed.png" alt="Sofa before and after refurbishment, from worn to refreshed" loading="lazy" decoding="async"><span>01</span></div><h3>We Buy</h3><p>We source pre-owned furniture and check each piece before taking it in.</p></article><article class="furniture-process__step rev"><div class="furniture-process__image"><img src="images/generated/furniture-journey/furniture-restoration.png" alt="Furniture restoration showing a worn sofa being repaired and refreshed" loading="lazy" decoding="async"><span>02</span></div><h3>We Refurbish</h3><p>We repair, restore and quality-check furniture to give it a fresh start.</p></article><article class="furniture-process__step rev"><div class="furniture-process__image"><img src="images/generated/how-it-works-green-sofa.jpg" alt="Refurbished sofa styled in a living room" loading="lazy" decoding="async"><span>03</span></div><h3>We Sell</h3><p>Ready-to-use furniture is listed at affordable prices for its next home.</p></article></div></div></section>
<div class="w"><div class="cta rev"><div><h2>Give Your Space a Fresh Look.</h2><p>Explore affordable furniture options for your home, office and business.</p></div><a class="btn" href="products.html">Explore All Products →</a></div></div>
<section><div class="w"><h2 class="rev">See the <em>Transformation</em></h2><p class="sub">Watch how we bring old furniture back to life.</p><div class="vids">${[["v1","Restoration Process","🔨"],["v2","Before &amp; After","✨"],["v3","Delivery Showcase","🚚"]].map(v=>`<div class="vd rev">${ph(v[0],v[2])}<div class="pl">▶</div></div>`).join("")}</div></div></section>
${howItWorks()}</div>`,
products:()=>`<div class="pg">${productExploreHero()}<section class="product-category-section"><div class="w"><div class="product-category-cards">${C.map(([name],index)=>`<button class="product-category-card ${index===0?"product-category-card--home":"product-category-card--office"}" type="button" data-category="${name}" aria-pressed="false"><span class="product-category-card__number">0${index+1}</span><span class="product-category-card__placeholder"><span>${index===0?"HOME FURNITURE":"OFFICE FURNITURE"}<small>IMAGE PLACEHOLDER</small></span></span><span class="product-category-card__copy"><b>${name}</b><small>${name==="Home Furniture"?"Beds, sofas, tables and more":"Desks, chairs, storage and more"}</small></span><i aria-hidden="true">↗</i></button>`).join("")}</div><div class="home-subcategories" id="home-subcategories"><div class="home-subcategories__heading"><span class="category-section-kicker">SHOP BY ROOM</span><h2>Home Furniture <em>Categories</em></h2><p>Explore furniture by room and use.</p></div><div class="home-subcategory-grid">${HOME_SUBCATEGORIES.map(([name,icon])=>`<button class="home-subcategory-chip" type="button" data-subcategory="${name}"><span>${icon}</span><b>${name}</b><i aria-hidden="true">→</i></button>`).join("")}</div></div><div class="office-category-panel" id="office-category-panel" hidden><span class="category-section-kicker">WORKSPACE COLLECTION</span><h2>Office Furniture <em>Collection</em></h2><p>Office furniture details and exact product options will be added here.</p></div><div class="grid" id="pg"></div><div class="fl filters"><input id="q" placeholder="🔍 Search products..."><select id="fc"><option value="">All Categories</option>${C.map(c=>`<option>${c[0]}</option>`).join("")}</select><select id="fa"><option value="">Availability</option><option value="1">Available</option><option value="0">Sold Out</option></select><select id="fs"><option value="n">Sort: Newest</option><option value="l">Price: Low to High</option><option value="h">Price: High to Low</option></select></div></div></section>${cta("Found Something You Like?")}</div>`,
about:()=>`<div class="pg">${head("About Old Furniture KS","Affordable Furniture, Better Choices, Fresh Beginnings.")}<section><div class="w two"><div class="rev"><h2>Our <em>Story</em></h2><p class="sub">Old Furniture KS started with a simple idea: to make quality furniture affordable for everyone. We buy, refurbish and sell pre-owned furniture so homes, offices and PGs can be furnished without overspending.</p><h2>Our <em>Mission</em></h2><p class="sub">To provide affordable, quality-checked furniture options that are sustainable and accessible to all.</p></div><div style="height:320px" class="rev">${ph("hero","🏬")}</div></div></section>
<section class="dark"><div class="w"><h2 class="rev">Our Quality <em>Process</em></h2><p class="sub">Four steps before it reaches you.</p><div class="steps">${["Inspection|Check overall condition","Assessment|Evaluate repair needs","Refurbishment|Restore and polish","Final Check|Ensure quality standards"].map((s,i)=>`<div class="st rev"><i>${i+1}</i><b>${s.split("|")[0]}</b><p style="color:var(--mut)">${s.split("|")[1]}</p></div>`).join("")}</div></div></section>
<section><div class="w"><h2 class="rev">Why Choose <em>Us</em></h2><div class="cards4" style="margin-top:20px"><div class="cd rev"><b class="cd__icon" aria-hidden="true"><img src="images/generated/why-choose-icons/affordable-prices.png" alt=""></b>Affordable Options</div><div class="cd rev"><b class="cd__icon" aria-hidden="true"><img src="images/generated/why-choose-icons/refurbished-furniture.png" alt=""></b>Product Variety</div><div class="cd rev"><b class="cd__icon" aria-hidden="true"><img src="images/generated/why-choose-icons/quality-checked.png" alt=""></b>Transparent Condition</div><div class="cd rev"><b class="cd__icon" aria-hidden="true"><img src="images/generated/why-choose-icons/expert-support.png" alt=""></b>Responsive Support</div></div><div class="cards4" style="margin-top:30px"><div class="cd rev"><b class="cn" data-n="500">0</b>Happy Customers</div><div class="cd rev"><b class="cn" data-n="800">0</b>Products Sold</div><div class="cd rev"><b class="cn" data-n="120">0</b>Cities Delivered</div></div></div></section>${cta("Looking for Affordable Furniture?")}</div>`,
contact:()=>`<div class="pg contact-page"><section class="contact-hero"><div class="w"><span>WE’RE HERE TO HELP</span><h1>Contact Us</h1><p>We’re here to help. Get in touch with us for any queries related to buying or selling furniture.</p></div></section><section class="contact-section"><div class="w"><div class="contact-grid"><form class="fm contact-form rev" id="cf"><h2>Send Us a <em>Message</em></h2><label for="fn">Your Name</label><input id="fn" placeholder="Your Name" autocomplete="name" required><label for="fp">Phone Number</label><input id="fp" type="tel" placeholder="Your Phone Number" autocomplete="tel" required><label for="fa2">Product of Interest</label><input id="fa2" placeholder="What are you looking for?"><label for="fm">Your Message</label><textarea id="fm" rows="4" placeholder="How can we help you?"></textarea><button class="btn" type="submit">Send Enquiry <span aria-hidden="true">→</span></button></form><div class="contact-info rev"><h2>Our <em>Address</em></h2>${ADDRESSES.map((address,index)=>`<div class="contact-detail"><b class="contact-icon">${mapIcon}</b><div><strong>Location ${index+1}</strong><p>${address.label}</p><a href="${address.mapUrl}" target="_blank" rel="noopener noreferrer">Get directions ↗</a></div></div>`).join("")}<h3>Call Us</h3><div class="contact-detail"><b class="contact-icon">${callIcon}</b><div>${PHONES.map(number=>`<a href="tel:+${number}">${fmt(number)}</a>`).join("")}</div></div><h3>Chat on WhatsApp</h3><div class="contact-detail"><b class="contact-icon">${whatsappIcon}</b><div>${PHONES.map(number=>`<a target="_blank" rel="noopener noreferrer" href="${wa("Hi, I would like to know more about your furniture.",number)}">Chat on ${fmt(number)}</a>`).join("")}</div></div><h3>Email</h3><div class="contact-detail"><b class="contact-icon">✉</b><div><a href="mailto:${EMAIL}">${EMAIL}</a></div></div></div><div class="contact-map rev"><div class="contact-map__heading"><h2>Find Us on <em>Map</em></h2></div><div class="contact-map__locations">${ADDRESSES.map((address,index)=>`<div class="contact-map__location"><div class="contact-map__location-heading"><strong>Location ${index+1}</strong><a href="${address.mapUrl}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></div><iframe title="Map for ${address.label}" src="${address.mapEmbed}" loading="lazy"></iframe></div>`).join("")}</div></div></div><section class="contact-faq" aria-labelledby="contact-faq-title"><h2 id="contact-faq-title">FAQs</h2><details><summary>Can I check product availability?</summary><p class="sub">Yes, message us on WhatsApp.</p></details><details><summary>Do you provide delivery?</summary><p class="sub">Yes, Pan India delivery is available.</p></details><details><summary>Is Cash on Delivery available?</summary><p class="sub">Yes, COD is available.</p></details><details><summary>What is your return policy?</summary><p class="sub">See our Return Policy page.</p></details></section></div></section></div>`,
returns:()=>`<div class="pg">${head("Return Policy","Simple and transparent.")}<section><div class="w"><div class="cards4">${[
["<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 4h11v13H3zM14 9h4l3 4v4h-7z\"/><circle cx=\"7\" cy=\"19\" r=\"2\"/><circle cx=\"18\" cy=\"19\" r=\"2\"/><path d=\"M6 8h5m-5 3h4\"/></svg>","Inspect on Delivery","Check the product condition at the time of delivery."],
["<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2M8 3 6 5m10-2 2 2\"/></svg>","Report Quickly","Inform us within 48 hours of delivery."],
["<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M20 7h-5V2M4 17h5v5\"/><path d=\"M5.2 9a7.5 7.5 0 0 1 12.5-2L20 9M4 15l2.3 2a7.5 7.5 0 0 0 12.5-2\"/></svg>","Replacement","Major undisclosed defects are eligible for replacement or refund."],
["<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m12 2 8 3v6c0 5-3.4 8.6-8 11-4.6-2.4-8-6-8-11V5z\"/><path d=\"m8 12 2.5 2.5L16 9\"/></svg>","Transparent Condition","We clearly share condition details before purchase."]
].map(x=>`<div class="cd rev"><b class="return-policy__icon">${x[0]}</b><h4>${x[1]}</h4><p class="sub" style="margin:0">${x[2]}</p></div>`).join("")}</div></div></section>${cta("Looking for Affordable Furniture?")}</div>`
};
function productFaqs(p){
const productQuestions={
p1:["Is this sofa available in another color?","The listing shows a 3 Seater Sofa. Please ask us to confirm available colors and exact dimensions before ordering."],
p2:["Can you suggest a similar dining table?","This Dining Table Set is currently marked sold out. Message us and we can check similar dining options."],
p3:["Will a queen-size mattress fit this bed?","This is listed as a Queen Size Bed. Please confirm the exact frame and mattress dimensions with us before ordering."],
p4:["Can I confirm the chair adjustments?","The listing describes an ergonomic office chair with adjustable height. Please message us to confirm its current features and condition."],
p5:["How much storage does this wardrobe have?","This is listed as a Wooden Wardrobe. Ask us to confirm its dimensions, compartments and current condition."],
p6:["Can I check the refrigerator brand and capacity?","Brand, capacity and appliance condition are not listed here. Message us and we can confirm the available product details."],
p7:["Does the study table have drawers?","The listing describes a compact study table with drawers. Please message us to confirm its dimensions and current condition."],
p8:["Is this bunk bed suitable for a hostel or PG?","The listing describes a metal bunk bed for PGs and hostels. Please confirm dimensions and current availability before ordering."]
};
return [
["What is the listed price?",`The listed price is ${inr(p[3])}. Please message us to confirm the current price before ordering.`],
["Is this product available?",p[4]?"It is currently marked available. Please confirm stock with us before placing your order.":"It is currently marked sold out. Message us to ask about similar products."],
["Can you deliver to my PIN code?","Pan India delivery is available on request. Send your PIN code on WhatsApp so we can confirm serviceability, charges and estimated delivery time."],
productQuestions[p[0]]
];
}
function detail(id){const p=P.find(x=>x[0]===id);if(!p)return R.home();const rel=P.filter(x=>x[0]!==id).slice(0,4),faqs=productFaqs(p);
return `<div class="pg"><section><div class="w"><p class="sub"><a href="index.html">Home</a> › <a href="products.html">Products</a> › ${p[1]}</p><div class="det"><div><div class="big" id="big">${ph(p[5],p[6])}</div><div class="th">${[0,1,2,3].map(i=>`<div>${ph(p[5],p[6])}</div>`).join("")}</div></div><div><span class="bd ${p[4]?"":"so"}" style="position:static;display:inline-block">${p[4]?"Available":"Sold Out"}</span><h2 style="margin-top:10px">${p[1]}</h2><div class="pr" style="font-size:30px">${inr(p[3])}</div><p class="sub" style="margin-top:10px">${p[7]}</p><p>• Condition: Refurbished<br>• Category: ${p[2]}<br>• Delivery: Pan India (on request)</p><div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap"><a class="btn g" data-product-whatsapp="${p[0]}" target="_blank" rel="noopener" href="${wa(productEnquiryMessage(p))}">💬 Enquire on WhatsApp</a><a class="btn" href="tel:+${PHONE}">📞 Call Now</a></div></div></div>
<section class="product-faq" aria-labelledby="product-faq-title"><h2 id="product-faq-title">Questions about this <em>product?</em></h2><p class="sub">Select a question to see the answer. For more details, contact us on WhatsApp.</p><div class="product-faq__layout"><div class="product-faq__questions">${faqs.map((faq,i)=>`<button class="product-faq__question${i===0?" is-active":""}" type="button" data-faq="${i}" aria-pressed="${i===0}">${faq[0]}<span aria-hidden="true">›</span></button>`).join("")}</div><div class="product-faq__answer" aria-live="polite"><p id="product-faq-answer">${faqs[0][1]}</p><a class="btn g product-faq__ask" data-product-whatsapp="${p[0]}" target="_blank" rel="noopener" href="${wa(productEnquiryMessage(p,faqs[0][0]))}">💬 Ask this question on WhatsApp</a></div></div></section>
<div class="tabs"><button class="on" data-t="0">Description</button><button data-t="1">Specifications</button><button data-t="2">Delivery</button></div><p id="tb" class="sub">${p[7]} Modern and elegant design, high quality finish, quality checked.</p>
<h2 style="margin-top:40px">Related <em>Products</em></h2><div class="grid" style="margin-top:16px">${rel.map(card).join("")}</div></div></section></div>`}
const HS=[
["hero-banner-image.png","Refurbished Furniture at","Affordable Prices","Discover beautifully refurbished furniture that combines quality, comfort and style — all at prices that fit your budget."],
["hero-banner-1.webp","Quality Furniture,","Smart Savings","Find quality pre-owned furniture at great prices. Enjoy stylish and practical furniture solutions without stretching your budget."],
["FURNITURE_-_COLLECTION_HERO_BANNER_MOBILE.png","Give Your Space a","Fresh New Look","Transform your home or office with our wide selection of refurbished furniture designed to bring comfort, elegance and functionality."],
["design-corner-sofa-or-hero-sofa-or-lago.jpg","Premium Style Without the","Premium Price","Enjoy the look and feel of beautiful furniture at affordable prices. Discover smart furniture choices that offer excellent value."],
["Hero_Banner_-_Lighting_Campaign_572a98e4-5892-48f5-8c9c-e467b3a1624b.webp","Furniture for Every Space","and Every Need","From sofas and beds to tables, chairs and office furniture, explore a diverse collection for every corner of your space."],
["aaf_hero_banner_1.webp","Sustainable Living Starts","with Smart Choices","Choose refurbished furniture, reduce waste and give quality furniture a second life while making budget-friendly decisions."],
["wide-banner-modern-contemporary-living-room-interior-blank-poster-frame-mockup-green-sofa-clean-neutral-design-d-soft-447884993.webp","Your Destination for","Affordable Refurbished Furniture","Discover more, spend less and find furniture that suits your taste and budget. Quality, style and affordability come together here."]
];
function clientReviewScroller(){const groups=[false,true].map(duplicate=>`<div class="client-review-marquee__group"${duplicate?' aria-hidden="true" inert':""}>${GOOGLE_REVIEWS.map(r=>`<span class="client-review-marquee__item"><img class="client-review-marquee__avatar" src="${r.avatar}" alt="" aria-hidden="true" loading="lazy" decoding="async"><span class="client-review-marquee__stars" aria-label="5 out of 5 stars">★★★★★</span><span class="client-review-marquee__text">${r.text.replace(/\s+/g," ")}</span><strong>${r.name}</strong></span>`).join("")}</div>`).join("");return `<div class="client-review-marquee" id="client-reviews" role="region" aria-label="Google customer reviews"><div class="client-review-marquee__track">${groups}</div></div>`}
function hero(){return `<div class="hs">${HS.map(s=>`<div class="sl"><div class="bg" style="background-image:url(${s[0]})"></div><div class="w"><h1>${s[1]} <em>${s[2]}</em></h1><p>${s[3]}</p><div><a class="btn" href="products.html">Explore Collection →</a> <a class="btn o" href="contact.html">Contact Us</a></div></div></div>`).join("")}<button class="ar l" id="hp">‹</button><button class="ar r" id="hn">›</button><div class="dt">${HS.map(()=>"<i></i>").join("")}</div><div class="mouse"><i></i></div>${clientReviewScroller()}<section class="strip" aria-labelledby="services-title"><div class="strip__inner"><h2 id="services-title">Our Services</h2><div class="strip__services">${SERVICE_ITEMS.map(([label,icon])=>`<div class="strip__service"><img src="${icon}" alt=""><span>${label}</span></div>`).join("")}</div></div></section></div>`}
let hsT,hi=0;
function initHero(){const s=[...document.querySelectorAll(".sl")],d=[...document.querySelectorAll(".dt i")];
const go=n=>{hi=(n+s.length)%s.length;s.forEach((x,k)=>x.classList.toggle("on",k===hi));d.forEach((x,k)=>x.classList.toggle("on",k===hi))};
const auto=()=>{clearInterval(hsT);hsT=setInterval(()=>go(hi+1),6000)};
hp.onclick=()=>{go(hi-1);auto()};hn.onclick=()=>{go(hi+1);auto()};d.forEach((x,k)=>x.onclick=()=>{go(k);auto()});
let sx=0;const h=document.querySelector(".hs");h.ontouchstart=e=>sx=e.touches[0].clientX;h.ontouchend=e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50){go(hi+(dx<0?1:-1));auto()}};
go(0);auto()}
const app=document.getElementById("app");
const productImageFile=async p=>{
const response=await fetch(IMG[p[5]]);
if(!response.ok)throw new Error(`Could not load product image: ${response.status}`);
let blob=await response.blob();
if(blob.type==="image/svg+xml"||IMG[p[5]].endsWith(".svg")){
const objectUrl=URL.createObjectURL(blob);
try{
const image=new Image();image.src=objectUrl;await image.decode();
const canvas=document.createElement("canvas");canvas.width=image.naturalWidth||512;canvas.height=image.naturalHeight||512;
const context=canvas.getContext("2d");if(!context)throw new Error("Could not prepare product image for sharing");
context.drawImage(image,0,0,canvas.width,canvas.height);
blob=await new Promise((resolve,reject)=>canvas.toBlob(file=>file?resolve(file):reject(new Error("Could not convert product image for sharing")),"image/png"));
}finally{URL.revokeObjectURL(objectUrl)}
}
if(!blob.type.startsWith("image/"))throw new Error("Product image is not a supported image file");
const extension=blob.type==="image/png"?"png":blob.type==="image/webp"?"webp":"jpg";
return new File([blob],`${p[0]}.${extension}`,{type:blob.type});
};
app.addEventListener("click",async event=>{
const link=event.target.closest("a[data-product-whatsapp]");
if(!link||!navigator.share||!navigator.canShare)return;
const p=P.find(item=>item[0]===link.dataset.productWhatsapp);
if(!p)return;
event.preventDefault();
try{
const file=await productImageFile(p);
if(!navigator.canShare({files:[file]})){location.href=link.href;return}
await navigator.share({files:[file],title:p[1],text:productEnquiryMessage(p)});
}catch(error){
if(error.name==="AbortError")return;
console.error("Could not share the product image; opening WhatsApp with its image link instead.",error);
location.href=link.href;
}
});
function grid(){const q=document.getElementById("q").value.toLowerCase(),c=document.getElementById("fc").value,a=document.getElementById("fa").value,s=document.getElementById("fs").value;
let l=P.filter(p=>p[1].toLowerCase().includes(q)&&(!c||p[2]===c)&&(a===""||String(p[4])===a));
if(s==="l")l.sort((x,y)=>x[3]-y[3]);if(s==="h")l.sort((x,y)=>y[3]-x[3]);
pg.innerHTML=l.length?l.map(card).join(""):"<p class='sub'>Koi product nahi mila.</p>";reveal()}
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);if(e.target.querySelectorAll)e.target.querySelectorAll(".cn").forEach(count)}}),{threshold:.12});document.querySelectorAll(".rev:not(.in)").forEach(e=>io.observe(e))}
function count(el){const n=+el.dataset.n;let i=0;const t=setInterval(()=>{i+=Math.ceil(n/40);if(i>=n){i=n;clearInterval(t)}el.textContent=i+"+"},30)}
function updateTicker(){document.querySelectorAll(".ticker-group").forEach(group=>{group.replaceChildren(...TICKER_ITEMS.map(([label,iconPath])=>{const item=document.createElement("span"),icon=document.createElement("img");icon.src=iconPath;icon.alt="";icon.setAttribute("aria-hidden","true");item.append(icon,document.createTextNode(label));return item}))})}
updateTicker();
function route(){const pg0=document.body.dataset.page;const h=pg0==="product"?(new URLSearchParams(location.search).get("id")||"p1"):pg0;let v=R[h]?R[h]():(/^p\d+$/.test(h)?detail(h):R.home());app.innerHTML=v;if(h==="home"){const services=app.querySelector(".strip"),banner=app.querySelector(".hs");if(services&&banner){services.classList.add("services-panel");banner.after(services)}}window.scrollTo(0,0);
document.querySelectorAll(".links a").forEach(a=>a.classList.toggle("on",a.dataset.p===(pg0==="product"?"products":pg0)));
lk.classList.remove("o");
if(h==="products"){
const homeCategoryCard=app.querySelector('.product-category-card[data-category="Home Furniture"]');
if(homeCategoryCard){
const image=document.createElement("img");
image.src=HOME_CATEGORY_IMAGE;
image.alt="";
image.loading="lazy";
homeCategoryCard.classList.add("product-category-card--home-banner");
homeCategoryCard.setAttribute("aria-label","Show Home Furniture products");
homeCategoryCard.replaceChildren(image);
}
const officeCategoryCard=app.querySelector('.product-category-card[data-category="Office Furniture"]');
if(officeCategoryCard){
const image=document.createElement("img");
image.src=OFFICE_CATEGORY_IMAGE;
image.alt="";
image.loading="lazy";
officeCategoryCard.classList.add("product-category-card--office-banner");
officeCategoryCard.setAttribute("aria-label","Show Office Furniture products");
officeCategoryCard.replaceChildren(image);
}
const restaurantCategoryCard=app.querySelector('.product-category-card[data-category="Restaurant Furniture"]');
if(restaurantCategoryCard){
const image=document.createElement("img");
image.src=RESTAURANT_CATEGORY_IMAGE;
image.alt="";
image.loading="lazy";
restaurantCategoryCard.classList.add("product-category-card--restaurant-banner");
restaurantCategoryCard.setAttribute("aria-label","Show Restaurant Furniture products");
restaurantCategoryCard.replaceChildren(image);
}
const restaurantPanel=document.createElement("div");
restaurantPanel.className="office-category-panel restaurant-category-panel";
restaurantPanel.id="restaurant-category-panel";
restaurantPanel.hidden=true;
restaurantPanel.innerHTML='<span class="category-section-kicker">HOSPITALITY COLLECTION</span><h2>Restaurant Furniture <em>Collection</em></h2><p>Looking for tables, chairs or seating for your restaurant? Contact us to check current options and availability.</p><a class="btn" href="contact.html">Enquire about Restaurant Furniture</a>';
document.getElementById("pg").before(restaurantPanel);
["q","fc","fa","fs"].forEach(i=>document.getElementById(i).addEventListener("input",grid));
const categoryCards=[...document.querySelectorAll(".product-category-card")];
const homePanel=document.getElementById("home-subcategories");
const officePanel=document.getElementById("office-category-panel");
const officeSubcategoryGrid=document.createElement("div");
officeSubcategoryGrid.className="home-subcategory-grid office-subcategory-grid";
officeSubcategoryGrid.innerHTML=OFFICE_SUBCATEGORIES.map(([name,icon])=>`<button class="home-subcategory-chip office-subcategory-chip" type="button" data-subcategory="${name}" aria-pressed="false"><span>${icon}</span><b>${name}</b><i aria-hidden="true">→</i></button>`).join("");
officePanel.append(officeSubcategoryGrid);
const selectCategory=category=>{
const fc=document.getElementById("fc"),q=document.getElementById("q");
fc.value=category;q.value="";
categoryCards.forEach(card=>{const active=card.dataset.category===category;card.classList.toggle("active",active);card.setAttribute("aria-pressed",String(active))});
homePanel.hidden=category!=="Home Furniture";
officePanel.hidden=category!=="Office Furniture";
restaurantPanel.hidden=category!=="Restaurant Furniture";
if(category!=="Home Furniture")homePanel.querySelectorAll(".home-subcategory-chip").forEach(chip=>chip.classList.remove("active"));
if(category!=="Office Furniture")officePanel.querySelectorAll(".office-subcategory-chip").forEach(chip=>{chip.classList.remove("active");chip.setAttribute("aria-pressed","false")});
grid();
};
categoryCards.forEach(card=>card.addEventListener("click",()=>selectCategory(card.dataset.category)));
homePanel.querySelectorAll(".home-subcategory-chip").forEach(chip=>chip.addEventListener("click",()=>{
homePanel.querySelectorAll(".home-subcategory-chip").forEach(item=>item.classList.remove("active"));
chip.classList.add("active");
const fc=document.getElementById("fc"),q=document.getElementById("q");
fc.value="Home Furniture";
const subcategory=chip.dataset.subcategory;
q.value=subcategory.replace(/s$/,"").replace("Dining Table","Dining").replace("Almirah","Wardrobe").replace("Study Table","Study");
grid();
}));
document.querySelectorAll(".office-subcategory-chip").forEach(chip=>chip.addEventListener("click",()=>{
document.querySelectorAll(".office-subcategory-chip").forEach(item=>{item.classList.remove("active");item.setAttribute("aria-pressed","false")});
chip.classList.add("active");
chip.setAttribute("aria-pressed","true");
const fc=document.getElementById("fc"),q=document.getElementById("q");
fc.value="Office Furniture";
q.value=chip.dataset.subcategory;
grid();
}));
selectCategory("Home Furniture");
}
if(h==="contact")cf.onsubmit=e=>{e.preventDefault();window.open(wa(`Hi, my name is ${fn.value}. Phone: ${fp.value}. Product of interest: ${fa2.value}. ${fm.value}`),"_blank")};
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("on"));b.classList.add("on");const t=[ "Modern and elegant design, high quality finish, sturdy build.","Condition: Refurbished · Quality checked · Dimensions on request.","Pan India delivery available. Cash on Delivery available."];tb.textContent=t[b.dataset.t]});
const faqProduct=P.find(x=>x[0]===h),faqAnswer=document.getElementById("product-faq-answer"),faqAsk=document.querySelector(".product-faq__ask");
if(faqProduct&&faqAnswer&&faqAsk){
const faqs=productFaqs(faqProduct);
document.querySelectorAll(".product-faq__question").forEach(button=>button.addEventListener("click",()=>{
const index=Number(button.dataset.faq),faq=faqs[index];
if(!Number.isInteger(index)||!faq)return;
document.querySelectorAll(".product-faq__question").forEach(item=>{item.classList.toggle("is-active",item===button);item.setAttribute("aria-pressed",String(item===button))});
faqAnswer.textContent=faq[1];
faqAsk.href=wa(productEnquiryMessage(faqProduct,faq[0]));
}));
}
clearInterval(hsT);if(h==="home")initHero();reveal()}
route();
document.getElementById("wal").href=wa("Hi, mujhe Old Furniture KS ke baare me jaankari chahiye");
mb.onclick=()=>lk.classList.toggle("o");
addEventListener("scroll",()=>{const s=document.documentElement,p=s.scrollTop/(s.scrollHeight-s.clientHeight)*100;bar.style.width=p+"%";up.classList.toggle("s",s.scrollTop>400);document.querySelector("nav").classList.toggle("sc",s.scrollTop>40)});
up.onclick=()=>scrollTo({top:0,behavior:"smooth"});
