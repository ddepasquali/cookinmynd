document.addEventListener('DOMContentLoaded', () => {
  function show(
    shown,
    hidden1,
    hidden2,
    hidden3,
    hidden4,
    hidden5,
    hidden6,
    hidden7,
    hidden8,
    hidden9,
    hidden10,
    hidden11,
    hidden12,
    hidden13,
    hidden14,
    hidden15,
    hidden16,
    hidden17,
    hidden18,
    hidden20,
    hidden21,
    hidden22
  ) {
    const shownElement = document.getElementById(shown);
    if (shownElement) {
      shownElement.style.display = 'block';
    }

    const toHide = [
      hidden1,
      hidden2,
      hidden3,
      hidden4,
      hidden5,
      hidden6,
      hidden7,
      hidden8,
      hidden9,
      hidden10,
      hidden11,
      hidden12,
      hidden13,
      hidden14,
      hidden15,
      hidden16,
      hidden17,
      hidden18,
      hidden19,
      hidden20,
      hidden21,
      hidden22,
    ];

    toHide.forEach((id) => {
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          el.style.display = 'none';
        }
      }
    });

    if (shown === 'accedi_registrati') {
      const loginForm = document.getElementById('form_accedi');
      const registerForm = document.getElementById('form_registrati');
      if (loginForm) loginForm.reset();
      if (registerForm) registerForm.reset();
    }

    if (shown === 'configurazione_cg') {
      const nameInput = document.getElementById('form_configurazione_cg-name');
      const surnameInput = document.getElementById('form_configurazione_cg-cognome');
      const telInput = document.getElementById('form_configurazione_cg-tel');
      if (nameInput) nameInput.value = localStorage.getItem('registrazione_name') || '';
      if (surnameInput) surnameInput.value = localStorage.getItem('registrazione_cognome') || '';
      if (telInput) telInput.value = localStorage.getItem('registrazione_tel') || '';
    }
    return false;
  }

  const hidden19 = undefined;
  function verificaForm() {
    const username = document.getElementById('form_accedi-username')?.value || '';
    const password = document.getElementById('form_accedi-pwd')?.value || '';

    if (username === '' || password === '') {
      alert('Per favore, compila tutti i campi');
    } else {
      alert('La funzionalità di login è stata disabilitata. Riprova più tardi');
    }
  }

  function eseguiRegistrazione() {
    const name = document.getElementById('form_registrati-name')?.value || '';
    const cognome = document.getElementById('form_registrati-cognome')?.value || '';
    const email = document.getElementById('form_registrati-email')?.value || '';
    const tel = document.getElementById('form_registrati-tel')?.value || '';
    const password = document.getElementById('form_registrati-pwd')?.value || '';
    const password2 = document.getElementById('form_registrati-pwd2')?.value || '';

    if (name === '' || cognome === '' || email === '' || tel === '' || password === '' || password2 === '') {
      alert('Compila tutti i campi richiesti');
      return;
    }

    localStorage.setItem('registrazione_name', name);
    localStorage.setItem('registrazione_cognome', cognome);
    localStorage.setItem('registrazione_email', email);
    localStorage.setItem('registrazione_tel', tel);
    localStorage.setItem('registrazione_pwd', password);

    show(
      'configurazione_inizio',
      'registrati',
      'accedi',
      'accedi_registrati',
      'home',
      'logo',
      'configurazione_cg',
      'configurazione_cr',
      'configurazione_time',
      'configurazione_colori',
      'configurazione_completata',
      'home_ok',
      'home_ok_monossido',
      'home_ok_cr',
      'home_ok_pranzo',
      'home_ok_cena',
      'home_ok_statistiche',
      'home_ok_manage',
      'home_ok_spesa',
      'home_ok_ricette',
      'home_ok_user',
      'home_ok_setting',
      'home_volcano_setting',
      'home_volcano_user'
    );
  }

  function eseguiConfigurazione_cg() {
    const name = document.getElementById('form_configurazione_cg-name')?.value || '';
    const cognome = document.getElementById('form_configurazione_cg-cognome')?.value || '';
    const tel = document.getElementById('form_configurazione_cg-tel')?.value || '';

    if (name === '' || cognome === '' || tel === '') {
      alert('Compilare tutti i campi richiesti');
      return;
    }

    localStorage.setItem('registrazione_name', name);
    localStorage.setItem('registrazione_cognome', cognome);
    localStorage.setItem('registrazione_tel', tel);

    show(
      'configurazione_cr',
      'configurazione_cg',
      'configurazione_inizio',
      'registrati',
      'accedi_registrati',
      'logo',
      'accedi',
      'configurazione_time',
      'configurazione_colori',
      'configurazione_completata',
      'home_ok',
      'home_ok_monossido',
      'home_ok_cr',
      'home_ok_pranzo',
      'home_ok_cena',
      'home_ok_statistiche',
      'home_ok_manage',
      'home_ok_spesa',
      'home_ok_ricette',
      'home_ok_user',
      'home_ok_setting',
      'home_volcano_setting',
      'home_volcano_user'
    );
  }

  function eseguiConfigurazione_cr() {
    const name = document.getElementById('form_configurazione_cr-name')?.value || '';
    const cognome = document.getElementById('form_configurazione_cr-cognome')?.value || '';
    const tel = document.getElementById('form_configurazione_cr-tel')?.value || '';

    const nomeCr = document.getElementById('nome_cr');
    const nomeCrPranzoOk = document.getElementById('nome_cr_pranzo_ok');
    const cognomeCr = document.getElementById('cognome_cr');
    const cellulareLink = document.getElementById('cellulare_cr_link');

    if (nomeCr) nomeCr.innerText = name;
    if (nomeCrPranzoOk) nomeCrPranzoOk.innerText = `${name} ha pranzato!`;
    if (cognomeCr) cognomeCr.innerText = cognome;
    if (cellulareLink) {
      cellulareLink.innerText = tel;
      cellulareLink.href = `tel:${tel}`;
    }

    if (name === '' || cognome === '' || tel === '') {
      alert('Compilare tutti i campi richiesti');
      return;
    }

    localStorage.setItem('registrazione_name_cr', name);
    localStorage.setItem('registrazione_cognome_cr', cognome);
    localStorage.setItem('registrazione_tel_cr', tel);

    show(
      'configurazione_time',
      'configurazione_cr',
      'configurazione_cg',
      'configurazione_inizio',
      'registrati',
      'accedi_registrati',
      'logo',
      'accedi',
      'configurazione_colori',
      'configurazione_completata',
      'home_ok',
      'home_ok_monossido',
      'home_ok_cr',
      'home_ok_pranzo',
      'home_ok_cena',
      'home_ok_statistiche',
      'home_ok_manage',
      'home_ok_spesa',
      'home_ok_ricette',
      'home_ok_user',
      'home_ok_setting',
      'home_volcano_setting',
      'home_volcano_user'
    );
  }

  function eseguiConfigurazione_time() {
    const timePranzo = document.getElementById('form_configurazione_time-pranzo')?.value || '';
    const timeCena = document.getElementById('form_configurazione_time-cena')?.value || '';

    if (timePranzo < '10:00' || timePranzo > '15:00' || timeCena < '17:00' || timeCena > '22:00') {
      alert('Gli orari devono essere compresi tra le 10:00 e le 15:00 per il pranzo e tra le 17:00 e le 22:00 per la cena');
      return;
    }

    localStorage.setItem('configurazione_time_pranzo', timePranzo);
    localStorage.setItem('registrazione_time_cena', timeCena);

    show(
      'configurazione_colori',
      'configurazione_time',
      'configurazione_cr',
      'configurazione_cg',
      'configurazione_inizio',
      'registrati',
      'accedi_registrati',
      'logo',
      'accedi',
      'configurazione_completata',
      'home_ok',
      'home_ok_monossido',
      'home_ok_cr',
      'home_ok_pranzo',
      'home_ok_cena',
      'home_ok_statistiche',
      'home_ok_manage',
      'home_ok_spesa',
      'home_ok_ricette',
      'home_ok_user',
      'home_ok_setting',
      'home_volcano_setting',
      'home_volcano_user'
    );
  }

  function eseguiConfigurazione_colori() {
    const coloriPranzo = document.getElementById('form_configurazione_colori-pranzo')?.value || '';
    const coloriCena = document.getElementById('form_configurazione_colori-cena')?.value || '';

    if (coloriPranzo === coloriCena) {
      alert('I colori per il pranzo e la cena devono essere distinti');
      return;
    }

    localStorage.setItem('configurazione_colori_pranzo', coloriPranzo);
    localStorage.setItem('registrazione_time_cena', coloriCena);

    show(
      'configurazione_completata',
      'configurazione_colori',
      'configurazione_time',
      'configurazione_cr',
      'configurazione_cg',
      'configurazione_inizio',
      'registrati',
      'accedi_registrati',
      'logo',
      'accedi',
      'home_ok',
      'home_ok_monossido',
      'home_ok_cr',
      'home_ok_pranzo',
      'home_ok_cena',
      'home_ok_statistiche',
      'home_ok_manage',
      'home_ok_spesa',
      'home_ok_ricette',
      'home_ok_user',
      'home_ok_setting',
      'home_volcano_setting',
      'home_volcano_user'
    );
  }

  function rimuoviElemento(customCheckbox) {
    if (customCheckbox.classList.contains('checked')) {
      customCheckbox.parentElement.remove();
    }
  }

  function toggleCheckbox(event) {
    const customCheckbox = event.target;
    customCheckbox.classList.toggle('checked');
    customCheckbox.classList.toggle('unchecked');
    const checkbox = customCheckbox.previousElementSibling;
    checkbox.checked = !checkbox.checked;
    rimuoviElemento(customCheckbox);
  }

  function aggiungiAlimento() {
    const lista = document.getElementById('lista-spesa');
    const nuovoAlimentoInput = document.getElementById('nuovo-alimento');
    const nuovoAlimento = nuovoAlimentoInput?.value.trim() || '';

    if (nuovoAlimento !== '') {
      const li = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.style.display = 'none';

      const customCheckbox = document.createElement('div');
      customCheckbox.classList.add('custom-checkbox', 'unchecked');
      customCheckbox.onclick = toggleCheckbox;

      li.appendChild(checkbox);
      li.appendChild(customCheckbox);
      li.appendChild(document.createTextNode(nuovoAlimento));
      lista.appendChild(li);

      nuovoAlimentoInput.value = '';
    }
  }

  const registratiButton = document.getElementById('registrati-registrati');
  if (registratiButton) {
    registratiButton.addEventListener('click', (event) => {
      event.preventDefault();
      eseguiRegistrazione();
    });
  }

  const configurazioneCgButton = document.getElementById('configurazione_cg-avanti');
  if (configurazioneCgButton) {
    configurazioneCgButton.addEventListener('click', (event) => {
      event.preventDefault();
      eseguiConfigurazione_cg();
    });
  }

  const configurazioneCrButton = document.getElementById('configurazione_cr-avanti');
  if (configurazioneCrButton) {
    configurazioneCrButton.addEventListener('click', (event) => {
      event.preventDefault();
      eseguiConfigurazione_cr();
    });
  }

  const configurazioneTimeButton = document.getElementById('configurazione_time-avanti');
  if (configurazioneTimeButton) {
    configurazioneTimeButton.addEventListener('click', (event) => {
      event.preventDefault();
      eseguiConfigurazione_time();
    });
  }

  const configurazioneColoriButton = document.getElementById('configurazione_colori-avanti');
  if (configurazioneColoriButton) {
    configurazioneColoriButton.addEventListener('click', (event) => {
      event.preventDefault();
      eseguiConfigurazione_colori();
    });
  }

  const nuovoAlimentoInput = document.getElementById('nuovo-alimento');
  if (nuovoAlimentoInput) {
    nuovoAlimentoInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        aggiungiAlimento();
      }
    });
  }

  window.show = show;
  window.verificaForm = verificaForm;
  window.aggiungiAlimento = aggiungiAlimento;
});
