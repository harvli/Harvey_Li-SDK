import fetch from 'isomorphic-unfetch';

type Setup = {
	apiKey?: string; // optional API key to access other endpoints
	baseUrl?: string; // optional since we have a default URL
};

export abstract class Base {
	private apikey: string;
	private baseUrl: string;

	constructor(setup: Setup) {
		this.apikey = setup.apiKey;
		this.baseUrl = setup.baseUrl || 'https://the-one-api.dev/v2/';
	}

	// async function containing url and headers
	protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
		const url = `${this.baseUrl}${endpoint}`;
		const headers = {
			'Content-Type': 'application/json',
			'api-key': this.apikey,
		};

		const setup = {
			...options,
			headers,
		};

		// return result of invocation of fetch call
		return fetch(url, setup).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(response.statusText);
			}
		});
	}
}
