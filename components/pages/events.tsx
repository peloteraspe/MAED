'use client';
import React from 'react';
import { Table } from '../Table';
import { ButtonWrapper } from '../Button';

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
      {
        Header: 'Acciones',
        accessor: 'id',
        Cell: ({ value }: any) => (
          <ButtonWrapper
            onClick={() => {
              console.log('value', value);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </ButtonWrapper>
        ),
      },
    ],
    []
  );

  return <Table columns={columns} data={events} />;
};
