/**
 * Base de Datos de Verbos (154 verbos)
 */
const verbosData = [
  // 🟢 Muy Comunes (67)
  { verbo: "be", pasado: "was/were", participio: "been", significado: "ser / estar", categoria: "comun" },
  { verbo: "have", pasado: "had", participio: "had", significado: "tener / haber", categoria: "comun" },
  { verbo: "do", pasado: "did", participio: "done", significado: "hacer", categoria: "comun" },
  { verbo: "say", pasado: "said", participio: "said", significado: "decir", categoria: "comun" },
  { verbo: "go", pasado: "went", participio: "gone", significado: "ir", categoria: "comun" },
  { verbo: "get", pasado: "got", participio: "got/gotten", significado: "obtener / conseguir", categoria: "comun" },
  { verbo: "make", pasado: "made", participio: "made", significado: "hacer / fabricar", categoria: "comun" },
  { verbo: "know", pasado: "knew", participio: "known", significado: "saber / conocer", categoria: "comun" },
  { verbo: "think", pasado: "thought", participio: "thought", significado: "pensar", categoria: "comun" },
  { verbo: "take", pasado: "took", participio: "taken", significado: "tomar / llevar", categoria: "comun" },
  { verbo: "see", pasado: "saw", participio: "seen", significado: "ver", categoria: "comun" },
  { verbo: "come", pasado: "came", participio: "come", significado: "venir", categoria: "comun" },
  { verbo: "find", pasado: "found", participio: "found", significado: "encontrar", categoria: "comun" },
  { verbo: "give", pasado: "gave", participio: "given", significado: "dar", categoria: "comun" },
  { verbo: "tell", pasado: "told", participio: "told", significado: "decir / contar", categoria: "comun" },
  { verbo: "feel", pasado: "felt", participio: "felt", significado: "sentir", categoria: "comun" },
  { verbo: "become", pasado: "became", participio: "become", significado: "convertirse en", categoria: "comun" },
  { verbo: "leave", pasado: "left", participio: "left", significado: "dejar / salir", categoria: "comun" },
  { verbo: "put", pasado: "put", participio: "put", significado: "poner", categoria: "comun" },
  { verbo: "bring", pasado: "brought", participio: "brought", significado: "traer", categoria: "comun" },
  { verbo: "begin", pasado: "began", participio: "begun", significado: "comenzar", categoria: "comun" },
  { verbo: "keep", pasado: "kept", participio: "kept", significado: "mantener / guardar", categoria: "comun" },
  { verbo: "hold", pasado: "held", participio: "held", significado: "sostener", categoria: "comun" },
  { verbo: "write", pasado: "wrote", participio: "written", significado: "escribir", categoria: "comun" },
  { verbo: "stand", pasado: "stood", participio: "stood", significado: "estar de pie", categoria: "comun" },
  { verbo: "hear", pasado: "heard", participio: "heard", significado: "oír", categoria: "comun" },
  { verbo: "let", pasado: "let", participio: "let", significado: "dejar / permitir", categoria: "comun" },
  { verbo: "mean", pasado: "meant", participio: "meant", significado: "significar", categoria: "comun" },
  { verbo: "set", pasado: "set", participio: "set", significado: "poner / establecer", categoria: "comun" },
  { verbo: "meet", pasado: "met", participio: "met", significado: "conocer / reunirse", categoria: "comun" },
  { verbo: "run", pasado: "ran", participio: "run", significado: "correr", categoria: "comun" },
  { verbo: "pay", pasado: "paid", participio: "paid", significado: "pagar", categoria: "comun" },
  { verbo: "sit", pasado: "sat", participio: "sat", significado: "sentarse", categoria: "comun" },
  { verbo: "speak", pasado: "spoke", participio: "spoken", significado: "hablar", categoria: "comun" },
  { verbo: "read", pasado: "read", participio: "read", significado: "leer", categoria: "comun" },
  { verbo: "grow", pasado: "grew", participio: "grown", significado: "crecer", categoria: "comun" },
  { verbo: "lose", pasado: "lost", participio: "lost", significado: "perder", categoria: "comun" },
  { verbo: "fall", pasado: "fell", participio: "fallen", significado: "caer", categoria: "comun" },
  { verbo: "send", pasado: "sent", participio: "sent", significado: "enviar", categoria: "comun" },
  { verbo: "build", pasado: "built", participio: "built", significado: "construir", categoria: "comun" },
  { verbo: "understand", pasado: "understood", participio: "understood", significado: "entender", categoria: "comun" },
  { verbo: "draw", pasado: "drew", participio: "drawn", significado: "dibujar", categoria: "comun" },
  { verbo: "break", pasado: "broke", participio: "broken", significado: "romper", categoria: "comun" },
  { verbo: "spend", pasado: "spent", participio: "spent", significado: "gastar / pasar tiempo", categoria: "comun" },
  { verbo: "cut", pasado: "cut", participio: "cut", significado: "cortar", categoria: "comun" },
  { verbo: "rise", pasado: "rose", participio: "risen", significado: "subir / elevarse", categoria: "comun" },
  { verbo: "drive", pasado: "drove", participio: "driven", significado: "conducir", categoria: "comun" },
  { verbo: "buy", pasado: "bought", participio: "bought", significado: "comprar", categoria: "comun" },
  { verbo: "wear", pasado: "wore", participio: "worn", significado: "llevar puesto", categoria: "comun" },
  { verbo: "choose", pasado: "chose", participio: "chosen", significado: "elegir", categoria: "comun" },
  { verbo: "eat", pasado: "ate", participio: "eaten", significado: "comer", categoria: "comun" },
  { verbo: "drink", pasado: "drank", participio: "drunk", significado: "beber", categoria: "comun" },
  { verbo: "sleep", pasado: "slept", participio: "slept", significado: "dormir", categoria: "comun" },
  { verbo: "wake", pasado: "woke", participio: "woken", significado: "despertar(se)", categoria: "comun" },
  { verbo: "win", pasado: "won", participio: "won", significado: "ganar", categoria: "comun" },
  { verbo: "teach", pasado: "taught", participio: "taught", significado: "enseñar", categoria: "comun" },
  { verbo: "sell", pasado: "sold", participio: "sold", significado: "vender", categoria: "comun" },
  { verbo: "catch", pasado: "caught", participio: "caught", significado: "atrapar", categoria: "comun" },
  { verbo: "fight", pasado: "fought", participio: "fought", significado: "luchar / pelear", categoria: "comun" },
  { verbo: "forget", pasado: "forgot", participio: "forgotten", significado: "olvidar", categoria: "comun" },
  { verbo: "forgive", pasado: "forgave", participio: "forgiven", significado: "perdonar", categoria: "comun" },
  { verbo: "fly", pasado: "flew", participio: "flown", significado: "volar", categoria: "comun" },
  { verbo: "steal", pasado: "stole", participio: "stolen", significado: "robar", categoria: "comun" },
  { verbo: "throw", pasado: "threw", participio: "thrown", significado: "lanzar", categoria: "comun" },
  { verbo: "hit", pasado: "hit", participio: "hit", significado: "golpear", categoria: "comun" },
  { verbo: "hurt", pasado: "hurt", participio: "hurt", significado: "herir / doler", categoria: "comun" },
  { verbo: "cost", pasado: "cost", participio: "cost", significado: "costar", categoria: "comun" },
  { verbo: "shut", pasado: "shut", participio: "shut", significado: "cerrar", categoria: "comun" },
  { verbo: "deal", pasado: "dealt", participio: "dealt", significado: "tratar / repartir", categoria: "comun" },
  { verbo: "lead", pasado: "led", participio: "led", significado: "liderar / guiar", categoria: "comun" },
  { verbo: "lend", pasado: "lent", participio: "lent", significado: "prestar", categoria: "comun" },

  // 🟡 Intermedio (48)
  { verbo: "bite", pasado: "bit", participio: "bitten", significado: "morder", categoria: "intermedio" },
  { verbo: "blow", pasado: "blew", participio: "blown", significado: "soplar", categoria: "intermedio" },
  { verbo: "burn", pasado: "burned/burnt", participio: "burned/burnt", significado: "quemar", categoria: "intermedio" },
  { verbo: "bend", pasado: "bent", participio: "bent", significado: "doblar", categoria: "intermedio" },
  { verbo: "bet", pasado: "bet", participio: "bet", significado: "apostar", categoria: "intermedio" },
  { verbo: "breed", pasado: "bred", participio: "bred", significado: "criar", categoria: "intermedio" },
  { verbo: "dig", pasado: "dug", participio: "dug", significado: "cavar", categoria: "intermedio" },
  { verbo: "feed", pasado: "fed", participio: "fed", significado: "alimentar", categoria: "intermedio" },
  { verbo: "hang", pasado: "hung", participio: "hung", significado: "colgar", categoria: "intermedio" },
  { verbo: "hide", pasado: "hid", participio: "hidden", significado: "esconder", categoria: "intermedio" },
  { verbo: "lay", pasado: "laid", participio: "laid", significado: "poner / colocar", categoria: "intermedio" },
  { verbo: "lie", pasado: "lay", participio: "lain", significado: "estar acostado", categoria: "intermedio" },
  { verbo: "light", pasado: "lit/lighted", participio: "lit/lighted", significado: "encender", categoria: "intermedio" },
  { verbo: "shake", pasado: "shook", participio: "shaken", significado: "sacudir", categoria: "intermedio" },
  { verbo: "shine", pasado: "shone/shined", participio: "shone/shined", significado: "brillar", categoria: "intermedio" },
  { verbo: "shoot", pasado: "shot", participio: "shot", significado: "disparar", categoria: "intermedio" },
  { verbo: "show", pasado: "showed", participio: "shown/showed", significado: "mostrar", categoria: "intermedio" },
  { verbo: "sing", pasado: "sang", participio: "sung", significado: "cantar", categoria: "intermedio" },
  { verbo: "sink", pasado: "sank", participio: "sunk", significado: "hundirse", categoria: "intermedio" },
  { verbo: "smell", pasado: "smelled/smelt", participio: "smelled/smelt", significado: "oler", categoria: "intermedio" },
  { verbo: "spell", pasado: "spelled/spelt", participio: "spelled/spelt", significado: "deletrear", categoria: "intermedio" },
  { verbo: "spill", pasado: "spilled/spilt", participio: "spilled/spilt", significado: "derramar", categoria: "intermedio" },
  { verbo: "spit", pasado: "spat/spit", participio: "spat/spit", significado: "escupir", categoria: "intermedio" },
  { verbo: "spread", pasado: "spread", participio: "spread", significado: "extender", categoria: "intermedio" },
  { verbo: "stick", pasado: "stuck", participio: "stuck", significado: "pegar / atascar", categoria: "intermedio" },
  { verbo: "strike", pasado: "struck", participio: "struck/stricken", significado: "golpear", categoria: "intermedio" },
  { verbo: "swear", pasado: "swore", participio: "sworn", significado: "jurar", categoria: "intermedio" },
  { verbo: "sweep", pasado: "swept", participio: "swept", significado: "barrer", categoria: "intermedio" },
  { verbo: "swim", pasado: "swam", participio: "swum", significado: "nadar", categoria: "intermedio" },
  { verbo: "tear", pasado: "tore", participio: "torn", significado: "rasgar", categoria: "intermedio" },
  { verbo: "weep", pasado: "wept", participio: "wept", significado: "llorar", categoria: "intermedio" },
  { verbo: "withdraw", pasado: "withdrew", participio: "withdrawn", significado: "retirar", categoria: "intermedio" },
  { verbo: "dream", pasado: "dreamed/dreamt", participio: "dreamed/dreamt", significado: "soñar", categoria: "intermedio" },
  { verbo: "learn", pasado: "learned/learnt", participio: "learned/learnt", significado: "aprender", categoria: "intermedio" },
  { verbo: "lean", pasado: "leaned/leapt", participio: "leaned/leapt", significado: "inclinarse", categoria: "intermedio" },
  { verbo: "leap", pasado: "leaped/leapt", participio: "leaped/leapt", significado: "saltar", categoria: "intermedio" },
  { verbo: "prove", pasado: "proved", participio: "proven/proved", significado: "demostrar", categoria: "intermedio" },
  { verbo: "quit", pasado: "quit", participio: "quit", significado: "abandonar / dejar", categoria: "intermedio" },
  { verbo: "seek", pasado: "sought", participio: "sought", significado: "buscar", categoria: "intermedio" },
  { verbo: "slide", pasado: "slid", participio: "slid", significado: "deslizarse", categoria: "intermedio" },
  { verbo: "split", pasado: "split", participio: "split", significado: "dividir", categoria: "intermedio" },
  { verbo: "sting", pasado: "stung", participio: "stung", significado: "picar", categoria: "intermedio" },
  { verbo: "swing", pasado: "swung", participio: "swung", significado: "balancear(se)", categoria: "intermedio" },
  { verbo: "wind", pasado: "wound", participio: "wound", significado: "enrollar", categoria: "intermedio" },
  { verbo: "arise", pasado: "arose", participio: "arisen", significado: "surgir", categoria: "intermedio" },
  { verbo: "awake", pasado: "awoke", participio: "awoken", significado: "despertar(se)", categoria: "intermedio" },
  { verbo: "bear", pasado: "bore", participio: "borne/born", significado: "soportar / dar a luz", categoria: "intermedio" },
  { verbo: "beat", pasado: "beat", participio: "beaten", significado: "golpear / vencer", categoria: "intermedio" },
  { verbo: "bind", pasado: "bound", participio: "bound", significado: "atar", categoria: "intermedio" },
  { verbo: "cling", pasado: "clung", participio: "clung", significado: "aferrarse", categoria: "intermedio" },
  { verbo: "creep", pasado: "crept", participio: "crept", significado: "arrastrarse", categoria: "intermedio" },
  { verbo: "flee", pasado: "fled", participio: "fled", significado: "huir", categoria: "intermedio" },
  { verbo: "forbid", pasado: "forbade", participio: "forbidden", significado: "prohibir", categoria: "intermedio" },
  { verbo: "freeze", pasado: "froze", participio: "frozen", significado: "congelar", categoria: "intermedio" },
  { verbo: "grind", pasado: "ground", participio: "ground", significado: "moler", categoria: "intermedio" },
  { verbo: "kneel", pasado: "knelt/kneeled", participio: "knelt/kneeled", significado: "arrodillarse", categoria: "intermedio" },
  { verbo: "mistake", pasado: "mistook", participio: "mistaken", significado: "confundir / equivocarse", categoria: "intermedio" },
  { verbo: "overcome", pasado: "overcame", participio: "overcome", significado: "superar", categoria: "intermedio" },
  { verbo: "overdo", pasado: "overdid", participio: "overdone", significado: "exagerar", categoria: "intermedio" },
  { verbo: "overhear", pasado: "overheard", participio: "overheard", significado: "escuchar accidentalmente", categoria: "intermedio" },
  { verbo: "redo", pasado: "redid", participio: "redone", significado: "rehacer", categoria: "intermedio" },
  { verbo: "undergo", pasado: "underwent", participio: "undergone", significado: "experimentar / someterse a", categoria: "intermedio" },
  { verbo: "undertake", pasado: "undertook", participio: "undertaken", significado: "emprender / asumir", categoria: "intermedio" },
  { verbo: "upset", pasado: "upset", participio: "upset", significado: "molestar / alterar", categoria: "intermedio" },
  { verbo: "weave", pasado: "wove", participio: "woven", significado: "tejer", categoria: "intermedio" },

  // 🔴 Menos Comunes (39)
  { verbo: "abide", pasado: "abode/abided", participio: "abode/abided", significado: "soportar / permanecer", categoria: "pocoComun" },
  { verbo: "behold", pasado: "beheld", participio: "beheld", significado: "contemplar", categoria: "pocoComun" },
  { verbo: "beset", pasado: "beset", participio: "beset", significado: "acosar / asediar", categoria: "pocoComun" },
  { verbo: "bid", pasado: "bid/bade", participio: "bid/bidden", significado: "pujar / ordenar", categoria: "pocoComun" },
  { verbo: "cast", pasado: "cast", participio: "cast", significado: "lanzar / arrojar", categoria: "pocoComun" },
  { verbo: "dwell", pasado: "dwelt/dwelled", participio: "dwelt/dwelled", significado: "habitar", categoria: "pocoComun" },
  { verbo: "foresee", pasado: "foresaw", participio: "foreseen", significado: "prever", categoria: "pocoComun" },
  { verbo: "foretell", pasado: "foretold", participio: "foretold", significado: "predecir", categoria: "pocoComun" },
  { verbo: "forsake", pasado: "forsook", participio: "forsaken", significado: "abandonar", categoria: "pocoComun" },
  { verbo: "hew", pasado: "hewed", participio: "hewn/hewed", significado: "cortar / tallar", categoria: "pocoComun" },
  { verbo: "mislead", pasado: "misled", participio: "misled", significado: "engañar / inducir a error", categoria: "pocoComun" },
  { verbo: "offset", pasado: "offset", participio: "offset", significado: "compensar", categoria: "pocoComun" },
  { verbo: "partake", pasado: "partook", participio: "partaken", significado: "participar", categoria: "pocoComun" },
  { verbo: "plead", pasado: "pleaded/pled", participio: "pleaded/pled", significado: "alegar / suplicar", categoria: "pocoComun" },
  { verbo: "preset", pasado: "preset", participio: "preset", significado: "preestablecer", categoria: "pocoComun" },
  { verbo: "rebuild", pasado: "rebuilt", participio: "rebuilt", significado: "reconstruir", categoria: "pocoComun" },
  { verbo: "recast", pasado: "recast", participio: "recast", significado: "reformular", categoria: "pocoComun" },
  { verbo: "rid", pasado: "rid", participio: "rid", significado: "librar / deshacerse de", categoria: "pocoComun" },
  { verbo: "saw", pasado: "sawed", participio: "sawn/sawed", significado: "serrar", categoria: "pocoComun" },
  { verbo: "shave", pasado: "shaved", participio: "shaven/shaved", significado: "afeitar", categoria: "pocoComun" },
  { verbo: "shear", pasado: "sheared", participio: "shorn/sheared", significado: "esquilar / cortar", categoria: "pocoComun" },
  { verbo: "shed", pasado: "shed", participio: "shed", significado: "derramar / desprender", categoria: "pocoComun" },
  { verbo: "shoe", pasado: "shod/shoed", participio: "shod/shoed", significado: "herrar", categoria: "pocoComun" },
  { verbo: "slay", pasado: "slew", participio: "slain", significado: "matar", categoria: "pocoComun" },
  { verbo: "slink", pasado: "slunk", participio: "slunk", significado: "escabullirse", categoria: "pocoComun" },
  { verbo: "slit", pasado: "slit", participio: "slit", significado: "cortar / rajar", categoria: "pocoComun" },
  { verbo: "sow", pasado: "sowed", participio: "sown/sowed", significado: "sembrar", categoria: "pocoComun" },
  { verbo: "spring", pasado: "sprang/sprung", participio: "sprung", significado: "saltar / brotar", categoria: "pocoComun" },
  { verbo: "stink", pasado: "stank/stunk", participio: "stunk", significado: "apestar", categoria: "pocoComun" },
  { verbo: "stride", pasado: "strode", participio: "stridden", significado: "caminar a grandes pasos", categoria: "pocoComun" },
  { verbo: "strive", pasado: "strove/strived", participio: "striven/strived", significado: "esforzarse", categoria: "pocoComun" },
  { verbo: "thrust", pasado: "thrust", participio: "thrust", significado: "empujar / introducir", categoria: "pocoComun" },
  { verbo: "tread", pasado: "trod", participio: "trodden/trod", significado: "pisar", categoria: "pocoComun" },
  { verbo: "underlie", pasado: "underlay", participio: "underlain", significado: "subyacer", categoria: "pocoComun" },
  { verbo: "uphold", pasado: "upheld", participio: "upheld", significado: "mantener / defender", categoria: "pocoComun" },
  { verbo: "withstand", pasado: "withstood", participio: "withstood", significado: "resistir", categoria: "pocoComun" },
  { verbo: "wring", pasado: "wrung", participio: "wrung", significado: "retorcer", categoria: "pocoComun" },
  { verbo: "befall", pasado: "befell", participio: "befallen", significado: "suceder", categoria: "pocoComun" },
  { verbo: "beget", pasado: "begot", participio: "begotten", significado: "engendrar", categoria: "pocoComun" },
  { verbo: "beseech", pasado: "besought", participio: "besought", significado: "suplicar", categoria: "pocoComun" },
  { verbo: "bespeak", pasado: "bespoke", participio: "bespoken", significado: "indicar / encargar", categoria: "pocoComun" },
  { verbo: "broadcast", pasado: "broadcast", participio: "broadcast", significado: "transmitir", categoria: "pocoComun" },
  { verbo: "browbeat", pasado: "browbeat", participio: "browbeaten", significado: "intimidar", categoria: "pocoComun" },
  { verbo: "forecast", pasado: "forecast", participio: "forecast", significado: "pronosticar", categoria: "pocoComun" },
  { verbo: "gainsay", pasado: "gainsaid", participio: "gainsaid", significado: "contradecir", categoria: "pocoComun" },
  { verbo: "handwrite", pasado: "handwrote", participio: "handwritten", significado: "escribir a mano", categoria: "pocoComun" },
  { verbo: "inlay", pasado: "inlaid", participio: "inlaid", significado: "incrustar", categoria: "pocoComun" },
  { verbo: "interweave", pasado: "interwove", participio: "interwoven", significado: "entretejer", categoria: "pocoComun" },
  { verbo: "miscast", pasado: "miscast", participio: "miscast", significado: "elegir mal para un papel", categoria: "pocoComun" },
  { verbo: "mishear", pasado: "misheard", participio: "misheard", significado: "oír mal", categoria: "pocoComun" },
  { verbo: "mislay", pasado: "mislaid", participio: "mislaid", significado: "extraviar", categoria: "pocoComun" },
  { verbo: "misread", pasado: "misread", participio: "misread", significado: "leer mal", categoria: "pocoComun" },
  { verbo: "outdo", pasado: "outdid", participio: "outdone", significado: "superar", categoria: "pocoComun" },
  { verbo: "outgrow", pasado: "outgrew", participio: "outgrown", significado: "superar al crecer", categoria: "pocoComun" },
  { verbo: "outrun", pasado: "outran", participio: "outrun", significado: "correr más rápido que", categoria: "pocoComun" },
  { verbo: "overeat", pasado: "overate", participio: "overeaten", significado: "comer demasiado", categoria: "pocoComun" },
  { verbo: "oversleep", pasado: "overslept", participio: "overslept", significado: "quedarse dormido", categoria: "pocoComun" },
  { verbo: "proofread", pasado: "proofread", participio: "proofread", significado: "corregir / revisar", categoria: "pocoComun" },
  { verbo: "relearn", pasado: "relearned/relearnt", participio: "relearned/relearnt", significado: "volver a aprender", categoria: "pocoComun" },
  { verbo: "shrink", pasado: "shrank/shrunk", participio: "shrunk/shrunken", significado: "encogerse", categoria: "pocoComun" },
  { verbo: "sling", pasado: "slung", participio: "slung", significado: "lanzar / colgar", categoria: "pocoComun" },
  { verbo: "spoil", pasado: "spoiled/spoilt", participio: "spoiled/spoilt", significado: "estropear / mimar", categoria: "pocoComun" },
  { verbo: "sublet", pasado: "sublet", participio: "sublet", significado: "subarrendar", categoria: "pocoComun" },
  { verbo: "unwind", pasado: "unwound", participio: "unwound", significado: "desenrollar / relajarse", categoria: "pocoComun" },
  { verbo: "waylay", pasado: "waylaid", participio: "waylaid", significado: "emboscar", categoria: "pocoComun" },
  { verbo: "wed", pasado: "wed/wedded", participio: "wed/wedded", significado: "casarse", categoria: "pocoComun" },
  { verbo: "withhold", pasado: "withheld", participio: "withheld", significado: "retener", categoria: "pocoComun" }
];

// Variables de estado global
let currentSection = "todos"; // "todos", "comun", "intermedio", "pocoComun", "quiz"
let filteredVerbs = [];
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizScore = 0;

// Referencias del DOM
const navLinks = id("navLinks");
const secCards = id("sec-cards");
const secQuiz = id("sec-quiz");
const cardsGrid = id("cardsGrid");
const searchInput = id("searchInput");
const clearSearchBtn = id("clearSearchBtn");
const statsCounter = id("statsCounter");

// Referencias del DOM para Quiz
const quizStartCard = id("quizStartCard");
const quizActiveCard = id("quizActiveCard");
const quizResultsCard = id("quizResultsCard");
const startQuizBtn = id("startQuizBtn");
const restartQuizBtn = id("restartQuizBtn");
const nextQuestionBtn = id("nextQuestionBtn");
const quizQuestionCount = id("quizQuestionCount");
const quizScoreText = id("quizScoreText");
const quizProgressBar = id("quizProgressBar");
const quizPrompt = id("quizPrompt");
const quizTargetWord = id("quizTargetWord");
const quizOptionsGrid = id("quizOptionsGrid");
const quizFeedback = id("quizFeedback");

function id(e) { return document.getElementById(e); }

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupSearch();
  setupQuizEvents();
  renderCards();
});

// Configurar la navegación principal
function setupNavigation() {
  navLinks.addEventListener("click", (e) => {
    if (!e.target.classList.contains("nav-btn")) return;

    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");

    currentSection = e.target.getAttribute("data-sec");

    if (currentSection === "quiz") {
      secCards.classList.remove("active");
      secQuiz.classList.add("active");
    } else {
      secQuiz.classList.remove("active");
      secCards.classList.add("active");
      renderCards();
    }
  });
}

// Generación de oraciones dinámicas
function getEjemploPasado(item) {
  return `I ${item.pasado.split('/')[0]} yesterday.`;
}

function getEjemploPasadoES(item) {
  return `Yo ${item.significado.split('/')[0].trim()} ayer.`;
}

function getEjemploParticipio(item) {
  return `They have ${item.participio.split('/')[0]} modern tools.`;
}

function getEjemploParticipioES(item) {
  return `Ellos han ${item.significado.split('/')[0].trim()} herramientas modernas.`;
}

// Filtrar verbos según la sección activa y búsqueda
function getFilteredVerbs() {
  let list = [...verbosData];

  if (currentSection === "todos") {
    list.sort((a, b) => a.verbo.localeCompare(b.verbo));
  } else if (currentSection === "comun" || currentSection === "intermedio" || currentSection === "pocoComun") {
    list = list.filter(v => v.categoria === currentSection);
  }

  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    list = list.filter(v => 
      v.verbo.toLowerCase().includes(query) || 
      v.significado.toLowerCase().includes(query) ||
      v.pasado.toLowerCase().includes(query)
    );
  }

  return list;
}

// Renderizar Cuadrícula de Tarjetas
function renderCards() {
  filteredVerbs = getFilteredVerbs();
  cardsGrid.innerHTML = "";

  const categoryLabels = {
    comun: "🟢 Muy común",
    intermedio: "🟡 Intermedio",
    pocoComun: "🔴 Menos común"
  };

  statsCounter.textContent = `Mostrando ${filteredVerbs.length} verbos`;

  if (filteredVerbs.length === 0) {
    cardsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
      <h3>No se encontraron verbos</h3>
      <p>Intenta con otra búsqueda o filtro.</p>
    </div>`;
    return;
  }

  filteredVerbs.forEach((item, index) => {
    const container = document.createElement("div");
    container.className = "card-container";

    const exPasado = getEjemploPasado(item);
    const exPasadoES = getEjemploPasadoES(item);
    const exPart = getEjemploParticipio(item);
    const exPartES = getEjemploParticipioES(item);

    container.innerHTML = `
      <div class="card-inner" id="card-${index}">
        <div class="card-front">
          <span class="badge ${item.categoria}">${categoryLabels[item.categoria]}</span>
          <div>
            <h2 class="verb-title">${item.verbo}</h2>
            <div class="spanish-meaning" id="meaning-${index}" style="visibility: hidden;">${item.significado}</div>
          </div>
          <button class="btn-meaning" onclick="toggleMeaning(event, ${index})">👁️ Ver Significado</button>
          <span class="flip-hint">Haz clic en la tarjeta para voltear 🔄</span>
        </div>
        <div class="card-back">
          <div class="conjugations">
            <div class="conj-item">
              <strong>Pasado Simple</strong>
              <span>${item.pasado}</span>
            </div>
            <div class="conj-item">
              <strong>Participio</strong>
              <span>${item.participio}</span>
            </div>
          </div>
          <div class="examples-list">
            <div class="example-item">
              <strong>Ej. Pasado:</strong>
              <p>${exPasado}</p>
              <em>${exPasadoES}</em>
            </div>
            <div class="example-item">
              <strong>Ej. Participio:</strong>
              <p>${exPart}</p>
              <em>${exPartES}</em>
            </div>
          </div>
        </div>
      </div>
    `;

    // Evento para voltear tarjeta
    container.addEventListener("click", (e) => {
      if (e.target.tagName === 'BUTTON') return;
      container.classList.toggle("flipped");
    });

    cardsGrid.appendChild(container);
  });
}

// Toggle Visibilidad del Significado
function toggleMeaning(event, index) {
  event.stopPropagation();
  const meaningEl = id(`meaning-${index}`);
  const btn = event.target;
  
  if (meaningEl.style.visibility === "hidden") {
    meaningEl.style.visibility = "visible";
    btn.textContent = "🙈 Ocultar Significado";
  } else {
    meaningEl.style.visibility = "hidden";
    btn.textContent = "👁️ Ver Significado";
  }
}

// Búsqueda en tiempo real
function setupSearch() {
  searchInput.addEventListener("input", () => {
    clearSearchBtn.style.display = searchInput.value ? "block" : "none";
    if (currentSection !== "quiz") {
      renderCards();
    }
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
    if (currentSection !== "quiz") {
      renderCards();
    }
  });
}

// LÓGICA DEL QUIZ
function setupQuizEvents() {
  startQuizBtn.addEventListener("click", startQuiz);
  restartQuizBtn.addEventListener("click", startQuiz);
  nextQuestionBtn.addEventListener("click", handleNextQuestion);
}

function startQuiz() {
  quizQuestions = generateQuizQuestions();
  quizCurrentIndex = 0;
  quizScore = 0;

  quizStartCard.style.display = "none";
  quizResultsCard.style.display = "none";
  quizActiveCard.style.display = "block";

  showQuestion();
}

function generateQuizQuestions() {
  const shuffled = [...verbosData].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);
  const questionTypes = ["pasado", "participio", "significado"];

  return selected.map(item => {
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    let prompt = "";
    let correctAnswer = "";

    if (type === "pasado") {
      prompt = "¿Cuál es el Pasado Simple de?";
      correctAnswer = item.pasado;
    } else if (type === "participio") {
      prompt = "¿Cuál es el Participio Pasado de?";
      correctAnswer = item.participio;
    } else {
      prompt = "¿Cuál es el significado en español de?";
      correctAnswer = item.significado;
    }

    const wrongOptions = [];
    while (wrongOptions.length < 3) {
      const randomVerb = verbosData[Math.floor(Math.random() * verbosData.length)];
      let optionVal = type === "pasado" ? randomVerb.pasado : (type === "participio" ? randomVerb.participio : randomVerb.significado);
      if (optionVal !== correctAnswer && !wrongOptions.includes(optionVal)) {
        wrongOptions.push(optionVal);
      }
    }

    const options = [...wrongOptions, correctAnswer].sort(() => 0.5 - Math.random());

    return {
      verb: item.verbo,
      prompt,
      correctAnswer,
      options
    };
  });
}

function showQuestion() {
  const q = quizQuestions[quizCurrentIndex];
  
  quizQuestionCount.textContent = `Pregunta ${quizCurrentIndex + 1} / 10`;
  quizScoreText.textContent = `Puntaje: ${quizScore}`;
  quizProgressBar.style.width = `${((quizCurrentIndex) / 10) * 100}%`;

  quizPrompt.textContent = q.prompt;
  quizTargetWord.textContent = q.verb;

  quizFeedback.style.display = "none";
  nextQuestionBtn.style.display = "none";

  quizOptionsGrid.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectOption(btn, opt, q.correctAnswer));
    quizOptionsGrid.appendChild(btn);
  });
}

function selectOption(selectedBtn, selectedOpt, correctAnswer) {
  const buttons = quizOptionsGrid.querySelectorAll(".quiz-option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selectedOpt === correctAnswer) {
    selectedBtn.classList.add("correct");
    quizFeedback.textContent = "¡Correcto! 🎉";
    quizFeedback.style.color = "var(--success-color)";
    quizScore++;
    quizScoreText.textContent = `Puntaje: ${quizScore}`;
  } else {
    selectedBtn.classList.add("wrong");
    quizFeedback.textContent = `Incorrecto. La respuesta correcta era: ${correctAnswer}`;
    quizFeedback.style.color = "var(--error-color)";

    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  quizFeedback.style.display = "block";
  nextQuestionBtn.style.display = "inline-block";
}

function handleNextQuestion() {
  quizCurrentIndex++;
  if (quizCurrentIndex < 10) {
    showQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  quizActiveCard.style.display = "none";
  quizResultsCard.style.display = "block";

  id("finalScoreNumber").textContent = `${quizScore} / 10`;

  const badgeEl = id("resultsBadge");
  const msgEl = id("finalScoreMessage");

  if (quizScore === 10) {
    badgeEl.textContent = "🏆";
    msgEl.textContent = "¡Perfecto! Dominas totalmente estos verbos.";
  } else if (quizScore >= 7) {
    badgeEl.textContent = "🌟";
    msgEl.textContent = "¡Excelente trabajo! Tienes un nivel muy sólido.";
  } else if (quizScore >= 5) {
    badgeEl.textContent = "👍";
    msgEl.textContent = "¡Buen intento! Con un poco más de práctica lo dominarás.";
  } else {
    badgeEl.textContent = "📚";
    msgEl.textContent = "¡Sigue repasando! Vuelve a revisar las tarjetas y vuelve a intentarlo.";
  }
}