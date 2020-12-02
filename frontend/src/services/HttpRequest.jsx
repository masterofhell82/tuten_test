class HttpRequest {
	constructor() {
		this.config = this.config.bind(this);
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.delete = this.delete.bind(this);
	}

	static async get(payload) {
		const request = await fetch(this.endpoint, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		const data = await request.json();

		return data;
	}

	static async post(payload, multipart = null) {
		let getConfig = this.config();
		try {
			const request = await fetch(this.endpoint, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			const data = request.json();

			return data;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default HttpRequest;
