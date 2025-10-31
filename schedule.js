const scheduleData = {
  "Dia 1": [
    { time: "18:30", title: "Abertura e Boas-vindas", speaker: "Comitê Organizador" },
    { time: "19:30", title: "Recepção: Coffe Break", speaker: "Coffe Break" },
    { time: "20:30", title: "Painel: Gamificação como Ferramenta de Engajamento", speaker: "Dr. Ig Bittencourt e Dra. Taciana Falcão" },
    { time: "21:30", title: "Workshop: Criando Interfaces Educacionais Inteligentes", speaker: "Dra. Patrícia Jaques" },
  ],
  "Dia 2": [
    { time: "18:30", title: "Palestra: Realidade Virtual e Aumentada na Sala de Aula", speaker: "Dr. André Neves" },
    { time: "19:30", title: "Sessão Técnica: Novas Tecnologias Educacionais", speaker: "Dr. Sean Siqueira" },
    { time: "20:30", title: "Mesa Redonda: Desafios e Oportunidades na Educação Digital", speaker: "Todos os palestrantes" },
    { time: "21:30", title: "Sessão de Networking Guiado", speaker: "Comitê Organizador" }
  ],
  "Dia 3": [
    { time: "09:00", title: "Palestra Magna: Impacto Social da Tecnologia Educacional", speaker: "Dra. Elisa Fernandes" },
    { time: "11:30", title: "Workshop: Design Thinking para Inovação em Projetos Educacionais", speaker: "Equipe InovaLab" },
    { time: "13:30", title: "Case Study: Implementação de Plataformas Adaptativas", speaker: "Prof. Marcos Almeida" },
    { time: "15:30", title: "Debate: Personalização do Aprendizado com IA", speaker: "Dra. Patrícia Jaques e Dr. Cristiano Maciel" },
    { time: "15:30", title: "Cerimônia de Encerramento", speaker: "Comitê Organizador" }
  ],
  
};

const tabsContainer = document.getElementById('tabs');
const contentContainer = document.getElementById('schedule-content');

// Cria as abas
Object.keys(scheduleData).forEach((day, idx) => {
  const btn = document.createElement('button');
  btn.textContent = day;
  btn.classList.add('tab');
  if (idx === 0) btn.classList.add('active');
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderSchedule(day);
  });
  tabsContainer.appendChild(btn);
});

// Renderiza a programação do dia
function renderSchedule(day) {
  contentContainer.innerHTML = '';
  contentContainer.classList.remove('fade-in');
  void contentContainer.offsetWidth;

  const events = scheduleData[day];
  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <div class="event-time">
        <i class="lucide-clock"></i>
        <span>${event.time}</span>
      </div>
      <div>
        <div class="event-title">${event.title}</div>
        <div class="event-speaker">${event.speaker}</div>
      </div>
    `;
    contentContainer.appendChild(card);
  });

  contentContainer.classList.add('fade-in');
}

renderSchedule("Dia 1");
