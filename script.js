// ---------- Datos de las carreras (información orientativa) ----------
const AREAS = {
  ing:{n:'Ingeniería y tecnología',c:'#2D5BFF',i:'⚙️'},
  salud:{n:'Salud',c:'#0FA37F',i:'🩺'},
  humanas:{n:'Ciencias humanas',c:'#E8503C',i:'⚖️'},
  negocios:{n:'Negocios',c:'#D98A00',i:'📊'},
  diseno:{n:'Diseño y arquitectura',c:'#8B5CF6',i:'🎨'}
};
const CARRERAS = [
 {id:'sistemas',n:'Ingeniería de Sistemas',a:'ing',i:'💻',sem:10,tit:'Ingeniero(a) de Sistemas',d:'Diseña software, redes y sistemas de información que resuelven problemas reales.',
  est:['Programación y estructuras de datos','Bases de datos y redes','Ingeniería de software','Inteligencia artificial y ciberseguridad'],trab:['Desarrollo de software','Ciberseguridad','Análisis de datos','Consultoría tecnológica'],
  per:'Te gusta la lógica, aprender herramientas nuevas y resolver problemas paso a paso.',cur:'El término "bug" se hizo famoso en 1947, cuando un equipo encontró una polilla atrapada en el computador Harvard Mark II.'},
 {id:'civil',n:'Ingeniería Civil',a:'ing',i:'🌉',sem:10,tit:'Ingeniero(a) Civil',d:'Planea y construye puentes, vías, edificios y sistemas de agua que usan millones de personas.',
  est:['Matemáticas y física aplicada','Estructuras y materiales','Hidráulica y geotecnia','Gerencia de obras'],trab:['Construcción de obras','Diseño de estructuras','Infraestructura vial','Gestión del agua'],
  per:'Disfrutas ver cómo funcionan las cosas y trabajar en obra y en oficina.',cur:'La cúpula del Panteón de Roma, de hace casi 2.000 años, sigue siendo la cúpula de concreto sin refuerzo más grande del mundo.'},
 {id:'medicina',n:'Medicina',a:'salud',i:'🫀',sem:12,tit:'Médico(a)',d:'Previene, diagnostica y trata enfermedades, y acompaña a las personas en su salud.',
  est:['Anatomía, fisiología y bioquímica','Farmacología y patología','Clínica en hospitales','Internado rotatorio'],trab:['Hospitales y clínicas','Salud pública','Investigación médica','Consulta propia o especialización'],
  per:'Tienes disciplina, vocación de servicio y buen manejo del estrés.',cur:'El corazón humano late alrededor de 100.000 veces al día sin descansar.'},
 {id:'enfermeria',n:'Enfermería',a:'salud',i:'💉',sem:8,tit:'Enfermero(a)',d:'Cuida a pacientes y familias, y es clave en la prevención y recuperación.',
  est:['Cuidado del adulto y del niño','Salud comunitaria','Farmacología','Prácticas clínicas'],trab:['Hospitales y clínicas','Atención domiciliaria','Salud ocupacional','Gestión de servicios de salud'],
  per:'Eres empático(a), responsable y te gusta trabajar en equipo.',cur:'Florence Nightingale usó gráficos estadísticos en la década de 1850 para demostrar que muchas muertes en la guerra de Crimea eran evitables.'},
 {id:'derecho',n:'Derecho',a:'humanas',i:'⚖️',sem:10,tit:'Abogado(a)',d:'Estudia las leyes y la justicia para defender derechos y resolver conflictos.',
  est:['Derecho civil, penal y constitucional','Derecho laboral y comercial','Argumentación y oratoria','Consultorio jurídico'],trab:['Litigio','Asesoría a empresas','Función pública y judicial','Derechos humanos'],
  per:'Lees con atención, argumentas con claridad y te importa la justicia.',cur:'El Código de Hammurabi, de hace unos 3.800 años, es una de las colecciones de leyes escritas más antiguas que se conocen.'},
 {id:'psicologia',n:'Psicología',a:'humanas',i:'🧠',sem:9,tit:'Psicólogo(a)',d:'Estudia la conducta y las emociones para acompañar el bienestar de las personas.',
  est:['Desarrollo humano','Psicología clínica y social','Estadística e investigación','Prácticas profesionales'],trab:['Clínica y consulta','Recursos humanos','Educación','Psicología social y comunitaria'],
  per:'Escuchas bien, tienes curiosidad por las personas y respetas las diferencias.',cur:'El primer laboratorio de psicología experimental lo fundó Wilhelm Wundt en Leipzig, en 1879.'},
 {id:'administracion',n:'Administración de Empresas',a:'negocios',i:'📈',sem:9,tit:'Administrador(a) de Empresas',d:'Aprende a liderar equipos, gestionar recursos y hacer crecer organizaciones.',
  est:['Gestión y estrategia','Mercadeo y finanzas','Talento humano','Emprendimiento'],trab:['Gerencia y dirección','Mercadeo y ventas','Emprendimiento','Consultoría'],
  per:'Te gusta organizar, liderar y tomar decisiones con datos.',cur:'A comienzos del siglo XX, Frederick Taylor cronometraba tareas en las fábricas para hacerlas más eficientes y así nació la administración científica.'},
 {id:'contaduria',n:'Contaduría Pública',a:'negocios',i:'🧾',sem:9,tit:'Contador(a) Público(a)',d:'Registra, analiza y certifica la información financiera de empresas y personas.',
  est:['Contabilidad financiera y de costos','Tributaria','Auditoría y revisoría fiscal','Finanzas'],trab:['Auditoría','Asesoría tributaria','Contabilidad empresarial','Revisoría fiscal'],
  per:'Eres ordenado(a), detallista y honesto(a) con la información.',cur:'La contabilidad por partida doble se explicó por escrito en 1494, en el libro del matemático italiano Luca Pacioli.'},
 {id:'diseno',n:'Diseño Gráfico',a:'diseno',i:'✏️',sem:8,tit:'Diseñador(a) Gráfico(a)',d:'Crea marcas, piezas visuales y experiencias digitales que comunican ideas.',
  est:['Tipografía y composición','Ilustración y fotografía','Diseño web y de interfaces','Branding'],trab:['Agencias de publicidad','Diseño de marca','Diseño de producto digital','Trabajo independiente'],
  per:'Tienes ojo para el detalle y te gusta convertir ideas en imágenes.',cur:'La tipografía Helvetica nació en 1957 y todavía aparece en logos y señales de todo el mundo.'},
 {id:'arquitectura',n:'Arquitectura',a:'diseno',i:'🏛️',sem:10,tit:'Arquitecto(a)',d:'Diseña espacios, edificios y ciudades pensando en las personas y el entorno.',
  est:['Taller de diseño','Historia y teoría','Tecnología de la construcción','Urbanismo y sostenibilidad'],trab:['Diseño de edificaciones','Urbanismo','Restauración','Interiorismo'],
  per:'Combinas creatividad con rigor técnico y piensas en el espacio.',cur:'La Sagrada Familia, de Gaudí, empezó a construirse en 1882 y lleva más de un siglo en obra.'}
];

// ---------- 1) Modo oscuro ----------
const raiz = document.documentElement, btnTema = document.getElementById('tema-btn');
function aplicarTema(t){ raiz.dataset.theme = t; btnTema.textContent = t === 'dark' ? '☀️ Claro' : '🌙 Oscuro'; btnTema.setAttribute('aria-pressed', t === 'dark'); }
let guardado = null; try { guardado = localStorage.getItem('tema'); } catch(e){}
aplicarTema(guardado || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
btnTema.addEventListener('click', () => { const n = raiz.dataset.theme === 'dark' ? 'light' : 'dark'; aplicarTema(n); try { localStorage.setItem('tema', n); } catch(e){} });

// ---------- 2) Menú móvil ----------
const menuBtn = document.getElementById('menu-btn'), menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => menuBtn.setAttribute('aria-expanded', menu.parentElement.classList.toggle('open')));

// ---------- 3) Contador animado de cifras ----------
const cifras = document.querySelectorAll('[data-n]');
if (cifras.length) {
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches, fmt = new Intl.NumberFormat('es-CO');
  const obs = new IntersectionObserver(items => items.forEach(it => {
    if (!it.isIntersecting) return;
    const el = it.target, meta = +el.dataset.n, suf = el.dataset.suf || ''; obs.unobserve(el);
    if (quieto) { el.textContent = fmt.format(meta) + suf; return; }
    const ini = performance.now();
    (function paso(t){ const p = Math.min((t - ini) / 1500, 1); el.textContent = fmt.format(Math.round(meta * (1 - Math.pow(1 - p, 3)))) + suf; if (p < 1) requestAnimationFrame(paso); })(ini);
  }), { threshold: .5 });
  cifras.forEach(c => obs.observe(c));
}

// ---------- 4) Ventana con la información de cada carrera ----------
const modal = document.getElementById('modal');
function abrirCarrera(id){
  const c = CARRERAS.find(x => x.id === id), a = AREAS[c.a];
  modal.style.setProperty('--c', a.c);
  modal.innerHTML = `<div class="m-head"><button class="m-x" aria-label="Cerrar">✕</button><div class="ico" aria-hidden="true">${c.i}</div>
    <h2 id="m-titulo">${c.n}</h2><p>${a.n}. ${c.d}</p></div>
  <div class="m-body"><div class="m-datos"><div><b>${c.sem}</b>semestres</div><div><b>Presencial</b>modalidad</div><div><b>${c.tit}</b>título</div></div>
    <div><h3>Qué vas a estudiar</h3><ul class="l">${c.est.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div><h3>Dónde podrías trabajar</h3><ul class="chips">${c.trab.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div><h3>¿Es para ti?</h3><p>${c.per}</p></div>
    <div class="curioso"><b>¿Sabías que…?</b><p>${c.cur}</p></div>
    <a class="btn coral" href="contacto.html">Quiero más información</a></div>`;
  modal.querySelector('.m-x').addEventListener('click', () => modal.close());
  if (!modal.open) modal.showModal();
}
if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
document.addEventListener('click', e => { const b = e.target.closest('[data-abrir]'); if (b) abrirCarrera(b.dataset.abrir); });

// ---------- 5) Lista de carreras con filtro por área ----------
const lista = document.getElementById('lista');
if (lista) {
  lista.innerHTML = CARRERAS.map((c, i) => `<article class="card carrera" data-area="${c.a}" style="--c:${AREAS[c.a].c};animation-delay:${i * 60}ms">
    <span class="ico" aria-hidden="true">${c.i}</span><span class="meta">${AREAS[c.a].n} · ${c.sem} semestres</span><h3>${c.n}</h3><p>${c.d}</p>
    <button class="btn sm" data-abrir="${c.id}">Ver información</button></article>`).join('');
  const botones = document.querySelectorAll('.filtros button');
  function filtrar(f){
    botones.forEach(b => b.setAttribute('aria-pressed', b.dataset.filtro === f));
    lista.querySelectorAll('.carrera').forEach(t => t.hidden = f !== 'todo' && t.dataset.area !== f);
  }
  botones.forEach(b => b.addEventListener('click', () => filtrar(b.dataset.filtro)));
  const h = location.hash.slice(1); filtrar(AREAS[h] ? h : 'todo');
}

// ---------- 6) Test vocacional ----------
const quiz = document.getElementById('quiz');
if (quiz) {
  const P = [
   {q:'¿Qué actividad disfrutas más en tu tiempo libre?',o:[['Armar, programar o resolver acertijos','ing'],['Ayudar a alguien que se siente mal','salud'],['Conversar y entender por qué la gente actúa así','humanas'],['Organizar planes y liderar a mis amigos','negocios'],['Dibujar, editar fotos o decorar espacios','diseno']]},
   {q:'¿Qué materia te llamaba más la atención en el colegio?',o:[['Matemáticas y física','ing'],['Biología y química','salud'],['Sociales, lenguaje y ética','humanas'],['Economía y emprendimiento','negocios'],['Artes y dibujo','diseno']]},
   {q:'¿Qué te gustaría lograr con tu carrera?',o:[['Crear tecnología u obras que usen miles de personas','ing'],['Cuidar la salud de las personas','salud'],['Defender derechos y acompañar a otros','humanas'],['Dirigir o fundar mi propia empresa','negocios'],['Dar forma a espacios y mensajes que inspiren','diseno']]},
   {q:'¿Cómo prefieres trabajar?',o:[['Con datos, máquinas y planos','ing'],['Con pacientes y equipos de salud','salud'],['Escuchando y conversando con personas','humanas'],['Con metas, cifras y negociaciones','negocios'],['Con ideas, bocetos y creatividad','diseno']]}
  ];
  let paso, puntos;
  function pregunta(){
    const p = P[paso];
    quiz.innerHTML = `<div class="progreso" role="progressbar" aria-valuemin="0" aria-valuemax="${P.length}" aria-valuenow="${paso}"><i style="width:${paso / P.length * 100}%"></i></div>
      <h3>${paso + 1}/${P.length}. ${p.q}</h3><div class="opciones">${p.o.map(o => `<button data-a="${o[1]}">${o[0]}</button>`).join('')}</div>`;
  }
  function resultado(){
    const top = Object.keys(puntos).sort((x, y) => puntos[y] - puntos[x])[0], a = AREAS[top];
    quiz.innerHTML = `<div class="resultado"><div class="progreso"><i style="width:100%"></i></div><h3>${a.i} Tu área ideal: ${a.n}</h3>
      <p>Según tus respuestas, estas carreras podrían interesarte. Mira la información de cada una:</p><p style="margin-top:1rem">
      ${CARRERAS.filter(c => c.a === top).map(c => `<button class="btn sm" data-abrir="${c.id}" style="background:${a.c}">${c.i} ${c.n}</button>`).join('')}</p>
      <p style="margin-top:1.2rem"><button class="btn sm alt" id="repetir">Repetir el test</button></p></div>`;
    quiz.querySelector('#repetir').addEventListener('click', iniciar);
  }
  function iniciar(){ paso = 0; puntos = {ing:0,salud:0,humanas:0,negocios:0,diseno:0}; pregunta(); }
  quiz.addEventListener('click', e => {
    const b = e.target.closest('[data-a]'); if (!b) return;
    puntos[b.dataset.a]++; paso++; paso < P.length ? pregunta() : resultado();
  });
  iniciar();
}

// ---------- 7) Validación del formulario de contacto ----------
const form = document.getElementById('form-contacto');
if (form) {
  const reglas = {
    nombre: v => v.trim().length >= 3 || 'Escribe tu nombre completo (mínimo 3 letras).',
    correo: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Escribe un correo válido, por ejemplo nombre@correo.com.',
    telefono: v => v === '' || /^[0-9+\s-]{7,15}$/.test(v) || 'Usa solo números, entre 7 y 15 dígitos.',
    mensaje: v => v.trim().length >= 10 || 'Cuéntanos un poco más (mínimo 10 caracteres).'
  };
  function validar(c){
    const r = reglas[c.name](c.value), ok = r === true;
    c.classList.toggle('invalid', !ok); c.setAttribute('aria-invalid', !ok);
    document.getElementById('err-' + c.name).textContent = ok ? '' : r; return ok;
  }
  const campos = [...form.querySelectorAll('[name]')].filter(c => reglas[c.name]);
  campos.forEach(c => c.addEventListener('blur', () => validar(c)));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const estado = document.getElementById('estado');
    if (campos.map(validar).every(Boolean)) { estado.textContent = '¡Mensaje enviado! Admisiones te responderá en menos de 24 horas.'; form.reset(); }
    else { estado.textContent = ''; campos.find(c => c.classList.contains('invalid')).focus(); }
  });
}