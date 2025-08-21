// --- DATA OBJECTS ---
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

// --- ESTRUTURA DA CARREIRA ANALISTA---
const padroesPorClasse = { 'A': 5, 'B': 6, 'C': 6, 'Especial': 3 };
const VALOR_AUX_CRECHE = 484.90;
const roman = ['I', 'II', 'III', 'IV', 'V', 'VI'];


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

const classeSelect = document.getElementById('classe');
const padraoSelect = document.getElementById('padrao');
const titleSelect = document.getElementById('titulo');
const form = document.getElementById('simulatorForm');
const resultsDiv = document.getElementById('results');

const currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function updatePadraoOptions() {
    const selectedClasse = classeSelect.value;
    const numPadroes = padroesPorClasse[selectedClasse];
    padraoSelect.innerHTML = '';
    for(let i = 0; i < numPadroes; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Padrão ${roman[i]}`;
        padraoSelect.appendChild(option);
    }
}

function calculateinss(base) {
    const tiers = [
        { limit: 1518.00, rate: 0.075 }, { limit: 2793.88, rate: 0.09 },
        { limit: 4190.83, rate: 0.12 }, { limit: 8157.41, rate: 0.14 }
    ];
    let inss = 0, lastLimit = 0;
    for (const tier of tiers) {
        if (base > lastLimit) {
            const taxableInTier = Math.min(base - lastLimit, tier.limit - lastLimit);
            inss += taxableInTier * tier.rate;
        }
        lastLimit = tier.limit;
    }
    return inss;
}

function calculateComplementar(base){
	let complementar = 0;
	let taxableBase = base - 8157.41;
	
	if (taxableBase < 0)
		return complementar = 0;
	else
		return complementar = taxableBase * 0.085;
}

function calculateIRPF(base) {
    const tiers = [
        { limit: 2428.80, rate: 0, deduction: 0 }, { limit: 2826.65, rate: 0.075, deduction: 182.16 },
        { limit: 3751.05, rate: 0.15, deduction: 394.16 }, { limit: 4664.68, rate: 0.225, deduction: 675.49 },
        { limit: Infinity, rate: 0.275, deduction: 908.73 }
    ];
    for (const tier of tiers) {
        if (base <= tier.limit) return Math.max(0, (base * tier.rate) - tier.deduction);
    }
    return 0;
}

function getSaudeValue(remuneracao, idade) {
    if (!idade || idade <= 0) return 0;
    let idadeIndex = saudePerCapita.faixasIdade.findIndex(faixa => idade <= faixa);
    if (idadeIndex === -1) idadeIndex = saudePerCapita.faixasIdade.length;
    
    const remIndex = saudePerCapita.valores.findIndex(faixa => remuneracao < faixa.rem);
    return saudePerCapita.valores[remIndex].val[idadeIndex];
}

function rtIndex(retribuicao,result1, result2, result3){
	if (retribuicao == 1){
		return valor = result1;
	}else if (retribuicao == 2){
		return valor = result2;
	}else if (retribuicao == 3){
		return valor = result3;
	} else{
		return valor = 0;
	}
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const periodo = document.getElementById('periodo').value;
    const classe = classeSelect.value;
	const titulo = titleSelect.value;
	const ponto = document.getElementById('point').value;
	const dias = document.getElementById('dias').value;
	const mes = document.getElementById('mes').value;
	const mesTrabalhado = document.getElementById('mes_trabalhado').value;
    const padraoIndex = parseInt(padraoSelect.value, 10);
    const simulacao = document.getElementById('simulacaoEspecial').value;
    const auxAlimentacao = parseFloat(document.getElementById('auxAlimentacao').value) || 0;
    const auxTransporte = parseFloat(document.getElementById('auxTransporte').value) || 0;
    const numDepCreche = parseInt(document.getElementById('auxCreche').value) || 0;
    const idadeTitular = parseInt(document.getElementById('idadeTitular').value) || 0;
    const idadesDeps = [
        parseInt(document.getElementById('idadeDep1').value) || 0,
        parseInt(document.getElementById('idadeDep2').value) || 0,
        parseInt(document.getElementById('idadeDep3').value) || 0
    ];
    const salario = salaries[periodo][classe][padraoIndex];
	
	let espec = rtEspec[periodo][classe][padraoIndex];
	let mestre = rtMestre[periodo][classe][padraoIndex];
	let doutor = rtDoutor[periodo][classe][padraoIndex];
	let rt = rtIndex(titulo, espec, mestre, doutor);
	

	let gdact = point[periodo][classe][padraoIndex] * ponto; 
    let rendimentosTributaveis = salario + gdact + rt;
    let inss = 0, irpf = 0, totalLiquido = 0, funpresp = 0;
    let resultsHTML = '<h2>Resultado da Simulação</h2>';
    const auxCrecheTotal = numDepCreche * VALOR_AUX_CRECHE;
    const auxTransporteDed = Math.min(auxTransporte, salario * 0.06);
    let totalSaude = getSaudeValue(salario, idadeTitular);
    idadesDeps.forEach(idade => totalSaude += getSaudeValue(salario, idade));
    const totalBeneficios = auxAlimentacao + auxTransporte + auxCrecheTotal + totalSaude;

    if (simulacao === 'mes_normal' || simulacao === 'ferias') {
        let abonoFerias = 0;
        if (simulacao === 'ferias') {
            abonoFerias = salario / 12 * mesTrabalhado / 3;
            rendimentosTributaveis += abonoFerias;
        }
        inss = calculateinss(rendimentosTributaveis);
		funpresp = calculateComplementar(rendimentosTributaveis);
        irpf = calculateIRPF(rendimentosTributaveis - inss - funpresp);
        totalLiquido = rendimentosTributaveis + totalBeneficios - inss - irpf - auxTransporteDed - funpresp;
        resultsHTML += `<div class="result-item"><span class="label">Salário Base</span><span class="value positive">${currencyFormatter.format(salario)}</span></div>`;
		resultsHTML += `<div class="result-item"><span class="label">GDACT</span><span class="value positive">${currencyFormatter.format(gdact)}</span></div>`;
		resultsHTML += `<div class="result-item"><span class="label">RT</span><span class="value positive">${currencyFormatter.format(rt)}</span></div>`;
        if (simulacao === 'ferias') resultsHTML += `<div class="result-item"><span class="label">Adicional 1/3 Férias</span><span class="value positive">${currencyFormatter.format(abonoFerias)}</span></div>`;
        resultsHTML += `<div class="result-item"><span class="label">Auxílio Alimentação</span><span class="value positive">${currencyFormatter.format(auxAlimentacao)}</span></div>
            <div class="result-item"><span class="label">Auxílio Transporte</span><span class="value positive">${currencyFormatter.format(auxTransporte)}</span></div>
            <div class="result-item"><span class="label">Auxílio Creche</span><span class="value positive">${currencyFormatter.format(auxCrecheTotal)}</span></div>
            <div class="result-item"><span class="label">Ressarc. Saúde</span><span class="value positive">${currencyFormatter.format(totalSaude)}</span></div>
            <div class="result-item"><span class="label">(-) INSS</span><span class="value negative">-${currencyFormatter.format(inss)}</span></div>
            <div class="result-item"><span class="label">(-) FUNPRESP</span><span class="value negative">-${currencyFormatter.format(funpresp)}</span></div>
			<div class="result-item"><span class="label">(-) IRPF</span><span class="value negative">-${currencyFormatter.format(irpf)}</span></div>
            <div class="result-item"><span class="label">(-) 6% Aux. Transporte</span><span class="value negative">-${currencyFormatter.format(auxTransporteDed)}</span></div>`;
    } else if (simulacao === 'decimo_1') {
        const parcela1 = salario / 2 / 12 * mesTrabalhado;
        totalLiquido = parcela1;
        resultsHTML += `<div class="result-item"><span class="label">1ª Parcela 13º Salário (50%)</span><span class="value positive">${currencyFormatter.format(parcela1)}</span></div>
            <div class="result-item"><span class="label" style="font-size:0.9em; color:#888;">Descontos ocorrem na 2ª parcela.</span><span class="value"></span></div>`;
    } else if (simulacao === 'decimo_2') {
		const salario13 = salario / 2 / 12 * mesTrabalhado
        const inss13 = calculateinss(salario13);
        const irpf13 = calculateIRPF(salario13 - inss13);
        const parcela2 = (salario13 / 2) - inss13 - irpf13;
        totalLiquido = parcela2 + totalBeneficios - auxTransporteDed;

        resultsHTML += `<div class="result-item"><span class="label">Total 13º Salário</span><span class="value">${currencyFormatter.format(salario13)}</span></div>
            <div class="result-item"><span class="label">(-) INSS sobre 13º</span><span class="value negative">-${currencyFormatter.format(inss13)}</span></div>
            <div class="result-item"><span class="label">(-) IRPF sobre 13º</span><span class="value negative">-${currencyFormatter.format(irpf13)}</span></div><hr>
            <div class="result-item"><span class="label">Valor da 2ª Parcela</span><span class="value positive">${currencyFormatter.format(parcela2)}</span></div>
            <div class="result-item"><span class="label">+ Benefícios do Mês</span><span class="value positive">${currencyFormatter.format(totalBeneficios - auxTransporteDed)}</span></div>`;
    } else if (simulacao == 'mes_fracionado'){
		const salarioFracionado = salario/mes*dias;
		const gdactFracionado = gdact/mes*dias;
		const rtFracionado = rt/mes*dias;
		const auxAlimentacaoFracionado = auxAlimentacao/mes*dias;
		let tributaveisFracionados = salarioFracionado + gdactFracionado + rtFracionado;
		const inssFracionado = calculateinss(tributaveisFracionados);
		const funprespFracionado = calculateComplementar(tributaveisFracionados);
		const irpfFracionado = calculateIRPF(tributaveisFracionados - inssFracionado - funprespFracionado);
		const totalBeneficiosFracionados = auxAlimentacaoFracionado + auxTransporte + auxCrecheTotal + totalSaude;
		totalLiquido = tributaveisFracionados + totalBeneficiosFracionados - inssFracionado - funprespFracionado - irpfFracionado - auxTransporteDed;
		resultsHTML += `<div class="result-item"><span class="label">Salário Base Fracionado</span><span class="value positive">${currencyFormatter.format(tributaveisFracionados)}</span></div>`;
		resultsHTML += `<div class="result-item"><span class="label">Salário Base Fracionado</span><span class="value positive">${currencyFormatter.format(salarioFracionado)}</span></div>`;
		resultsHTML += `<div class="result-item"><span class="label">GDACT</span><span class="value positive">${currencyFormatter.format(gdactFracionado)}</span></div>`;
		resultsHTML += `<div class="result-item"><span class="label">RT</span><span class="value positive">${currencyFormatter.format(rtFracionado)}</span></div>`;
        resultsHTML += `<div class="result-item"><span class="label">Auxílio Alimentação</span><span class="value positive">${currencyFormatter.format(auxAlimentacaoFracionado)}</span></div>
            <div class="result-item"><span class="label">Auxílio Transporte</span><span class="value positive">${currencyFormatter.format(auxTransporte)}</span></div>
            <div class="result-item"><span class="label">Auxílio Creche</span><span class="value positive">${currencyFormatter.format(auxCrecheTotal)}</span></div>
            <div class="result-item"><span class="label">Ressarc. Saúde</span><span class="value positive">${currencyFormatter.format(totalSaude)}</span></div>
            <div class="result-item"><span class="label">(-) INSS</span><span class="value negative">-${currencyFormatter.format(inssFracionado)}</span></div>
            <div class="result-item"><span class="label">(-) FUNPRESP</span><span class="value negative">-${currencyFormatter.format(funprespFracionado)}</span></div>
			<div class="result-item"><span class="label">(-) IRPF</span><span class="value negative">-${currencyFormatter.format(irpfFracionado)}</span></div>
            <div class="result-item"><span class="label">(-) 6% Aux. Transporte</span><span class="value negative">-${currencyFormatter.format(auxTransporteDed)}</span></div>`;
	}
    resultsHTML += `<div class="result-item" id="net-salary-item"><span class="label">Líquido Estimado a Receber</span><span class="value">${currencyFormatter.format(totalLiquido)}</span></div>`;
	resultsDiv.innerHTML = resultsHTML;
    resultsDiv.style.display = 'block';
});

// --- INITIALIZATION ---
classeSelect.addEventListener('change', updatePadraoOptions);
updatePadraoOptions();