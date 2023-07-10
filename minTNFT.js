export const mintNFT = ({ Tezos, metadata }) => {
	return async (dispatch) => {
		try {
			const contract = await Tezos.wallet.at("tz1bYPjGBfMN6q2GGt1Da8eyNsjrmftNaxWs");
			let bytes = "";
			for (var i = 0; i < metadata.length; i++) {
				bytes += metadata.charCodeAt(i).toString(16).slice(-4);
			}
			const op = await contract.methods.mint(bytes).send();
			await op.confirmation();
            dispatch(fetchData());
		} catch (e) {
			console.log(e);
		}
	};
};