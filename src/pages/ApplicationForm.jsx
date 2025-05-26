import { useState } from 'react'
import axios from '../api'
import { useNavigate } from 'react-router-dom'

export default function ApplicationForm({ editData }) {
  const [form, setForm] = useState({
    applicant_name: editData?.applicant_name || '',
    email_id: editData?.email_id || '',
    pan_number: editData?.pan_number || '',
    applicant_address: editData?.applicant_address || '',
    bank: editData?.bank || '',
    status: editData?.status || '',
    product_type: editData?.product_type || '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editData) {
        await axios.put(`/applications/${editData.id}/`, form)
      } else {
        await axios.post('/applications/', form)
      }
      navigate('/applications')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      {Object.entries(form).map(([key, value]) => (
        <div key={key}>
          <label className="block capitalize">{key}</label>
          <input
            name={key}
            value={value}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {editData ? 'Update' : 'Create'}
      </button>
    </form>
  )
}
