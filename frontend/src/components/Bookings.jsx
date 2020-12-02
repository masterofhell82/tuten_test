import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import HttpRequest from '../services/HttpRequest';

const columns = [
	{
		title: 'BookingId',
		dataIndex: 'bookingId',
		onFilter: (value, record) => record.name.indexOf(value) === 0,
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ['descend'],
	},
	{
		title: 'Cliente',
		dataIndex: 'Cliente',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: 'Fecha de Creación',
		dataIndex: 'bookingTime',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: 'Dirección',
		dataIndex: 'streetAddress',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: 'Precio',
		dataIndex: 'bookingPrice',
		onFilter: (value, record) => record.address.indexOf(value) === 0,
		sorter: (a, b) => a.address.length - b.address.length,
		sortDirections: ['descend', 'ascend'],
	},
];

export const Bookings = (props) => {
	const [data, setData] = useState([]);
	const API = 'https://dev.tuten.cl/TutenREST/rest/';

	const _getData = async () => {
		const payload = {
			adminemail: 'testapis@tuten.cl',
			token: 'testapis@tuten.clj4u2dqj69f4clu8apjjjjh329d', //props.token,
			app: 'APP_BCK',
		};

		HttpRequest.endpoint = `${API}user/contacto@tuten.cl/bookings?current=true`;
		const res = HttpRequest.get(payload);
	};

	useEffect(() => {
		document.title = 'Boookings';
		_getData();
	}, []);

	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}

	return (
		<div>
			<Table columns={columns} dataSource={data} onChange={onChange} />
		</div>
	);
};
