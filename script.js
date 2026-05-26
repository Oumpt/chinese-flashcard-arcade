// ==========================================
// 📚 คลังข้อมูลคำศัพท์ (จัดเต็ม หมวดละ 10 ข้อ!)
// ==========================================
const vocabData = {
    "ตัวเลข": [
        { hanzi: "一", pinyin: "Yī", meaning: "หนึ่ง" },
        { hanzi: "二", pinyin: "Èr", meaning: "สอง" },
        { hanzi: "三", pinyin: "Sān", meaning: "สาม" },
        { hanzi: "四", pinyin: "Sì", meaning: "สี่" },
        { hanzi: "五", pinyin: "Wǔ", meaning: "ห้า" },
        { hanzi: "六", pinyin: "Liù", meaning: "หก" },
        { hanzi: "七", pinyin: "Qī", meaning: "เจ็ด" },
        { hanzi: "八", pinyin: "Bā", meaning: "แปด" },
        { hanzi: "九", pinyin: "Jiǔ", meaning: "เก้า" },
        { hanzi: "十", pinyin: "Shí", meaning: "สิบ" }
    ],
    "ครอบครัว": [
        { hanzi: "爸爸", pinyin: "Bàba", meaning: "พ่อ" },
        { hanzi: "妈妈", pinyin: "Māma", meaning: "แม่" },
        { hanzi: "哥哥", pinyin: "Gēge", meaning: "พี่ชาย" },
        { hanzi: "姐姐", pinyin: "Jiějie", meaning: "พี่สาว" },
        { hanzi: "弟弟", pinyin: "Dìdi", meaning: "น้องชาย" },
        { hanzi: "妹妹", pinyin: "Mèimei", meaning: "น้องสาว" },
        { hanzi: "爷爷", pinyin: "Yéye", meaning: "ปู่" },
        { hanzi: "奶奶", pinyin: "Nǎinai", meaning: "ย่า" },
        { hanzi: "外公", pinyin: "Wàigōng", meaning: "ตา" },
        { hanzi: "外婆", pinyin: "Wàipó", meaning: "ยาย" }
    ],
    "สัตว์": [
        { hanzi: "猫", pinyin: "Māo", meaning: "แมว", image: "images/cat.png" },
        { hanzi: "狗", pinyin: "Gǒu", meaning: "หมา", image: "images/dog.png" },
        { hanzi: "鸟", pinyin: "Niǎo", meaning: "นก", image: "images/bird.png" },
        { hanzi: "鱼", pinyin: "Yú", meaning: "ปลา", image: "images/fish.png" },
        { hanzi: "马", pinyin: "Mǎ", meaning: "ม้า", image: "images/horse.png" },
        { hanzi: "牛", pinyin: "Niú", meaning: "วัว", image: "images/cow.png" },
        { hanzi: "羊", pinyin: "Yáng", meaning: "แกะ", image: "images/sheep.png" },
        { hanzi: "猪", pinyin: "Zhū", meaning: "หมู", image: "images/pig.png" },
        { hanzi: "鸡", pinyin: "Jī", meaning: "ไก่", image: "images/chicken.png" },
        { hanzi: "鸭", pinyin: "Yā", meaning: "เป็ด", image: "images/duck.png" }
    ],
    "คำกริยา": [
        { hanzi: "吃", pinyin: "Chī", meaning: "กิน" },
        { hanzi: "喝", pinyin: "Hē", meaning: "ดื่ม" },
        { hanzi: "看", pinyin: "Kàn", meaning: "ดู/อ่าน" },
        { hanzi: "听", pinyin: "Tīng", meaning: "ฟัง" },
        { hanzi: "说", pinyin: "Shuō", meaning: "พูด" },
        { hanzi: "写", pinyin: "Xiě", meaning: "เขียน" },
        { hanzi: "走", pinyin: "Zǒu", meaning: "เดิน" },
        { hanzi: "跑", pinyin: "Pǎo", meaning: "วิ่ง" },
        { hanzi: "睡", pinyin: "Shuì", meaning: "นอน" },
        { hanzi: "买", pinyin: "Mǎi", meaning: "ซื้อ" }
    ],
    "ความรู้ทั่วไป": [
        { hanzi: "ระบบพินอิน (Pinyin) คืออะไร?", pinyin: "", meaning: "ระบบการเขียนเสียงภาษาจีนด้วยตัวอักษรโรมัน" },
        { hanzi: "สระเดี่ยวพื้นฐานในพินอิน มี 6 ตัว ได้แก่ข้อใด?", pinyin: "", meaning: "a, o, e, i, u, ü" },
        { hanzi: "ภาษาจีนกลาง (普通话) มีเสียงวรรณยุกต์หลักทั้งหมดกี่เสียง?", pinyin: "", meaning: "4 เสียง" },
        { hanzi: "พยัญชนะต้น (声母) ในระบบพินอินมีทั้งหมดกี่ตัว?", pinyin: "", meaning: "21 ตัว" },
        { hanzi: "คำว่า '你好' (nǐ hǎo) ในภาษาจีน มีความหมายว่าอย่างไร?", pinyin: "", meaning: "สวัสดี" },
        { hanzi: "วรรณยุกต์เสียงที่ 1 ( ¯ ) ในภาษาจีนกลาง ออกเสียงแบบใด?", pinyin: "", meaning: "เสียงสูงราบเรียบ" },
        { hanzi: "วรรณยุกต์เสียงที่ 2 ( ´ ) ในภาษาจีนกลาง ออกเสียงแบบใด?", pinyin: "", meaning: "เสียงขึ้นจากต่ำไปสูง" },
        { hanzi: "วรรณยุกต์เสียงที่ 3 ( ˇ ) ในภาษาจีนกลาง ออกเสียงแบบใด?", pinyin: "", meaning: "เสียงลงต่ำแล้วขึ้นสูง" },
        { hanzi: "วรรณยุกต์เสียงที่ 4 ( ˋ ) ในภาษาจีนกลาง ออกเสียงแบบใด?", pinyin: "", meaning: "เสียงลงจากสูงไปต่ำ" },
        { hanzi: "สระ (韵母) ในระบบพินอินภาษาจีนกลางมีทั้งหมดกี่ตัว?", pinyin: "", meaning: "36 ตัว" }
    ],
    "สถานที่": [
        { hanzi: "学校", pinyin: "Xuéxiào", meaning: "โรงเรียน" },
        { hanzi: "医院", pinyin: "Yīyuàn", meaning: "โรงพยาบาล" },
        { hanzi: "机场", pinyin: "Jīchǎng", meaning: "สนามบิน" },
        { hanzi: "火车站", pinyin: "Huǒchēzhàn", meaning: "สถานีรถไฟ" },
        { hanzi: "银行", pinyin: "Yínháng", meaning: "ธนาคาร" },
        { hanzi: "公园", pinyin: "Gōngyuàn", meaning: "สวนสาธารณะ" },
        { hanzi: "商店", pinyin: "Shāngdiàn", meaning: "ร้านค้า" },
        { hanzi: "图书馆", pinyin: "Túshūguǎn", meaning: "ห้องสมุด" },
        { hanzi: "家", pinyin: "Jiā", meaning: "บ้าน" },
        { hanzi: "洗手间", pinyin: "Xǐshǒujiān", meaning: "ห้องน้ำ" }
    ]
};

// ==========================================
// ⚙️ ตัวแปรสถานะ
// ==========================================
let currentCategory = "";
let currentVocabList = [];

// State ของ Flashcard
let cardIndex = 0;
let isFlipped = false;

// State ของ Quiz
let quizQuestions = [];
let currentQuizIndex = 0;
let score = 0;

// State ของ Quiz Timer (จับเวลาควิซ)
let quizTimer = null;
const QUIZ_TIME_LIMIT = 15; // จำกัดเวลาข้อละ 15 วินาที
let quizTimeLeft = QUIZ_TIME_LIMIT;

// State ของเกมจับคู่
let firstFlippedCard = null;
let secondFlippedCard = null;
let matchMoves = 0;
let matchTimerInterval = null;
let matchTimeElapsed = 0;
let isMatchGameActive = false;
let isMatchGridLocked = false;
let matchPairsMatched = 0;

// State ของดนตรีประกอบ BGM
let bgmCtx = null;
let bgmInterval = null;
let currentBgmStep = 0;

// โน้ตเพลงย้อนยุคแนวพิกเซล (คอร์ด C -> Am -> F -> G)
const bgmNotes = [
    { bass: 130.81, treble: 261.63 }, // C3, C4
    { bass: 130.81, treble: 329.63 }, // C3, E4
    { bass: 130.81, treble: 392.00 }, // C3, G4
    { bass: 130.81, treble: 523.25 }, // C3, C5
    { bass: 110.00, treble: 220.00 }, // A2, A3
    { bass: 110.00, treble: 261.63 }, // A2, C4
    { bass: 110.00, treble: 329.63 }, // A2, E4
    { bass: 110.00, treble: 440.00 }, // A2, A4
    { bass: 87.31, treble: 174.61 },  // F2, F3
    { bass: 87.31, treble: 220.00 },  // F2, A3
    { bass: 87.31, treble: 261.63 },  // F2, C4
    { bass: 87.31, treble: 349.23 },  // F2, F4
    { bass: 98.00, treble: 196.00 },  // G2, G3
    { bass: 98.00, treble: 246.94 },  // G2, B3
    { bass: 98.00, treble: 293.66 },  // G2, D4
    { bass: 98.00, treble: 392.00 }   // G2, G4
];

// State และคำพูดของคู่หูมาสคอตหมีแพนด้า
let mascotTimer = null;
const mascotPhrases = [
    "你好! ยินดีต้อนรับสู่แดนภาษาจีนนะงับ! 🐼",
    "加油! สู้ๆ นะครับกับการเรียนวันนี้! 💪",
    "很好! คุณทำได้ดีมากๆ เลยงับ! 🌟",
    "谢谢! ขอบคุณที่มาผจญภัยกับผมนะครับ 💖",
    "汉语很好玩! ภาษาจีนเรียนง่ายและสนุกมากนะงับ! 📚",
    "天天向上! พัฒนาตัวเองวันละนิดเพื่อเก่งขึ้นทุกวันนะครับ! 🚀",
    "ลองทดสอบความรู้ด้วย Quiz Game สิครับ สนุกมากนะ! ⏱️",
    "ถ้าเขียนตัวจีนไม่ถูก กดปุ่ม 'ฝึกเขียน' เพื่อดูลำดับขีดได้นะครับ ✍️",
    "อยากสลับธีมเหรอครับ? กดปุ่มดวงจันทร์ที่มุมขวาบนได้เลยนะ! 🌙"
];

// ==========================================
// 🌙 ระบบจัดการธีมมืด/สว่าง (Theme Management)
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    } else {
        body.classList.remove('dark-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const isDark = body.classList.toggle('dark-theme');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    if (isDark) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// ==========================================
// 🔔 ระบบสังเคราะห์เสียงเอฟเฟกต์ (Sound FX Synthesis via Web Audio API)
// ==========================================
function playQuizSound(type) {
    const soundToggle = document.getElementById('sound-checkbox');
    if (!soundToggle || !soundToggle.checked) return; // หากปิดเสียงไว้ ไม่ต้องเล่น
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    
    if (type === 'correct') {
        // เสียงตอบถูก: เสียง 'ติ๊ง!' ใสๆ โน้ตคู่ประสานขึ้นสูงสั้นๆ (E5 -> G5)
        const now = ctx.currentTime;
        
        // โน้ตตัวที่ 1 (E5 - 659.25 Hz)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(659.25, now);
        gain1.gain.setValueAtTime(0.1, now);
        gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        
        // โน้ตตัวที่ 2 (G5 - 783.99 Hz)
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(783.99, now + 0.08);
        gain2.gain.setValueAtTime(0.0, now);
        gain2.gain.setValueAtTime(0.1, now + 0.08);
        gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        
        osc1.start(now);
        osc1.stop(now + 0.15);
        
        osc2.start(now + 0.08);
        osc2.stop(now + 0.3);
        
    } else if (type === 'wrong') {
        // เสียงตอบผิด: เสียงบัสเบสต่ำลากหักหัวลง (A3 -> A2)
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.3); // A2 (slide down)
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.35);
        
    } else if (type === 'timeout') {
        // เสียงหมดเวลา: เสียงเตือนสไลด์กระแทก 2 จังหวะสั้นๆ
        const now = ctx.currentTime;
        
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(180, now);
        gain1.gain.setValueAtTime(0.1, now);
        gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(150, now + 0.15);
        gain2.gain.setValueAtTime(0.1, now + 0.15);
        gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        
        osc1.start(now);
        osc1.stop(now + 0.1);
        
        osc2.start(now + 0.15);
        osc2.stop(now + 0.35);
    }
}

// ==========================================
// 🎮 ระบบเริ่มเกมย้อนยุค (Retro Start Game Sound & Transition)
// ==========================================
function playRetroStartSound() {
    const soundToggle = document.getElementById('sound-checkbox');
    if (!soundToggle || !soundToggle.checked) return;
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;
    
    // เมโลดี้สไตล์ 8-bit ขึ้นด่านใหม่ (E5 -> G5 -> E6 -> C6 -> D6 -> G6)
    const melody = [659.25, 783.99, 1318.51, 1046.50, 1174.66, 1567.98];
    const duration = 0.08; 
    
    melody.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'square'; // คลื่นเสียงสี่เหลี่ยมให้อารมณ์เกมฟามิคอม/ตู้เกมย้อนยุค
        osc.frequency.setValueAtTime(freq, now + idx * duration);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.setValueAtTime(0.08, now + idx * duration);
        gain.gain.exponentialRampToValueAtTime(0.001, now + (idx + 1) * duration - 0.01);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(now + idx * duration);
        osc.stop(now + (idx + 1) * duration);
    });
}

function startTheGame() {
    const startScreen = document.getElementById('start-screen-overlay');
    const startBtn = document.querySelector('.retro-btn');
    
    if (!startScreen) return;
    
    if (startBtn) {
        startBtn.classList.add('flash-active');
    }
    
    // เล่นเสียงเอฟผลลัพธ์ปุ่มกด 8-bit
    playRetroStartSound();
    
    // เริ่มเพลง BGM อาร์เคดลูป
    playBGM();
    
    // ปล่อยให้ปุ่มกะพริบและเสียงเล่นก่อนเฟดออก
    setTimeout(() => {
        startScreen.classList.add('fade-out');
        
        setTimeout(() => {
            startScreen.style.display = 'none';
            
// No auto‑open sidebar after start – user opens it manually if desired
        }, 800); // ดีเลย์ตรงกับ CSS transition (0.8s)
    }, 600);
}

// ==========================================
// 🎶 ระบบสังเคราะห์ดนตรีประกอบ 8-bit BGM
// ==========================================
function playBGM() {
    const bgmCheckbox = document.getElementById('bgm-checkbox');
    if (!bgmCheckbox || !bgmCheckbox.checked) return;
    
    if (bgmInterval) return; // เพลงเล่นอยู่แล้ว ไม่ต้องเริ่มซ้ำ
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    
    bgmCtx = new AudioContextClass();
    currentBgmStep = 0;
    
    const stepDuration = 0.22; // ความเร็วบีต (220ms ต่อขั้นตอน)
    
    bgmInterval = setInterval(() => {
        if (!bgmCtx) return;
        if (bgmCtx.state === 'suspended') {
            bgmCtx.resume();
        }
        
        const now = bgmCtx.currentTime;
        const note = bgmNotes[currentBgmStep % bgmNotes.length];
        
        // 1. Bass (Triangle wave - ทุ้มและนุ่มนวล)
        const oscBass = bgmCtx.createOscillator();
        const gainBass = bgmCtx.createGain();
        oscBass.type = 'triangle';
        oscBass.frequency.setValueAtTime(note.bass, now);
        
        gainBass.gain.setValueAtTime(0.15, now);
        gainBass.gain.exponentialRampToValueAtTime(0.001, now + stepDuration - 0.02);
        
        oscBass.connect(gainBass);
        gainBass.connect(bgmCtx.destination);
        
        // 2. Treble (Sine wave - เสียงใสๆ คล้ายระฆังพิกเซล)
        const oscTreble = bgmCtx.createOscillator();
        const gainTreble = bgmCtx.createGain();
        oscTreble.type = 'sine';
        oscTreble.frequency.setValueAtTime(note.treble, now);
        
        gainTreble.gain.setValueAtTime(0.10, now);
        gainTreble.gain.exponentialRampToValueAtTime(0.001, now + stepDuration - 0.02);
        
        oscTreble.connect(gainTreble);
        gainTreble.connect(bgmCtx.destination);
        
        oscBass.start(now);
        oscBass.stop(now + stepDuration);
        
        oscTreble.start(now);
        oscTreble.stop(now + stepDuration);
        
        currentBgmStep++;
    }, stepDuration * 1000);
}

function stopBGM() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
    if (bgmCtx) {
        bgmCtx.close();
        bgmCtx = null;
    }
}

function toggleBGM() {
    const bgmCheckbox = document.getElementById('bgm-checkbox');
    if (bgmCheckbox && bgmCheckbox.checked) {
        playBGM();
    } else {
        stopBGM();
    }
}

// ==========================================
// 🐼 ระบบเปลี่ยนข้อความกล่องพูดหมีแพนด้าคู่หู
// ==========================================
function initMascotSpeech() {
    const speechBubble = document.getElementById('mascot-speech');
    if (!speechBubble) return;
    
    if (mascotTimer) {
        clearInterval(mascotTimer);
    }
    
    // สุ่มคำทักทายแรกทันที
    const firstIdx = Math.floor(Math.random() * mascotPhrases.length);
    speechBubble.innerText = mascotPhrases[firstIdx];
    
    mascotTimer = setInterval(() => {
        // เอฟเฟกต์เฟดออกเบาๆ ก่อนสลับคำแปล
        speechBubble.style.opacity = 0;
        speechBubble.style.transform = "scale(0.85)";
        
        setTimeout(() => {
            const randomIdx = Math.floor(Math.random() * mascotPhrases.length);
            speechBubble.innerText = mascotPhrases[randomIdx];
            speechBubble.style.opacity = 1;
            speechBubble.style.transform = "scale(1)";
        }, 300);
    }, 12000);
}

// ==========================================
// 🔊 ระบบ Text-to-Speech (อ่านออกเสียง)
// ==========================================
function speakText(text, event) {
    if (event) event.stopPropagation(); 
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // ยกเลิกเสียงเก่าที่ค้างอยู่
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN'; 
        utterance.rate = 0.85; 
        window.speechSynthesis.speak(utterance);
    } else {
        Swal.fire({
            html: `
                <div class="swal-retro-content">
                    <div class="retro-monster-anim">❌</div>
                    <h2 class="retro-score-fail">ERROR</h2>
                    <div class="correct-reveal-box" style="font-size: 1rem;">เบราว์เซอร์ของคุณไม่รองรับระบบเสียงอ่านครับ</div>
                </div>
            `,
            confirmButtonText: 'ตกลง',
            customClass: {
                popup: 'retro-swal-popup'
            },
            allowOutsideClick: false
        });
    }
}

// ==========================================================
// 🚀 เริ่มต้นระบบ & Sidebar Logic
// ==========================================
window.onload = () => {
    initTheme(); // ดึงธีมที่บันทึกไว้ล่าสุด
    
    const btnContainer = document.getElementById('category-buttons');
    const categoryIcons = {
        "ตัวเลข": "fa-hashtag",
        "ครอบครัว": "fa-people-roof",
        "สัตว์": "fa-paw",
        "คำกริยา": "fa-person-running",
        "ความรู้ทั่วไป": "fa-book-open-reader",
        "สถานที่": "fa-building"
    };

    // สร้างปุ่มหน้าหลักเป็นปุ่มแรกสุดใน Sidebar
    const homeBtn = document.createElement('button');
    homeBtn.className = 'cat-btn home-sidebar-btn selected'; // เริ่มต้นเลือกเป็นปุ่มหลักเพราะอยู่หน้าแรก
    homeBtn.innerHTML = `<i class="fa-solid fa-house"></i> <span>หน้าหลัก (ด่าน)</span>`;
    homeBtn.onclick = () => {
    showWelcomeDashboard();
    const sidebar = document.getElementById('sidebar');
    if (sidebar && !sidebar.classList.contains('closed')) {
        toggleSidebar();
    }
};
    btnContainer.appendChild(homeBtn);

    for (const cat in vocabData) {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        const iconClass = categoryIcons[cat] || "fa-folder";
        btn.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>หมวด${cat}</span>`;
        btn.onclick = () => selectCategory(cat, btn);
        btnContainer.appendChild(btn);
    }

    // โหลดปุ่มด่าน World 1-6 บนหน้า Welcome Dashboard หลัก
    const stageContainer = document.getElementById('stage-select-grid');
    if (stageContainer) {
        let index = 1;
        for (const cat in vocabData) {
            const btn = document.createElement('button');
            btn.className = 'stage-btn';
            const iconClass = categoryIcons[cat] || "fa-folder";
            
            btn.innerHTML = `
                <span class="stage-num">WORLD 1-${index}</span>
                <i class="fa-solid ${iconClass} stage-icon"></i>
                <h3 class="stage-title">${cat}</h3>
            `;
            
            btn.onclick = () => {
                // ค้นหาปุ่ม Sidebar ที่เกี่ยวข้องเพื่อผ่านเข้าไปเป็นอาร์กิวเมนต์
                const sidebarButtons = document.querySelectorAll('.cat-btn');
                let targetSidebarBtn = null;
                sidebarButtons.forEach(b => {
                    if (b.innerText.includes(cat)) {
                        targetSidebarBtn = b;
                    }
                });
                
                // สังเคราะห์เสียงตอบรับ 8-bit เบาๆ ตอนกดเริ่มด่าน
                playQuizSound('correct');
                
                selectCategory(cat, targetSidebarBtn);
            };
            
            stageContainer.appendChild(btn);
            index++;
        }
    }
    
    // เริ่มระบบสุ่มแสดงบทสนทนาแพนด้าคู่หูพิกเซล
    initMascotSpeech();
};

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('closed');
}

function selectCategory(category, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
    if (btnElement) {
        btnElement.classList.add('selected');
    }

    currentCategory = category;
    currentVocabList = vocabData[category];
    document.getElementById('current-category-title').innerText = `กำลังเรียน: หมวด${category}`;
    
    // ซ่อนบอร์ดต้อนรับหลัก และแสดงพื้นที่ทำงานบทเรียน
    const welcomeDashboard = document.getElementById('welcome-dashboard');
    if (welcomeDashboard) welcomeDashboard.classList.add('hidden');
    
    document.getElementById('learning-workspace').classList.remove('hidden');

    // ซ่อนปุ่มเกมจับคู่สำหรับหมวดความรู้ทั่วไป เนื่องจากคำถามและคำแปลมีความยาวมากเกินไปสำหรับการจัดตารางการ์ด
    const matchBtn = document.getElementById('btn-match');
    if (matchBtn) {
        if (category === "ความรู้ทั่วไป") {
            matchBtn.classList.add('hidden');
        } else {
            matchBtn.classList.remove('hidden');
        }
    }

    // ** สำคัญ: รีเซ็ตสถานะทั้งหมด เฉพาะตอนเลือกหมวดหมู่ใหม่ **
    cardIndex = 0;
    loadCard(); // โหลดข้อมูลแฟลชการ์ดรอไว้
    restartQuiz(false); // โหลดข้อมูลควิซรอไว้ (แบบเงียบๆ ไม่สลับหน้าจอ)

    // บังคับสลับไปหน้าแฟลชการ์ดเสมอเมื่อกดหมวดหมู่ใหม่
    switchMode('flashcard');

    // Auto‑close sidebar after selecting a category (especially on mobile)
const sidebar = document.getElementById('sidebar');
if (sidebar && !sidebar.classList.contains('closed')) {
    toggleSidebar();
}
}

function showWelcomeDashboard() {
    const welcomeDashboard = document.getElementById('welcome-dashboard');
    const learningWorkspace = document.getElementById('learning-workspace');
    
    if (welcomeDashboard && learningWorkspace) {
        welcomeDashboard.classList.remove('hidden');
        learningWorkspace.classList.add('hidden');
        
        document.getElementById('current-category-title').innerText = "STAGE SELECT: เลือกด่าน";
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
        
        // ไฮไลต์ปุ่มหน้าหลักใน Sidebar
        const homeBtn = document.querySelector('.home-sidebar-btn');
        if (homeBtn) {
            homeBtn.classList.add('selected');
        }
        
        stopQuizTimer(); // ล้างตัวนับเวลาควิซหากอยู่ระหว่างควิซ
        stopMatchTimer(); // ล้างตัวนับเวลาเกมจับคู่
    }
}

// ==========================================
// 📇 ระบบแฟลชการ์ด
// ==========================================
function loadCard() {
    isFlipped = false;
    document.getElementById('flashcard').classList.remove('flipped');
    
    setTimeout(() => {
        const word = currentVocabList[cardIndex];
        document.getElementById('card-hanzi').innerText = word.hanzi;
        
        const pinyinElem = document.getElementById('card-pinyin');
        const ttsBtn = document.getElementById('flashcard-tts-btn');
        const meaningElem = document.getElementById('card-meaning'); 
        const imgElem = document.getElementById('card-image');

        // ควบคุมการแสดงรูปภาพประกอบคำศัพท์
        if (word.image) {
            imgElem.src = word.image;
            imgElem.classList.remove('hidden');
        } else {
            imgElem.src = "";
            imgElem.classList.add('hidden');
        }

        // ควบคุมการแสดงปุ่มฝึกลำดับขีดอักษรจีน (ซ่อนอัตโนมัติหากไม่ใช่ตัวจีน)
        const strokeBtn = document.getElementById('stroke-btn');
        const isChinese = /[\u4e00-\u9fa5]/.test(word.hanzi);
        if (isChinese) {
            strokeBtn.classList.remove('hidden');
        } else {
            strokeBtn.classList.add('hidden');
        }

        if (word.pinyin) {
            // โหมดปกติ
            pinyinElem.innerText = word.pinyin;
            pinyinElem.classList.remove('hidden');
            ttsBtn.classList.remove('hidden'); 
            document.getElementById('card-hanzi').style.fontSize = "5.5rem"; 
            meaningElem.style.fontSize = "2.5rem"; // ขนาดฟอนต์คำแปลปกติ
            
            // อ่านออกเสียงอัตโนมัติหากติ๊กเปิดไว้
            if (document.getElementById('auto-speak-checkbox').checked) {
                speakText(word.hanzi);
            }
        } else {
            // โหมดความรู้ทั่วไป
            pinyinElem.classList.add('hidden');
            ttsBtn.classList.add('hidden'); 
            document.getElementById('card-hanzi').style.fontSize = "2.2rem"; 
            meaningElem.style.fontSize = "1.4rem"; // ย่อฟอนต์คำแปลไม่ให้ล้น/ตกขอบ
        }
        
        meaningElem.innerText = word.meaning;
        document.getElementById('card-progress').innerText = `${cardIndex + 1} / ${currentVocabList.length}`;
    }, 150);
}

function flipCard() {
    isFlipped = !isFlipped;
    document.getElementById('flashcard').classList.toggle('flipped', isFlipped);
}

function prevCard() { if (cardIndex > 0) { cardIndex--; loadCard(); } }
function nextCard() { if (cardIndex < currentVocabList.length - 1) { cardIndex++; loadCard(); } }

// ==========================================
// 🎮 ระบบควิซเกม
// ==========================================
function restartQuiz(playNow = true) {
    stopQuizTimer(); // หยุดเวลาของรอบเก่า
    score = 0;
    currentQuizIndex = 0;
    document.getElementById('score').innerText = String(score).padStart(2, '0');
    document.getElementById('total-questions').innerText = String(currentVocabList.length).padStart(2, '0');
    document.getElementById('restart-quiz-btn').classList.add('hidden');
    document.getElementById('choices-grid').classList.remove('hidden');
    
    const labelElem = document.getElementById('quiz-question-label');
    if (currentCategory === "ความรู้ทั่วไป") {
        labelElem.innerText = "เลือกคำตอบที่ถูกต้องที่สุดเกี่ยวกับการเรียนภาษาจีนพื้นฐาน:";
    } else {
        labelElem.innerText = "คำศัพท์ภาษาจีนคำนี้ แปลว่าอะไร?";
    }

    quizQuestions = currentVocabList.map(word => {
        let distractors = currentVocabList.filter(w => w.hanzi !== word.hanzi);
        distractors = distractors.sort(() => 0.5 - Math.random()).slice(0, 3);
        let choices = [word, ...distractors].map(w => w.meaning);
        return {
            question: word.hanzi,
            answer: word.meaning,
            choices: choices.sort(() => 0.5 - Math.random())
        };
    }).sort(() => 0.5 - Math.random());
    
    loadQuizQuestion();

    // ถ้าตั้งใจกดเริ่มเล่นใหม่ ให้บังคับสลับไปโหมดควิซ
    if(playNow) switchMode('quiz');
}

function loadQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        endQuiz();
        return;
    }

    // เริ่มจับเวลาสำหรับคำถามข้อนี้
    startQuizTimer();

    const q = quizQuestions[currentQuizIndex];
    document.getElementById('quiz-question').innerText = q.question;
    document.getElementById('quiz-progress').innerText = String(currentQuizIndex + 1).padStart(2, '0');
    
    const ttsBtn = document.getElementById('quiz-tts-btn');

    if (currentCategory === "ความรู้ทั่วไป") {
        document.getElementById('quiz-question').style.fontSize = "1.8rem";
        ttsBtn.classList.add('hidden'); 
    } else {
        document.getElementById('quiz-question').style.fontSize = "4rem";
        ttsBtn.classList.remove('hidden'); 
        
        // ออกเสียงอัตโนมัติหากติ๊กเปิดไว้
        if (document.getElementById('auto-speak-checkbox').checked) {
            speakText(q.question);
        }
    }

    const choicesGrid = document.getElementById('choices-grid');
    choicesGrid.innerHTML = "";
    
    q.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = choice;
        btn.onclick = () => {
            stopQuizTimer(); // หยุดเวลาก่อนแสดงผลลัพธ์
            checkAnswer(choice, q.answer, btn);
        };
        choicesGrid.appendChild(btn);
    });
}

// ==========================================
// 🪙 ฟังก์ชันสร้างข้อความคะแนนลอยเด้ง (Floating Score Feedback)
// ==========================================
function spawnFloatingText(text, isGain, x, y) {
    const el = document.createElement('div');
    el.className = `retro-floating-text ${isGain ? 'gain' : 'fail'}`;
    el.innerText = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    
    // ทำลาย Element ทันทีหลังแอนิเมชันความยาว 1 วินาทีเสร็จสิ้น
    setTimeout(() => {
        el.remove();
    }, 1000);
}

function checkAnswer(selected, correct, clickedBtn) {
    stopQuizTimer(); // ป้องกันการนับเวลาค้าง
    
    // ป้องกันการคลิกปุ่มอื่นๆ ซ้ำระหว่างกำลังนำเสนอผลลัพธ์
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => btn.style.pointerEvents = 'none');
    
    if (selected === correct) {
        score++;
        const scoreElem = document.getElementById('score');
        if (scoreElem) scoreElem.innerText = String(score).padStart(2, '0');
        
        // เล่นแอนิเมชันกระโดดของป้ายคะแนนด้านบน
        const scoreBadge = document.querySelector('.score-badge');
        if (scoreBadge) {
            scoreBadge.classList.remove('badge-bounce');
            void scoreBadge.offsetWidth; // Trigger reflow
            scoreBadge.classList.add('badge-bounce');
            setTimeout(() => {
                scoreBadge.classList.remove('badge-bounce');
            }, 400);
        }
        
        // ไฮไลต์ปุ่มที่ถูก
        if (clickedBtn) {
            clickedBtn.classList.add('correct-choice');
            const rect = clickedBtn.getBoundingClientRect();
            const x = rect.left + rect.width / 2 + window.scrollX - 45;
            const y = rect.top + window.scrollY - 15;
            spawnFloatingText('+1 🪙', true, x, y);
        }
        
        playQuizSound('correct'); // เล่นเสียงตอบถูก!
        
        // เปลี่ยนข้อคำถามใน 800ms
        setTimeout(() => {
            currentQuizIndex++;
            loadQuizQuestion();
        }, 800);
        
    } else {
        // ไฮไลต์ปุ่มที่คลิกผิด และปุ่มเฉลยข้อถูก
        if (clickedBtn) {
            clickedBtn.classList.add('wrong-choice');
            const rect = clickedBtn.getBoundingClientRect();
            const x = rect.left + rect.width / 2 + window.scrollX - 55;
            const y = rect.top + window.scrollY - 15;
            spawnFloatingText('❌ WRONG', false, x, y);
        }
        
        options.forEach(btn => {
            if (btn.innerText === correct) {
                btn.classList.add('correct-choice');
            }
        });
        
        playQuizSound('wrong'); // เล่นเสียงตอบผิด!
        
        // เปลี่ยนข้อคำถามใน 1500ms เพื่อให้อ่านเฉลยก่อน
        setTimeout(() => {
            currentQuizIndex++;
            loadQuizQuestion();
        }, 1500);
    }
}

function endQuiz() {
    stopQuizTimer(); // หยุดการทำงานของเวลา
    document.getElementById('quiz-question').innerText = "🎉 จบเกม!";
    document.getElementById('choices-grid').classList.add('hidden');
    document.getElementById('quiz-tts-btn').classList.add('hidden');
    document.getElementById('restart-quiz-btn').classList.remove('hidden');
    
    let msg = score === quizQuestions.length ? 'สมบูรณ์แบบ! ตอบถูกหมดทุกข้อเลยครับ 🏆' : 'เก่งมากครับ ทบทวนบ่อยๆ จะจำแม่นขึ้นนะงับ! 💪';
    
    Swal.fire({
        html: `
            <div class="swal-retro-content">
                <div class="retro-coin-anim" style="font-size: 4rem;">🏆</div>
                <h2 class="retro-score-gain" style="color: #ffb300; animation: none;">QUEST CLEAR!</h2>
                <div class="correct-reveal-box" style="background-color: #fff9e6; border-color: #ffb300; max-width: 100%;">
                    คุณทำได้ <span>${score}</span> / <span>${quizQuestions.length}</span> คะแนน<br>
                    <small style="font-size: 0.85rem; color: #7f8c8d; font-weight: normal; margin-top: 10px; display: block;">${msg}</small>
                </div>
            </div>
        `,
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#000000',
        backdrop: `rgba(0,0,0,0.4)`,
        customClass: {
            popup: 'retro-swal-popup'
        },
        allowOutsideClick: false
    });
}

// ==========================================
// ⏱️ ตรรกะระบบจับเวลาควิซ (Quiz Timer Logic)
// ==========================================
function startQuizTimer() {
    stopQuizTimer(); // ล้าง interval เก่า (ถ้ามี)
    
    quizTimeLeft = QUIZ_TIME_LIMIT;
    const timerBar = document.getElementById('quiz-timer-bar');
    if (!timerBar) return;
    
    timerBar.style.width = "100%";
    timerBar.classList.remove('warning');
    
    quizTimer = setInterval(() => {
        quizTimeLeft -= 0.1;
        const percent = (quizTimeLeft / QUIZ_TIME_LIMIT) * 100;
        timerBar.style.width = `${percent}%`;
        
        if (quizTimeLeft <= 5) {
            timerBar.classList.add('warning');
        }
        
        if (quizTimeLeft <= 0) {
            stopQuizTimer();
            handleQuizTimeout();
        }
    }, 100);
}

function stopQuizTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
    const timerBar = document.getElementById('quiz-timer-bar');
    if (timerBar) {
        timerBar.style.width = "100%";
        timerBar.classList.remove('warning');
    }
}

function handleQuizTimeout() {
    const q = quizQuestions[currentQuizIndex];
    if (!q) return;
    const correct = q.answer;
    
    // ปิดการคลิกทุกตัวเลือก และไฮไลต์ข้อที่ถูก
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => {
        btn.style.pointerEvents = 'none';
        if (btn.innerText === correct) {
            btn.classList.add('correct-choice');
        }
    });
    
    // สปอว์นข้อความหมดเวลาบริเวณตัวเลือก
    const choicesGrid = document.getElementById('choices-grid');
    if (choicesGrid) {
        const rect = choicesGrid.getBoundingClientRect();
        const x = rect.left + rect.width / 2 + window.scrollX - 65;
        const y = rect.top + window.scrollY - 30;
        spawnFloatingText('⏰ TIMEOUT', false, x, y);
    }
    
    playQuizSound('timeout'); // เล่นเสียงหมดเวลา!
    
    // เปลี่ยนข้อคำถามใน 1500ms เพื่อทบทวนข้อที่ถูก
    setTimeout(() => {
        currentQuizIndex++;
        loadQuizQuestion();
    }, 1500);
}

// ==========================================
// 🕹️ ปุ่มนำทางข้อคำถามควิซ (ย้อนกลับ / ถัดไป)
// ==========================================
function prevQuizQuestion() {
    stopQuizTimer(); // หยุดเวลาก่อนนำทาง
    if (currentQuizIndex > 0) {
        currentQuizIndex--;
        document.getElementById('choices-grid').classList.remove('hidden');
        document.getElementById('restart-quiz-btn').classList.add('hidden');
        loadQuizQuestion();
    } else {
        Swal.fire({
            html: `
                <div class="swal-retro-content">
                    <div class="retro-monster-anim">ℹ️</div>
                    <h2 class="retro-score-gain" style="color: #2196f3; animation: none;">INFO</h2>
                    <div class="correct-reveal-box" style="font-size: 1rem; border-color: #2196f3;">
                        นี่คือข้อคำถามแรกสุดแล้วครับ<br>ไม่สามารถย้อนกลับไปได้มากกว่านี้แล้ว
                    </div>
                </div>
            `,
            timer: 1500,
            showConfirmButton: false,
            customClass: {
                popup: 'retro-swal-popup'
            },
            allowOutsideClick: false
        });
    }
}

// ==========================================
// 🕹️ ปุ่มนำทางข้อคำถามควิซ (ย้อนกลับ / ถัดไป)
// ==========================================
function nextQuizQuestion() {
    stopQuizTimer(); // หยุดเวลาก่อนนำทาง
    if (currentQuizIndex < quizQuestions.length - 1) {
        currentQuizIndex++;
        loadQuizQuestion();
    } else if (currentQuizIndex === quizQuestions.length - 1) {
        // หากคลิกถัดไปในข้อสุดท้าย จะทำการจบควิซ
        currentQuizIndex++;
        endQuiz();
    } else {
        Swal.fire({
            html: `
                <div class="swal-retro-content">
                    <div class="retro-monster-anim">ℹ️</div>
                    <h2 class="retro-score-gain" style="color: #2196f3; animation: none;">INFO</h2>
                    <div class="correct-reveal-box" style="font-size: 1rem; border-color: #2196f3;">
                        ไม่สามารถกดถัดไปได้อีกแล้ว<br>คุณสามารถกดเริ่มใหม่หรือกลับไปทบทวนได้เลย
                    </div>
                </div>
            `,
            timer: 1500,
            showConfirmButton: false,
            customClass: {
                popup: 'retro-swal-popup'
            },
            allowOutsideClick: false
        });
    }
}

// ==========================================
// 📚 ระบบคลังคำศัพท์ (Glossary Logic)
// ==========================================
function renderGlossary() {
    const glossaryGrid = document.getElementById('glossary-grid');
    if (!glossaryGrid) return;
    
    glossaryGrid.innerHTML = "";
    
    if (!currentVocabList || currentVocabList.length === 0) {
        glossaryGrid.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-muted); font-size: 1.1rem; padding: 20px;">กรุณาเลือกหมวดหมู่คำศัพท์จากแถบเมนูด้านซ้ายเพื่อเริ่มต้น</p>`;
        return;
    }
    
    currentVocabList.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'glossary-card fade-in';
        card.setAttribute('data-index', index);
        
        let pinyinHTML = word.pinyin ? `<p class="glossary-pinyin">${word.pinyin}</p>` : '';
        let speakerBtn = word.pinyin ? `
            <button class="glossary-speak-btn" onclick="speakText('${word.hanzi}', event)">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        ` : '';
        let imgHTML = word.image ? `<img class="glossary-thumb" src="${word.image}" alt="${word.meaning}">` : '';
        
        card.innerHTML = `
            ${speakerBtn}
            ${imgHTML}
            <h2 class="glossary-hanzi">${word.hanzi}</h2>
            ${pinyinHTML}
            <p class="glossary-meaning">${word.meaning}</p>
        `;
        glossaryGrid.appendChild(card);
    });
}

function filterGlossary() {
    const query = document.getElementById('glossary-search').value.toLowerCase().trim();
    const clearBtn = document.getElementById('clear-search-btn');
    
    if (query) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
    
    const cards = document.querySelectorAll('.glossary-card');
    let hasResults = false;
    
    cards.forEach(card => {
        const index = parseInt(card.getAttribute('data-index'));
        const word = currentVocabList[index];
        
        const matchHanzi = word.hanzi.toLowerCase().includes(query);
        const matchPinyin = word.pinyin ? word.pinyin.toLowerCase().includes(query) : false;
        const matchMeaning = word.meaning.toLowerCase().includes(query);
        
        if (matchHanzi || matchPinyin || matchMeaning) {
            card.classList.remove('hidden');
            hasResults = true;
        } else {
            card.classList.add('hidden');
        }
    });
    
    // แจ้งเตือนเมื่อไม่พบคำค้นหา
    let noResultsMsg = document.getElementById('glossary-no-results');
    if (!hasResults && query) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('p');
            noResultsMsg.id = 'glossary-no-results';
            noResultsMsg.style.cssText = "grid-column: 1/-1; color: var(--text-muted); font-size: 1.1rem; padding: 20px;";
            noResultsMsg.innerText = "ไม่พบคำศัพท์ที่ค้นหาครับ";
            document.getElementById('glossary-grid').appendChild(noResultsMsg);
        }
    } else {
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

function clearGlossarySearch() {
    document.getElementById('glossary-search').value = "";
    document.getElementById('clear-search-btn').classList.add('hidden');
    
    const cards = document.querySelectorAll('.glossary-card');
    cards.forEach(card => card.classList.remove('hidden'));
    
    const noResultsMsg = document.getElementById('glossary-no-results');
    if (noResultsMsg) noResultsMsg.remove();
}

// ==========================================
// ✍️ ระบบฝึกลำดับขีดและฝึกเขียนภาษาจีน (HanziWriter Logic)
// ==========================================
let strokeWriter = null;
let currentStrokeChar = "";
let strokeWordChars = []; // อาร์เรย์ของตัวอักษรจีนทั้งหมดในคำศัพท์ปัจจุบัน
let strokeCharIndex = 0;   // ดัชนีตัวอักษรที่กำลังเขียน

function openStrokeModal(event) {
    if (event) event.stopPropagation(); // ป้องกันการพลิกการ์ดกลับด้านหลัง
    
    const word = currentVocabList[cardIndex];
    if (!word || !word.hanzi) return;
    
    // ดึงตัวอักษรจีนทั้งหมดในข้อความออกมาเป็นอาร์เรย์
    strokeWordChars = word.hanzi.match(/[\u4e00-\u9fa5]/g) || [];
    if (strokeWordChars.length === 0) {
        Swal.fire({
            html: `
                <div class="swal-retro-content">
                    <div class="retro-monster-anim">⚠️</div>
                    <h2 class="retro-score-fail" style="color: #ff9800;">WARNING</h2>
                    <div class="correct-reveal-box" style="font-size: 1rem; border-color: #ff9800;">
                        คำศัพท์นี้ไม่มีอักษรจีนที่รองรับการลากเส้นเขียนครับ
                    </div>
                </div>
            `,
            confirmButtonText: 'ตกลง',
            customClass: {
                popup: 'retro-swal-popup'
            },
            allowOutsideClick: false
        });
        return;
    }
    
    // เปิดหน้าต่าง Modal
    const modal = document.getElementById('stroke-modal');
    modal.classList.remove('hidden');
    
    strokeCharIndex = 0;
    loadStrokeCharacter(false); // โหลดตัวอักษรแรก (ยังไม่เริ่มเขียนทันที)
}

function loadStrokeCharacter(autoStartQuiz = false) {
    currentStrokeChar = strokeWordChars[strokeCharIndex];
    
    document.getElementById('stroke-hint').innerText = autoStartQuiz 
        ? "กรุณาลากเส้นเขียนตัวอักษรจีนถัดไปตามรอยไกด์ครับ"
        : "กำลังเตรียมกระดานเขียนอักษร...";
    
    // อัปเดตส่วนหัวของ Modal และ Progress Label
    updateStrokeModalHeader();
    
    // ตั้งค่าสีตามธีม
    const isDark = document.body.classList.contains('dark-theme');
    const strokeColor = isDark ? '#ef5350' : '#D32F2F';
    const outlineColor = isDark ? '#3e3e3e' : '#E2E8F0';
    const highlightColor = isDark ? '#FFD54F' : '#FFA000';
    
    document.getElementById('character-target').innerHTML = "";
    strokeWriter = HanziWriter.create('character-target', currentStrokeChar, {
        width: 200,
        height: 200,
        padding: 10,
        strokeColor: strokeColor,
        outlineColor: outlineColor,
        highlightColor: highlightColor,
        showOutline: true,
        strokeAnimationSpeed: 1.2,
        delayBetweenStrokes: 300
    });
    
    if (autoStartQuiz) {
        setTimeout(() => {
            startStrokePractice();
        }, 300);
    } else {
        // เล่นแอนิเมชันให้ดูรอบหนึ่ง
        document.getElementById('stroke-hint').innerText = "กำลังแสดงลำดับการขีดเขียนอักษร...";
        setTimeout(() => {
            animateStroke();
        }, 500);
    }
}

function updateStrokeModalHeader() {
    const header = document.getElementById('stroke-char-display');
    if (!header) return;
    header.innerHTML = "";
    
    const wrapper = document.createElement('span');
    wrapper.className = 'stroke-word-display';
    
    strokeWordChars.forEach((char, idx) => {
        const span = document.createElement('span');
        span.className = `stroke-word-char ${idx === strokeCharIndex ? 'active' : ''}`;
        span.innerText = char;
        wrapper.appendChild(span);
    });
    
    header.appendChild(wrapper);
    
    const progressText = `ตัวอักษรที่ ${strokeCharIndex + 1} / ${strokeWordChars.length}`;
    document.getElementById('stroke-progress-label').innerText = progressText;
}

function closeStrokeModal() {
    const modal = document.getElementById('stroke-modal');
    modal.classList.add('hidden');
    if (strokeWriter) {
        strokeWriter.cancelQuiz();
        strokeWriter = null;
    }
    strokeWordChars = [];
    strokeCharIndex = 0;
}

function closeStrokeModalOnOverlay(event) {
    if (event.target.id === 'stroke-modal') {
        closeStrokeModal();
    }
}

function animateStroke() {
    if (strokeWriter) {
        strokeWriter.cancelQuiz();
        strokeWriter.showCharacter();
        strokeWriter.animateCharacter({
            onComplete: function() {
                document.getElementById('stroke-hint').innerText = "แสดงแอนิเมชันลำดับขีดเสร็จสิ้น คลิก 'เริ่มฝึกเขียน' เพื่อเริ่มฝึกลากตามรอย!";
            }
        });
    }
}

function startStrokePractice() {
    if (strokeWriter) {
        strokeWriter.cancelQuiz();
        strokeWriter.showOutline();
        document.getElementById('stroke-hint').innerText = `✍️ กรุณาใช้เมาส์หรือนิ้วลากวาดเขียนตัวอักษร "${currentStrokeChar}" ตามรอยไกด์`;
        
        strokeWriter.quiz({
            onComplete: function(summary) {
                playQuizSound('correct');
                
                // ตรวจสอบว่าเขียนครบทุกตัวในคำศัพท์หรือยัง
                strokeCharIndex++;
                if (strokeCharIndex < strokeWordChars.length) {
                    // แสดงคะแนนลอยเด้งฉลองผ่านตัวอักษรตัวที่แล้ว
                    const targetElem = document.getElementById('character-target');
                    if (targetElem) {
                         const rect = targetElem.getBoundingClientRect();
                         const x = rect.left + rect.width / 2 + window.scrollX - 45;
                         const y = rect.top + window.scrollY - 15;
                         spawnFloatingText('GREAT! 🪙', true, x, y);
                    }
                    
                    // โหลดตัวถัดไป
                    loadStrokeCharacter(true);
                } else {
                    // เขียนครบถ้วน: ปิด modal ก่อน แล้วค่อยแสดง popup สั้นๆ
                    const fullWord = strokeWordChars.join("");
                    closeStrokeModal();
                    setTimeout(() => {
                        Swal.fire({
                            html: `
                                <div class="swal-retro-content">
                                    <div class="retro-coin-anim">🎉</div>
                                    <h2 class="retro-score-gain" style="color: #ffb300; animation: none;">EXCELLENT!</h2>
                                    <div class="correct-reveal-box" style="font-size: 1.05rem; border-color: #ffb300; max-width: 100%;">
                                        คุณวาดเขียนคำว่า "${fullWord}" <br>ถูกต้องครบถ้วนสมบูรณ์แล้วครับ!
                                    </div>
                                </div>
                            `,
                            timer: 1800,
                            showConfirmButton: false,
                            customClass: {
                                popup: 'retro-swal-popup'
                            },
                            allowOutsideClick: true
                        });
                    }, 150);
                }
            }
        });
    }
}

function resetStrokeWriter() {
    if (strokeWriter) {
        strokeWriter.cancelQuiz();
        strokeWriter.showCharacter();
        strokeWriter.showOutline();
        document.getElementById('stroke-hint').innerText = "รีเซ็ตกระดานเรียบร้อยแล้ว กดเลือกคำสั่งด้านบนได้เลยครับ";
    }
}

// ==========================================
// 🔄 สลับโหมดการเรียน (สลับหน้าและควบคุมเวลา)
// ==========================================
function switchMode(mode) {
    document.getElementById('btn-flashcard').classList.toggle('active', mode === 'flashcard');
    document.getElementById('btn-quiz').classList.toggle('active', mode === 'quiz');
    document.getElementById('btn-glossary').classList.toggle('active', mode === 'glossary');
    document.getElementById('btn-match').classList.toggle('active', mode === 'match');
    
    // เคลียร์/หยุดเวลาควิซหากไม่ได้อยู่ในหน้าควิซ
    if (mode !== 'quiz') {
        stopQuizTimer();
    }
    
    // เคลียร์/หยุดเวลาเกมจับคู่หากไม่ได้อยู่ในหน้าเกมจับคู่
    if (mode !== 'match') {
        stopMatchTimer();
    }
    
    // ซ่อนทุกหน้าพื้นที่ทำงาน
    document.getElementById('flashcard-area').classList.add('hidden');
    document.getElementById('quiz-area').classList.add('hidden');
    document.getElementById('glossary-area').classList.add('hidden');
    document.getElementById('match-area').classList.add('hidden');
    
    if (mode === 'flashcard') {
        document.getElementById('flashcard-area').classList.remove('hidden');
    } else if (mode === 'quiz') {
        document.getElementById('quiz-area').classList.remove('hidden');
        // หากเล่นควิซค้างอยู่และต้องการนับเวลาต่อ
        if (quizQuestions.length > 0 && currentQuizIndex < quizQuestions.length) {
            startQuizTimer();
        }
    } else if (mode === 'glossary') {
        document.getElementById('glossary-area').classList.remove('hidden');
        renderGlossary();
        clearGlossarySearch();
    } else if (mode === 'match') {
        document.getElementById('match-area').classList.remove('hidden');
        initMatchGame();
    }
}

// ==========================================
// 🧩 ระบบตรรกะเกมจับคู่การ์ดความจำ (Memory Card Match Game Logic)
// ==========================================
function initMatchGame() {
    stopMatchTimer();
    const grid = document.getElementById('match-grid');
    if (!grid) return;
    grid.innerHTML = "";
    
    // รีเซ็ตสเตตัสเกม
    matchMoves = 0;
    matchTimeElapsed = 0;
    matchPairsMatched = 0;
    firstFlippedCard = null;
    secondFlippedCard = null;
    isMatchGridLocked = false;
    isMatchGameActive = false;
    
    document.getElementById('match-moves').innerText = "00";
    document.getElementById('match-timer').innerText = "00";

    if (!currentVocabList || currentVocabList.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px 10px; color: var(--text-muted);">
                <p style="font-size: 1.15rem; font-weight: bold; margin-bottom: 20px;">กรุณาเลือกหมวดหมู่คำศัพท์จากแถบเมนูด้านซ้ายเพื่อเริ่มต้นเล่นเกมจับคู่ครับ</p>
                <i class="fa-solid fa-shapes" style="font-size: 4rem; opacity: 0.3; animation: float-logo 2s ease-in-out infinite alternate;"></i>
            </div>
        `;
        document.getElementById('restart-match-btn').classList.add('hidden');
        return;
    }
    
    document.getElementById('restart-match-btn').classList.remove('hidden');
    
    // สุ่มดึงคำศัพท์มา 6 คำจากหมวดหมู่ปัจจุบัน
    const itemsCount = Math.min(6, currentVocabList.length);
    const shuffledVocab = [...currentVocabList].sort(() => 0.5 - Math.random());
    const selectedVocab = shuffledVocab.slice(0, itemsCount);
    
    // สร้างข้อมูลการ์ดคู่ (1 ใบแสดง Hanzi, 1 ใบแสดงรูปภาพหรือความหมายไทย)
    const cardsData = [];
    selectedVocab.forEach((word, index) => {
        // ใบที่ 1: ตัวอักษรจีน (Hanzi)
        cardsData.push({
            id: index,
            type: 'hanzi',
            content: word.hanzi
        });
        
        // ใบที่ 2: รูปภาพ (ถ้ามี) หรือคำแปลภาษาไทย
        if (word.image) {
            cardsData.push({
                id: index,
                type: 'image',
                content: word.image
            });
        } else {
            cardsData.push({
                id: index,
                type: 'meaning',
                content: word.meaning
            });
        }
    });
    
    // สับไพ่ทั้งหมด
    cardsData.sort(() => 0.5 - Math.random());
    
    // วาดการ์ดลงใน Grid
    cardsData.forEach(card => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'match-card';
        
        // สร้างโครงสร้างการ์ด 3D Flip
        cardContainer.innerHTML = `
            <div class="match-card-inner">
                <div class="match-card-back">⭐</div>
                <div class="match-card-front">
                    ${card.type === 'image' 
                        ? `<img class="match-card-img" src="${card.content}" alt="animal">` 
                        : `<span class="match-card-text ${card.type === 'hanzi' ? 'hanzi-char' : ''}">${card.content}</span>`
                    }
                </div>
            </div>
        `;
        
        cardContainer.onclick = () => {
            flipMatchCard(cardContainer, card);
        };
        
        grid.appendChild(cardContainer);
    });
}

function flipMatchCard(cardElement, cardData) {
    // ป้องกันการกดหากล็อกตารางอยู่, การ์ดใบนี้ถูกเปิดอยู่แล้ว หรือถูกจับคู่ไปแล้ว
    if (isMatchGridLocked) return;
    if (cardElement.classList.contains('flipped') || cardElement.classList.contains('matched')) return;
    
    // เริ่มจับเวลาในการเปิดการ์ดใบแรก
    if (!isMatchGameActive) {
        isMatchGameActive = true;
        startMatchGameTimer();
    }
    
    // พลิกการ์ด
    cardElement.classList.add('flipped');
    
    if (!firstFlippedCard) {
        // เก็บการ์ดใบแรกไว้
        firstFlippedCard = { element: cardElement, data: cardData };
    } else {
        // เก็บการ์ดใบที่สอง และทำการตรวจเช็คผลลัพธ์
        secondFlippedCard = { element: cardElement, data: cardData };
        matchMoves++;
        document.getElementById('match-moves').innerText = String(matchMoves).padStart(2, '0');
        
        isMatchGridLocked = true; // ล็อกตารางชั่วคราว
        
        if (firstFlippedCard.data.id === secondFlippedCard.data.id) {
            // จับคู่ถูกต้อง!
            setTimeout(() => {
                firstFlippedCard.element.classList.add('matched');
                secondFlippedCard.element.classList.add('matched');
                
                // สปอว์นคะแนนเด้งลอยขึ้นมาเหนือการ์ดใบที่สอง
                const rect = secondFlippedCard.element.getBoundingClientRect();
                const x = rect.left + rect.width / 2 + window.scrollX - 45;
                const y = rect.top + window.scrollY - 15;
                spawnFloatingText('MATCH! 🪙', true, x, y);
                
                playQuizSound('correct');
                
                // รีเซ็ตการเปิดการ์ดคู่ถัดไป
                firstFlippedCard = null;
                secondFlippedCard = null;
                isMatchGridLocked = false;
                
                // เพิ่มแต้มจับคู่สำเร็จ
                matchPairsMatched++;
                const totalPairsNeeded = Math.min(6, currentVocabList.length);
                
                if (matchPairsMatched === totalPairsNeeded) {
                    endMatchGame();
                }
            }, 300);
            
        } else {
            // จับคู่ผิด! พลิกกลับหลังจากหน่วงเวลาสั้นๆ
            playQuizSound('wrong');
            setTimeout(() => {
                firstFlippedCard.element.classList.remove('flipped');
                secondFlippedCard.element.classList.remove('flipped');
                
                firstFlippedCard = null;
                secondFlippedCard = null;
                isMatchGridLocked = false;
            }, 800);
        }
    }
}

function startMatchGameTimer() {
    if (matchTimerInterval) clearInterval(matchTimerInterval);
    matchTimeElapsed = 0;
    
    matchTimerInterval = setInterval(() => {
        matchTimeElapsed++;
        document.getElementById('match-timer').innerText = String(matchTimeElapsed).padStart(2, '0');
    }, 1000);
}

function stopMatchTimer() {
    if (matchTimerInterval) {
        clearInterval(matchTimerInterval);
        matchTimerInterval = null;
    }
}

function endMatchGame() {
    stopMatchTimer();
    
    // เล่นเสียงระดับเคลียร์ด่านย้อนยุคดนตรี
    playQuizSound('correct');
    
    let msg = `คุณจับคู่การ์ดเสร็จสิ้นโดยใช้เวลาไปทั้งหมด <span>${matchTimeElapsed}</span> วินาที <br>และกดพลิกการ์ดไปทั้งหมด <span>${matchMoves}</span> ครั้งงับ! 🏆`;
    
    Swal.fire({
        html: `
            <div class="swal-retro-content">
                <div class="retro-coin-anim" style="font-size: 4rem;">🏆</div>
                <h2 class="retro-score-gain" style="color: #ffb300; animation: none;">STAGE CLEAR!</h2>
                <div class="correct-reveal-box" style="background-color: #fff9e6; border-color: #ffb300; max-width: 100%;">
                    ${msg}
                </div>
            </div>
        `,
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#000000',
        backdrop: `rgba(0,0,0,0.4)`,
        customClass: {
            popup: 'retro-swal-popup'
        },
        allowOutsideClick: false
    });
}

function restartMatchGame() {
    initMatchGame();
}