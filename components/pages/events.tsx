'use client';
import React from 'react';
import { Table } from '../Table';

export const Events = ({ events }: any) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Título',
        accessor: 'title',
        width: 400,
      },
      {
        Header: 'Distrito',
        accessor: 'district',
        width: 400,
      },
      {
        Header: 'Precio',
        accessor: 'price',
        width: 400,
      },
      {
        Header: 'Creado por',
        accessor: 'created_by',
        width: 400,
      },
    ],
    []
  );

  return <Table columns={columns} data={events} />;
};
