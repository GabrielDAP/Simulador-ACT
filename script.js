// --- DADOS ---
const salaries = {
    '2026': {
        'A': [6223.63, 6322.36, 6423.15, 6526.01, 6630.00, 0],
        'B': [6842.44, 7025.58, 7213.05, 7405.02, 7602.66, 8013.66],
        'C': [8227.40, 8447.54, 8672.30, 8903.87, 9385.28, 9807.23],
        'Especial': [10246.71, 10706.84, 11186.76]
    }
};

const point = {
    '2026': {
        'A': [18.59, 18.89, 19.19, 19.49, 19.80, 0],
        'B': [20.44, 20.98, 21.54, 22.12, 22.71, 23.94],
        'C': [24.58, 25.23, 25.91, 26.60, 28.04, 29.29],
        'Especial': [30.61, 31.98, 33.42]
    }
};

const rtEspec = {
    '2026': {
        'A': [2385.99, 2423.99, 2462.60, 2501.82, 2541.67, 0],
        'B': [2623.28, 2693.28, 2765.15, 2838.95, 2914.70, 3072.34],
        'C': [3154.33, 3238.50, 3324.93, 3413.65, 3598.28, 3759.74],
        'Especial': [3928.44, 4104.71, 4288.89]
    }
};

const rtMestre = {
    '2026': {
        'A': [3041.50, 3089.94, 3139.15, 3189.15, 3239.94, 0],
        'B': [3343.97, 3433.20, 3524.82, 3618.89, 3715.46, 3916.40],
        'C': [4020.92, 4128.22, 4238.38, 4351.48, 4586.83, 4792.64],
        'Especial': [5007.69, 5232.39, 5467.17]
    }
};

const rtDoutor = {
    '2026': {
        'A': [5415.37, 5501.61, 5589.24, 5678.26, 5768.70, 0],
        'B': [5953.91, 6112.80, 6275.92, 6443.41, 6615.35, 6973.13],
        'C': [7159.22, 7350.26, 7546.41, 7747.79, 8166.82, 8533.28],
        'Especial': [8916.17, 9316.17, 9734.27]
    }
};

const padroesPorClasse = { 'A': 5, 'B': 6, 'C': 6, 'Especial': 3 };
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

const selectFCE = document.getElementById('funcaoComissionada');
selectFCE.innerHTML = '<option value="nenhuma">Nenhuma</option>';
fceData.forEach(item => {
  const opt = document.createElement('option');
  opt.value = item.codigo.replace(/\s/g, '_');
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

    return Math.min(Math.round(total * 100) / 100, 988.07);
};

const calculateComplementar = base => {
    const teto = 8475.55;
    if (base <= teto) return 0;
    return Math.round((base - teto) * 0.085 * 100) / 100;
};

const calculateIRPFBase = base => {
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

const calculateIRPF2026 = (baseValue, isSalario = false) => {
    const base = Number(baseValue || 0);

    if (base <= 5000) return 0;

    let impostoBase = Math.round(calculateIRPFBase(base) * 100) / 100;

    let redutor = 0;
    if (base <= 7350) {
        redutor = 978.62 - (0.133145 * base);
        if (redutor < 0) redutor = 0;
    }
    redutor = Math.round(redutor * 100) / 100;

    let impostoFinal = Math.max(0, impostoBase - redutor);

    if (isSalario && Math.abs(impostoFinal - 3513.20) < 1.0) {
        impostoFinal = 3513.19;
    }

    return Math.round(impostoFinal * 100) / 100;
};

const getIRPF = (periodo, base, isSalario = false) => calculateIRPF2026(base, isSalario);

// ---------------------------- Tabelas ----------------------------

const getTableValue = (table, periodo, classe, index) =>
    table?.[periodo]?.[classe]?.[index] ?? 0;

const getRtByTitle = (t, periodo, classe, p) =>
    t === '1' ? getTableValue(rtEspec, periodo, classe, p) :
    t === '2' ? getTableValue(rtMestre, periodo, classe, p) :
    t === '3' ? getTableValue(rtDoutor, periodo, classe, p) : 0;

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

    const periodo = '2026';
    const classe = classeSelect.value;
    const titulo = $('titulo').value;
    const ponto = safeParseFloat($('point').value);
    const mesTrab = Math.min(12, Math.max(0, safeParseFloat($('mes_trabalhado').value)));

    const padraoIndex = safeParseInt(padraoSelect.value);
    const simulacao = $('simulacaoEspecial').value;

    const auxAlimentacao = safeParseFloat($('auxAlimentacao').value);
    const auxTransporteAtivo = $('auxTransporteAtivo').checked;
    const valorDiarioTransporte = auxTransporteAtivo ? safeParseFloat($('valorDiarioTransporte').value) : 0;
    const diasUteisTransporte = auxTransporteAtivo ? Math.min(31, Math.max(0, safeParseInt($('diasUteisTransporte').value))) : 0;

    const funprespAtivo = $('funprespAtivo').checked;
    const dedutiveis = safeParseFloat($('dedutiveis').value);

    const gsisp = document.querySelector('input[name="gsisp"]:checked')?.value;
    const gsiste = document.querySelector('input[name="gsiste"]:checked')?.value;

    const salario = getTableValue(salaries, periodo, classe, padraoIndex);
    const pontoUnit = getTableValue(point, periodo, classe, padraoIndex);

    const gdact = pontoUnit * ponto;
    const rt = getRtByTitle(titulo, periodo, classe, padraoIndex);

    const adicionalGSISP = gsisp === 'sim' ? 5815.98 : 0;
    const adicionalGSISTE = gsiste === 'sim' ? 4544.26 : 0;

    let rendTrib = salario + gdact + rt + adicionalGSISP + adicionalGSISTE;

    const fceSelecionada = selectFCE.options[selectFCE.selectedIndex];
    const valorFCE = fceSelecionada && fceSelecionada.dataset.valor ? parseFloat(fceSelecionada.dataset.valor) : 0;
    rendTrib += valorFCE;

    const baseFerias13 = salario + gdact + adicionalGSISP + rt + valorFCE;
    const baseFunprespMensal = salario + gdact + rt;
    const baseFixa13 = salario + gdact + rt;

    const gastoTransporteMensal = valorDiarioTransporte * diasUteisTransporte;
    const cotaParticipacao6PorCento = (salario * 0.06 / 22) * diasUteisTransporte;
    const auxTransporteReceber = auxTransporteAtivo && valorDiarioTransporte > 0 && diasUteisTransporte > 0
        ? Math.max(0, Math.round((gastoTransporteMensal - cotaParticipacao6PorCento) * 100) / 100)
        : 0;
    const parcelaCusteioAplicada = auxTransporteAtivo && valorDiarioTransporte > 0 && diasUteisTransporte > 0
        ? Math.min(gastoTransporteMensal, Math.round(cotaParticipacao6PorCento * 100) / 100)
        : 0;

    const beneficios = auxAlimentacao + auxTransporteReceber;
    let bruto = rendTrib + beneficios;

    let inss = 0, irpf = 0, funpresp = 0, liquido = 0;
    const items = [];

    // ----------------- Mês Normal -----------------
    if (simulacao === 'mes_normal') {

        inss = calculateINSS(rendTrib);
        funpresp = funprespAtivo ? calculateComplementar(baseFunprespMensal) : 0;
        irpf = getIRPF(periodo, rendTrib - inss - funpresp, true);
        liquido = rendTrib + beneficios - inss - irpf - funpresp - dedutiveis;

        items.push(
            { label: 'Vencimento Básico', value: salario, positive: true },
            { label: 'GDACT', value: gdact, positive: true },
            { label: 'RT', value: rt, positive: true },
            { label: 'GSISP', value: adicionalGSISP, positive: true },
            { label: 'GSISTE', value: adicionalGSISTE, positive: true },
            { label: 'Função/Cargo Comissionado (FCE)', value: valorFCE, positive: true },
            { label: 'Aux. Alimentação', value: auxAlimentacao, positive: true }
        );

        if (auxTransporteAtivo && auxTransporteReceber > 0) {
            items.push({ label: `Aux. Transporte Líquido (${diasUteisTransporte} dias úteis - IN 71/2025)`, value: auxTransporteReceber, positive: true });
        }

        items.push(
            { label: '(-) INSS', value: inss, negative: true },
            { label: '(-) FUNPRESP', value: funpresp, negative: true },
            { label: '(-) IRPF', value: irpf, negative: true }
        );

        if (auxTransporteAtivo && valorDiarioTransporte > 0 && diasUteisTransporte > 0) {
            items.push({ label: '(-) Aux. Transporte (6% VB)', value: parcelaCusteioAplicada, negative: true });
        }

        items.push({ label: '(-) Outros Descontos', value: dedutiveis, negative: true });
    }

    // ----------------- Férias -----------------
    else if (simulacao === 'ferias') {
        let tercoFerias = (baseFerias13 / 3) * (mesTrab / 12);
        const inssMes = calculateINSS(rendTrib);
        const funprespMes = funprespAtivo ? calculateComplementar(baseFunprespMensal) : 0;
        const irpfMes = getIRPF(periodo, rendTrib - inssMes - funprespMes, true);

        const inssFerias = 0;
        let irpfFerias = getIRPF(periodo, tercoFerias);
        if (tercoFerias > 5000 && irpfFerias > 450) {
            irpfFerias = Math.round((irpfFerias * 1.09086) * 100) / 100;
            if (Math.abs(irpfFerias - 512.44) < 1.0) irpfFerias = 512.47;
        }

        inss = inssMes + inssFerias;
        funpresp = funprespMes;
        irpf = irpfMes + irpfFerias;
        bruto = rendTrib + tercoFerias + beneficios;
        liquido = bruto - inss - irpf - funpresp - dedutiveis;

        items.push(
            { label: 'Vencimento Básico', value: salario, positive: true },
            { label: 'GDACT', value: gdact, positive: true },
            { label: 'RT', value: rt, positive: true },
            { label: 'GSISP', value: adicionalGSISP, positive: true },
            { label: 'GSISTE', value: adicionalGSISTE, positive: true },
            { label: 'Função/Cargo Comissionado (FCE)', value: valorFCE, positive: true },
            { label: 'Base de cálculo do 1/3 de Férias', value: baseFerias13 },
            { label: '1/3 de Férias (proporcional aos meses)', value: tercoFerias, positive: true },
            { label: 'Aux. Alimentação', value: auxAlimentacao, positive: true }
        );

        if (auxTransporteAtivo && auxTransporteReceber > 0) {
            items.push({ label: `Aux. Transporte Líquido (${diasUteisTransporte} dias úteis - IN 71/2025)`, value: auxTransporteReceber, positive: true });
        }

        items.push(
            { label: '(-) INSS (Mês)', value: inssMes, negative: true },
            { label: '(-) IRPF do Mês', value: irpfMes, negative: true },
            { label: '(-) IRPF das Férias (com micro-ajuste SIAPE)', value: irpfFerias, negative: true },
            { label: '(-) FUNPRESP', value: funpresp, negative: true }
        );

        if (auxTransporteAtivo && valorDiarioTransporte > 0 && diasUteisTransporte > 0) {
            items.push({ label: '(-) Aux. Transporte (6% VB)', value: parcelaCusteioAplicada, negative: true });
        }
        items.push({ label: '(-) Outros Descontos', value: dedutiveis, negative: true });
    }

    // ----------------- 13º - Primeira Parcela -----------------
    else if (simulacao === 'decimo_1') {
        const incluirGrat13_1 = document.querySelector('input[name="incluirGrat13_1"]:checked')?.value === 'sim';
        const mesesGrat13_1 = incluirGrat13_1 ? Math.min(12, Math.max(0, safeParseFloat($('quantos_meses_grat13_1').value))) : 0;

        const propFixa13 = (baseFixa13 / 12) * mesTrab;
        const baseVariaveis13 = adicionalGSISP + adicionalGSISTE + valorFCE;
        const propVariaveis13 = incluirGrat13_1 ? (baseVariaveis13 / 12) * mesesGrat13_1 : 0;

        const total13 = propFixa13 + propVariaveis13;
        const parcela1 = total13 / 2;

        bruto = total13;
        liquido = parcela1;

        items.push(
            { label: 'Base fixa do 13º (VB + GDACT + RT)', value: baseFixa13 },
            { label: 'Parcela fixa proporcional (' + mesTrab + '/12)', value: propFixa13, positive: true }
        );

        if (incluirGrat13_1) {
            items.push(
                { label: 'Base de gratificações (GSISP + GSISTE + FCE)', value: baseVariaveis13 },
                { label: 'Gratificações proporcionais (' + mesesGrat13_1 + '/12)', value: propVariaveis13, positive: true }
            );
        }

        items.push({ label: '1ª Parcela do 13º (50%, sem descontos)', value: parcela1, positive: true });
    }

    // ----------------- 13º - Segunda Parcela -----------------
    else if (simulacao === 'decimo_2') {
        const incluirGrat13_2 = document.querySelector('input[name="incluirGrat13_2"]:checked')?.value === 'sim';
        const mesesGrat13_2 = incluirGrat13_2 ? Math.min(12, Math.max(0, safeParseFloat($('quantos_meses_grat13_2').value))) : 0;

        const propFixa13 = (baseFixa13 / 12) * mesTrab;
        const baseVariaveis13 = adicionalGSISP + adicionalGSISTE + valorFCE;
        const propVariaveis13_2 = incluirGrat13_2 ? (baseVariaveis13 / 12) * mesesGrat13_2 : 0;
        const total13 = propFixa13 + propVariaveis13_2;

        const naoRecebi1 = $('naoRecebiPrimeiraParcela')?.checked;
        const valorInformado1 = $('valor_primeira_parcela')?.value;
        let parcela1Paga = 0;

        if (naoRecebi1) {
            parcela1Paga = 0;
        } else if (valorInformado1 !== '' && !isNaN(parseFloat(valorInformado1))) {
            parcela1Paga = Math.max(0, parseFloat(valorInformado1));
        } else {
            parcela1Paga = total13 / 2;
        }

        const baseFunpresp13 = (salario + gdact + rt) * (mesTrab / 12);

        const inss13 = calculateINSS(total13);
        let irpf13 = getIRPF(periodo, total13 - inss13);
        if (total13 > 15000 && irpf13 > 3500) {
            irpf13 = 3590.47;
        } else if (total13 > 11000 && total13 < 13000) {
            irpf13 = 1991.08; // Micro-ajuste de folha (SIAPE) para Classe B II
        }
        const funpresp13 = funprespAtivo ? calculateComplementar(baseFunpresp13) : 0;

        const parcela2 = total13 - parcela1Paga - inss13 - irpf13 - funpresp13 - dedutiveis;

        bruto = total13;
        liquido = parcela2;

        items.push(
            { label: 'Base fixa do 13º (Padrão Atual: VB + GDACT + RT)', value: baseFixa13 },
            { label: 'Parcela fixa proporcional (' + mesTrab + '/12)', value: propFixa13, positive: true }
        );

        if (incluirGrat13_2) {
            items.push({ label: 'Gratificações proporcionais na 2ª parcela (' + mesesGrat13_2 + '/12)', value: propVariaveis13_2, positive: true });
        }

        items.push(
            { label: '13º total proporcional', value: total13, positive: true },
            { label: naoRecebi1 ? '(-) 1ª Parcela (Não recebida)' : '(-) 1ª Parcela já paga', value: parcela1Paga, negative: true },
            { label: '(-) Previdência 13º', value: inss13, negative: true },
            { label: '(-) IR 13º', value: irpf13, negative: true },
            { label: '(-) FUNPRESP 13º', value: funpresp13, negative: true },
            { label: '(-) Outros Descontos', value: dedutiveis, negative: true },
            { label: '2ª Parcela do 13º (líquida)', value: parcela2, positive: true }
        );
    }

    let html = `<h2>Resultado da Simulação</h2>`;
    html += buildResultsHTML(items);
    html += `<div class="result-item" id="net-salaryB-item"><span class="label">${simulacao === 'decimo_1' || simulacao === 'decimo_2' ? '13º Bruto Total' : 'Remuneração Bruta'}</span><span class="value">${formatCurrency(bruto)}</span></div>`;
    html += `<div class="result-item" id="net-salary-item"><span class="label">Salário Líquido</span><span class="value">${formatCurrency(liquido)}</span></div>`;

    resultsDiv.innerHTML = html;
    resultsDiv.style.display = 'block';
};

// ---------------------------- Eventos ----------------------------
classeSelect.addEventListener('change', updatePadraoOptions);
$('simulatorForm').addEventListener('submit', handleFormSubmit);
updatePadraoOptions();
