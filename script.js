// --- 1. KÜPELER ---
const kupeler = [
    { ad: "Aurora Işıltı Küpe", kategori: "Küpe", fiyat: 450, resim: "https://i.pinimg.com/736x/ae/81/94/ae8194aa6d416de9f21ce38b0cb9b6e6.jpg", aciklama: "Zirkon taş detaylı lüks tasarım." },
    { ad: "Diamond Glow Küpe", kategori: "Küpe", fiyat: 520, resim: "https://i.pinimg.com/736x/10/0f/bf/100fbf2594ffc78c5c72aac5bb7d7695.jpg", aciklama: "Parlak taş işlemeli zarif model." },
    { ad: "Royal Pearl Küpe", kategori: "Küpe", fiyat: 480, resim: "https://i.pinimg.com/736x/f2/9a/ec/f29aecb9bb376c54f74b0bec6dae515c.jpg", aciklama: "İnci ve altın uyumu." },
    { ad: "Moonlight Küpe", kategori: "Küpe", fiyat: 390, resim: "https://i.pinimg.com/1200x/ad/92/f7/ad92f76e684c6896f727e8591001f3d2.jpg", aciklama: "Gece ışıltısından ilham aldı." },
    { ad: "Golden Shine Küpe", kategori: "Küpe", fiyat: 560, resim: "https://i.pinimg.com/736x/54/3f/b2/543fb2aeef5d12ba468ebbe1b49453fb.jpg", aciklama: "Altın kaplama premium tasarım." },
    { ad: "Velvet Spark Küpe", kategori: "Küpe", fiyat: 430, resim: "https://i.pinimg.com/736x/76/e3/f6/76e3f63eea638ddfe311e05a81da5759.jpg", aciklama: "Kadife şıklığında taşlı model." },
    { ad: "Crystal Aura Küpe", kategori: "Küpe", fiyat: 610, resim: "https://i.pinimg.com/736x/4b/42/41/4b4241d01c37d343434168212f297430.jpg", aciklama: "Kristal detaylı gösterişli küpe." },
    { ad: "Luna Charm Küpe", kategori: "Küpe", fiyat: 370, resim: "https://i.pinimg.com/1200x/ee/88/9a/ee889a1f45c9a01c63045819f0e06e95.jpg", aciklama: "Ay figürlü modern tasarım." },
    { ad: "Silver Dream Küpe", kategori: "Küpe", fiyat: 340, resim: "https://i.pinimg.com/1200x/26/90/8c/26908c2769809a9e3ad1fd804304f72e.jpg", aciklama: "Gümüş dokulu zarif görünüm." },
    { ad: "Imperial Glow Küpe", kategori: "Küpe", fiyat: 670, resim: "https://i.pinimg.com/1200x/e9/31/d1/e931d12006c109ff124aaf37ce95fc93.jpg", aciklama: "Kraliyet stilinde premium model." },
    { ad: "Starfall Küpe", kategori: "Küpe", fiyat: 420, resim: "https://i.pinimg.com/736x/fd/03/f6/fd03f6dbccce3d72f15bf8575ed2386f.jpg", aciklama: "Yıldız taşlı şık tasarım." },
    { ad: "Rose Gold Işıltı Küpe", kategori: "Küpe", fiyat: 500, resim: "https://i.pinimg.com/1200x/94/9f/e5/949fe55590d90c433f0da9845e49bf24.jpg", aciklama: "Rose gold kaplama modern model." },
    { ad: "Mystic Shine Küpe", kategori: "Küpe", fiyat: 450, resim: "https://i.pinimg.com/1200x/91/9b/e9/919be908126abd27ed890a1c3d78bfef.jpg", aciklama: "Gizemli parlak taş detayları." },
    { ad: "Queen Touch Küpe", kategori: "Küpe", fiyat: 690, resim: "https://i.pinimg.com/1200x/99/85/1f/99851fe27e633631e8b46f4e7143bb5e.jpg", aciklama: "Asil görünüm sunan tasarım." },
    { ad: "Elegant Drop Küpe", kategori: "Küpe", fiyat: 410, resim: "https://i.pinimg.com/1200x/31/42/b7/3142b7cdf1f3931c4fb6e8d335c5f43d.jpg", aciklama: "Damla taşlı klasik model." },
    { ad: "Infinity Glow Küpe", kategori: "Küpe", fiyat: 530, resim: "https://i.pinimg.com/1200x/83/26/3f/83263f9155d3ae71564f0587264bf621.jpg", aciklama: "Sonsuzluk figürlü modern çizgi." },
    { ad: "Paris Night Küpe", kategori: "Küpe", fiyat: 590, resim: "https://i.pinimg.com/1200x/01/60/fa/0160fa04a22a950db8ea644cd3892c7f.jpg", aciklama: "Paris gecelerinden ilham aldı." },
    { ad: "Luxury Pearl Küpe", kategori: "Küpe", fiyat: 620, resim: "https://i.pinimg.com/736x/d4/fb/e8/d4fbe870a6096046a5aeb0fc6da610e7.jpg", aciklama: "Premium inci detaylı model." },
    { ad: "Diamond Rain Küpe", kategori: "Küpe", fiyat: 710, resim: "https://i.pinimg.com/1200x/2c/bc/7c/2cbc7c82b7efbdb9a966f7fbed8b2a57.jpg", aciklama: "Yoğun taş işlemeli tasarım." },
    { ad: "Celeste Küpe", kategori: "Küpe", fiyat: 440, resim: "https://i.pinimg.com/1200x/ce/44/7b/ce447b32afa8fa625b921e70c646924c.jpg", aciklama: "Gökyüzü ışıltısı temalı model." },
    { ad: "Sapphire Glow Küpe", kategori: "Küpe", fiyat: 780, resim: "https://i.pinimg.com/736x/07/76/6f/07766f4f79e47d8f38af2c1deb162507.jpg", aciklama: "Safir renk taşlarla süslendi." },
    { ad: "Venus Işıltı Küpe", kategori: "Küpe", fiyat: 520, resim: "https://i.pinimg.com/1200x/6a/08/c9/6a08c90b2e2ee3a96325211dad3fbef0.jpg", aciklama: "Venüs zarafetini yansıtır." },
    { ad: "Noir Elegance Küpe", kategori: "Küpe", fiyat: 470, resim: "https://i.pinimg.com/1200x/96/a8/79/96a87990789c2fae6c84a8eab9cced25.jpg", aciklama: "Siyah taşlı sofistike görünüm." },
    { ad: "Prestige Gold Küpe", kategori: "Küpe", fiyat: 860, resim: "https://i.pinimg.com/1200x/2b/8a/f5/2b8af59008c17da696a627cd4583c95f.jpg", aciklama: "Prestijli altın işçilik." },
    { ad: "Opal Shine Küpe", kategori: "Küpe", fiyat: 640, resim: "https://i.pinimg.com/1200x/8c/7d/8a/8c7d8a0cb047377e08cef218ff7d94cd.jpg", aciklama: "Opal taşlı büyüleyici model." }
];

// --- 2. KOLYELER ---
const kolyeler = [
    { ad: "Royal Diamond Kolye", kategori: "Kolye", fiyat: 950, resim: "https://i.pinimg.com/736x/12/8e/3d/128e3dab17c6875a81b95f86543234e0.jpg", aciklama: "Lüks taş işlemeli özel tasarım." },
    { ad: "Moon Pearl Kolye", kategori: "Kolye", fiyat: 870, resim: "https://i.pinimg.com/1200x/8c/b9/e6/8cb9e6442ba9bf0322e450a2c2dcaf0e.jpg", aciklama: "İnci detaylı zarif model." },
    { ad: "Aurora Shine Kolye", kategori: "Kolye", fiyat: 790, resim: "https://i.pinimg.com/1200x/ca/57/60/ca5760b892fa92777096af9eba7fcaf8.jpg", aciklama: "Işıltılı modern çizgiler." },
    { ad: "Velvet Gold Kolye", kategori: "Kolye", fiyat: 920, resim: "https://i.pinimg.com/1200x/93/af/88/93af884bfbe144d22edf0ee77515df09.jpg", aciklama: "Altın kaplama premium tasarım." },
    { ad: "Celeste Charm Kolye", kategori: "Kolye", fiyat: 680, resim: "https://i.pinimg.com/1200x/5c/a2/2e/5ca22e240bef85c89047c3b21ca331de.jpg", aciklama: "Gökyüzü ilhamlı taş işlemeler." },
    { ad: "Crystal Queen Kolye", kategori: "Kolye", fiyat: 1150, resim: "https://i.pinimg.com/736x/06/64/49/06644901d7ffd206728e7d5ca1a8e52d.jpg", aciklama: "Kraliyet stilinde kristal detaylar." },
    { ad: "Diamond Rain Kolye", kategori: "Kolye", fiyat: 990, resim: "https://i.pinimg.com/1200x/52/64/7e/52647e77deced0108f3904203fe43b69.jpg", aciklama: "Yoğun parlak taş dizilimi." },
    { ad: "Paris Glow Kolye", kategori: "Kolye", fiyat: 840, resim: "https://i.pinimg.com/1200x/8c/94/75/8c94751c8a63d445b634b000fd5c4d28.jpg", aciklama: "Paris şıklığını yansıtır." },
    { ad: "Infinity Star Kolye", kategori: "Kolye", fiyat: 720, resim: "https://i.pinimg.com/1200x/d0/7d/8e/d07d8e06c86371e215c37704b1a5f2ae.jpg", aciklama: "Sonsuzluk ve yıldız figürlü." },
    { ad: "Imperial Shine Kolye", kategori: "Kolye", fiyat: 1290, resim: "https://i.pinimg.com/736x/2a/0a/3e/2a0a3eb23e0ea88cc6ca39b1746e7363.jpg", aciklama: "Asil ve güçlü görünüm." },
    { ad: "Golden Aura Kolye", kategori: "Kolye", fiyat: 940, resim: "https://i.pinimg.com/1200x/ae/19/c9/ae19c93b34cf3ff61db5a7b0ebc2f471.jpg", aciklama: "Sıcak altın tonlarıyla tasarlandı." },
    { ad: "Luna Crystal Kolye", kategori: "Kolye", fiyat: 870, resim: "https://i.pinimg.com/1200x/05/80/28/0580288c35ca917f82ca60a8b26760ca.jpg", aciklama: "Ay ışığı esintili kristal model." },
    { ad: "Prestige Pearl Kolye", kategori: "Kolye", fiyat: 980, resim: "https://i.pinimg.com/1200x/4e/7e/04/4e7e044f2cecf84eb76a15c49fd0a978.jpg", aciklama: "Prestijli inci detayları." },
    { ad: "Mystic Gold Kolye", kategori: "Kolye", fiyat: 860, resim: "https://i.pinimg.com/736x/48/25/c9/4825c99a33c37f456ad5fb825f184600.jpg", aciklama: "Gizemli taş işlemeli lüks tasarım." },
    { ad: "Diamond Aura Kolye", kategori: "Kolye", fiyat: 1350, resim: "https://i.pinimg.com/1200x/3b/69/c5/3b69c5b768069dcefc0a274e8e12f942.jpg", aciklama: "Parlak taşlarla göz kamaştırır." },
    { ad: "Queen Velvet Kolye", kategori: "Kolye", fiyat: 990, resim: "https://i.pinimg.com/1200x/3a/91/88/3a918844f4a352e36d000e62839cf00f.jpg", aciklama: "Kadifemsi şıklık sunar." },
    { ad: "Rose Crystal Kolye", kategori: "Kolye", fiyat: 930, resim: "https://i.pinimg.com/1200x/d4/03/ec/d403eca01cc7b9fe2b3f6a66f9b14b69.jpg", aciklama: "Rose gold detaylı premium model." },
    { ad: "Star Dust Kolye", kategori: "Kolye", fiyat: 880, resim: "https://i.pinimg.com/1200x/09/7a/a7/097aa7d9fec57c333aa2549baee9c98a.jpg", aciklama: "Yıldız tozu görünümünde tasarım." },
    { ad: "Luxury Touch Kolye", kategori: "Kolye", fiyat: 1200, resim: "https://i.pinimg.com/1200x/03/5f/50/035f508b614829ac41d506a89950f921.jpg", aciklama: "Zengin taş işlemeli model." },
    { ad: "Noir Elegance Kolye", kategori: "Kolye", fiyat: 970, resim: "https://i.pinimg.com/736x/a1/d8/66/a1d866bd52439af249880899a3d5d885.jpg", aciklama: "Siyah taşlı sofistike görünüm." },
    { ad: "Venus Glow Kolye", kategori: "Kolye", fiyat: 890, resim: "https://i.pinimg.com/1200x/2b/4d/4e/2b4d4ec3a28308149f9cfb764fd0e732.jpg", aciklama: "Venüs zarafetinden ilham aldı." },
    { ad: "Elite Spark Kolye", kategori: "Kolye", fiyat: 1100, resim: "https://i.pinimg.com/1200x/6c/18/2a/6c182ac5c46e92091616506fcb29fb80.jpg", aciklama: "Elit tasarım çizgileri taşır." },
    { ad: "Crystal Night Kolye", kategori: "Kolye", fiyat: 980, resim: "https://i.pinimg.com/1200x/72/f5/9f/72f59fa8d84d96723e4967b4401c1a6b.jpg", aciklama: "Gece ışıltısı etkisi sunar." },
    { ad: "Opal Shine Kolye", kategori: "Kolye", fiyat: 890, resim: "https://i.pinimg.com/736x/f6/c2/1c/f6c21ccd308713d763ed42934ae66159.jpg", aciklama: "Opal taşlı zarif model." },
    { ad: "Golden Prestige Kolye", kategori: "Kolye", fiyat: 1450, resim: "https://i.pinimg.com/736x/d6/84/87/d684871a340c345b67b83e6ad031a2a4.jpg", aciklama: "Prestijli altın işçilik." }
];

// --- 3. BİLEKLİKLER ---
const bileklikler = [
    { ad: "Diamond Glow Bileklik", kategori: "Bileklik", fiyat: 620, resim: "https://i.pinimg.com/1200x/f2/6a/8c/f26a8cf8ee6d9740679ab34d7b1789b7.jpg", aciklama: "Parlak taşlı lüks tasarım." },
    { ad: "Royal Shine Bileklik", kategori: "Bileklik", fiyat: 740, resim: "https://i.pinimg.com/1200x/de/76/a2/de76a221eb43564259f137fc641530ef.jpg", aciklama: "Kraliyet esintili şıklık." },
    { ad: "Golden Aura Bileklik", kategori: "Bileklik", fiyat: 690, resim: "https://i.pinimg.com/1200x/60/5f/b6/605fb6123c76cc8bfdfd4af2c7ed86a8.jpg", aciklama: "Altın tonlarında modern görünüm." },
    { ad: "Crystal Charm Bileklik", kategori: "Bileklik", fiyat: 560, resim: "https://i.pinimg.com/1200x/85/dc/cd/85dccdabd8babe8d55c109c1223006f4.jpg", aciklama: "Kristal detaylarla tamamlandı." },
    { ad: "Velvet Touch Bileklik", kategori: "Bileklik", fiyat: 510, resim: "https://i.pinimg.com/736x/e0/3c/2a/e03c2a20ae945fb161663546bafc4a5b.jpg", aciklama: "Kadife zarafetini yansıtır." },
    { ad: "Moonlight Bileklik", kategori: "Bileklik", fiyat: 580, resim: "https://i.pinimg.com/736x/7c/12/23/7c122316bf4edae124d5876587d9bc77.jpg", aciklama: "Ay ışığı etkili taş işlemeler." },
    { ad: "Infinity Spark Bileklik", kategori: "Bileklik", fiyat: 670, resim: "https://i.pinimg.com/736x/af/04/b8/af04b84b6c9b8c8e7b92175b1414fdfc.jpg", aciklama: "Sonsuzluk figürlü modern tasarım." },
    { ad: "Prestige Gold Bileklik", kategori: "Bileklik", fiyat: 850, resim: "https://i.pinimg.com/1200x/84/9c/53/849c53bffb0763f65fe9f25641c4f30b.jpg", aciklama: "Premium altın işçilik." },
    { ad: "Queen Pearl Bileklik", kategori: "Bileklik", fiyat: 790, resim: "https://i.pinimg.com/1200x/5f/84/cd/5f84cdef4da3a82856113fa1861fe768.jpg", aciklama: "İnci detaylı asil görünüm." },
    { ad: "Mystic Shine Bileklik", kategori: "Bileklik", fiyat: 640, resim: "https://i.pinimg.com/1200x/e4/bd/a6/e4bda6baac07baafcd51500459fdd79e.jpg", aciklama: "Gizemli taş dizaynı." },
    { ad: "Rose Crystal Bileklik", kategori: "Bileklik", fiyat: 700, resim: "https://i.pinimg.com/1200x/cc/0e/33/cc0e33046698dfa72150b3b280db7002.jpg", aciklama: "Rose gold kristal detaylı." },
    { ad: "Luxury Aura Bileklik", kategori: "Bileklik", fiyat: 920, resim: "https://i.pinimg.com/1200x/19/bd/ec/19bdec3638c0df83194b8922ce09fea7.jpg", aciklama: "Işıltılı premium tasarım." },
    { ad: "Starfall Bileklik", kategori: "Bileklik", fiyat: 610, resim: "https://i.pinimg.com/1200x/5a/6b/53/5a6b5394376d4459da61499d9b637e3e.jpg", aciklama: "Yıldız taşlı zarif model." },
    { ad: "Elite Shine Bileklik", kategori: "Bileklik", fiyat: 880, resim: "https://i.pinimg.com/736x/cd/38/09/cd38092bfc52630aeffc7213ba2e4057.jpg", aciklama: "Elit görünüm sunar." },
    { ad: "Luna Glow Bileklik", kategori: "Bileklik", fiyat: 650, resim: "https://i.pinimg.com/736x/37/ed/3a/37ed3aa8d29c355ff330467c18f5a907.jpg", aciklama: "Ay figürlü modern çizgi." },
    { ad: "Diamond Rain Bileklik", kategori: "Bileklik", fiyat: 990, resim: "https://i.pinimg.com/1200x/75/ac/9e/75ac9ea9e73c0660bcc0aed60311e6d3.jpg", aciklama: "Yoğun taş işlemeli model." },
    { ad: "Paris Elegance Bileklik", kategori: "Bileklik", fiyat: 720, resim: "https://i.pinimg.com/1200x/80/f7/7c/80f77c9a61364c815493401eff748b60.jpg", aciklama: "Paris modasından ilham aldı." },
    { ad: "Aurora Crystal Bileklik", kategori: "Bileklik", fiyat: 780, resim: "https://i.pinimg.com/1200x/7e/cf/6b/7ecf6bb7ecad6a16e1307841fc6959c9.jpg", aciklama: "Aurora ışıkları etkisinde." },
    { ad: "Venus Shine Bileklik", kategori: "Bileklik", fiyat: 690, resim: "https://i.pinimg.com/736x/34/fb/18/34fb18c12d4f0bf24d21320edd2dcc06.jpg", aciklama: "Venüs zarafeti taşıyan tasarım." },
    { ad: "Imperial Gold Bileklik", kategori: "Bileklik", fiyat: 1150, resim: "https://i.pinimg.com/1200x/c9/a9/ea/c9a9eae88b592910d0e197970d058247.jpg", aciklama: "Asil altın detaylarla üretildi." },
    { ad: "Crystal Queen Bileklik", kategori: "Bileklik", fiyat: 980, resim: "https://i.pinimg.com/1200x/70/68/d5/7068d5b45bc9f29d5e125ee2cc701beb.jpg", aciklama: "Kraliçe stilinde taş işçilik." },
    { ad: "Noir Luxury Bileklik", kategori: "Bileklik", fiyat: 810, resim: "https://i.pinimg.com/736x/c7/19/49/c71949ceb61b1d9744fffab693c117fb.jpg", aciklama: "Siyah taşlarla premium görünüm." },
    { ad: "Golden Prestige Bileklik", kategori: "Bileklik", fiyat: 1040, resim: "https://i.pinimg.com/736x/7d/81/f1/7d81f1ed1dd4aab4410019300a324f51.jpg", aciklama: "Prestijli altın dokunuş." },
    { ad: "Sapphire Glow Bileklik", kategori: "Bileklik", fiyat: 1180, resim: "https://i.pinimg.com/1200x/73/6d/b3/736db3194a29f8f67e82919b0d15d10d.jpg", aciklama: "Safir tonlarında taş detaylı." },
    { ad: "Opal Dream Bileklik", kategori: "Bileklik", fiyat: 890, resim: "https://i.pinimg.com/1200x/68/d4/9e/68d49ec36a9ad787f595ee7106a6992d.jpg", aciklama: "Opal taşlı büyüleyici model." }
];

// --- 4. YÜZÜKLER ---
const yuzukler = [
    { ad: "Diamond Queen Yüzük", kategori: "Yüzük", fiyat: 1250, resim: "https://i.pinimg.com/1200x/d1/54/df/d154df36f947bfbda81b12c86ea91816.jpg", aciklama: "Kraliyet stilinde taş işlemeli." },
    { ad: "Golden Aura Yüzük", kategori: "Yüzük", fiyat: 980, resim: "https://i.pinimg.com/1200x/20/10/ea/2010ea0260c2848d1f8e065322ba08b2.jpg", aciklama: "Altın parlaklığında premium model." },
    { ad: "Royal Shine Yüzük", kategori: "Yüzük", fiyat: 1390, resim: "https://i.pinimg.com/1200x/e3/fb/1f/e3fb1f4b76da0ba664fc14c7907a0dbd.jpg", aciklama: "Asil ve gösterişli tasarım." },
    { ad: "Crystal Glow Yüzük", kategori: "Yüzük", fiyat: 870, resim: "https://i.pinimg.com/1200x/90/56/8f/90568fcf56e2d0c872f535e6fffa92c4.jpg", aciklama: "Kristal taşlarla bezendi." },
    { ad: "Moonlight Yüzük", kategori: "Yüzük", fiyat: 920, resim: "https://i.pinimg.com/1200x/09/08/75/09087591cd4ab0e149ef7599b3b209a2.jpg", aciklama: "Ay ışığı esintili modern model." },
    { ad: "Velvet Gold Yüzük", kategori: "Yüzük", fiyat: 1110, resim: "https://i.pinimg.com/736x/f1/54/4c/f1544cab9e5a36e73242c7d03dc54ee7.jpg", aciklama: "Kadifemsi şıklık sunar." },
    { ad: "Prestige Diamond Yüzük", kategori: "Yüzük", fiyat: 1590, resim: "https://i.pinimg.com/1200x/85/03/a2/8503a266e28645691794d28dff22059d.jpg", aciklama: "Prestijli taş işçilik." },
    { ad: "Infinity Spark Yüzük", kategori: "Yüzük", fiyat: 890, resim: "https://i.pinimg.com/1200x/c0/8a/01/c08a01c53142b5fe1374e08fbdbdff4b.jpg", aciklama: "Sonsuzluk figürlü zarif tasarım." },
    { ad: "Queen Pearl Yüzük", kategori: "Yüzük", fiyat: 990, resim: "https://i.pinimg.com/1200x/cd/f7/1e/cdf71ebf29878a1d37faa9ade0a54989.jpg", aciklama: "İnci detaylı asil model." },
    { ad: "Mystic Aura Yüzük", kategori: "Yüzük", fiyat: 1040, resim: "https://i.pinimg.com/1200x/dc/a0/69/dca06924dd7d72815e906195f6bce9e7.jpg", aciklama: "Gizemli taş dizilimi." },
    { ad: "Rose Crystal Yüzük", kategori: "Yüzük", fiyat: 1150, resim: "https://i.pinimg.com/736x/2a/87/71/2a8771763eebec423bea6e891d08143d.jpg", aciklama: "Rose gold kristal detaylı." },
    { ad: "Luxury Shine Yüzük", kategori: "Yüzük", fiyat: 1480, resim: "https://i.pinimg.com/1200x/0d/60/20/0d60208df95173aa0485ce5df308bf2c.jpg", aciklama: "Lüks taş işçiliğiyle üretildi." },
    { ad: "Starfall Yüzük", kategori: "Yüzük", fiyat: 860, resim: "https://i.pinimg.com/736x/99/97/9d/99979d48afa1b61d9c926ab4747836ab.jpg", aciklama: "Yıldız taşlı modern görünüm." },
    { ad: "Elite Gold Yüzük", kategori: "Yüzük", fiyat: 1720, resim: "https://i.pinimg.com/1200x/65/2b/64/652b64d57a4ac6cc1d86cd1ce84f572c.jpg", aciklama: "Elit altın detaylı tasarım." },
    { ad: "Luna Diamond Yüzük", kategori: "Yüzük", fiyat: 1190, resim: "https://i.pinimg.com/1200x/aa/81/a8/aa81a810a1e502eadf524bf9a7232e44.jpg", aciklama: "Ay figürlü taş işlemeli." },
    { ad: "Imperial Glow Yüzük", kategori: "Yüzük", fiyat: 1850, resim: "https://i.pinimg.com/1200x/b8/55/af/b855afa09194a2ac00e7b738d7b5a591.jpg", aciklama: "İmparatorluk şıklığını yansıtır." },
    { ad: "Paris Elegance Yüzük", kategori: "Yüzük", fiyat: 980, resim: "https://i.pinimg.com/1200x/6b/b6/dc/6bb6dcd847073b3b3a317121405d77de.jpg", aciklama: "Paris modasından ilham aldı." },
    { ad: "Aurora Crystal Yüzük", kategori: "Yüzük", fiyat: 1260, resim: "https://i.pinimg.com/1200x/24/9f/3b/249f3be8e2e3969f2183deb4a9f31d9b.jpg", aciklama: "Aurora ışıkları etkisi sunar." },
    { ad: "Venus Shine Yüzük", kategori: "Yüzük", fiyat: 1090, resim: "https://i.pinimg.com/736x/2d/bd/96/2dbd964fbe4ce068b2e431c7b59ff366.jpg", aciklama: "Venüs zarafetini taşır." },
    { ad: "Crystal Queen Yüzük", kategori: "Yüzük", fiyat: 1680, resim: "https://i.pinimg.com/736x/20/48/a3/2048a397b6f18fbefa3e8dbe0271dec8.jpg", aciklama: "Kraliçe stilinde premium model." },
    { ad: "Noir Luxury Yüzük", kategori: "Yüzük", fiyat: 1180, resim: "https://i.pinimg.com/1200x/fb/73/ee/fb73eea061e94b1ba83133e7c6ebcdc9.jpg", aciklama: "Siyah taşlarla sofistike görünüm." },
    { ad: "Golden Prestige Yüzük", kategori: "Yüzük", fiyat: 1940, resim: "https://i.pinimg.com/736x/53/85/8b/53858b4fe9363f6acb654b70f5a5b8b7.jpg", aciklama: "Prestijli altın işçilik." },
    { ad: "Sapphire Glow Yüzük", kategori: "Yüzük", fiyat: 1760, resim: "https://i.pinimg.com/1200x/ea/8b/71/ea8b71bd7e95db672ae305e6076649ee.jpg", aciklama: "Safir tonlu taşlarla bezendi." },
    { ad: "Opal Dream Yüzük", kategori: "Yüzük", fiyat: 1320, resim: "https://i.pinimg.com/1200x/1d/b6/ac/1db6ac26521e7c3a17bdd0bb360865be.jpg", aciklama: "Opal taşlı zarif tasarım." },
    { ad: "Diamond Rain Yüzük", kategori: "Yüzük", fiyat: 2100, resim: "https://i.pinimg.com/1200x/19/46/3a/19463a328eec55be55e35dc890540efd.jpg", aciklama: "Yoğun taş işlemeli lüks model." }
];

// --- 5. ŞAHMERANLAR ---
const sahmeranlar = [
    { ad: "Golden Aura Şahmeran", kategori: "Şahmeran", fiyat: 740, resim: "https://i.pinimg.com/1200x/d0/8b/86/d08b867be9ad7a066b4d67dff09cc2f9.jpg", aciklama: "Altın detaylı zarif model." },
    { ad: "Diamond Touch Şahmeran", kategori: "Şahmeran", fiyat: 920, resim: "https://i.pinimg.com/1200x/d1/09/f9/d109f97fd1dd7d1e7a6dbc6b27f6ce61.jpg", aciklama: "Taş işlemeli lüks tasarım." },
    { ad: "Royal Shine Şahmeran", kategori: "Şahmeran", fiyat: 880, resim: "https://i.pinimg.com/1200x/1b/61/23/1b6123536b8672a273d4a6cbea8e86d0.jpg", aciklama: "Kraliyet esintili görünüm." },
    { ad: "Crystal Glow Şahmeran", kategori: "Şahmeran", fiyat: 690, resim: "https://i.pinimg.com/1200x/49/80/29/498029c5dbaa7b4414431a6f242c6184.jpg", aciklama: "Kristal taşlarla bezendi." },
    { ad: "Moonlight Şahmeran", kategori: "Şahmeran", fiyat: 720, resim: "https://i.pinimg.com/1200x/28/c3/e8/28c3e8e5ac9ee9cdbe1e66b5f1bd3b93.jpg", aciklama: "Ay ışığı ilhamlı model." },
    { ad: "Velvet Gold Şahmeran", kategori: "Şahmeran", fiyat: 830, resim: "https://i.pinimg.com/1200x/b0/54/3a/b0543a9a445f0d357f7a25a05ce21389.jpg", aciklama: "Kadifemsi şıklık sunar." },
    { ad: "Prestige Diamond Şahmeran", kategori: "Şahmeran", fiyat: 1080, resim: "https://i.pinimg.com/736x/fa/0a/c5/fa0ac52231ceb10406bc2dd620535bf2.jpg", aciklama: "Prestijli taş işçilik." },
    { ad: "Infinity Spark Şahmeran", kategori: "Şahmeran", fiyat: 760, resim: "https://i.pinimg.com/1200x/7d/6a/fc/7d6afc9643d8bbbdbd50c60a4f25272f.jpg", aciklama: "Sonsuzluk figürlü zarif tasarım." },
    { ad: "Queen Pearl Şahmeran", kategori: "Şahmeran", fiyat: 910, resim: "https://i.pinimg.com/736x/30/6a/60/306a60c89854777ce9239c1e3b2abc21.jpg", aciklama: "İnci detaylı asil görünüm." },
    { ad: "Mystic Aura Şahmeran", kategori: "Şahmeran", fiyat: 840, resim: "https://i.pinimg.com/736x/37/60/4f/37604f09f6238f19933fee4dab4d071c.jpg", aciklama: "Gizemli taş dizaynı." },
    { ad: "Rose Crystal Şahmeran", kategori: "Şahmeran", fiyat: 870, resim: "https://i.pinimg.com/1200x/fa/d5/b9/fad5b96954a74941d9bd7d614635524c.jpg", aciklama: "Rose gold kristal detaylı." },
    { ad: "Luxury Shine Şahmeran", kategori: "Şahmeran", fiyat: 1120, resim: "https://i.pinimg.com/736x/29/f4/73/29f47321ef95862ba2ef0dc803bec220.jpg", aciklama: "Lüks taş işlemeleriyle üretildi." },
    { ad: "Starfall Şahmeran", kategori: "Şahmeran", fiyat: 730, resim: "https://i.pinimg.com/1200x/d2/c7/e3/d2c7e39cf0bf1b62b1b006ac1aaa9825.jpg", aciklama: "Yıldız taşlı modern model." },
    { ad: "Elite Gold Şahmeran", kategori: "Şahmeran", fiyat: 1190, resim: "https://i.pinimg.com/736x/87/9c/e8/879ce86b1d4cd1d30fb4dcaabd79e128.jpg", aciklama: "Elit altın detaylı tasarım." },
    { ad: "Luna Diamond Şahmeran", kategori: "Şahmeran", fiyat: 980, resim: "https://i.pinimg.com/736x/25/e7/8f/25e78f06667c4085ff0da913c0d4d8dd.jpg", aciklama: "Ay figürlü premium model." },
    { ad: "Imperial Glow Şahmeran", kategori: "Şahmeran", fiyat: 1320, resim: "https://i.pinimg.com/736x/9a/ec/4f/9aec4fb25b01895947711943b280b909.jpg", aciklama: "İmparatorluk şıklığını yansıtır." },
    { ad: "Paris Elegance Şahmeran", kategori: "Şahmeran", fiyat: 840, resim: "https://i.pinimg.com/736x/56/8c/2b/568c2b1af4f120eaf07eeb36c3ca2978.jpg", aciklama: "Paris stilinden ilham aldı." },
    { ad: "Aurora Crystal Şahmeran", kategori: "Şahmeran", fiyat: 1010, resim: "https://i.pinimg.com/736x/95/10/a1/9510a1bd07a434a642cdf9fd42cdd9e2.jpg", aciklama: "Aurora ışıkları etkisi sunar." },
    { ad: "Venus Shine Şahmeran", kategori: "Şahmeran", fiyat: 890, resim: "https://i.pinimg.com/1200x/42/93/f9/4293f945db1326a725964f27029f6922.jpg", aciklama: "Venüs zarafetini taşır." },
    { ad: "Crystal Queen Şahmeran", kategori: "Şahmeran", fiyat: 1260, resim: "https://i.pinimg.com/736x/ed/b8/02/edb8024c9c42cd6852d7c8e911d4aa37.jpg", aciklama: "Kraliçe stilinde premium model." },
    { ad: "Noir Luxury Şahmeran", kategori: "Şahmeran", fiyat: 950, resim: "https://i.pinimg.com/736x/bd/b6/ff/bdb6ff60391352f80c139c11cbdedff8.jpg", aciklama: "Siyah taşlarla sofistike görünüm." },
    { ad: "Golden Prestige Şahmeran", kategori: "Şahmeran", fiyat: 1380, resim: "https://i.pinimg.com/736x/77/37/1d/77371ddc3f8b16e0f7ffcf5310b3ccf1.jpg", aciklama: "Prestijli altın işçilik." },
    { ad: "Sapphire Glow Şahmeran", kategori: "Şahmeran", fiyat: 1470, resim: "https://i.pinimg.com/1200x/8f/68/17/8f6817738bd34d2a2b4720de9d197c81.jpg", aciklama: "Safir tonlu taşlarla bezendi." },
    { ad: "Opal Dream Şahmeran", kategori: "Şahmeran", fiyat: 1090, resim: "https://i.pinimg.com/736x/c1/ef/25/c1ef2542ae4261756aead59ef0116588.jpg", aciklama: "Opal taşlı büyüleyici model." },
    { ad: "Diamond Rain Şahmeran", kategori: "Şahmeran", fiyat: 1540, resim: "https://i.pinimg.com/736x/fd/9f/7d/fd9f7dff2f260103327bd656e99646f0.jpg", aciklama: "Yoğun taş işlemeli lüks tasarım." }
];

// --- 6. HALHALLAR ---
const halhallar = [
    { ad: "Golden Glow Halhal", kategori: "Halhal", fiyat: 420, resim: "https://i.pinimg.com/736x/49/82/f9/4982f9e2b9ef4abac1d2b58d0ce1be73.jpg", aciklama: "Altın detaylı zarif tasarım." },
    { ad: "Diamond Shine Halhal", kategori: "Halhal", fiyat: 540, resim: "https://i.pinimg.com/736x/a0/e7/ef/a0e7efd6df6f9fd312275b59b3e6e7d1.jpg", aciklama: "Taş işlemeli premium model." },
    { ad: "Royal Pearl Halhal", kategori: "Halhal", fiyat: 480, resim: "https://i.pinimg.com/736x/bf/d8/ec/bfd8ec63beac6259049b8f1c2ca87b57.jpg", aciklama: "İnci detaylı asil görünüm." },
    { ad: "Moonlight Halhal", kategori: "Halhal", fiyat: 390, resim: "https://i.pinimg.com/1200x/6c/87/db/6c87dbdb37a0a7975abff1173215d67d.jpg", aciklama: "Ay ışığı esintili tasarım." },
    { ad: "Crystal Aura Halhal", kategori: "Halhal", fiyat: 520, resim: "https://i.pinimg.com/1200x/7f/24/63/7f2463c4bb27dd3f4d28332506a50e75.jpg", aciklama: "Kristal taşlarla bezendi." },
    { ad: "Velvet Gold Halhal", kategori: "Halhal", fiyat: 610, resim: "https://i.pinimg.com/1200x/11/31/89/113189d5724f139aa91cea1483b35e80.jpg", aciklama: "Kadifemsi şıklık sunar." },
    { ad: "Prestige Shine Halhal", kategori: "Halhal", fiyat: 690, resim: "https://i.pinimg.com/1200x/f7/02/4c/f7024c3ed9f5217599ab8da460d6e69d.jpg", aciklama: "Prestijli taş işlemeleri." },
    { ad: "Infinity Spark Halhal", kategori: "Halhal", fiyat: 450, resim: "https://i.pinimg.com/736x/78/45/db/7845db89eba9ab6dabed241840cbb185.jpg", aciklama: "Sonsuzluk figürlü zarif model." },
    { ad: "Queen Touch Halhal", kategori: "Halhal", fiyat: 570, resim: "https://i.pinimg.com/736x/92/8b/43/928b43c526b218e17e02bbe4e93b4f8a.jpg", aciklama: "Kraliçe stilinde premium görünüm." },
    { ad: "Mystic Glow Halhal", kategori: "Halhal", fiyat: 510, resim: "https://i.pinimg.com/736x/e2/79/88/e27988aa6c371719a4aa5ecfada9b849.jpg", aciklama: "Gizemli taş detaylı tasarım." },
    { ad: "Rose Crystal Halhal", kategori: "Halhal", fiyat: 620, resim: "https://i.pinimg.com/736x/f2/29/4b/f2294b6685c098ad874946cb09458b0c.jpg", aciklama: "Rose gold kristal detaylı." },
    { ad: "Luxury Pearl Halhal", kategori: "Halhal", fiyat: 730, resim: "https://i.pinimg.com/736x/82/7f/2f/827f2fd337b95e50085171e7e4102f45.jpg", aciklama: "Lüks inci işçilikli model." },
    { ad: "Starfall Halhal", kategori: "Halhal", fiyat: 440, resim: "https://i.pinimg.com/736x/ce/33/71/ce337106554f529f80bed4562930949d.jpg", aciklama: "Yıldız taşlı modern tasarım." },
    { ad: "Elite Gold Halhal", kategori: "Halhal", fiyat: 780, resim: "https://i.pinimg.com/736x/c5/43/14/c54314fd18da25cc4c8b2fd5f9f57b81.jpg", aciklama: "Elit altın detaylı model." },
    { ad: "Luna Diamond Halhal", kategori: "Halhal", fiyat: 650, resim: "https://i.pinimg.com/1200x/8c/6c/3e/8c6c3ebd28c49d52d38044bf60ce513e.jpg", aciklama: "Ay figürlü taş işlemeli." },
    { ad: "Imperial Glow Halhal", kategori: "Halhal", fiyat: 860, resim: "https://i.pinimg.com/736x/4b/0c/a2/4b0ca24afc7c265c8b84743e5f2f4338.jpg", aciklama: "İmparatorluk şıklığını yansıtır." },
    { ad: "Paris Elegance Halhal", kategori: "Halhal", fiyat: 560, resim: "https://i.pinimg.com/736x/c1/44/19/c14419900a9a01aa31e6b598b7933bf6.jpg", aciklama: "Paris modasından ilham aldı." },
    { ad: "Aurora Crystal Halhal", kategori: "Halhal", fiyat: 690, resim: "https://i.pinimg.com/736x/70/2e/d8/702ed819319446964439252744ba1a15.jpg", aciklama: "Aurora ışıkları etkisi sunar." },
    { ad: "Venus Shine Halhal", kategori: "Halhal", fiyat: 620, resim: "https://i.pinimg.com/1200x/94/fa/b3/94fab3ec59e38949944c92d3f633b119.jpg", aciklama: "Venüs zarafetini taşır." },
    { ad: "Crystal Queen Halhal", kategori: "Halhal", fiyat: 810, resim: "https://i.pinimg.com/1200x/a9/20/e5/a920e56b256f6442fa40f90114239d81.jpg", aciklama: "Kraliçe stilinde premium model." },
    { ad: "Noir Luxury Halhal", kategori: "Halhal", fiyat: 590, resim: "https://i.pinimg.com/736x/f8/e5/e8/f8e5e85d3bb35440f876c5247a50f507.jpg", aciklama: "Siyah taşlarla sofistike görünüm." },
    { ad: "Golden Prestige Halhal", kategori: "Halhal", fiyat: 940, resim: "https://i.pinimg.com/1200x/10/f2/b9/10f2b911807edd8624e6963a981a84ff.jpg", aciklama: "Prestijli altın işçilik." },
    { ad: "Sapphire Glow Halhal", kategori: "Halhal", fiyat: 990, resim: "https://i.pinimg.com/736x/b3/c9/3c/b3c93c84194220a521e69507f2d059e9.jpg", aciklama: "Safir tonlu taşlarla bezendi." },
    { ad: "Opal Dream Halhal", kategori: "Halhal", fiyat: 710, resim: "https://i.pinimg.com/1200x/fd/19/11/fd1911b79ef7c826662da9abc55e60cf.jpg", aciklama: "Opal taşlı zarif model." },
    { ad: "Diamond Rain Halhal", kategori: "Halhal", fiyat: 1050, resim: "https://i.pinimg.com/736x/d5/09/b9/d509b9c2395e21a81b9ff5284928779b.jpg", aciklama: "Yoğun taş işlemeli lüks tasarım." }
];

// --- 7. GÖZLÜKLER ---
const gozlukler = [
{ ad: "Royal Black Gözlük", kategori: "Gözlük", fiyat: 950, resim: "https://i.pinimg.com/1200x/ab/57/f6/ab57f66ae32143e9f32182a3f330653a.jpg", aciklama: "Siyah kalın çerçeveli modern premium model." },
{ ad: "Diamond Vision Gözlük", kategori: "Gözlük", fiyat: 1180, resim: "https://i.pinimg.com/1200x/b8/1e/55/b81e55ba24bb989eae6a51e2e0e864db.jpg", aciklama: "Metal detaylı keskin hatlı şık tasarım." },
{ ad: "Golden Aura Gözlük", kategori: "Gözlük", fiyat: 990, resim: "https://i.pinimg.com/1200x/f2/c6/f6/f2c6f63f6b227bc44c3ba6864ad9db39.jpg", aciklama: "Altın çerçeveli vintage lüks model." },
{ ad: "Crystal Shine Gözlük", kategori: "Gözlük", fiyat: 860, resim: "https://i.pinimg.com/736x/2b/8e/46/2b8e4678a775447ca0e415898a136bf3.jpg", aciklama: "Şeffaf çerçeveli minimal modern görünüm." },
{ ad: "Moonlight Gözlük", kategori: "Gözlük", fiyat: 910, resim: "https://i.pinimg.com/736x/08/91/25/089125e086d4556fa5d1de7a6f50fc49.jpg", aciklama: "Gri camlı ince çerçeveli zarif model." },
{ ad: "Velvet Touch Gözlük", kategori: "Gözlük", fiyat: 1020, resim: "https://i.pinimg.com/1200x/44/12/f1/4412f1674c1ad4c6a0fbf1cbc4c86c36.jpg", aciklama: "Mat siyah dokulu güçlü stil sunar." },
{ ad: "Prestige Gold Gözlük", kategori: "Gözlük", fiyat: 1340, resim: "https://i.pinimg.com/736x/3a/f7/5b/3af75b662426f5c9a8b6141cc44e142c.jpg", aciklama: "İnce altın detaylı elit tasarım." },
{ ad: "Infinity Style Gözlük", kategori: "Gözlük", fiyat: 890, resim: "https://i.pinimg.com/736x/5e/44/45/5e444548168e583768c61306520d8bd4.jpg", aciklama: "Geometrik çerçeveli modern şehir stili." },
{ ad: "Queen Pearl Gözlük", kategori: "Gözlük", fiyat: 1190, resim: "https://i.pinimg.com/736x/bb/eb/64/bbeb6482df65790df56eb230fb27f7c9.jpg", aciklama: "Krem tonlu feminen luxury model." },
{ ad: "Mystic Black Gözlük", kategori: "Gözlük", fiyat: 980, resim: "https://i.pinimg.com/736x/da/e2/56/dae2563e28df9eb3a10c7aa68fff4ac4.jpg", aciklama: "Tam siyah camlı gizemli görünüm." },
{ ad: "Rose Crystal Gözlük", kategori: "Gözlük", fiyat: 1130, resim: "https://i.pinimg.com/1200x/41/d0/04/41d004b54ab3b0c8d3f220c49db97ed3.jpg", aciklama: "Rose gold çerçeveli soft glam tasarım." },
{ ad: "Luxury Shine Gözlük", kategori: "Gözlük", fiyat: 1420, resim: "https://i.pinimg.com/736x/cb/fb/90/cbfb9000b24fb39660dcde5bea20b62f.jpg", aciklama: "Oversize çerçeveli gösterişli premium model." },
{ ad: "Starfall Gözlük", kategori: "Gözlük", fiyat: 860, resim: "https://i.pinimg.com/1200x/e8/6b/19/e86b198cb7f7584cd6bf064f85ec046e.jpg", aciklama: "İnce metal detaylı sportif şıklık." },
{ ad: "Elite Gold Gözlük", kategori: "Gözlük", fiyat: 1550, resim: "https://i.pinimg.com/1200x/a3/2c/3f/a32c3febd1f300aa83254e4414a5ec4b.jpg", aciklama: "Parlak altın çerçeveli güçlü duruş." },
{ ad: "Luna Diamond Gözlük", kategori: "Gözlük", fiyat: 1270, resim: "https://i.pinimg.com/736x/c3/9d/cb/c39dcb88d275114e4eb2443313537d39.jpg", aciklama: "Yuvarlak camlı retro luxury model." },
{ ad: "Imperial Glow Gözlük", kategori: "Gözlük", fiyat: 1690, resim: "https://i.pinimg.com/1200x/94/28/ec/9428ec58ecac8a81727178e0dac05a19.jpg", aciklama: "Büyük çerçeveli dikkat çekici tasarım." },
{ ad: "Paris Elegance Gözlük", kategori: "Gözlük", fiyat: 1080, resim: "https://i.pinimg.com/736x/1d/55/9e/1d559eaa1ca3da778a485bc1aad86264.jpg", aciklama: "Fransız stilinden ilham alan zarif model." },
{ ad: "Aurora Crystal Gözlük", kategori: "Gözlük", fiyat: 1220, resim: "https://i.pinimg.com/736x/85/c5/75/85c5750ea80bdc4c3415da6706b66667.jpg", aciklama: "Açık ton geçişli camlı modern görünüm." },
{ ad: "Venus Shine Gözlük", kategori: "Gözlük", fiyat: 1140, resim: "https://i.pinimg.com/736x/3f/e6/46/3fe6466b390d7ad8400e82861a8e839f.jpg", aciklama: "İnce detaylı sofistike kadın modeli." },
{ ad: "Crystal Queen Gözlük", kategori: "Gözlük", fiyat: 1480, resim: "https://i.pinimg.com/736x/a2/f3/a8/a2f3a860814bf929ff64d469d2fc2cfd.jpg", aciklama: "Cat-eye çerçeveli glamour tasarım." },
{ ad: "Noir Luxury Gözlük", kategori: "Gözlük", fiyat: 1090, resim: "https://i.pinimg.com/1200x/17/b6/22/17b6229bdb3f928e1d59dded8984513e.jpg", aciklama: "Koyu siyah modern şehir stili." },
{ ad: "Golden Prestige Gözlük", kategori: "Gözlük", fiyat: 1760, resim: "https://i.pinimg.com/736x/c3/e9/1b/c3e91b9c2208d1a69827d480e16abbdd.jpg", aciklama: "Lüks altın detaylı güçlü moda görünümü." },
{ ad: "Sapphire Glow Gözlük", kategori: "Gözlük", fiyat: 1680, resim: "https://i.pinimg.com/1200x/d3/e0/b8/d3e0b84d1a945da402104345e92773e4.jpg", aciklama: "Mavi geçişli camlı premium tasarım." },
{ ad: "Opal Dream Gözlük", kategori: "Gözlük", fiyat: 1290, resim: "https://i.pinimg.com/736x/9d/26/c7/9d26c780b2cbfdc6cab7291bfe510108.jpg", aciklama: "Şeffaf pastel çerçeveli soft luxury model." },
{ ad: "Diamond Rain Gözlük", kategori: "Gözlük", fiyat: 1890, resim: "https://i.pinimg.com/736x/fa/76/75/fa76752ad3766ff8150a7e4db0733d43.jpg", aciklama: "Oversize fashion week stilinde tasarım." }
]; 

// --- 8. FULARLAR ---
const fularlar = [
    { ad: "Royal Silk Fular", kategori: "Fular", fiyat: 620, resim: "https://i.pinimg.com/1200x/6c/8a/5d/6c8a5d8681038a6f86f9cd4d2bc5501c.jpg", aciklama: "Siyah ve altın desenli ipek dokulu özel tasarım." },
    { ad: "Golden Aura Fular", kategori: "Fular", fiyat: 710, resim: "https://i.pinimg.com/736x/03/94/c0/0394c026f38a5c1c2b529936548d6234.jpg", aciklama: "Bej tonlarında modern zincir desenli model." },
    { ad: "Midnight Luxe Fular", kategori: "Fular", fiyat: 840, resim: "https://i.pinimg.com/1200x/d2/ac/68/d2ac6886a5026eaa6dd59137730fdf0b.jpg", aciklama: "Saten dokulu koyu lacivert premium görünüm." },
    { ad: "Crystal Line Fular", kategori: "Fular", fiyat: 690, resim: "https://i.pinimg.com/736x/5a/04/7d/5a047d527fa252f1f9f47217d5e5bc87.jpg", aciklama: "Minimal beyaz çizgili zarif tasarım." },
    { ad: "Moonlight Fular", kategori: "Fular", fiyat: 580, resim: "https://i.pinimg.com/736x/df/c7/e5/dfc7e5d865ab0a49aa3358499e2308d4.jpg", aciklama: "Gri ve gümüş tonlarında modern stil." },
    { ad: "Velvet Touch Fular", kategori: "Fular", fiyat: 760, resim: "https://i.pinimg.com/1200x/88/ea/b3/88eab34fe51bf45aedc9a74c4091ec30.jpg", aciklama: "Yumuşak dokulu bordo renk şık model." },
    { ad: "Prestige Gold Fular", kategori: "Fular", fiyat: 920, resim: "https://i.pinimg.com/736x/d4/97/4c/d4974c593d38aaefd7b232679a14fcd1.jpg", aciklama: "Altın işlemeli siyah premium tasarım." },
    { ad: "Infinity Pattern Fular", kategori: "Fular", fiyat: 640, resim: "https://i.pinimg.com/236x/1c/16/c6/1c16c68793ac6e05d15bfac3710eb1d7.jpg", aciklama: "Geometrik desenli modern görünüm." },
    { ad: "Queen Pearl Fular", kategori: "Fular", fiyat: 810, resim: "https://i.pinimg.com/1200x/5b/3a/5d/5b3a5d041a1467098946869f963b311c.jpg", aciklama: "Krem tonlarında klasik ve zarif model." },
    { ad: "Mystic Noir Fular", kategori: "Fular", fiyat: 690, resim: "https://i.pinimg.com/1200x/4c/ac/6e/4cac6ef2699c9465edf0d55c931a9d05.jpg", aciklama: "Mat siyah dokulu sofistike tasarım." },
    { ad: "Rose Velvet Fular", kategori: "Fular", fiyat: 780, resim: "https://i.pinimg.com/736x/36/58/de/3658dee63c6a6ace880a9e74531519bf.jpg", aciklama: "Rose tonlarında yumuşak saten görünüm." },
    { ad: "Luxury Touch Fular", kategori: "Fular", fiyat: 980, resim: "https://i.pinimg.com/736x/d4/d3/ec/d4d3ecbc67489af5a03265dba4f270d7.jpg", aciklama: "Parlak kumaş detaylı premium model." },
    { ad: "Star Pattern Fular", kategori: "Fular", fiyat: 590, resim: "https://i.pinimg.com/736x/18/73/7b/18737b1794333271e130bf330f89fe1d.jpg", aciklama: "Yıldız desenli modern şehir stili." },
    { ad: "Elite Gold Fular", kategori: "Fular", fiyat: 1040, resim: "https://i.pinimg.com/736x/4a/55/98/4a559823ceee2a340e17cdb471f59e0b.jpg", aciklama: "Gold çizgili elit moda tasarımı." },
    { ad: "Luna Style Fular", kategori: "Fular", fiyat: 890, resim: "https://i.pinimg.com/1200x/8c/cf/ba/8ccfbadb08ba7e24bf6d0281a8094b6b.jpg", aciklama: "Ay desenli minimalist premium görünüm." },
    { ad: "Imperial Silk Fular", kategori: "Fular", fiyat: 1120, resim: "https://i.pinimg.com/1200x/3a/be/97/3abe97c3f4e9b3a7657f8865e2c98f35.jpg", aciklama: "Lüks ipek kumaşlı özel koleksiyon modeli." },
    { ad: "Paris Elegance Fular", kategori: "Fular", fiyat: 770, resim: "https://i.pinimg.com/1200x/aa/bd/23/aabd23061c5795f776c71a028dc2a21f.jpg", aciklama: "Fransız stilinden ilham alan şık tasarım." },
    { ad: "Aurora Pattern Fular", kategori: "Fular", fiyat: 910, resim: "https://i.pinimg.com/1200x/0a/2d/59/0a2d594d927a77d36dffd30d97b460b7.jpg", aciklama: "Renk geçişli modern sanat dokunuşu." },
    { ad: "Venus Glow Fular", kategori: "Fular", fiyat: 830, resim: "https://i.pinimg.com/1200x/57/52/e2/5752e2789f051a690963d96da4b51a9e.jpg", aciklama: "Parlak kumaş detaylı zarif model." },
    { ad: "Crystal Queen Fular", kategori: "Fular", fiyat: 1060, resim: "https://i.pinimg.com/736x/91/54/05/915405d6299216b7973178f547cdb388.jpg", aciklama: "Lüks desenli premium şehir stili." },
    { ad: "Noir Luxury Fular", kategori: "Fular", fiyat: 790, resim: "https://i.pinimg.com/1200x/e4/38/6c/e4386c6f5d056710a1e293a57853cd00.jpg", aciklama: "Tam siyah sofistike modern görünüm." },
    { ad: "Golden Prestige Fular", kategori: "Fular", fiyat: 1180, resim: "https://i.pinimg.com/736x/55/3d/8a/553d8a5398e43534ffaae7b369d1ba3f.jpg", aciklama: "Altın motifli özel tasarım koleksiyon." },
    { ad: "Sapphire Glow Fular", kategori: "Fular", fiyat: 1240, resim: "https://i.pinimg.com/1200x/91/3d/df/913ddf969376e1a57a41f46c815fa635.jpg", aciklama: "Safir mavisi tonlarında premium model." },
    { ad: "Opal Dream Fular", kategori: "Fular", fiyat: 930, resim: "https://i.pinimg.com/736x/a5/1d/04/a51d04ec8f4c540a0e944d4eb9a62eeb.jpg", aciklama: "Pastel tonlu modern ve hafif tasarım." },
    { ad: "Diamond Night Fular", kategori: "Fular", fiyat: 1320, resim: "https://i.pinimg.com/1200x/10/32/54/10325485141fd73a6680e2fddd85367f.jpg", aciklama: "Gece stiline uygun parlak detaylı model." }
];

const urunListesi = [
    ...kupeler,
    ...kolyeler,
    ...bileklikler,
    ...yuzukler,
    ...sahmeranlar,
    ...halhallar,
    ...gozlukler,
    ...fularlar,
    
];

let favoriler = JSON.parse(localStorage.getItem("mirae_favs")) || [];
let sepet = [];

const kategoriMap = {
    "Tüm Parçalar": "all",
    "Küpeler": "Küpe",
    "Kolyeler": "Kolye",
    "Bileklikler": "Bileklik",
    "Yüzükler": "Yüzük",
    "Şahmeranlar": "Şahmeran",
    "Halhallar": "Halhal",
    "Gözlükler": "Gözlük",
    "Fularlar": "Fular"
};

function urunleriYukle(liste = urunListesi, hedefId = "urun-grid") {
    const alan = document.getElementById(hedefId); 
    if (!alan) return;

    alan.innerHTML = "";

    liste.forEach((urun) => {
        const isFav = favoriler.some(f => f.ad === urun.ad);
        const btnClass = isFav ? "kart-btn aktif-fav" : "kart-btn";
        const btnText = isFav ? "♥ FAVORİDE" : "♡ FAVORİYE EKLE";

        alan.innerHTML += `
        <div class="kart">
            <div class="img-container">
                <img src="${urun.resim}" 
                     alt="${urun.ad}" 
                     loading="lazy" 
                     decoding="async" 
                     referrerpolicy="no-referrer"
                     onerror="this.onerror=null; this.src='https://picsum.photos/400/400?luxury,jewelry&sig=${Math.random()}';">
            </div>
            <div class="kart-bilgi">
                <small class="kat-label">${urun.kategori}</small>
                <h4 style="color: #fff; margin: 5px 0;">${urun.ad}</h4>
                <p class="urun-aciklama">${urun.aciklama || "MIRAE Luxury özel tasarımı."}</p>
                <p class="fiyat" style="color: #d4a5b2;">${urun.fiyat} ₺</p>
                <div style="display: flex; gap: 5px; flex-direction: column;">
                    <button class="${btnClass}" onclick="favIslem('${urun.ad}')">${btnText}</button>
                    <button class="kart-btn" onclick="urunSec(this, '${urun.ad}')">SEPETE EKLE ✨</button>
                </div>
            </div>
        </div>`;
    }); 
} 

function favIslem(urunAdi) {
    const urun = urunListesi.find(u => u.ad === urunAdi);
    const index = favoriler.findIndex(f => f.ad === urunAdi);

    if (index === -1) {
        favoriler.push(urun);

    } else {
        favoriler.splice(index, 1);
    }

    localStorage.setItem("mirae_favs", JSON.stringify(favoriler));
    
    const activePage = document.querySelector('.sayfa.aktif');
    if (activePage && activePage.id === 'favorites') {
        favorileriGoster();
    } else {
        const grids = document.querySelectorAll('.urun-grid');
        grids.forEach(g => {
            if(g.id === 'urun-grid') urunleriYukle(urunListesi, "urun-grid");
        });
    }
}

function favorileriGoster() {
    const favAlan = document.getElementById("favori-grid");
    if (!favAlan) return;

    if (favoriler.length === 0) {
        favAlan.innerHTML = "<p style='grid-column: 1/-1; text-align:center; color:#555; padding:50px;'>Henüz favori ürününüz yok. Işıltıyı keşfetmeye başlayın! ✨</p>";
        return;
    }
    urunleriYukle(favoriler, "favori-grid");
}

function urunSec(btn, urunAdi) {
    const urun = urunListesi.find(u => u.ad === urunAdi);
    if (!urun) return;

    sepet.push(urun);
    
    document.getElementById('sepet-sayi').innerText = sepet.length;
    
    btn.innerText = "EKLENDİ ✔";
    btn.style.backgroundColor = "#d4a5b2";
    btn.style.color = "#000";
    
    setTimeout(() => {
        btn.innerText = "SEPETE EKLE ✨";
        btn.style.backgroundColor = "transparent";
        btn.style.color = "#fff";
    }, 1500);
}

function sepetiGoster() {
    const listeAlani = document.getElementById('sepet-listesi');
    const toplamAlan = document.getElementById('toplam-tutar');
    if (!listeAlani) return;

    listeAlani.innerHTML = "";
    let toplam = 0;

    if (sepet.length === 0) {
        listeAlani.innerHTML = "<p style='color:#555;'>Sepetiniz şu an boş. MIRAE ışıltısını keşfedin.</p>";
    } else {
        sepet.forEach((item, index) => {
            toplam += item.fiyat;
            listeAlani.innerHTML += `
                <div style="display: flex; justify-content: space-between; align-items: center; background: #0a0a0a; padding: 15px; margin-bottom: 15px; border: 1px solid #111;">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <img src="${item.resim}" style="width: 60px; height: 60px; object-fit: cover;">
                        <div>
                            <h4 style="font-size: 0.9rem;">${item.ad}</h4>
                            <small style="color: #d4a5b2;">${item.kategori}</small>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <p style="font-weight: bold;">${item.fiyat} ₺</p>
                        <button onclick="sepettenCikar(${index})" style="background:none; border:none; color:#ff4d4d; cursor:pointer; font-size:0.7rem; margin-top:5px;">[ Kaldır ]</button>
                    </div>
                </div>
            `;
        });
    }
    toplamAlan.innerText = toplam;
}

function sepettenCikar(index) {
    sepet.splice(index, 1);
    document.getElementById('sepet-sayi').innerText = sepet.length;
    sepetiGoster();
}

function siparisTamamla(e) {
    e.preventDefault();
    if (sepet.length === 0) return alert("Sepetiniz boş!");
    
    alert("Ödemeniz onaylandı. MIRAE ışıltısı en kısa sürede kapınızda olacak! ✨");
    sepet = [];
    document.getElementById('sepet-sayi').innerText = "0";
    sayfaDegistir('ana-sayfa');
}

function filtrele(linkText) {
    const temizMetin = linkText.trim();
    const hedefKategori = kategoriMap[temizMetin];

    let filtrelenmis;

    if (hedefKategori === "all") {
        filtrelenmis = urunListesi;
    } else if (hedefKategori) {
        filtrelenmis = urunListesi.filter(u => u.kategori === hedefKategori);
    } else {
        console.warn("Eşleşen kategori bulunamadı:", temizMetin);
        return;
    }

    urunleriYukle(filtrelenmis, "urun-grid");

    document.querySelectorAll('.kategori-link').forEach(link => {
        link.style.color = link.innerText.trim() === temizMetin ? "#d4a5b2" : "#666";
    });
}

function sayfaDegistir(id) {
    const sayfalar = document.querySelectorAll('.sayfa');
    
    sayfalar.forEach(s => {
        s.classList.remove('aktif');
        s.style.display = "none";
        s.style.opacity = "0";
    });

    const hedef = document.getElementById(id);
    if (hedef) {
        hedef.style.display = "flex"; 
        hedef.classList.add('aktif');
        
        if (id === 'favorites') favorileriGoster();
        if (id === 'urunler') urunleriYukle(urunListesi, "urun-grid");
        if (id === 'sepet-sayfasi') sepetiGoster();

        window.scrollTo({ top: 0, behavior: 'auto' });

        setTimeout(() => {
            hedef.style.opacity = "1";
        }, 10);
    }
}

window.onload = () => {
    const urunGrid = document.getElementById("urun-grid");
    if (urunGrid) urunleriYukle(urunListesi, "urun-grid");
};
