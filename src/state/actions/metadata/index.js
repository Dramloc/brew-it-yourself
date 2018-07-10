export const shouldFetchMetadata = ({ cacheDuration }) => metadata => {
	if (!metadata) {
		return true;
	}
	if (metadata.fetching) {
		return false;
	}
	if (!metadata.result) {
		return true;
	}
	if (Date.now() - metadata.lastFetch > cacheDuration) {
		return true;
	}
	return false;
};
