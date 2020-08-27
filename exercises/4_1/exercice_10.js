let vl_custo;
let vl_venda;
let qnt_vendas;
let imposto;
let valorCustoTotal;
let lucro;
vl_custo = 5;
vl_venda = 10;
qnt_vendas = 1000;
imposto = 20
valorCustoTotal = vl_custo+((vl_custo*imposto)/100);
lucro = (vl_venda * qnt_vendas)-(valorCustoTotal * qnt_vendas);

console.log(lucro);
