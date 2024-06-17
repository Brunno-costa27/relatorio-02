function formatNumber(num){
    return num?.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
   }
  
   function separateWords(input) {
    // Adicionar um espaço antes de cada letra maiúscula, exceto para a primeira letra
    let result = input.replace(/([A-Z])/g, ' $1');
  
    // Transformar a primeira letra em maiúscula
    result = result.charAt(0).toUpperCase() + result.slice(1);
  
    return result;
  }
  
  function formatNumberUSD(number) {
    const numberString = number.toString();
    return numberString.replace(',', '.')
  }

  function obterDiaSemana(data) {
    // Converter a data para um objeto Date
    const dataConvertida = new Date(data);
  
    // Obter o dia da semana (0 = domingo, 6 = sábado)
    const diaSemana = dataConvertida.getDay();
  
    // Converter o dia da semana numérico para o nome do dia
    const nomeDia = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb","Dom"][diaSemana];
  
    // Retornar o nome do dia da semana
    return nomeDia;
  }
  
  function sum(num1, num2) {
    const result = num1 + num2;
    return result;
  }

  function formatNumberCoin(num, currency){
    return num?.toLocaleString('pt-BR', {  style: "currency", currency: "BRL"})
  }

  
  function formatNumberByLanguage(num, currency, locale) {

  //   const localeCurrencyMap = {
  //     "pt-BR": "BRL",
  //     "en-US": "USD",
  //     "en-GB": "GBP",
  //     "ja-JP": "JPY",
  //     "de-DE": "EUR",
  //     "fr-FR": "EUR",
  //     "es-ES": "EUR",
  // };
   
    // const currency = localeCurrencyMap[locale] || "BRL"; 
    return num?.toLocaleString(locale, { style: "currency", currency: currency });
}
  
  
    
  
    export {
      formatNumber, 
      separateWords,
      formatNumberUSD,
      obterDiaSemana,
      sum,
      formatNumberCoin,
      formatNumberByLanguage
    }
    