// --- DADOS ---
const salaries = {
    '2025': {
        'A': [6223.63, 6315.00, 6408.00, 6502.00, 6598.00, 0],
        'B': [6794.00, 6961.00, 7133.00, 7309.00, 7489.00, 7863.00],
        'C': [8057.00, 8256.00, 8459.00, 8667.00, 9099.00, 9476.00],
        'Especial': [9868.00, 10277.00, 10703.00]
    },
    '2026': {
        'A': [6223.63, 6322.36, 6423.15, 6526.01, 6630.00, 0],
        'B': [6842.44, 7025.58, 7213.05, 7405.02, 7602.66, 8013.66],
        'C': [8227.40, 8447.54, 8672.30, 8903.87, 9385.28, 9807.23],
        'Especial': [10246.71, 10706.84, 11186.76]
    }
};

const point = {
    '2025': {
        'A': [18.59, 18.86, 19.14, 19.42, 19.71, 0],
        'B': [20.29, 20.79, 21.30, 21.82, 22.36, 23.48],
        'C': [24.06, 24.65, 25.26, 25.88, 27.17, 28.30],
        'Especial': [29.47, 30.69, 31.96]
    },
    '2026': {
        'A': [18.59, 18.89, 19.19, 19.49, 19.80, 0],
        'B': [20.44, 20.98, 21.54, 22.12, 22.71, 23.94],
        'C': [24.58, 25.23, 25.91, 26.60, 28.04, 29.29],
        'Especial': [30.61, 31.98, 33.42]
    }
};

const rtEspec = {
    '2025': {
        'A': [2385.99, 2421.10, 2456.73, 2492.88, 2529.57, 0],
        'B': [2604.56, 2668.76, 2734.53, 2801.93, 2870.98, 3014.24],
        'C': [3088.53, 3164.65, 3242.64, 3322.56, 3488.36, 3632.82],
        'Especial': [3783.27, 3939.95, 4103.11]
    },
    '2026': {
        'A': [2385.99, 2423.99, 2462.60, 2501.82, 2541.67, 0],
        'B': [2623.28, 2693.28, 2765.15, 2838.95, 2914.70, 3072.34],
        'C': [3154.33, 3238.50, 3324.93, 3413.65, 3598.28, 3759.74],
        'Especial': [3928.44, 4104.71, 4288.89]
    }
};

const rtMestre = {
    '2025': {
        'A': [3041.50, 3086.25, 3131.67, 3177.75, 3224.52, 0],
        'B': [3320.11, 3401.94, 3485.78, 3571.70, 3659.72, 3842.34],
        'C': [3937.04, 4034.07, 4133.49, 4235.37, 4446.71, 4630.86],
        'Especial': [4822.64, 5022.36, 5230.36]
    },
    '2026': {
        'A': [3041.50, 3089.94, 3139.15, 3189.15, 3239.94, 0],
        'B': [3343.97, 3433.20, 3524.82, 3618.89, 3715.46, 3916.40],
        'C': [4020.92, 4128.22, 4238.38, 4351.48, 4586.83, 4792.64],
        'Especial': [5007.69, 5232.39, 5467.17]
    }
};

const rtDoutor = {
    '2025': {
        'A': [5415.37, 5495.05, 5575.92, 5657.97, 5741.23, 0],
        'B': [5911.44, 6057.13, 6206.42, 6359.39, 6516.12, 6841.27],
        'C': [7009.88, 7182.64, 7359.66, 7541.05, 7917.34, 8245.23],
        'Especial': [8586.69, 8942.29, 9312.62]
    },
    '2026': {
        'A': [5415.37, 5501.61, 5589.24, 5678.26, 5768.70, 0],
        'B': [5953.91, 6112.80, 6275.92, 6443.41, 6615.35, 6973.13],
        'C': [7159.22, 7350.26, 7546.41, 7747.79, 8166.82, 8533.28],
        'Especial': [8916.17, 9316.17, 9734.27]
    }
};

const padroesPorClasse = { 'A': 5, 'B': 6, 'C': 6, 'Especial': 3 };
const VALOR_AUX_CRECHE = 484.90;
const ROMANOS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

const $ = id => document.getElementById(id);

const currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const formatCurrency = v => currencyFormatter.format(Number(v || 0));

const safeParseFloat = v => Number.isFinite(parseFloat(v)) ? parseFloat(v) : 0;
const safeParseInt = v => Number.isFinite(parseInt(v)) ? parseInt(v) : 0;

// ---------------------------- DADOS FCE ----------------------------
const fceData = [
  { codigo: "FCE 1.17", valor: 16795.90 }, { codigo: "FCE 1.16", valor: 14045.67 }, { codigo: "FCE 1.15", valor: 12196.47 },
  { codigo: "FCE 1.14", valor: 10432.37 }, { codigo: "FCE 1.13", valor: 8651.81 }, { codigo: "FCE 1.12", valor: 6513.87 },
  { codigo: "FCE 1.11", valor: 5193.87 }, { codigo: "FCE 1.10", valor: 4455.87 }, { codigo: "FCE 1.09", valor: 3498.47 },
  { codigo: "FCE 1.08", valor: 3356.01 }, { codigo: "FCE 1.07", valor: 2908.64 }, { codigo: "FCE 1.06", valor: 2463.00 },
  { codigo: "FCE 1.05", valor: 2099.09 }, { codigo: "FCE 1.04", valor: 1553.73 }, { codigo: "FCE 1.03", valor: 1294.43 },
  { codigo: "FCE 1.02", valor: 723.98 }, { codigo: "FCE 1.01", valor: 428.38 },
  { codigo: "FCE 2.17", valor: 16795.90 }, { codigo: "FCE 2.16", valor: 14045.67 }, { codigo: "FCE 2.15", valor: 12196.47 },
  { codigo: "FCE 2.14", valor: 10432.37 }, { codigo: "FCE 2.13", valor: 8651.81 }, { codigo: "FCE 2.12", valor: 6513.87 },
  { codigo: "FCE 2.11", valor: 5193.87 }, { codigo: "FCE 2.10", valor: 4455.87 }, { codigo: "FCE 2.09", valor: 3498.47 },
  { codigo: "FCE 2.08", valor: 3356.01 }, { codigo: "FCE 2.07", valor: 2908.64 }, { codigo: "FCE 2.06", valor: 2463.00 },
  { codigo: "FCE 2.05", valor: 2099.09 }, { codigo: "FCE 2.04", valor: 1553.73 }, { codigo: "FCE 2.03", valor: 1294.43 },
  { codigo: "FCE 2.02", valor: 723.98 }, { codigo: "FCE 2.01", valor: 428.38 },
  { codigo: "FCE 3.16", valor: 14045.67 }, { codigo: "FCE 3.15", valor: 12196.47 }, { codigo: "FCE 3.14", valor: 10432.37 },
  { codigo: "FCE 3.13", valor: 8651.81 }, { codigo: "FCE 3.12", valor: 6513.87 }, { codigo: "FCE 3.11", valor: 5193.87 },
  { codigo: "FCE 3.10", valor: 4455.87 }, { codigo: "FCE 3.09", valor: 3498.47 }, { codigo: "FCE 3.08", valor: 3356.01 },
  { codigo: "FCE 3.07", valor: 2908.64 }, { codigo: "FCE 3.06", valor: 2463.00 }, { codigo: "FCE 3.05", valor: 2099.09 },
  { codigo: "FCE 3.04", valor: 1553.73 }, { codigo: "FCE 3.03", valor: 1294.43 }, { codigo: "FCE 3.02", valor: 723.98 },
  { codigo: "FCE 3.01", valor: 428.38 },
  { codigo: "FCE 4.13", valor: 8651.81 }, { codigo: "FCE 4.12", valor: 6513.87 }, { codigo: "FCE 4.11", valor: 5193.87 },
  { codigo: "FCE 4.10", valor: 4455.87 }, { codigo: "FCE 4.09", valor: 3498.47 }, { codigo: "FCE 4.08", valor: 3356.01 },
  { codigo: "FCE 4.07", valor: 2908.64 }, { codigo: "FCE 4.06", valor: 2463.00 }, { codigo: "FCE 4.05", valor: 2099.09 },
  { codigo: "FCE 4.04", valor: 1553.73 }, { codigo: "FCE 4.03", valor: 1294.43 }, { codigo: "FCE 4.02", valor: 723.98 },
  { codigo: "FCE 4.01", valor: 428.38 }
];

// Popula o select dinamicamente
const selectFCE = document.getElementById('funcaoComissionada');
selectFCE.innerHTML = '<option value="nenhuma">Nenhuma</option>';
fceData.forEach(item => {
  const opt = document.createElement('option');
  opt.value = item.codigo.replace(/\s/g, '_'); // ex.: FCE_1.17
  opt.textContent = item.codigo;
  opt.dataset.valor = item.valor;
  selectFCE.appendChild(opt);
});

// ---------------------------- Cálculos ----------------------------

const calculateINSS = (base) => {
    const tiers = [
        { limit: 1621.00, rate: 0.075 },
        { limit: 2902.84, rate: 0.09 },
        { limit: 4354.27, rate: 0.12 },
        { limit: 8475.55, rate: 0.14 }
    ];

    let total = 0;
    let last = 0;

    for (const t of tiers) {
        if (base > last) {
            const taxable = Math.min(base - last, t.limit - last);
            total += taxable * t.rate;
        }
        last = t.limit;
    }

    return total;
};

const calculateComplementar = base => {
    const teto = 8157.41;
    return base > teto ? (base - teto) * 0.085 : 0;
};

const calculateIRPF = base => {
    const tiers = [
        { limit: 2428.80, rate: 0, deduction: 0 },
        { limit: 2826.65, rate: 0.075, deduction: 182.16 },
        { limit: 3751.05, rate: 0.15, deduction: 394.16 },
        { limit: 4664.68, rate: 0.225, deduction: 675.49 },
        { limit: Infinity, rate: 0.275, deduction: 908.73 }
    ];
    for (const t of tiers) {
        if (base <= t.limit) return Math.max(0, base * t.rate - t.deduction);
    }
    return 0;
};

/*
------------------------------
 IRPF 2026 – Fórmula Oficial
------------------------------
 Redutor progressivo aprovado no PL/Lei 15.270/2025:
 
 Redução = 978,62 − (0,133145 × Base_de_Cálculo)

 • A redução é aplicada SOMENTE ao imposto calculado,
   não à base.

 • Para base mensal <= 5.000,00 → Imposto final = 0
 
 • Para base entre 5.000,01 e 7.350,00:
      imposto2026 = imposto_normal − redução
 
 • A redução cai linearmente e chega a zero em 7.350,00
*/

// Função oficial 2026 com arredondamento Math.round
const calculateIRPF2026 = baseValue => {
    const base = Number(baseValue || 0);

    if (base <= 5000) return 0;

    const impostoBase = calculateIRPF(base);

    let redutor = 0;
    if (base <= 7350) {
        redutor = 978.62 - (0.133145 * base);
        if (redutor < 0) redutor = 0;
    }

    const impostoFinal = Math.max(0, impostoBase - redutor);

    return Math.round(impostoFinal * 100) / 100;
};

const getIRPF = (periodo, base) =>
	periodo === '2025' ? calculateIRPF2026(base) : calculateIRPF(base);
    periodo === '2026' ? calculateIRPF2026(base) : calculateIRPF(base);

// ---------------------------- Tabelas ----------------------------

const getTableValue = (table, periodo, classe, index) =>
    table?.[periodo]?.[classe]?.[index] ?? 0;

const getRtByTitle = (t, periodo, classe, p) =>
    t === '1' ? getTableValue(rtEspec, periodo, classe, p) :
    t === '2' ? getTableValue(rtMestre, periodo, classe, p) :
    t === '3' ? getTableValue(rtDoutor, periodo, classe, p) : 0;

// ---------------------------- SAÚDE ----------------------------

const saudePerCapita = {
    faixasIdade: [18, 23, 28, 33, 38, 43, 48, 53, 58],
    valores: [
        { rem: 3000, val: [254.18, 266.17, 269.77, 297.07, 305.95, 316.10, 361.06, 366.80, 372.51, 411.26] },
        { rem: 6000, val: [196.34, 207.65, 211.02, 230.21, 238.60, 248.20, 280.87, 285.34, 289.80, 321.04] },
        { rem: 9000, val: [160.80, 162.92, 166.10, 178.29, 186.21, 195.23, 210.12, 213.45, 216.78, 235.28] },
        { rem: 12000, val: [142.18, 144.16, 147.11, 158.69, 166.10, 174.57, 187.87, 190.85, 193.82, 211.36] },
        { rem: 15000, val: [132.03, 133.86, 136.60, 148.11, 155.02, 162.93, 176.13, 178.92, 181.71, 198.93] },
        { rem: 18000, val: [121.87, 123.56, 126.10, 137.53, 143.95, 151.29, 164.39, 166.99, 169.60, 186.79] },
        { rem: Infinity, val: [111.72, 113.26, 115.58, 126.96, 132.89, 139.69, 151.71, 154.11, 156.49, 172.65] }
    ]
};

const getSaudeValue = (rem, idade) => {
    if (!idade || idade <= 0) return 0;
    let idadeIndex = saudePerCapita.faixasIdade.findIndex(x => idade <= x);
    if (idadeIndex < 0) idadeIndex = saudePerCapita.faixasIdade.length;

    const remFaixa = saudePerCapita.valores.find(x => rem < x.rem);
    return remFaixa.val[idadeIndex] ?? 0;
};

// ---------------------------- UI ----------------------------

const classeSelect = $('classe');
const padraoSelect = $('padrao');
const resultsDiv = $('results');

const updatePadraoOptions = () => {
    padraoSelect.innerHTML = '';
    const qtd = padroesPorClasse[classeSelect.value] || 0;
    for (let i = 0; i < qtd; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `Padrão ${ROMANOS[i]}`;
        padraoSelect.appendChild(opt);
    }
};

const buildResultsHTML = items => items.map(it => `
<div class="result-item">
  <span class="label">${it.label}</span>
  <span class="value ${it.negative ? 'negative' : it.positive ? 'positive' : ''}">
    ${it.negative ? '-' : ''}${it.value !== null ? formatCurrency(it.value) : ''}
  </span>
</div>`).join('');


// ---------------------------- Simulação ----------------------------

const handleFormSubmit = e => {
    e.preventDefault();

    const periodo = $('periodo').value;
    const classe = classeSelect.value;
    const titulo = $('titulo').value;
    const ponto = safeParseFloat($('point').value);
    const dias = safeParseFloat($('dias').value);
    const mes = safeParseFloat($('mes').value) || 1;
    const mesTrab = safeParseFloat($('mes_trabalhado').value);

    const padraoIndex = safeParseInt(padraoSelect.value);

    const simulacao = $('simulacaoEspecial').value;

    const auxAlimentacao = safeParseFloat($('auxAlimentacao').value);
    const auxTransporte = safeParseFloat($('auxTransporte').value);
    const auxCrecheQtd = safeParseInt($('auxCreche').value);

    const idadeTitular = safeParseInt($('idadeTitular').value);
    const idadesDeps = [
        safeParseInt($('idadeDep1').value),
        safeParseInt($('idadeDep2').value),
        safeParseInt($('idadeDep3').value)
    ];

    const gsisp = document.querySelector('input[name="gsisp"]:checked')?.value;
    const gsiste = document.querySelector('input[name="gsiste"]:checked')?.value;

    const salario = getTableValue(salaries, periodo, classe, padraoIndex);
    const pontoUnit = getTableValue(point, periodo, classe, padraoIndex);

    const gdact = pontoUnit * ponto;
    const rt = getRtByTitle(titulo, periodo, classe, padraoIndex);

    const adicionalGSISP = gsisp === 'sim' ? 5815.98 : 0;
    const adicionalGSISTE = gsiste === 'sim' ? 4544.26 : 0;

    let rendTrib = salario + gdact + rt + adicionalGSISP + adicionalGSISTE;
	let rendFix = salario + gdact + rt;
	
	const fceSelecionada = selectFCE.options[selectFCE.selectedIndex];
	const valorFCE = fceSelecionada && fceSelecionada.dataset.valor ? parseFloat(fceSelecionada.dataset.valor) : 0;
	rendTrib += valorFCE;

    const auxCreche = auxCrecheQtd * VALOR_AUX_CRECHE;
    const auxTranspDed = Math.min(auxTransporte, salario * 0.06);

    let totalSaude = getSaudeValue(salario, idadeTitular);
    idadesDeps.forEach(i => totalSaude += getSaudeValue(salario, i));

    const beneficios = auxAlimentacao + auxTransporte + auxCreche + totalSaude;
    const bruto = rendTrib + beneficios;

    let inss = 0, irpf = 0, funpresp = 0, liquido = 0;

    const items = [];

    // ----------------- Mês Normal / Férias -----------------
    if (simulacao === 'mes_normal' || simulacao === 'ferias') {

        let abonoFerias = 0;

        if (simulacao === 'ferias') {
            abonoFerias = (salario / 12) * (mesTrab / 3);
            rendTrib += abonoFerias;
        }

        inss = Math.round(calculateINSS(rendTrib) * 100) / 100 - 0.01;
        funpresp = Math.round(calculateComplementar(rendFix) * 100) / 100;

        irpf = getIRPF(periodo, rendTrib - inss - funpresp);

        liquido = rendTrib + beneficios - inss - irpf - auxTranspDed - funpresp;

        items.push(
            { label: 'Salário Base', value: salario, positive: true },
            { label: 'GDACT', value: gdact, positive: true },
            { label: 'RT', value: rt, positive: true },
            { label: 'GSISP', value: adicionalGSISP, positive: true },
            { label: 'GSISTE', value: adicionalGSISTE, positive: true },
			{ label: 'Função Comissionada (FCE)', value: valorFCE, positive: true }
        );

        if (simulacao === 'ferias')
            items.push({ label: '1/3 Férias', value: abonoFerias, positive: true });

        items.push(
            { label: 'Aux. Alimentação', value: auxAlimentacao, positive: true },
            { label: 'Aux. Transporte', value: auxTransporte, positive: true },
            { label: 'Aux. Creche', value: auxCreche, positive: true },
            { label: 'Ressarc. Saúde', value: totalSaude, positive: true },

            { label: '(-) INSS', value: inss, negative: true },
            { label: '(-) FUNPRESP', value: funpresp, negative: true },
            { label: '(-) IRPF', value: irpf, negative: true },
            { label: '(-) 6% Aux. Transporte', value: auxTranspDed, negative: true }
        );
    }

    // ----------------- 13º - Primeira Parcela -----------------
    else if (simulacao === 'decimo_1') {

        const total13 = (rendTrib / 12) * mesTrab;
        const parcela1 = total13 / 2;

        liquido = parcela1 + beneficios;

        items.push(
            { label: '1ª Parcela 13º (50%)', value: parcela1, positive: true },
            { label: 'Benefícios do Mês', value: beneficios, positive: true }
        );
    }

    // ----------------- 13º - Segunda Parcela -----------------
    else if (simulacao === 'decimo_2') {

        const total13 = (rendTrib / 12) * mesTrab;

        const parcela1 = total13 / 2;
        const parcela2Base = parcela1;

        const inss13 = calculateINSS(total13);
        const irpf13 = getIRPF(periodo, total13 - inss13);
        const funpresp13 = calculateComplementar(total13);

        const parcela2 = parcela2Base - inss13 - irpf13 - funpresp13;

        liquido = parcela2;

        items.push(
            { label: 'Total 13º', value: total13 },
            { label: '(-) INSS 13º', value: inss13, negative: true },
            { label: '(-) IRPF 13º', value: irpf13, negative: true },
            { label: '(-) FUNPRESP 13º (total)', value: funpresp13, negative: true },
            { label: 'Valor da 2ª Parcela', value: parcela2, positive: true }
        );
    }

    // ----------------- Resultado Final -----------------
    let html = `<h2>Resultado da Simulação</h2>`;
    html += buildResultsHTML(items);
    html += `<div class="result-item" id="net-salaryB-item"><span class="label">Salário Bruto</span><span class="value">${formatCurrency(bruto)}</span></div>`;
    html += `<div class="result-item" id="net-salary-item"><span class="label">Salário Líquido</span><span class="value">${formatCurrency(liquido)}</span></div>`;

    resultsDiv.innerHTML = html;
    resultsDiv.style.display = 'block';
};

// ---------------------------- Eventos ----------------------------
classeSelect.addEventListener('change', updatePadraoOptions);
$('simulatorForm').addEventListener('submit', handleFormSubmit);
updatePadraoOptions();





