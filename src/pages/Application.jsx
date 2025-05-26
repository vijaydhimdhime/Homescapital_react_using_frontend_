import { useEffect, useState } from 'react'
import axios from '../api'
import DataTable from '../components/DataTable'
import { Link } from 'react-router-dom'

const columns = [
  {
    header: 'Applicant Name',
    accessorKey: 'applicant_name',
  },
  {
    header: 'Email',
    accessorKey: 'email_id',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Product Type',
    accessorKey: 'product_type',
  },
]

const Application = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/applications/')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
 <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold">Applications</h1>
    <Link
      to="/applications/new"
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      + New Application
    </Link>
  </div>

  <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Application;
