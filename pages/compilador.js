import { useState } from 'react';

export default function Home() {
	const [table, setTable] = useState([]);

	const loadIt = (event) => {
		let txt = event.target.value;

		let nPedido = txt.match(/Pedido de Compra: (?<result>\d+)/).groups
			.result;
		let dataPedido = txt.match(/Data do Documento: (?<result>[\d.]+)/)
			.groups.result;
		let pagto = txt.match(/Condição Pagamento: (?<result>\d+)/).groups
			.result;
		let itens = txt.match(
			/(?<=Comprador\(es\) Item Material\/Descrição Quantidade UM Preço Unit\. Preço Total |Esquema de Entrega: Sequência .* UN \d\d\.\d\d\.\d\d\d\d ).*?(?= Alíquota*)/g
		);

		const datasEntrega = txt.match(
			/(?<=Esquema de Entrega: Sequência .* UN )\d{2}\.\d{2}\.\d{4}/g
		);

		const tableItens = itens.map((item, index) => {
			const nItem = item.match(/\d+/)[0];
			const cProd = item.match(/(?<=\d+ )\d+/)[0];
			const qtde = item.match(/(?<=\d+ \d+ )\d+/)[0];
			const vProd = item.match(/(?<=UN )[\d.,]+/)[0];
			const vTotal = item.match(/(?<=UN [\d.,]+ )[\d.,]+/)[0];
			const nProd = item.match(/(?<=UN \d.*)[A-z].*/)[0];

			return [
				'Alliage',
				dataPedido,
				nPedido,
				nItem,
				cProd,
				nProd,
				qtde,
				vProd,
				vTotal,
				datasEntrega[index]
			];
		});

		setTable(tableItens);

		var copyArea = document.getElementById('copyArea');
		navigator.clipboard.writeText(copyArea.innerText);

		alert(
			'Linhas copiadas com sucesso. Vá para a planilha "Pedidos" no arquivo "PEDIDOS ALLIAGE 2022", selecione uma célula vazia na coluna "A" e pressione Ctrl + Shift + V, em seguida clique no comando "Dividir texto em colunas" que aparece logo embaixo à direita do campo selecionado e então selecione "ponto e vírgula" (;). Por fim ordene as linhas por data de entrega.'
		);
	};

	return (
		<div style={{ padding: '50px', marginTop: '100px' }}>
			<input
				type="text"
				onChange={loadIt}
				style={{ border: '1px solid black' }}
			/>
			<div id="copyArea">
				{table.map((item, index) => {
					console.log(`${item[0]}	${item[1]}	${item[2]}	${item[3]}	${item[4]}	${item[5]}	${item[6]}	${item[7]}	${item[8]}	${item[9]}`);
					return (
						<pre key={index}>
							{`${item[0]}	${item[1]}	${item[2]}	${item[3]}	${item[4]}	${item[5]}	${item[6]}	${item[7]}	${item[8]}	${item[9]}`}
						</pre>
					);
				})}
			</div>
		</div>
	);
}
