import React, { useEffect, useRef, useState } from 'react';
import { DataTable } from 'simple-datatables'; // Make sure this is correctly imported
import 'simple-datatables/dist/style.css'; // Import the default styles for the datatable

function HistoryBuyProxyTable() {
  const tableRef = useRef(null);
  const [table, setTable] = useState(null);

  // Define the data that was in the original HTML table
  const tableData = [
    {
      name: 'Flowbite',
      releaseDate: '2021/25/09',
      downloads: 269000,
      growth: '49%',
    },
    {
      name: 'React',
      releaseDate: '2013/24/05',
      downloads: 4500000,
      growth: '24%',
    },
    {
      name: 'Angular',
      releaseDate: '2010/20/09',
      downloads: 2800000,
      growth: '17%',
    },
    {
      name: 'Vue',
      releaseDate: '2014/12/02',
      downloads: 3600000,
      growth: '30%',
    },
    {
      name: 'Svelte',
      releaseDate: '2016/26/11',
      downloads: 1200000,
      growth: '57%',
    },
    {
      name: 'Ember',
      releaseDate: '2011/08/12',
      downloads: 500000,
      growth: '44%',
    },
    {
      name: 'Backbone',
      releaseDate: '2010/13/10',
      downloads: 300000,
      growth: '9%',
    },
    {
      name: 'jQuery',
      releaseDate: '2006/28/01',
      downloads: 6000000,
      growth: '5%',
    },
    {
      name: 'Bootstrap',
      releaseDate: '2011/19/08',
      downloads: 1800000,
      growth: '12%',
    },
    {
      name: 'Foundation',
      releaseDate: '2011/23/09',
      downloads: 700000,
      growth: '8%',
    },
    {
      name: 'Bulma',
      releaseDate: '2016/24/10',
      downloads: 500000,
      growth: '7%',
    },
    {
      name: 'Next.js',
      releaseDate: '2016/25/10',
      downloads: 2300000,
      growth: '45%',
    },
    {
      name: 'Nuxt.js',
      releaseDate: '2016/16/10',
      downloads: 900000,
      growth: '50%',
    },
    {
      name: 'Meteor',
      releaseDate: '2012/17/01',
      downloads: 1000000,
      growth: '10%',
    },
    {
      name: 'Aurelia',
      releaseDate: '2015/08/07',
      downloads: 200000,
      growth: '20%',
    },
    {
      name: 'Inferno',
      releaseDate: '2016/27/09',
      downloads: 100000,
      growth: '35%',
    },
    {
      name: 'Preact',
      releaseDate: '2015/16/08',
      downloads: 600000,
      growth: '28%',
    },
    {
      name: 'Lit',
      releaseDate: '2018/28/05',
      downloads: 400000,
      growth: '60%',
    },
    {
      name: 'Alpine.js',
      releaseDate: '2019/02/11',
      downloads: 300000,
      growth: '70%',
    },
    {
      name: 'Stimulus',
      releaseDate: '2018/06/03',
      downloads: 150000,
      growth: '25%',
    },
    {
      name: 'Solid',
      releaseDate: '2021/05/07',
      downloads: 250000,
      growth: '80%',
    },
  ];

  useEffect(() => {
    if (tableRef.current && !table) {
      const dataTable = new DataTable(tableRef.current, {
        labels: {
          placeholder: 'Search...', // Text for search bar
          perPage: 'Result :', // Custom "entries per page" text
          noRows: 'No entries found', // No data text
          info: 'Hiển thị trang {start} tổng {end}', // Information text
        },
      });
      setTable(dataTable);

      return () => {
        if (table) {
          table.destroy(); // Cleanup when component unmounts
        }
      };
    }
  }, [table]);

  return (
    <div className="t-historyTableProxy">
      <table ref={tableRef} id="selection-table">
        <thead>
          <tr>
            <th>
              <span className="flex items-center">Name</span>
            </th>
            <th data-type="date" data-format="YYYY/DD/MM">
              <span className="flex items-center">Release Date</span>
            </th>
            <th>
              <span className="flex items-center">NPM Downloads</span>
            </th>
            <th>
              <span className="flex items-center">Growth</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {row.name}
              </td>
              <td>{row.releaseDate}</td>
              <td>{row.downloads.toLocaleString()}</td>
              <td>{row.growth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryBuyProxyTable;
